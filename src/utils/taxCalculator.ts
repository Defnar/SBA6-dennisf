import Product from "../models/Product"

//returns tax amount rounded to 2 decimals
export default function calculateTax(product: Product): number {
    const taxPercentage = (product.category === "groceries") ? 0.03 : 0.0475;
    return Number((taxPercentage * product.price).toFixed(2))
}