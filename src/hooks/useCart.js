import { useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "grocify-cart";

function readStoredCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function useCart() {
  const [quantities, setQuantities] = useState(readStoredCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(quantities));
  }, [quantities]);

  const addToCart = (productId) => {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const incrementItem = (productId) => {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const decrementItem = (productId) => {
    setQuantities((prev) => {
      const nextQty = (prev[productId] || 0) - 1;
      if (nextQty <= 0) {
        const rest = { ...prev };
        delete rest[productId];
        return rest;
      }
      return { ...prev, [productId]: nextQty };
    });
  };

  const removeItem = (productId) => {
    setQuantities((prev) => {
      const rest = { ...prev };
      delete rest[productId];
      return rest;
    });
  };

  const clearCart = () => setQuantities({});

  const totalCount = useMemo(
    () => Object.values(quantities).reduce((sum, qty) => sum + qty, 0),
    [quantities]
  );

  return {
    quantities,
    addToCart,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
    totalCount,
  };
}
