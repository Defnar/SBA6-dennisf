"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discountCalculator_1 = __importDefault(require("../utils/discountCalculator"));
//product class.  Readonly for easier use. Shortened to data needed only
class Product {
    constructor(title, category, price, discountPercentage) {
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        console.log(this);
    }
    getPriceWithDiscount() {
        return this.price - (0, discountCalculator_1.default)(this);
    }
    outputDetails() {
    }
}
exports.default = Product;
