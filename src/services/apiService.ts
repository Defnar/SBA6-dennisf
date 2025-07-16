import Product from "../models/Product";
import { FetchError } from "../utils/errorHandler";

//fetches data from provided api
export async function fetchData(url: string): Promise<Product> {
  try {
    const response = fetch(url);
    const data = (await response).json();
    return data;
    
  } catch (error) {
    throw new FetchError("Encountered a problem retrieving product data");
  }
}
