const orders = [];

export function createOrder(user, cart) {
  const order = {
    id: orders.length + 1,
    user,
    items: cart
  };

  orders.push(order);

  return order;
}

export function getOrders() {
  return orders;
}