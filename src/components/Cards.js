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
              label="About"
              path="/about"
            />
            <CardItem
              src="images/members.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Members"
              path="/Members"
            />
            <CardItem
              src="images/images-home.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Apply Today"
              path="/apply-now"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
