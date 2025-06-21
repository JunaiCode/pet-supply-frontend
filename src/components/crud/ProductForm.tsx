"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductCrud } from "@/types/products/product.types";

interface Props {
  initialData?: ProductCrud | null;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
}

const ProductForm = ({ initialData, onClose, onSubmit }: Props) => {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [price, setPrice] = useState(initialData?.price || 0);
  const [category, setCategory] = useState(initialData?.category || "");
  const [brand, setBrand] = useState(initialData?.brand || "");
  const [quantity, setQuantity] = useState(initialData?.quantity || 0);
  const [inStock, setInStock] = useState(initialData?.inStock ?? true);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [specs, setSpecs] = useState<string[]>(
    typeof initialData?.specifications === "object"
      ? Object.entries(initialData.specifications).map(([k, v]) => `${k}: ${v}`)
      : []
  );
  const [specInput, setSpecInput] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));

      setImages((prev) => [...prev, ...newFiles]);
      setPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddSpec = () => {
    if (specInput.trim()) {
      setSpecs((prev) => [...prev, specInput.trim()]);
      setSpecInput("");
    }
  };

  const handleRemoveSpec = (index: number) => {
    setSpecs((prev) => prev.filter((_, i) => i !== index));
  };

  const transformSpecsToObject = (): Record<string, unknown> => {
    const obj: Record<string, unknown> = {};
    specs.forEach((item) => {
      const [key, ...rest] = item.split(":");
      if (key && rest.length > 0) {
        obj[key.trim()] = rest.join(":").trim();
      }
    });
    return obj;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price.toString());
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("quantity", quantity.toString());
    formData.append("inStock", inStock.toString());

    const specifications = transformSpecsToObject();
    formData.append("specifications", JSON.stringify(specifications));
    images.forEach((file) => formData.append("images", file));

    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      {/* Text fields */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full border p-2 rounded"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
        className="w-full border p-2 rounded"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />
      <input
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Brand"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Quantity"
        className="w-full border p-2 rounded"
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
        />
        In stock
      </label>

      {/* Specifications */}
      <div>
        <div className="flex gap-2 mb-2">
          <input
            value={specInput}
            onChange={(e) => setSpecInput(e.target.value)}
            placeholder="e.g. color: red"
            className="w-full border p-2 rounded"
          />
          <Button
            type="button"
            onClick={handleAddSpec}
            className="bg-pink-600 text-white hover:bg-pink-700 px-4"
          >
            +
          </Button>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          {specs.map((spec, i) => (
            <li key={i} className="flex justify-between items-center text-sm">
              <span>{spec}</span>
              <button
                type="button"
                onClick={() => handleRemoveSpec(i)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Images */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
        <Button
          variant="secondary"
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="bg-pink-600 text-white hover:bg-pink-700"
        >
          Choose images
        </Button>
        {previews.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {previews.map((src, i) => (
              <div key={i} className="relative w-24 h-24">
                <Image
                  src={src}
                  alt={`preview-${i}`}
                  className="w-full h-full object-cover rounded"
                  fill
                  sizes="96px"
                  style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(i)}
                  className="absolute top-1 right-1 bg-black bg-opacity-60 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <Button type="button" onClick={onClose} variant="secondary">
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-pink-600 text-white hover:bg-pink-700"
        >
          {initialData ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
