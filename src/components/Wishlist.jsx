import { Link } from "react-router-dom";
import { Heart, MoveRight } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "./shop/ProductCard";

function Wishlist() {
  const { quantities, addToCart, incrementItem, decrementItem } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const likedProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className="w-full min-h-[70vh] bg-gray-100 dark:bg-gray-900 px-4 sm:px-8 lg:px-16 xl:px-24 py-8 transition-colors">
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 pb-3">
          Liked Products
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl">
          The fresh picks you've saved for later.
        </p>
      </div>

      {likedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-12">
          <Heart className="w-16 h-16 text-orange-300 dark:text-orange-700 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No liked products yet
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
            Tap the heart icon on any product to save it here for later.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 transition-colors text-white font-semibold rounded-full px-6 py-3"
          >
            Browse Products <MoveRight size={18} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={quantities[product.id] || 0}
              onAdd={addToCart}
              onIncrement={incrementItem}
              onDecrement={decrementItem}
              isWishlisted
              onToggleWishlist={toggleWishlist}
              view="grid"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
