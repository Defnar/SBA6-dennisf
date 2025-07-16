import Product from "../models/Product"

//returns discount, to 2 decimals
export default function calculateDiscount(product: Product) {
    const price = product.price;
    const discount = product.discountPercentage;
    return Number((price * discount).toFixed(2))
}