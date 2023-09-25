//LandingPage.jsx
import HomeNav from "./HomeNav";
import "../CSS/LandingPage.css";
import { Routes, Route } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="title-landing">
      <div>HILTON </div> <b></b>
      <div>
        <span>CLOTHING</span>
      </div>
      <b>
        <p> </p>
      </b>
      <HomeNav />

      <Routes>
      <Route path="/home-nav" element={<HomeNav />} />
      <Route path="landing-page/*" element={<LandingPage />} />
      
      </Routes>
    </div>
  );
};

export default LandingPage;
