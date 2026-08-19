import { motion } from "framer-motion";
import { BadgeCheck, MoveRight, Users2 } from "lucide-react";
import basket from "../assets/basket.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between h-fit w-full bg-gray-100 dark:bg-gray-900 pt-16 md:pt-24 pb-16 px-4 sm:px-8 lg:px-16 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-3 rounded-full bg-orange-100 dark:bg-orange-950 px-4 py-2 mb-8">
          <BadgeCheck size={20} className="text-orange-700 dark:text-orange-400" />
          <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
            Export Best Quality
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 lg:pr-18">
          Tasty Organic Fruits & Veggies In{" "}
          <span className="text-orange-700 dark:text-orange-400">Your City</span>
        </h1>

        <div className="mt-6">
          <p className="text-lg sm:text-xl text-orange-950 dark:text-orange-200 max-w-xl mx-auto lg:mx-0">
            Fresh, organic produce delivered straight from the farm to your
            doorstep. Experience the best quality in your city.
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start mt-8 gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-2.5 font-mono transition-all hover:bg-orange-600 hover:scale-105 hover:cursor-pointer"
          >
            <span className="text-sm font-semibold text-white">Shop Now</span>
            <MoveRight size={20} className="text-white" />
          </Link>
          <Link
            to="/process"
            className="inline-flex items-center gap-3 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-amber-700 dark:border-amber-500 px-8 py-2.5 transition-all hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 hover:cursor-pointer"
          >
            <BadgeCheck size={20} className="text-orange-700 dark:text-orange-400" />
            <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
              How it works
            </span>
          </Link>
        </div>
        <div className="mt-16 md:mt-20 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-6 rounded-full px-8 py-3 mb-8 bg-yellow-50 dark:bg-gray-800">
            <Users2 className="rounded-full bg-amber-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Happy Customers</h2>
            <MoveRight size={20} className="text-black dark:text-gray-100" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center justify-center mt-8 lg:mt-0"
      >
        <img
          src={basket}
          alt="Basket of fresh fruits and vegetables"
          className="w-3/4 sm:w-2/3 h-auto animate-jump"
        />
      </motion.div>
    </div>
  );
}

export default Home;
