import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Learn More About Smith Scholarship House!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/about.jpg"
              text="Learn more about Smith Scholarship House, including our Values, Operations, Activities, and Costs."
              label="ABOUT"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/members.jpeg"
              text="Meet the current members of the house."
              label="MEMBERS"
              path="/Members"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/contact-us.JPG"
              text="Have questions? Feel free to reach out."
              label="CONTACT US"
              path="/contact-us"
            />
            <CardItem
              src="images/visit.JPG"
              text="Schedule a proper tour of the house and experience the power of the brotherhood."
              label="SCHEDULE A VISIT"
              path="/schedule-a-visit"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
