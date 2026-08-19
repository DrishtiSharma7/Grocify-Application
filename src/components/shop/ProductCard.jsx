import { motion } from "framer-motion";
import { Heart, MapPin, Mountain, Minus, Plus } from "lucide-react";

const badgeStyles = {
  "Fresh Today": "bg-green-100 text-green-800",
  "In Stock": "bg-blue-100 text-blue-800",
  "Local Pickup": "bg-amber-100 text-amber-800",
};

function ProductCard({
  product,
  quantity,
  onAdd,
  onIncrement,
  onDecrement,
  isWishlisted,
  onToggleWishlist,
  view,
}) {
  const isList = view === "list";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden ${
        isList ? "flex" : "flex flex-col"
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className={
          isList
            ? "w-48 h-full object-cover shrink-0"
            : "w-full h-48 object-cover rounded-t-2xl"
        }
      />

      <div className="p-4 flex flex-col flex-1">
        <span
          className={`self-start text-xs px-3 py-1 rounded-full font-medium mb-2 ${
            badgeStyles[product.badge] || "bg-gray-100 text-gray-700"
          }`}
        >
          {product.badge}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{product.description}</p>

        <p className="text-xl font-bold text-orange-600 mb-2">
          ${product.price.toFixed(2)} <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/ {product.unit}</span>
        </p>

        <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <MapPin className="w-3.5 h-3.5" /> {product.location}
        </p>
        <p className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mb-4">
          <Mountain className="w-3.5 h-3.5" /> {product.farm}
        </p>

        <div className="mt-auto flex items-center gap-2">
          {quantity > 0 ? (
            <div className="flex items-center justify-between flex-1 border border-orange-200 dark:border-orange-800 rounded-lg overflow-hidden">
              <button
                onClick={() => onDecrement(product.id)}
                className="px-3 py-2 text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-700"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{quantity}</span>
              <button
                onClick={() => onIncrement(product.id)}
                className="px-3 py-2 text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-700"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAdd(product.id)}
              className="flex-1 bg-orange-600 hover:bg-orange-700 transition-colors text-white text-sm font-semibold rounded-lg py-2"
            >
              Add to Cart
            </button>
          )}

          <button
            onClick={() => onToggleWishlist(product.id)}
            aria-label="Toggle wishlist"
            className={`flex items-center justify-center gap-1.5 border rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              isWishlisted
                ? "border-orange-600 text-orange-600 bg-orange-50"
                : "border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-600"
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? "fill-orange-600" : ""}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
