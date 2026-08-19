import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import basket from "../assets/basket.png";
import { Heart, Search, ShoppingCart, Menu, X, Sun, Moon, User, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { to: "/home", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact Us" },
];

function Navbar() {
  const { totalCount } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/home");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    console.log("Search:", value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(query)}`);
    setIsMenuOpen(false);
  };

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-orange-600 ${
      isActive ? "text-orange-600" : "text-gray-700 dark:text-gray-200"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-300 dark:border-gray-700 shadow-sm transition-colors">
      <div className="flex items-center justify-between h-20 px-4 md:px-8 lg:px-12">
        <Link to="/home" className="flex items-center shrink-0">
          <img src={basket} alt="Grocify logo" className="w-14 h-14 md:w-16 md:h-16" />
          <h1 className="text-2xl md:text-3xl font-bold pl-2 text-orange-900 dark:text-orange-400 font-serif">
            Grocify
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors hover:scale-110"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative text-orange-700 dark:text-orange-400 hover:text-orange-500 transition-colors hover:scale-110"
          >
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-orange-600 text-white text-[10px] font-semibold">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            aria-label="Cart"
            className="relative text-orange-700 dark:text-orange-400 hover:text-orange-500 transition-colors hover:scale-110"
          >
            <ShoppingCart size={20} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-orange-600 text-white text-[10px] font-semibold">
                {totalCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                aria-label="Log out"
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 transition-colors hover:scale-110"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 dark:text-orange-400 hover:text-orange-500 transition-colors"
            >
              <User size={20} /> Login
            </Link>
          )}
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <Link to="/wishlist" aria-label="Wishlist" className="relative text-orange-700 dark:text-orange-400">
            <Heart size={22} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-orange-600 text-white text-[10px] font-semibold">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative text-orange-700 dark:text-orange-400">
            <ShoppingCart size={22} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-orange-600 text-white text-[10px] font-semibold">
                {totalCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="text-gray-700 dark:text-gray-200"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-700 dark:text-orange-400"
                />
                <input
                  type="search"
                  value={query}
                  onChange={handleSearchChange}
                  className="w-full text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-800 bg-white border border-gray-300 dark:border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-400 py-2.5 pl-11 pr-4"
                  placeholder="Search products..."
                />
              </form>

              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors ${
                      isActive ? "text-orange-600" : "text-gray-700 dark:text-gray-200"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="flex items-center gap-6 pt-2 border-t border-gray-300 dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 pt-4"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
                <Link
                  to="/wishlist"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-orange-700 dark:text-orange-400 pt-4"
                >
                  <Heart size={20} /> Wishlist{wishlist.length > 0 ? ` (${wishlist.length})` : ""}
                </Link>

                {user ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 pt-4"
                  >
                    <LogOut size={20} /> Log Out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-sm font-medium text-orange-700 dark:text-orange-400 pt-4"
                  >
                    <User size={20} /> Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
