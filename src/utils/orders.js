const ORDERS_STORAGE_KEY = "grocify-orders";

export function getOrders() {
  try {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
}

export function getLastOrder() {
  const orders = getOrders();
  return orders.length > 0 ? orders[orders.length - 1] : null;
}
