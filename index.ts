import { fetchData } from "./src/services/apiService";
import Product from "./src/models/Product";
import calculateTax from "./src/utils/taxCalculator";


const url = 'https://dummyjson.com/products/1';

async function getProduct(url: string) {
    const productData = await fetchData(url);
    const product = new Product(productData.title, productData.category, productData.price, productData.discountPercentage)
    return product;
}

//sets this to a global variable I can use outside the chain, if I need to do so
let product: Product;

getProduct(url)
.then((newProduct) => product = newProduct)
.then(() => product.displayDetails())
.then(() => product.getPriceWithDiscount())
.then(() => console.log(`tax is $${calculateTax(product)}`))
.catch(err => console.error(err));

