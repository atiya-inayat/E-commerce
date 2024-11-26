import React from "react";
import "./Hero.css";
import HandIcon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h6>New arrivals only</h6>

<h5>new <span className="hero-hand-icon"><img src={HandIcon} alt="" /></span></h5>


<div className="text-container" >
    <h6>collections</h6>
    <h6>for everyone</h6>
</div>

<button className="hero-latest-btn">latest collection</button>

      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
