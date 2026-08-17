import { getProducts } from "./product.js";
import { getUsers } from "./users.js";

export function showShop() {
  console.log("Products:");
  console.log(getProducts());

  console.log("Users:");
  console.log(getUsers());
}