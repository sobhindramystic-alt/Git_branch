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
  console.log("feature 1")
  console.log("feature 1")

  console.log("feature 1")

  console.log("feature 1")

  console.log("feature 1")


}

export function getProductName(){
    return 'Keyboard'
}