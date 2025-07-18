"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateTax;
const errorHandler_1 = require("./errorHandler");
//returns tax amount rounded to 2 decimals
function calculateTax(product) {
    //if price is not a number, throws error
    if (isNaN(product.price)) {
        throw new errorHandler_1.DataError("Price expected to be a number");
    }
    //groceries only taxed at 3%, all others are 4.75%
    const taxPercentage = (product.category === "groceries") ? 0.03 : 0.0475;
    return Number((taxPercentage * product.price).toFixed(2));
}
