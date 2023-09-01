export const APIURL = "https://fakestoreapi.com/products";

//Fetch Products

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${APIURL}`);
    const products = await response.json();

    // console.log(products);
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
