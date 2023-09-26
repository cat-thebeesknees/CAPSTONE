//It will return you an object with sent id. remember that nothing in real will update in the database.

// const UpdateProduct = () => {

//   fetch('https://fakestoreapi.com/products/7',{
//     method:"PUT",
//     body:JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: 'electronic'
//         }
//     )
// })
//     .then(res=>res.json())
//     .then(json=>console.log(json))







//     fetch('https://fakestoreapi.com/products/7',{
//                 method:"PATCH",
//                 body:JSON.stringify(
//                     {
//                         title: 'test product',
//                         price: 13.5,
//                         description: 'lorem ipsum set',
//                         image: 'https://i.pravatar.cc',
//                         category: 'electronic'
//                     }
//                 )
//             })
//                 .then(res=>res.json())
//                 .then(json=>console.log(json))


//   return (
//     <div>UpdateProduct</div>
//   )
// }

// export default UpdateProduct


//EXAMPLE OUTPUT
// {
//   id:7,
//   title:'new title',
//   price:'new price',
//   category:'new category',
//   description:'new description',
//   image:'new image url'
// }