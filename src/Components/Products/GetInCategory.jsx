//Get products in a specific category
//You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results
const GetInCategory = () => {

  fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(res=>res.json())
  .then(json=>console.log(json))


  return (
    <div>GetInCategory</div>
  )
}

export default GetInCategory


//OUTPUT EXAMPLE
// [
//   {
//       id:5,
//       title:'...',
//       price:'...',
//       category:'jewelery',
//       description:'...',
//       image:'...'
//   }
//   /*...*/
//   {
//       id:8,
//       title:'...',
//       price:'...',
//       category:'jewelery',
//       description:'...',
//       image:'...'
//   }
// ]