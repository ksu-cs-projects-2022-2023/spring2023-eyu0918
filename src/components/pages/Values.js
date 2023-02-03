import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

function Values() {
  return (
    <>
      <div className="values"> VALUES</div>

      <h1 className="values-header">Leadership</h1>
      <h2 className="values-info">
        Smith Scholars are provided with many opportunities to develop their
        leadership skills. Since Smith House is largely a self-governing entity,
        residents will have the prospect of taking part in the governance of the
        program. They may serve as the chairman of a house committee such as
        Community Service or Fundraising-each of which is dedicated to improving
        the program. They may also provide vision and direction to the house by
        being an executive officer such as President or House Manager. The
        leadership skills acquired during a student's time in the Smith
        Scholarship House will help develop him into a leader.
      </h2>

      <h1 className="values-header">Scholarship</h1>
      <h2 className="values-info">
        Smith Scholarship House encourages its members to maintain a high level
        of academic excellence by requiring residents to maintain a minimum
        grade point average while they are a part of the Smith House program.
        Furthermore, the house awards a Putnam Scholarship each year to the
        member who achieves the highest grade point average. The Scholarship
        Chairman and Committee are established to help students perform at the
        peak of their academic abilities.
      </h2>

      <h1 className="values-header">Fellowship</h1>
      <h2 className="values-info">
        Smith Scholarship House is dedicated to providing Smith Scholars with a
        sense of fellowship with one another and with the community around them.
        Members may come from a multitude of backgrounds, but they soon learn
        that the program must have unity to operate successfully.
      </h2>

      <img className="values-image" src="images/values-1.jpg" alt="Values 1" />
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/operations.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="OPERATIONS"
              path="/operations"
            />
            <CardItem
              src="images/activities.JPG"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="ACTIVITIES"
              path="/activities"
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

export default Values;
