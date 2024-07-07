import React from "react";
import WomanImg from "../../img/woman_hero.png";
import { Link } from "react-router-dom";
import './style.css'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title-container">
            <div className="hero-title-underline"></div>New Products
          </div>
          <h1 className="hero-title">
            AUTUMN SALE OFFERS <br />
            <span className="hero-highlight">NEW</span>
          </h1>
          <Link to={"/"} className="hero-link">
            Discover More
          </Link>
        </div>
        <div className="hero-image hero-image-lg">
          <img src={WomanImg} alt="Woman img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;