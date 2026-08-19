import { Earth, Hand, Truck, MoveRight } from "lucide-react";
import FruitesAndVegies from '../assets/FruitesAndVegies.jpeg';
import { Link } from "react-router-dom";

function Process() {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 py-16 transition-colors">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Freshness Delivered, Effortlessly
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
          From our local farms to your kitchen table in three simple steps.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16 mb-12">
        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[2px] bg-gray-200 dark:bg-gray-700"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
              <Earth className="text-orange-500" size={28} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-5">
              1. You Order
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
              Browse our curated selection of peak-season organic produce
              and artisan goods online.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
              <Hand className="text-orange-500" size={28} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-5">
              2. We Pick
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
              Our expert shoppers hand-select the freshest items, treating
              your order like their own.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
              <Truck className="text-orange-500" size={28} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-5">
              3. Fast Delivery
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
              Eco-friendly delivery vehicles bring your groceries straight
              to your door, perfectly chilled.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-24">
        <Link
          to="/shop"
          className="inline-flex items-center bg-orange-600 hover:bg-orange-700 hover:scale-105 text-white font-medium px-8 py-3 rounded-full transition-all"
        >
          Start Shopping Now
          <MoveRight size={24} className="ml-2" />
        </Link>
      </div>
      <div className="max-w-5xl mx-auto mt-12 relative overflow-hidden rounded-xl">
        <img
          src={FruitesAndVegies}
          alt="Fresh fruits and vegetables"
          className="w-full h-[280px] sm:h-[380px] md:h-[500px] object-cover shadow-lg"
        />
        <div className="absolute inset-x-4 bottom-4 md:inset-x-auto md:bottom-auto left-8 md:left-10 md:top-1/2 md:-translate-y-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-5 sm:p-8 rounded-lg max-w-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Taste the Difference
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
            We partner directly with local farmers to ensure your produce
            spends little time in transit and more time retaining its vital
            nutrients and flavor.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Process;