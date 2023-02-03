import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

function Activities() {
  return (
    <>
      <div className="activities">AVTIVITIES</div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/values.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="VALUES"
              path="/values"
            />
            <CardItem
              src="images/operations.JPG"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="OPERATIONS"
              path="/operations"
            />
            <CardItem
              src="images/costs.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
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

export default Activities;
