import React, { useState } from "react";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {currentForm === "login" ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <Register toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
