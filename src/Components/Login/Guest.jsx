//Guest.jsx
import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import AllProducts from "../Products/AllProducts";
import "../CSS/Guest.css";

// import SingleProductCard from "../Products/SingleProductCard";

const Guest = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))

      .catch((error) => console.error("Error pulling data", error));
    console.log(setProducts);
  }, []);

  return (
    <>
      <div className="guestProducts">
        <AllProducts products={products} />

        <Routes>
          <Route
            path="all-products/*"
            element={<AllProducts products={products} />}
          />
        </Routes>
        <Outlet />
      </div>
    </>
  );
};
export default Guest;
