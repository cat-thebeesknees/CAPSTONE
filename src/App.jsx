//App.jsx

import NoMatch from "./Components/NoMatch";
import { Routes, Route, Router } from "react-router-dom";
import LandingPage from "./Components/Login/LandingPage";
import HomeNav from "./Components/Login/HomeNav";
import Admin from "./Components/Login/Admin";
import LoginUser from "./Components/Login/LoginUser";
import Guest from "./Components/Login/Guest";
import Profile from "./Components/Login/Profile";
import Register from "./Components/Login/Register";
import "./App.css";
import "./index.css";
import "./tailwind.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<HomeNav />}>
          <Route path="admin/*" element={<Admin />} />
          <Route path="login-user/*" element={<LoginUser />} />
          <Route path="guest/*" element={<Guest />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="register/*" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
