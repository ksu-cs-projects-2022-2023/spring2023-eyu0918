import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

function Costs() {
  return (
    <>
      <div className="costs">COSTS</div>

      <h1 className="costs-header">Living Expenses</h1>
      <h2 className="costs-info">
        Living at Smith Scholarship House will be around $6,000 per YEAR for the
        2023-2024 school year - a significant saving over all other living
        options at K-State! Furthermore, this rate will be locked for the
        remainder of your years at Smith Scholarship House.
      </h2>
      <img className="costs-image" src="images/costs-1.jpg" alt="Costs 1" />
      <h2 className="costs-info">
        Dr. L Irene Putnam, who established the house in 1958 in memory of her
        brother, Maitland E. Smith, stipulated that Smith residents would be
        charged only for the actual costs of operation and maintenance of the
        house. The Smith Alumni Association, the organization that has run Smith
        since 1984, does not charge the residents its own administrative costs.
        It subsists on alumni donations and other fundraising efforts.
      </h2>
      <h2 className="costs-info">
        Smith Scholars pay only for their food, utilities, insurance on the
        building, employees' salaries, and programming funds. The only other
        charges above room and board payments are souvenirs of program
        activities and fines for damages. Computation of these charges and
        receipt of payments is handled by the House Treasurer, a Smith House
        employee. Newly purchased commercial washers and dryers are available to
        residents free of charge.
      </h2>

      <hr />

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/about.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="ABOUT"
              path="/about"
            />
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
              src="images/activities.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="ACTIVITIES"
              path="/activities"
            />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Costs;
