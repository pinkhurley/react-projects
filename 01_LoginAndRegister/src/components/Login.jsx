import React, { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
import { BiSquare,BiCheckSquare } from "react-icons/bi";

const Login = ({ toggleForm }) => {
  const [checked, setChecked] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errorMes, setErrorMes] = useState({ isError: false, message: "" });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isEmpty = (inputs) => {
    const arr = Object.values(inputs).filter((el) => {
      if (el !== null && el !== "") {
        return true;
      }
    });

    return arr;
  };

  const showError = (isValid = false, message = "") => {
    setErrorMes({ isValid, message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showError(false, '')

    if (isEmpty(userInfo).length < 2) {
      showError(true, 'Email or password cannot be blank!')
    } else {
      login(userInfo)
      navigate("/")
    }

  };

  return (
    <div className="login">
      <div className="u-title">
        <h1>Welcome Back!</h1>
        <p>
          Red bean raw south, spring to send a few branches. May you gather
          more, it is the most acacia.
        </p>
      </div>
      <form className="f-login">
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
        <div className="other">
          <div className="remeber-box">
            <input
              type="checkbox"
              name="remeber"
              id="remeber"
              value={checked}
              onChange={() => setChecked(!checked)}
            />

            <label htmlFor="remeber">
              {checked ? (
                <BiCheckSquare className="checkbox u-checked" />
              ) : (
                <BiSquare className="checkbox" />
              )}
              Remeber Me
            </label>
          </div>
          <div className="forgetP">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        {errorMes.isError === false ? null : (
          <span className="m-error">{errorMes.message}</span>
        )}
        <button className="login-btn" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
      <span className="toggle-btn" onClick={() => toggleForm("register")}>
        SIGN UP
      </span>
    </div>
  );
};

export default Login;
