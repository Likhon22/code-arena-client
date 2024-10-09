import React, { useState } from "react";
import "../../style/signIn.css";
import tt from "../../assets/images/icon/tt2.png";
import fb from "../../assets/images/icon/fb2.png";
import insta from "../../assets/images/icon/insta2.png";
import user from "../../assets/images/icon/user.png";
import password from "../../assets/images/icon/password.png";
import google from "../../assets/images/icon/google.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/images/icon/profile.png";
import { createUser } from "../../api/user";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const { register, update, login } = useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const profile = profileImg;
    const password = form.password.value;
    if (!isChecked) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    const userInfo = {
      name,
      email,
      password,
      profile,
    };
    console.log(userInfo);
    try {
      const data = await register(email, password);
      const updateProfile = await update(name, profile);

      await createUser(userInfo);
      console.log(data);

      navigate("/");
      toast.success("Registered Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await login(email, password);
    toast.success("Logged In Successfully");
    navigate("/");
  };

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
          <form
            className="input-group flex flex-col justify-center items-center"
            onSubmit={handleLogin}
          >
            <div className="input-with-icon flex items-center">
              <img src={user} alt="User Icon" className="icon" />
              <input
                type="text"
                className="input-field"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="input-with-icon flex items-center">
              <img src={password} alt="Password Icon" className="icon" />
              <input
                type="password"
                className="input-field"
                name="password"
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
          <form className="input-group" onSubmit={handleRegister}>
            <div className="input-with-icon flex items-center ">
              <img src={user} alt="User Icon" className="icon" />
              <input
                type="text"
                className="input-field"
                placeholder="Full Name"
                name="name"
                required
              />
            </div>
            <div className="input-with-icon flex items-center">
              <img src={password} alt="Password Icon" className="icon" />
              <input
                type="email"
                className="input-field"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="input-with-icon flex items-center">
              <img src={password} alt="Password Icon" className="icon" />
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Create Password"
                required
              />
            </div>

            <div className="terms flex items-center ">
              <input
                onChange={() => setIsChecked(!isChecked)}
                type="checkbox"
                className="check-box"
                required
              />{" "}
              I agree to the Terms & Conditions
            </div>
            <div className="flex justify-center ">
              <button type="submit" className="submit-btn  bg-[#1e3d59]">
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
