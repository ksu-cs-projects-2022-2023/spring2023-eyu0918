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
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="ABOUT"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/members.jpeg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="MEMBERS"
              path="/Members"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/contact-us.JPG"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="CONTACT US"
              path="/Members"
            />
            <CardItem
              src="images/2.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="SCHEDULE A VISIT"
              path="/apply-today"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
