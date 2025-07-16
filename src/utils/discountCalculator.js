"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateDiscount;
const errorHandler_1 = require("./errorHandler");
//returns discount, to 2 decimals
function calculateDiscount(product) {
    const price = product.price;
    const discount = product.discountPercentage;
    //checks if price and discount are numbers, and throws an error if they aren't
    if (isNaN(price)) {
        throw new errorHandler_1.DataError("Price expected to be a number");
    }
    if (isNaN(discount)) {
        throw new errorHandler_1.DataError("Discount expected to be a number");
    }
    return Number((price * discount).toFixed(2));
}
