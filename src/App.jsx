//App.jsx
import "./App.css";
import "./index.css";
// import "./tailwind.css";
// import RoutePaths from "./Components/RoutePaths"
import LoginRoutes from "./Components/Login/LoginRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
       <LoginRoutes />

       <Routes>
       <Route path="login-routes/*" element={<LoginRoutes />} />
       </Routes>
    </div>
  );
}

export default App;
