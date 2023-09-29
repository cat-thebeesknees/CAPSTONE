//LandingPage.jsx
import HomeNav from "./Components/Login/HomeNav";
import { Routes, Route, Outlet } from "react-router-dom";
import Admin from "./Components/Login/Admin";
import "./Components/CSS/LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="title-landing">
        <h1> HILTON </h1>
        <nav>
          <Admin />
        </nav>
        <HomeNav />
      </div>

      <Routes>
        <Route path="landing-page/*" element={<LandingPage />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
};

export default LandingPage;
