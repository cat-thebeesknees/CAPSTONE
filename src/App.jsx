//App.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Landiing from "./Components/Landing";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Guest from "./Components/Guest";
import NoMatch from "./Components/NoMatch";
import "./App.css";
import "./index.css";
// import "./tailwind.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landiing />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Guest" element={<Guest />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
