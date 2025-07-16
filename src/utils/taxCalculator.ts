import Product from "../models/Product"
import { DataError } from "./errorHandler";

//returns tax amount rounded to 2 decimals
export default function calculateTax(product: Product): number {

    //if price is not a number, throws error
    if (isNaN(product.price)) {
        throw new DataError("Price expected to be a number");
    }

    //groceries only taxed at 3%, all others are 4.75%
    const taxPercentage = (product.category === "groceries") ? 0.03 : 0.0475;
    return Number((taxPercentage * product.price).toFixed(2))
}