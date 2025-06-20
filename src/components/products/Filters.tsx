export const Filters = () => {
  return (
    <aside className="space-y-4 p-4 bg-gray-50 rounded-xl shadow-md sticky top-5 h-fit">
      <h1 className="text-2xl font-bold text-pink-700 mb-6">Filters</h1>
      <div>
        <h4 className="font-semibold mb-2 text-pink-700">Category</h4>
        <select className="w-full border p-2 rounded">
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="toys">Toys</option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-pink-700">Price Range</h4>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min" className="w-full border p-2 rounded" />
          <input type="number" placeholder="Max" className="w-full border p-2 rounded" />
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-pink-700">Brand</h4>
        <select className="w-full border p-2 rounded">
          <option>All Brands</option>
          <option>Brand A</option>
          <option>Brand B</option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-pink-700">Availability</h4>
        <label className="block text-sm">
          <input type="checkbox" className="mr-2" />
          In Stock
        </label>
        <label className="block text-sm">
          <input type="checkbox" className="mr-2" />
          Out of Stock
        </label>
      </div>
    </aside>
  );
};
