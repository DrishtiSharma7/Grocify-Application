import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, LayoutGrid, List } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useFilter } from "../hooks/useFilter";
import ProductCard from "./shop/ProductCard";
import FilterBar from "./shop/FilterBar";
import SortDropdown from "./shop/SortDropdown";

function Shop() {
  const [searchParams] = useSearchParams();

  const {
    search,
    setSearch,
    category,
    setCategory,
    maxPrice,
    setMaxPrice,
    availability,
    toggleAvailability,
    sortBy,
    setSortBy,
    filtered,
  } = useFilter(products, searchParams.get("search") || "");

  const { quantities, addToCart, incrementItem, decrementItem } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    const paramSearch = searchParams.get("search");
    if (paramSearch !== null && paramSearch !== search) {
      setSearch(paramSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const [view, setView] = useState("grid");

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 py-8 px-4 md:px-8 lg:px-16 xl:px-24 transition-colors">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 pb-3">
          Shop Fresh Produce
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl">
          Farm-fresh organic goodness, delivered to your door.
        </p>
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-700 dark:text-orange-400 w-4 h-4" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search produce..."
            className="w-full text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent py-2.5 pl-11 pr-4"
          />
        </div>

        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />

        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
          <button
            onClick={() => setView("grid")}
            aria-label="Grid view"
            className={`p-2.5 transition-colors ${
              view === "grid"
                ? "bg-orange-600 text-white"
                : "text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("list")}
            aria-label="List view"
            className={`p-2.5 transition-colors ${
              view === "list"
                ? "bg-orange-600 text-white"
                : "text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 items-start">
        <FilterBar
          category={category}
          setCategory={setCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          availability={availability}
          toggleAvailability={toggleAvailability}
        />

        <div>
          {filtered.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-12 text-center text-gray-500 dark:text-gray-400">
              No products match your filters.
            </div>
          ) : (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={quantities[product.id] || 0}
                  onAdd={addToCart}
                  onIncrement={incrementItem}
                  onDecrement={decrementItem}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={toggleWishlist}
                  view={view}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
