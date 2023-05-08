import React, { useContext } from "react";
import { AuthContext } from "./authContext";
import { Link,useNavigate } from "react-router-dom";

const Home = () => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleSubmit = () => {
    logout()
    navigate('/login')
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleSubmit}>Log out</button>
      
      
    </div>
  );
};

export default Home;
