//GetAllUsers.jsx

import { useState, useEffect } from "react";
import { usersAll } from "../../API/API";
import GetSingleUser from "./GetSingleUser";
import { Routes, Route, useNavigate } from "react-router-dom";
export const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await usersAll.all();
      setUsers(fetchedUsers);
      console.log(fetchedUsers);
    };
    getUsers();
  }, []);

  const handleUserClick = (userId) => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserId(data))
      
      .catch((error) =>
      
        console.error("Error fetching product details:", error)
      );
      navigate("user/:get-single-user");
  };

  return (
    <div>
      <ul className="all-users-data">
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            

            <p>{user.name.firstname} {user.name.lastname}</p>

           </li>
        ))}
      </ul>
      <GetSingleUser userId={userId} />
      <Routes>
        <Route
          path="get-single-user"
          element={<GetSingleUser userId={userId} />}
        />

        <Route path="get-all-users/*" element={<GetAllUsers />} />
      </Routes>
    </div>
  );
};
