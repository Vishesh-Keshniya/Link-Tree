import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container-login">
      {/* Left Section - Form */}
      <div className="signup-left-login">
        <div className="logo-login">
          <img src="sparklogo.png" alt="Spark Logo" /> SPARK™
        </div>
        <h1>Sign in to your Spark</h1>

        <div className="mid-part-login">
          <form>
            <input type="text" placeholder="Spark/Username" />

            {/* Password Input with Eye Button */}
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <img src="hide.png"></img> : <img src="hide.png"></img>}
              </button>
            </div>

            <button type="submit" className="login">Log in</button>
          </form>
        </div>

        <div>
          <p className="footer-text-login">
            <a href="#" className="forget">Forgot password?</a>
          </p>
          <p className="bottom">
            Don't have an account? <button className="sign" onClick={() => navigate("/signup")}>Sign up</button>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="signup-right-login">
        <div className="image-overlay-login"></div>
        <img src="wallpaper.png" alt="Signup Art" />
      </div>
    </div>
  );
};

export default Login;
