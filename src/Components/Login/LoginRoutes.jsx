import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Guest from "./Guest";
import LoginUser from "./LoginUser";
import Register from "./Register";
import HomeNav from "./HomeNav";
// import AllProducts from "../Products/AllProducts";
// import LinksToAll from "../LinksToAll";
// import SingleProductCard from "../Products/SingleProductCard";
// import RoutePaths from "../RoutePaths";

// import DetailsButton from "../Products/Buttons";


const LoginRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/guest/*" element={<Guest />} />
        <Route path="/login-user/*" element={<LoginUser />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/home-nav/*" element={<HomeNav />} />
        {/* <Route path="products/:all-products" element={<AllProducts />} /> */}
        {/* <Route path="components/:links-to-all" element={<LinksToAll />} /> */}
        {/* <Route
          path="/single-product-card"
          element={<SingleProductCard />}
        /> */}
        {/* <Route path="/route-paths" element={<RoutePaths />} /> */}
        
        {/* <Route path="/buttons" element={<DetailsButton />} /> */}
      </Routes>

    </div>
  );
};

export default LoginRoutes;
