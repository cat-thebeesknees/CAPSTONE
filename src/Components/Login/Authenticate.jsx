//Authenticate.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";


export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    
        try {
          const headers = {
            "Content-Type": "application/json",
          };
    
          if (token) {
            headers["Authorization"] = `Bearer ${token.trim()}`;
          }
    
   
      fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "johnd",
                password: "m38rmF$",
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

           
      setSuccessMessage('success');
      
      
      

} catch (error) {
    setError("Error while authenticating token.");
    console.error("Error authenticating token:", error);
  }
}
    
  

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button className="authenticateButton" onClick={handleClick}>
        Authenticate
      </button>
      <Routes>
        <Route path="authenticate/*" element={<Authenticate />} />
        
      </Routes>
    </div>
  );
}

Authenticate.propTypes = {
  token: PropTypes.string,
};

Authenticate.defaultProps = {
  token: null,
};