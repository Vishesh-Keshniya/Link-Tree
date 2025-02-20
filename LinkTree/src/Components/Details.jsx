import React, { useState } from "react";
import "./Details.css";

const Details = () => {
  const [selectedCategory, setSelectedCategory] = useState("Business");
  const categories = [
    "Business",
    "Creative",
    "Education",
    "Entertainment",
    "Fashion & Beauty",
    "Food & Beverage",
    "Government & Politics",
    "Health & Wellness",
    "Non-Profit",
    "Other",
    "Tech",
    "Travel & Tourism"
  ];

  return (
    <div className="container">
    
      <div className="left">
      <div className="logo"><img src="sparklogo.png"></img>SPARK</div>
        <div className="card">
          <h1>Tell us about yourself</h1>
          <p>For a personalized Spark experience</p>
          
          <input
            type="text"
            placeholder="Tell us your username"
            className="input-field"
          />

          <p>Select one category that best describes your Linktree:</p>
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-button ${selectedCategory === category ? "selected" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <button className="continue-button">
            Continue
          </button>
        </div>
      </div>
      <div className="right">
        <img src="wallpaper.png" alt="Background" className="background-image" />
      </div>
    </div>
  );
};

export default Details;
