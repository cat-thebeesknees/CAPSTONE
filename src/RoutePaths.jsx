//RoutePaths.jsx
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomeNav from "./Components/Login/HomeNav";
import Guest from "./Components/Login/Guest";
import LoginUser from "./Components/Login/LoginUser";
import Register from "./Components/Login/Register";
import Admin from "./Components/Login/Admin";
import App from "./App";
const RoutePaths = () => {
  return (
    <div className="router-paths">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="home/*" element={<HomeNav />}>
            <Route path="guest" element={<Guest />} />
            <Route path="login" element={<LoginUser />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route index element={<Admin />} />
      </Routes>
    </div>
  );
};

export default RoutePaths;
