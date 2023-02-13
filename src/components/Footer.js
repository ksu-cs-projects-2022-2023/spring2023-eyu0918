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
            <Link to="/values">Values</Link>
            <Link to="/operations">Operations</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/costs">Costs</Link>
          </div>
          <div class="footer-link-items">
            <h2>Documents</h2>
            <Link
              to="https://www.smithscholarshiphouse.org/_files/ugd/4ecb5a_146a7d282a004de6bad2c7e54e806865.pdf"
              target="_blank"
            >
              Constitution
            </Link>
            <Link
              to="https://www.smithscholarshiphouse.org/_files/ugd/4ecb5a_282ee7f46ae04b3b9541aec5142252eb.pdf"
              target="_blank"
            >
              By-laws
            </Link>
            <Link
              to="https://www.k-state.edu/smithhouse/docs/Smith%20app.pdf"
              target="_blank"
            >
              Application
            </Link>
            <Link to="/">Brochure</Link>
          </div>
          <div class="footer-link-items">
            <h2>Stay Connected</h2>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="https://www.k-state.edu/smithhouse/" target="_blank">
              Official K-State Page
            </Link>
            <Link
              to="https://www.google.com/maps/place/Smith+Scholarship+House/@39.1829263,-96.5856782,17z/data=!3m1!4b1!4m6!3m5!1s0x87bdcd869fbdbb81:0xefeac6391f781beb!8m2!3d39.1829222!4d-96.5834842!16s%2Fg%2F1v1kqct_"
              target="_blank"
            >
              Location
            </Link>
            <Link
              to="https://housing.k-state.edu/living-options/smurthwaite/"
              target="_blank"
            >
              Smurthwaite
            </Link>
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
              className="social-icon-link instagram"
              to="https://www.instagram.com/ksusmithhouse/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/smithhousekstate"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>

            <Link
              className="social-icon-link youtube"
              to="https://www.youtube.com/@BenBenSmith"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="https://twitter.com/ksusmithhouse"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="https://www.linkedin.com/in/eric-yu-346762196/"
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
