import Product from "../models/Product";
import { DataError } from "./errorHandler";

//returns discount, to 2 decimals
export default function calculateDiscount(product: Product): number {
  const price = product.price;
  const discount = product.discountPercentage;

  //checks if price and discount are numbers, and throws an error if they aren't
  if (isNaN(price)) {
    throw new DataError("Price expected to be a number");
  }
  if (isNaN(discount)) {
    throw new DataError("Discount expected to be a number");
  }

  return Number((price * discount).toFixed(2));
}
