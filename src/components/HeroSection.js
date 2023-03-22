import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>SMITH SCHOLARSHIP HOUSE</h1>
      <p>Leadership - Scholarship - Fellowship</p>
      <div className="hero-btns">
        <Link to="/apply-today">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            APPLY TODAY
          </Button>
        </Link>

        <Link to="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <i class="fa-sharp fa-solid fa-circle-play" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
