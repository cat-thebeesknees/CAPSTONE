//App.jsx
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import RoutePaths from "./RoutePaths";
import "./index.css";
// import "./tailwind.css";

function App() {
  return (
    <div>
      <RoutePaths />

      <Routes>
        <Route path="route" element={<RoutePaths />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
