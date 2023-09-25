// If you don't add any start date it will fetch from the beginning of time and if you don't add any end date it will fetch until now. You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results

// const CartsDateRange = () => {

//   fetch('https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10')
//   .then(res=>res.json())
//   .then(json=>console.log(json))

//   return (
//     <div>CartsDateRange</div>
//   )
// }

// export default CartsDateRange

// EXAMPLE OUTPUT

// [
//   {
//       id:1,
//       userId:1,
//       date:2019-12-10,
//       products:[...]
//   },
  /*...*/
//   {
//       id:4,
//       userId:1,
//       date:2020-10-10,
//       products:[...]
//   }
// ]