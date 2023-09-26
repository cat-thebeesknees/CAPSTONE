//AllCategories.jsx
import { useState, useEffect } from "react";
import { APIURL } from "../../API/API";
export default function AllCategories() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function fetchAllCategories() {
      try {
        const response = await fetch(`${APIURL}/categories`);
        const result = await response.json();

        setAllCategories(result.categories);
        console.log(setAllCategories);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    fetchAllCategories();
  }, []);

  return (
    <div className="categories">
      <div>
        {allCategories.map((category) => (
          <div key={category.id} className="all-categories">
            <p> {category.id} </p>
          </div>
        ))}
      </div>
    </div>
  );
}


      //OUTPUT EXAMPLE
      // [
      //   "electronics",
      //   "jewelery",
      //   "men's clothing",
      //   "women's clothing"
      //   ]

      //FETCH CALL
      // fetch('https://fakestoreapi.com/products/categories')
      //       .then(res=>res.json())
      //       .then(json=>console.log(json))