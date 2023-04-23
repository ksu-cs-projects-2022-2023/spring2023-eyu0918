import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

function About() {
  return (
    <>
      <div className="about">ABOUT</div>
      <h2 className="about-info">
        Dr. Irene Putnam founded Smith Scholarship House in 1958 in memory of
        her late brother, Maitland E. Smith. The house, located three blocks
        south of the K-State campus, provides an affordable living environment
        for male college students. Smith House has a self-sustaining,
        cooperative living environment. Each house member contributes to the
        organization through a weekly set of responsibilties.
      </h2>
      <img
        className="about-image"
        src="images/smith-logo.jpg"
        alt="Smith Logo"
      />
      <h2 className="about-info">
        The crest of Smith Scholarship House displays our core values:
        Leadership, Scholarship, and Fellowship.
      </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/values.jpg"
              text="Understand the Three Core Values of Smith House."
              label="VALUES"
              path="/values"
            />
            <CardItem
              src="images/operations.jpg"
              text="Find Out the House's Daily Operations."
              label="OPERATIONS"
              path="/operations"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/activities.JPG"
              text="Enjoy the Extracurricular Activities with Peers."
              label="ACTIVITIES"
              path="/activities"
            />
            <CardItem
              src="images/costs.jpg"
              text="Learn More About the Affordability of Cooperative Living."
              label="COSTS"
              path="/costs"
            />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
