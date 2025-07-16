import { fetchData } from "./src/services/apiService";
import Product from "./src/models/Product";



const url = "https://dummyjson/com/products/1";

const data = fetchData(url);

const product = new Product(data.title, data.category, data.price, data.discountPercentage); 