import { Dispatch, SetStateAction, ChangeEvent } from "react";

type Props = {
  setFilters: Dispatch<SetStateAction<Record<string, string | number>>>;
  filters: Record<string, string | number>;
};


export const Filters = ({ setFilters, filters }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    const val = type === "checkbox" ? ((target as HTMLInputElement).checked ? "true" : "") : value;
    setFilters(prev => ({
      ...prev,
      [name]: val,
    }));
  };

  return (
    <aside className="space-y-4 p-4 bg-gray-50 rounded-xl shadow-md sticky top-5 h-fit">
      <h1 className="text-2xl font-bold text-pink-700 mb-6">Filters</h1>

      <div>
        <h4 className="font-semibold mb-2 text-pink-700">Category</h4>
        <select
          name="category"
          className="w-full border p-2 rounded"
          value={filters.category || ""}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="toys">Toys</option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-pink-700">Price Range</h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            name="minPrice"
            value={filters.minPrice || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Max"
            name="maxPrice"
            value={filters.maxPrice || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-pink-700">Brand</h4>
        <select
          name="brand"
          value={filters.brand || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">All Brands</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
        </select>
      </div>

      <div>
  <h4 className="font-semibold mb-2 text-pink-700">Availability</h4>
  <label className="block text-sm">
    <input
      type="checkbox"
      name="availability"
      checked={filters.availability === "true"}
      onChange={handleChange}
      className="mr-2"
    />
    Availability
  </label>
</div>
    </aside>
  );
};
