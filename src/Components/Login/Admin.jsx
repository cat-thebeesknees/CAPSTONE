import { Routes, Route, Outlet } from "react-router-dom";
import { GetAllUsers } from "../User/GetAllUsers";
const Admin = () => {
  return (
    <>
      <div>
        Admin
        <GetAllUsers />
      </div>
      <Routes>
        <Route index element={<Admin />} />
        <Route path="admin/*" element={<Admin />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default Admin;
