import AllProducts from "../Products/AllProducts"
import LandingPage from "./LandingPage"
import { GetAllUsers } from "../User/GetAllUsers"
import { Routes, Route } from "react-router-dom"

const Profile = () => {
  return (
    <div>Profile
    <AllProducts />
     
    <GetAllUsers />


    <Routes>
        <Route path="profile/*" element={<Profile />} />
        <Route path="products/:all-products" element={<AllProducts />} />
        <Route path="login/:landing-page" element={<LandingPage />} />
      </Routes>
</div>
  )
}

export default Profile