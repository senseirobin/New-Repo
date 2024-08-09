import React from "react";
import bossImage from '../../assets/boss.png'

function Hero() {
  return (
    <div className="home">
      <div className="home-img">
        <img src={bossImage} alt="" />
      </div>
      <div className="home-content">
        <h1>
          Hi, It's <span>Robin</span>
        </h1>
        <h3 className="typing-text">
          I'm a <span></span>
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore
          dolores esse. Odit similique doloribus tenetur doloremque, sunt
          commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam
          quaerat neque asperiores ea.
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a href="#" className="btn">
          Hire me
        </a>
      </div>
    </div>
  );
}

export default Hero;
