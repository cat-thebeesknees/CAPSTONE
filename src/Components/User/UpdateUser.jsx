// It will return you an object with sent id. remember that nothing in real will update in the database.

// const UpdateUser = () => {

//   fetch('https://fakestoreapi.com/users/7',{
//     method:"PUT",
//     body:JSON.stringify(
//         {
//         email:'John@gmail.com',
//         username:'johnd',
//         password:'m38rmF$',
//         name:{
//             firstname:'John',
//             lastname:'Doe'
//         },
//         address:{
//             city:'kilcoole',
//             street:'7835 new road',
//             number:3,
//             zipcode:'12926-3874',
//             geolocation:{
//                 lat:'-37.3159',
//                 long:'81.1496'
//             }
//         },
//         phone:'1-570-236-7033'
//         }
//     )
// })
//     .then(res=>res.json())
//     .then(json=>console.log(json))




//     fetch('https://fakestoreapi.com/users/7',{
//                 method:"PATCH",
//                 body:JSON.stringify(
//                     {
//                         email:'John@gmail.com',
//                         username:'johnd',
//                         password:'m38rmF$',
//                         name:{
//                             firstname:'John',
//                             lastname:'Doe'
//                         },
//                         address:{
//                             city:'kilcoole',
//                             street:'7835 new road',
//                             number:3,
//                             zipcode:'12926-3874',
//                             geolocation:{
//                                 lat:'-37.3159',
//                                 long:'81.1496'
//                             }
//                         },
//                         phone:'1-570-236-7033'
//                     }
//                 )
//             })
//                 .then(res=>res.json())
//                 .then(json=>console.log(json))

//   return (
//     <div>UpdateUser</div>
//   )
// }

// export default UpdateUser

// EXAMPLE OUTPUT
// {
//   id:7,
//   email:'John@gmail.com',
//   username:'johnd',
//   password:'m38rmF$',
//   name:{
//       firstname:'John',
//       lastname:'Doe'
//   },
//   address:{
//       city:'kilcoole',
//       street:'7835 new road',
//       number:3,
//       zipcode:'12926-3874',
//       geolocation:{
//           lat:'-37.3159',
//           long:'81.1496'
//       }
//   },
//   phone:'1-570-236-7033'
// }