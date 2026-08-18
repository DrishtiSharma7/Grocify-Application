import React from "react";
import basket from "../assets/basket.png";
import { Heart, Search, ShoppingCart, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center h-22 w-screen bg-gray-100 px-8 border-b border-gray-300 shadow-sm">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src="/src/assets/basket.png" alt="logo" className="w-20 h-20 " />
          <h1 className="text-4xl font-bold pl-4 text-orange-900 font-serif">Grocify</h1>
        </div>

        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center">
            <Link to="/home">Home</Link>
          </div>
          <div className="flex items-center">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="flex items-center">
            <Link to="/about">About Us</Link>
          </div>
          <div className="flex items-center">
            <Link to="/process">Process</Link>
          </div>
          <div className="flex items-center">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-700"
            />
            <input
              type="search"
              id="search"
              className="text-sm text-gray-900 border border-gray-300 rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-56 py-2.5 pl-11 pr-4"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center">
            <Heart className="text-orange-700" />
          </div>
          <div className="flex items-center">
            <ShoppingCart className="text-orange-700" />
          </div>
          <div className="flex items-center">
            <LogOut />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
