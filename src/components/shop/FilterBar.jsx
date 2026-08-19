import { CATEGORIES, AVAILABILITY_OPTIONS } from "../../data/products";

function FilterBar({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  availability,
  toggleAvailability,
}) {
  return (
    <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm h-fit transition-colors">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Category</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((option) => (
            <button
              key={option}
              onClick={() => setCategory(option)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                category === option
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-orange-400"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Price Range: <span className="text-orange-600">$0 - ${maxPrice}</span>
        </h3>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-orange-600"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Availability</h3>
        <div className="space-y-2">
          {AVAILABILITY_OPTIONS.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={availability.includes(option)}
                onChange={() => toggleAvailability(option)}
                className="accent-orange-600 w-4 h-4"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default FilterBar;
