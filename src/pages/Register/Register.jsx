import React, { useState } from "react";
import "../../style/signIn.css";
import tt from "../../assets/images/icon/tt2.png";
import fb from "../../assets/images/icon/fb2.png";
import insta from "../../assets/images/icon/insta2.png";
import user from "../../assets/images/icon/user.png";
import password from "../../assets/images/icon/password.png";
import google from "../../assets/images/icon/google.png";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true); // Track form toggle

  return (
    <div className="register">
      <div className="form-box">
        <div className="button-box flex justify-center p-4 gap-1 ">
          <button
            type="button"
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            type="button "
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <br />
        <div className="social-icons flex justify-center ">
          <img src={fb} alt="Facebook" />
          <img src={insta} alt="Instagram" />
          <img src={tt} alt="Twitter" />
        </div>

        {/* Conditionally Render Form */}
        {isLogin ? (
          // Login Form
          <form className="input-group flex flex-col justify-center items-center">
            <div className="input-with-icon flex items-center">
              <img src={user} alt="User Icon" className="icon" />
              <input
                type="text"
                className="input-field"
                placeholder="Username "
                required
              />
            </div>
            <div className="input-with-icon flex items-center">
              <img src={password} alt="Password Icon" className="icon" />
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" className="check-box" /> Remember Password
            </div>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>
        ) : (
          // Register Form
          <form className="input-group">
            <div className="input-with-icon flex items-center ">
              <img src={user} alt="User Icon" className="icon" />
              <input
                type="text"
                className="input-field"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="input-with-icon flex items-center">
              <img src={password} alt="Password Icon" className="icon" />
              <input
                type="email"
                className="input-field"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="input-with-icon flex items-center">
              <img src={password} alt="Password Icon" className="icon" />
              <input
                type="password"
                className="input-field"
                placeholder="Create Password"
                required
              />
            </div>
            <div className="input-with-icon flex items-center ">
              <img src={password} alt="Password Icon" className="icon" />
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="terms flex items-center ">
              <input type="checkbox" className="check-box" required /> I agree
              to the Terms & Conditions
            </div>
            <div className="flex justify-center">
              <button type="submit" className="submit-btn reg-btn">
                Register
              </button>
            </div>
          </form>
        )}
        <br />
      </div>
    </div>
  );
};

export default Register;
