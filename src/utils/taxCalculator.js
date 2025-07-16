"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateTax;
//returns tax amount rounded to 2 decimals
function calculateTax(product) {
    const taxPercentage = (product.category === "groceries") ? 0.03 : 0.0475;
    return Number((taxPercentage * product.price).toFixed(2));
}
