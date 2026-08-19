import { Link, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, MoveRight, Package } from "lucide-react";
import { getLastOrder } from "../utils/orders";

function OrderPlaced() {
  const location = useLocation();
  const order = location.state || getLastOrder();

  if (!order) {
    return <Navigate to="/shop" replace />;
  }

  const { items, subtotal, deliveryFee, total, orderId } = order;

  return (
    <div className="w-full min-h-[75vh] bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-16 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-950 mb-6"
        >
          <CheckCircle2 className="w-11 h-11 text-green-600 dark:text-green-400" />
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Order Placed!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Thanks for shopping with Grocify. Your fresh produce is on its way.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 mb-6">
          <Package className="w-4 h-4 text-orange-600" />
          Order ID: <span className="font-semibold">{orderId}</span>
        </div>

        <div className="text-left space-y-2 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>
                {item.name} <span className="text-gray-400 dark:text-gray-500">× {item.quantity}</span>
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="text-left space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4 mb-8">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900 dark:text-gray-100">
            <span>Total Paid</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 hover:scale-[1.02] transition-all text-white font-semibold rounded-full px-8 py-3"
        >
          Continue Shopping <MoveRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
}

export default OrderPlaced;
