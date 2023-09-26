//RoutePaths.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Login/LandingPage";
import Guest from "./Login/Guest";
import LoginUser from "./Login/LoginUser";
import Register from "./Login/Register";
import DeleteUser from "./User/DeleteUser";
import GetAllUsers from "./User/GetAllUsers";
import GetSingleUser from "./User/GetSingleUser";
import UpdateUser from "./User/UpdateUser";
import UserLimitResults from "./User/UserLimitResults";
import UserSortResults from "./User/UserSortResults";
import UpdateProduct from "./Products/UpdateProduct";
import SortProducts from "./Products/SortProducts";
import SingleProductCard from "./Products/SingleProductCard";
// import NewProduct from "./Products/NewProduct";
import LimitProducts from "./Products/LimitProducts";
import GetInCategory from "./Products/GetInCategory";
import DeleteProduct from "./Products/DeleteProduct";
import AllProducts from "./Products/AllProducts";
import AllCategories from "./Products/AllCategories";
import UpdateCart from "./Cart/UpdateCart";
import SortCart from "./Cart/SortCart";
import SingleCart from "./Cart/SingleCart";
import LimitCart from "./Cart/LimitCart";
import GetAllCarts from "./Cart/GetAllCarts";
import GetUserCart from "./Cart/GetUserCart";
import DeleteCart from "./Cart/DeleteCart";
import CartsDateRange from "./Cart/CartsDateRange";
import AddNewCart from "./Cart/AddNewCart";
import HomeNav from "./Login/HomeNav";
import LinksToAll from "./LinksToAll";
import LoginRoutes from "./Login/LoginRoutes";
import DetailsButton from "./Products/Buttons";

export default function RoutePaths() {
  return (
    <div className="main-section">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login/:home-nav" element={<HomeNav />} />
        <Route path="login/:guest" element={<Guest />} />
          
        <Route path="login/:login-user" element={<LoginUser />} />
        <Route path="login/:register" element={<Register />} />
        <Route path="user/:delete-user" element={<DeleteUser />} />
        <Route path="user/:get-all-users" element={<GetAllUsers />} />
        <Route path="user/:get-single-user" element={<GetSingleUser />} />
        <Route path="user/:update-user" element={<UpdateUser />}>
          <Route
            path="user/:user-limit-results"
            element={<UserLimitResults />}
          />
          <Route path="user/:user-sort-results" element={<UserSortResults />} />
          <Route path="products/:update-product" element={<UpdateProduct />} />
          <Route path="products/:sort-products" element={<SortProducts />} />
          <Route
            path="products/:single-product-card/*"
            element={<SingleProductCard />}
          />
          {/* <Route path="products/:new-product" element={<NewProduct />} /> */}
          <Route path="products/:limit-product" element={<LimitProducts />} />
          <Route path="products/:get-in-category" element={<GetInCategory />} />
          <Route path="products/:delete-product" element={<DeleteProduct />} />
          <Route path="products/:all-products/*" element={<AllProducts />} />
          <Route path="products/:all-categories" element={<AllCategories />} />
          <Route path="cart/:update-cart" element={<UpdateCart />} />
          <Route path="cart/:sort-cart" element={<SortCart />} />
          <Route path="cart/:single-cart" element={<SingleCart />} />
          <Route path="cart/:limit-cart" element={<LimitCart />} />
          <Route path="cart/:get-user-cart" element={<GetUserCart />} />
          <Route path="cart/:get-all-carts" element={<GetAllCarts />} />
          <Route path="cart/:delete-cart" element={<DeleteCart />} />
          <Route path="cart/:carts-date-range" element={<CartsDateRange />} />
          <Route path="cart/:add-new-cart" element={<AddNewCart />} />
          <Route path="components/:links-to-all" element={<LinksToAll />} />
          <Route path="login/:login-routes" element={<LoginRoutes />} />
        </Route>
        <Route path="products/:buttons" element={<DetailsButton />} />
      </Routes>
    </div>
  );
}
