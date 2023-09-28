//App.jsx
import "./App.css";
import "./index.css";
// import "./tailwind.css";
import NoMatch from "./Components/NoMatch";

import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/Login/LandingPage";

import HomeNav from "./Components/Login/HomeNav";

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/landing-page">Landing</Link>
          <Link to="/home-nav">Home</Link>
        </nav>
        {/* <Link to="/guest">Guest</Link>
        <Link to="/login-user">Login</Link>
        <Link to="/register">Register</Link>  */}
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          <Route index element={<HomeNav />} />
            
            
            <Route path="home-nav/*" element={<HomeNav />} />

           
            <Route path="*" element={<NoMatch />} />
          </Route>
          
        </Routes>
      
    </>
  );
}

export default App;
