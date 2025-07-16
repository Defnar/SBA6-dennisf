import { fetchData } from "./src/services/apiService";
import Product from "./src/models/Product";
import calculateTax from "./src/utils/taxCalculator";


const url = 'https://dummyjson.com/products/1';

async function getProduct(url: string) {
    const productData = await fetchData(url);
    const product = new Product(productData.title, productData.category, productData.price, productData.discountPercentage)
    return product;
}

let product: Product;

getProduct(url)
.then((newProduct) => product = newProduct)
.then(() => product.displayDetails())
.then(() => product.getPriceWithDiscount())
.then(() => console.log(`tax is $${calculateTax(product)}`));

