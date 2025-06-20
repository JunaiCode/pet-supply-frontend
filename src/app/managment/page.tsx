'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Dog Toy',
      price: 12.99,
      imageUrl: '/images/dog-toy.jpg',
    },
    {
      id: 2,
      name: 'Cat Bed',
      price: 24.99,
      imageUrl: '/images/cat-bed.jpg',
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    imageUrl: '',
  });

  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productData: Product = {
      id: editingProductId || Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      imageUrl: newProduct.imageUrl,
    };

    if (editingProductId) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProductId ? productData : p))
      );
    } else {
      setProducts((prev) => [...prev, productData]);
    }

    resetForm();
  };

  const resetForm = () => {
    setNewProduct({ name: '', price: '', imageUrl: '' });
    setEditingProductId(null);
    setFilePreview(null);
  };

  const handleEdit = (product: Product) => {
    setNewProduct({
      name: product.name,
      price: product.price.toString(),
      imageUrl: product.imageUrl || '',
    });
    setEditingProductId(product.id);
    setFilePreview(product.imageUrl || null);
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    if (editingProductId === id) resetForm();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({
          ...prev,
          imageUrl: reader.result as string,
        }));
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">
        Admin Product Management
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full"
        />
        {filePreview && (
          <div className="w-32 h-32 relative">
            <Image
              src={filePreview}
              alt="Preview"
              fill
              className="object-cover rounded"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          {editingProductId ? 'Update Product' : 'Add Product'}
        </button>
        {editingProductId && (
          <button
            type="button"
            onClick={resetForm}
            className="ml-4 text-red-500 underline"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            {product.imageUrl && (
              <div className="w-full h-40 relative mb-2">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-pink-600 font-semibold">${product.price}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="text-sm text-blue-500 underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-sm text-red-500 underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
