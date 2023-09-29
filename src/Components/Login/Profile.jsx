import AllProducts from "../Products/AllProducts";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import AddNewCart from "../Cart/AddNewCart";
import "../CSS/Profile.css";
const Profile = () => {
  return (
    <div className="userProfile">
      <h1>Welcome Back!</h1>

      <div className="user-nav">
        <Link to="/profile/all-products">All Products</Link>
        <Link to="/profile/add-new-cart">Add New Cart</Link>
      </div>

      <Routes>
        <Route path="all-products/*" element={<AllProducts />} />
        <Route path="add-new-cart/*" element={<AddNewCart />} />
      </Routes>

      <Outlet />
    </div>
  );
};

export default Profile;
