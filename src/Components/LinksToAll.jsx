//LinksToAll.jsx

import { Link } from "react-router-dom";
import "./CSS/LinksToAll.css";

const LinksToAll = () => {
  return (
    <nav id="navLinks">
      <ul id="navUl" style={{ listStyle: "none", padding: 5 }}>
        <li id="homeLink">
          <Link to="/" className="homeLink">
            Home
          </Link>
        </li>

        <li id="guest">
          <Link to="guest/*" className="guestLink">
            Guest
          </Link>
        </li>

        <li id="register">
          <Link to="/register" className="registerLink">
            Register
          </Link>
        </li>

        <li id="login-user">
          <Link to="/login-user" className="loginUserLink">
            Login
          </Link>
        </li>

        <li id="home-nav">
          <Link to="/home-nav" className="homeNavLink">
            HomeNav
          </Link>
        </li>

        <li id="profile">
          <Link to="/profile" className="profile">
            Profile
          </Link>
        </li>

        

        <li id="addNewCart">
          <Link to="/add-new-cart" className="addNewCartLink">
            AddNewCart
          </Link>
        </li>

        <li id="cartsDateRange">
          <Link to="/carts-date-range" className="cartsDateRangeLink">
            CartsDateRange
          </Link>
        </li>

        <li id="deleteCart">
          <Link to="/delete-cart" className="deleteCartLink">
            DeleteCart
          </Link>
        </li>

        <li id="getAllCarts">
          <Link to="/get-all-carts" className="getAllCartsLink">
            GetAllCarts
          </Link>
        </li>

        <li id="getUserCart">
          <Link to="/get-user-cart" className="getUserCartLink">
            GetUserCart
          </Link>
        </li>

        <li id="limitCart">
          <Link to="/limit-cart" className="limitCartLink">
            LimitCart
          </Link>
        </li>

        <li id="singleCart">
          <Link to="/single-cart" className="singleCartLink">
            SingleCart
          </Link>
        </li>

        <li id="sortCart">
          <Link to="/sort-cart" className="sortCartLink">
            SortCart
          </Link>
        </li>

        <li id="updateCart">
          <Link to="/update-cart" className="updateCartLink">
            UpdateCart
          </Link>
        </li>

        <li id="allCategories">
          <Link to="/all-categories" className="allCategoriesLink">
            AllCategories
          </Link>
        </li>

        <li id="allProducts">
          <Link to="/all-products" className="allProductsLink">
            AllProducts
          </Link>
        </li>

        <li id="deleteProduct">
          <Link to="/delete-product" className="deleteProductLink">
            DeleteProduct
          </Link>
        </li>

        <li id="getInCategory">
          <Link to="/get-in-category" className="getInCategoryLink">
            GetInCategory
          </Link>
        </li>

        <li id="limitProducts">
          <Link to="/limit-products" className="limitProductsLink">
            LimitProducts
          </Link>
        </li>

        <li id="newProduct">
          <Link to="/new-product" className="newProductLink">
            NewProduct
          </Link>
        </li>

        <li id="singleProductCard">
          <Link
            to="/single-product-card"
            className="singleProductCardLink">
            SingleProduct
          </Link>
        </li>

        <li id="sortProducts">
          <Link to="/sort-products" className="sortProductsLink">
            SortProducts
          </Link>
        </li>

        <li id="updateProduct">
          <Link to="/update-product" className="updateProductLink">
            UpdateProduct
          </Link>
        </li>

        <li id="deleteUser">
          <Link to="/delete-user" className="deleteUserLink">
            DeleteUser
          </Link>
        </li>

        <li id="getAllUsers">
          <Link to="/get-all-users" className="getAllUsersLink">
            GetAllUsers
          </Link>
        </li>

        <li id="getSingleUser">
          <Link to="/get-single-user" className="getSingleUserLink">
            GetSingleUser
          </Link>
        </li>

        <li id="updateUser">
          <Link to="/update-user" className="updateUserLink">
            UpdateUser
          </Link>
        </li>

        <li id="userLimitResults">
          <Link to="/user-limit-results" className="userLimitResultsLink">
            UserLimitResults
          </Link>
        </li>

        <li id="userSortResults">
          <Link to="/user-sort-results" className="userSortResultsLink">
            UserSortResults
          </Link>
        </li>

        <li id="login-routes">
          <Link to="login/:login-routes" className="login-routes">
            Login Routes
          </Link>
        </li>

        <li id="buttons">
          <Link to="products/:buttons" className="details-button">
            Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LinksToAll;
