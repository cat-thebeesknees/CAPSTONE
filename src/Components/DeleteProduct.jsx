// The product will not be deleted on the database. but if you sent data successfully it will return you the fake deleted product


//DeleteProduct.jsx
// import { APIURL } from "../../API/API";

// async function DeleteProduct(productId) {
//   try {
//     const response = await fetch(`${APIURL}/${productId}`, {
//       method: 'DELETE',
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error deleting player", error);
//     throw error;
//   }
// }
// export default DeleteProduct;


// const handleDelete = async (id) => {
//   try {
//     // Call your DeleteProduct function to delete the product
//     await DeleteProduct(id); // Replace with your delete logic
//     setSingleProduct((prevProducts) =>
//       prevProducts.filter((product) => product.id !== id)
//     );
//   } catch (error) {
//     console.error("Error deleting product: ", error);
//   }
// };

{/* <Link to={`/product/${product.id}`} className="card-link">
<button className="card-button">Details</button>
</Link>
<button
onClick={() => handleDelete(product.id)}
className="delete-button"
>
Delete
</button> */}



//FETCH CALL
// fetch('https://fakestoreapi.com/products/6',{
//             method:"DELETE"
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//EXAMPLE OUTPUT
// {
//     id:6,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }