import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Think You Got What It Takes to Become a Smithie?
        </p>
        <p className="footer-subscription-text">
          Apply Today to Begin a Brand New Adventure
        </p>
        <div className="apply-button">
          <Button buttonSize="btn--outline">Apply Today</Button>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Values</Link>
            <Link to="/">Operations</Link>
            <Link to="/">Activities</Link>
            <Link to="/">Costs</Link>
          </div>
          <div class="footer-link-items">
            <h2>Documents</h2>
            <Link to="/">Constitution</Link>
            <Link to="/">By-laws</Link>
            <Link to="/">Application</Link>
            <Link to="/">Brochure</Link>
          </div>
          <div class="footer-link-items">
            <h2>Stay Connected</h2>
            <Link to="/">Contact Us</Link>
            <Link to="/">Official K-State Page</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Location</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="smith-logo">
              SMITH <i class="fa-solid fa-house-user" />
            </Link>
          </div>
          <small className="website-rights">
            Maitland E. Smith Scholarship House © 2020
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
