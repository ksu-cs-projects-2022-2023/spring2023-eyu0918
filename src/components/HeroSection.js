import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>SMITH SCHOLARSHIP HOUSE</h1>
      <p>Leadership - Scholarship - Fellowship</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <i class="fa-sharp fa-solid fa-circle-play" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
