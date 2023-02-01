import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

function About() {
  return (
    <>
      <div className="about">ABOUT</div>
      <h2>
        Dr. Irene Putnam founded Smith Scholarship House in 1958 in memory of
        her late brother, Maitland E. Smith. The house, located three blocks
        south of the K-State campus, provides an affordable, self-sustaining
        cooperative living environment for male college students. Smith House
        has a self-sustaining, cooperative living environment. Each house member
        contributes to the organization through a weekly set of resposibilties.
      </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/values.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="VALUES"
              path="/about"
            />
            <CardItem
              src="images/operations.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="OPERATIONS"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/activities.JPG"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="ACTIVITIES"
              path="/about"
            />
            <CardItem
              src="images/costs.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="COSTS"
              path="/about"
            />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
