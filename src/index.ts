import { fetchData } from "./services/apiService";
import Product from "./models/Product";
import calculateTax from "./utils/taxCalculator";

const url = "https://dummyjson.com/products/1";

async function getProduct(url: string): Promise<Product> {
  const productData = await fetchData(url);
  const product = new Product(
    productData.title,
    productData.category,
    productData.price,
    productData.discountPercentage
  );
  return product;
}

getProduct(url)
  .then((product) => {
    product.displayDetails();
    console.log(`This product, with discount, is $${product.getPriceWithDiscount()}`);
    console.log(`tax is $${calculateTax(product)}`);
  })
  .catch((err) => console.error(err.message));
