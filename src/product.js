const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800
  },
  {
    id: 2,
    name: "Mouse",
    price: 20
  },
  {
    id: 3,
    name: "Keyboard",
    price: 50
  }
];

export function getProducts() {
  return products;
}

export function findProduct(id) {
  return products.find(product => product.id === id);
}

export function searchProducts(query) {
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
}