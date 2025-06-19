export const Filters =() => {
  return (
    <aside className="space-y-4 p-4 bg-gray-50 rounded-xl shadow">
      <div>
        <h4 className="font-semibold mb-2">Category</h4>
        <select className="w-full border p-2 rounded">
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="toys">Toys</option>
        </select>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Price Range</h4>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min" className="w-full border p-2 rounded" />
          <input type="number" placeholder="Max" className="w-full border p-2 rounded" />
        </div>
      </div>
    </aside>
  );
}
