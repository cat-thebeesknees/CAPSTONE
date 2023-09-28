//LandingPage.jsx
import HomeNav from "./HomeNav";
import "../CSS/LandingPage.css";
import { Routes, Route, Outlet } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <div className="title-landing">
        <h1> HILTON </h1>
        <HomeNav />
      </div>

      <Routes>
        <Route index element={<HomeNav />} />
        <Route path="home-nav/*" element={<HomeNav />} />
        <Route path="landing-page/*" element={<LandingPage />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default LandingPage;
