//Guest.jsx
import { Routes, Route } from "react-router-dom";
import AllProducts from "../Products/AllProducts";
import "../CSS/Guest.css";
import { GetAllUsers } from "../User/GetAllUsers";



const Guest = () => {
  return (
    
      <div className="guestProducts">
      <AllProducts />
      <GetAllUsers />
       <Routes>
       <Route path="products/:all-products" element={<AllProducts />} />
       <Route path="guest/*" element={<Guest />} />
       <Route path="user/:get-all-users" element={<GetAllUsers />} />
       </Routes>            
      </div>
  );
};
export default Guest;
