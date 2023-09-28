//Guest.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import AllProducts from "../Products/AllProducts";
import "../CSS/Guest.css";

// import SingleProductCard from "../Products/SingleProductCard";



const Guest = () => {
  return (
    <>
      <div className="guestProducts">
      <AllProducts />
      
      </div>
       <Routes>
       <Route index element={<AllProducts />} />
       <Route path="all-products/*" element={<AllProducts />}>
        {/* <Route index element={<SingleProductCard />} />
        <Route path="single-product-card/*"
            element={<SingleProductCard selectedProduct={selectedProduct} />} /> */}
        </Route>
       
       
       </Routes>    

       <Outlet />        
      
      </>
  );
};
export default Guest;
