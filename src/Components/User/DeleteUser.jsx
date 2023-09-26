//The user will not be deleted on the database. but if you sent data successfully it will return you the fake deleted user

// const DeleteUser = () => {

//   fetch('https://fakestoreapi.com/users/6',{
//             method:"DELETE"
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//   return (
//     <div>DeleteUser</div>
//   )
// }

// export default DeleteUser

// EXAMPLE OUTPUT

// {
//   id:6,
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
