"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./src/services/apiService");
const Product_1 = __importDefault(require("./src/models/Product"));
const taxCalculator_1 = __importDefault(require("./src/utils/taxCalculator"));
const url = 'https://dummyjson.com/products/1';
function getProduct(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const productData = yield (0, apiService_1.fetchData)(url);
        const product = new Product_1.default(productData.title, productData.category, productData.price, productData.discountPercentage);
        return product;
    });
}
let product;
getProduct(url)
    .then((newProduct) => product = newProduct)
    .then(() => product.displayDetails())
    .then(() => product.getPriceWithDiscount())
    .then(() => console.log(`tax is $${(0, taxCalculator_1.default)(product)}`))
    .catch(err => console.error(err));
