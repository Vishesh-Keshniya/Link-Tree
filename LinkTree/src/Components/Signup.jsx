import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup-container">
      {/* Left Section - Form */}
      <div className="signup-left">
        <div className="logo"><img src="sparklogo.png"></img> SPARK™</div>
        <h1>Sign up to your Spark</h1>
       <div className="mid-part"> <p className="create-account">
        <div>  Create an account</div> <button className="signupbtn1" onClick={() => navigate("/login")}>Sign in instead</button>
        </p>
        <form>
           <label>First Name</label>
          <input type="text" placeholder="" />
          <label>Last Name</label>
          <input type="text" placeholder="" />
          <label>Email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <label>Confirm Password</label>
          <input type="password" placeholder=" " />

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By creating an account, I agree to our{" "}
              <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit">Create an account</button>
        </form>

        </div>
        <p className="footer-text">
          This site is protected by reCAPTCHA and the{" "}
          <a href="#">Google Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="signup-right">
        <div className="image-overlay"></div>
        <img src="wallpaper.png" alt="Signup Art" />
      </div>
    </div>
  );
};

export default Signup;
