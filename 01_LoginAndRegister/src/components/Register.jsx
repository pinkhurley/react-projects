import React, { useState } from "react";

const Register = ({ toggleForm }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("regggg");
  };

  return (
    <div className="register">
      <div className="u-title">
        <h1>Create your Account!</h1>
        <p>
          Red bean raw south, spring to send a few branches. May you gather
          more, it is the most acacia.
        </p>
      </div>
      <form className="f-register" onSubmit={handleSubmit}>
        <div className="f-name-box">
          <div className="f-item">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              value={userInfo.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="f-item">
            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              value={userInfo.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="f-item">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="f-item">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </div>
        <button className="register-btn">SIGN UP</button>
      </form>
      <span className="toggle-btn" onClick={() => toggleForm("login")}>
        LOG IN
      </span>
    </div>
  );
};

export default Register;
