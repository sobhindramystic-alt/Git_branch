const cart = [];

export function addToCart(product) {
  cart.push(product);
}

export function getCart() {
  return cart;
}

export function getCartTotal() {
  return cart.reduce((total, product) => {
    return total + product.price;
  }, 0);
}