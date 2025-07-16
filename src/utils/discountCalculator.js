"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateDiscount;
//returns discount, to 2 decimals
function calculateDiscount(product) {
    const price = product.price;
    const discount = product.discountPercentage;
    return Number((price * discount).toFixed(2));
}
