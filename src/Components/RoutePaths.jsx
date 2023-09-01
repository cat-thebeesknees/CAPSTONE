import { Routes, Route } from "react-router-dom";
import LandingPage from "./Login/LandingPage";
import Guest from "./Login/Guest";
import LoginUser from "./Login/LoginUser";
import AddUser from "./Login/AddUser";
import DeleteUser from "./User/DeleteUser";
import GetAllUsers from "./User/GetAllUsers";
import GetSingleUser from "./User/GetSingleUser";
import UpdateUser from "./User/UpdateUser";
import UserLimitResults from "./User/UserLimitResults";
import UserSortResults from "./User/UserSortResults";
import UpdateProduct from "./Products/UpdateProduct";
import SortProducts from "./Products/SortProducts";
import SingleProductCard from "./Products/SingleProductCard";
import NewProduct from "./Products/NewProduct";
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

export default function RoutePaths() {


  return (

    <div className="main-section">   
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/homeNav" element={<HomeNav />} />
    <Route path="/guest" element={<Guest />} />
    <Route path="/loginUser" element={<LoginUser />} />
    <Route path="/addUser" element={<AddUser />} />
    <Route path="/deleteUser" element={<DeleteUser />} />
    <Route path="/getAllUsers" element={<GetAllUsers />} />
    <Route path="/getSingleUser" element={<GetSingleUser />}/>
    <Route path="/updateUser" element={<UpdateUser />} >
    <Route path="/userLimitResults" element={<UserLimitResults />} />
    <Route path="/userSortResults" element={<UserSortResults />} />
    <Route path="/updateProduct" element={<UpdateProduct />} />
    <Route path="/sortProducts" element={<SortProducts />} />
    <Route path="/singleProductCard" element={<SingleProductCard />} />
    <Route path="/newProduct" element={<NewProduct />} />
    <Route path="/limitProduct" element={<LimitProducts />} />
    <Route path="/getInCategory" element={<GetInCategory />} />
    <Route path="/deleteProduct" element={<DeleteProduct />} />
    <Route path="/allProducts" element={<AllProducts />} />
    <Route path="/allCategories" element={<AllCategories />} />
    <Route path="/updateCart" element={<UpdateCart />} />
    <Route path="/sortCart" element={<SortCart />} />
    <Route path="/singleCart" element={<SingleCart />} />
    <Route path="/limitCart" element={<LimitCart />} />
    <Route path="/getUserCart" element={<GetUserCart />} />
    <Route path="/getAllCarts" element={<GetAllCarts />} />
    <Route path="/deleteCart" element={<DeleteCart />} />
    <Route path="/cartsDateRange" element={<CartsDateRange />} />
    <Route path="/addNewCart" element={<AddNewCart />} />


    </Route>





    </Routes>
    
    
    </div>
  )
}

