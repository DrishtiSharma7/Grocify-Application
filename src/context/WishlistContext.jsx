import { createContext, useContext } from "react";
import { useWishlist as useWishlistState } from "../hooks/useWishlist";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const wishlist = useWishlistState();
  return <WishlistContext.Provider value={wishlist}>{children}</WishlistContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
