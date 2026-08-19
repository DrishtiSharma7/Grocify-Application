import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, MoveRight, LogIn } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { saveOrder } from "../utils/orders";

function generateOrderId() {
  return `GRC-${Date.now().toString().slice(-8)}`;
}

function Cart() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { quantities, incrementItem, decrementItem, removeItem, clearCart } = useCart();

  const cartItems = Object.entries(quantities)
    .map(([id, qty]) => {
      const product = products.find((p) => p.id === Number(id));
      return product ? { ...product, quantity: qty } : null;
    })
    .filter(Boolean);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length > 0 ? 3.99 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    if (!user) return;

    const order = {
      orderId: generateOrderId(),
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      customerEmail: user.email,
      placedAt: new Date().toISOString(),
    };
    saveOrder(order);
    clearCart();
    navigate("/order-placed", { state: order });
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-[70vh] bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-16 text-center transition-colors">
        <ShoppingBag className="w-16 h-16 text-orange-300 dark:text-orange-700 mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
          Looks like you haven't added any fresh produce yet. Let's fix that.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 transition-colors text-white font-semibold rounded-full px-6 py-3"
        >
          Start Shopping <MoveRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[70vh] bg-gray-100 dark:bg-gray-900 px-4 sm:px-8 lg:px-16 xl:px-24 py-8 transition-colors">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Your Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-orange-600 transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${item.price.toFixed(2)} / {item.unit}
                  </p>
                </div>

                <div className="flex items-center border border-orange-200 dark:border-orange-800 rounded-lg overflow-hidden shrink-0">
                  <button
                    onClick={() => decrementItem(item.id)}
                    className="px-2.5 py-2 text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => incrementItem(item.id)}
                    className="px-2.5 py-2 text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <p className="w-16 text-right font-bold text-orange-600 shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                  className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-6 sticky top-24">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {user ? (
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-600 hover:bg-orange-700 transition-colors text-white font-semibold rounded-lg py-3"
            >
              Checkout
            </button>
          ) : (
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">
                Log in to place your order.
              </p>
              <Link
                to="/login"
                state={{ from: "/cart" }}
                className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 transition-colors text-white font-semibold rounded-lg py-3"
              >
                <LogIn size={18} /> Log In to Checkout
              </Link>
            </div>
          )}
          <Link
            to="/shop"
            className="block text-center text-sm font-medium text-orange-600 hover:text-orange-700 mt-4"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
