//If you send an object like the code above, it will return you an object with a new id. remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error




// import { useState } from "react"
// import { APIURL } from "../../API/API";

// const NewProduct = () => {
//   const [newProduct, setNewProduct] = useState([]);
// try {
//     useEffect(() => {
//       async function fetchNewProduct() {
//       await fetch(`${APIURL}/products`),{
//         method:"POST",
//         body:JSON.stringify(
//             {
//                 title: 'test product',
//                 price: 13.5,
//                 description: 'lorem ipsum set',
//                 image: 'https://i.pravatar.cc',
//                 category: 'electronic'
//             }
//         )
     
//   } catch (error) {
  
//   }
    
//         .then(res=>res.json())
//         .then(json=>console.log(json))
//       fetchProducts();
//     }, []);
//     return (
//       <div>NewProduct</div>
//     )
  


// export default NewProduct

//FETCH CALL
// fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))


//EXAMPLE OUTPUT
//  {
//     id:31,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }