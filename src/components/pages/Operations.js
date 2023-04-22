import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

function Operations() {
  return (
    <>
      <div className="operations">OPERATIONS</div>

      <h1 className="operations-header">Leadership</h1>
      <h2 className="operations-info">
        Smith Scholarship House operates under a cooperative system. Residents
        are expected to share cooking, housekeeping, and governing duties. Smith
        Scholars strive for unity by helping each other with house duties,
        homework, house events, and university/community activities. The House
        Manager and Kitchen Manager, part-time employees of Smith House, will
        assign duties to fit each resident's schedule and part-time jobs. Your
        duties will total only five to seven hours per week and may include
        cooking and/or cleaning tasks.
      </h2>
      <h2 className="operations-info">
        The operation of the house is mostly the responsibility of its
        residents. We have voluntary committees such as the Social Committee,
        Community Service Committee, and the Fundraising Committee who each work
        to improve the Smith Scholars Program. Smith House has an Executive
        Director, Anneliese Snyder, who lives in an apartment on the ground
        floor and provides counseling and guidance for smooth operation of the
        house. The executive director and managers are hired by the Smith Alumni
        Association, which has governed the house since 1984.
      </h2>
      <img
        className="operations-image-special"
        src="images/rizzler.jpg"
        alt="The Rizzler"
      />

      <h1 className="operations-header">Meals</h1>
      <h2 className="operations-info">
        A professional dietician is hired by the Smith House Alumni Association
        to plan meals and order food. The Kitchen Manager, a Smith House
        part-time employee, is also hired to ensure that meals are prepared and
        served effectively. The residents, in crews of 2-4, prepare and serve
        the meals.
      </h2>
      <h2 className="operations-info">
        Smith House residents eat well and learn first-hand about cooking, a
        necessary skill for life after college. Three meals are served per day
        throughout the week, and lunch is served on the weekends. Smith House is
        the only group organization who serves a hot breakfast each weekday.
        Residents can go out for dinner on Saturday and Sunday evenings or can
        prepare something in the kitchen on their own - a benefit not found in
        the residence halls. The kitchen is equipped with a microwave oven to
        allow residents to warm up late plates saved for them when they can't
        eat at scheduled meal times.
      </h2>
      <img
        className="operations-image"
        src="images/cooking.jpg"
        alt="Let Him Cook"
      />

      <h1 className="operations-header">Study Rooms</h1>
      <h2 className="operations-info">
        Smith House has ten study rooms throughout the house, holding two to
        five men each. Study Rooms are where Smith Scholars keep their personal
        belongings, study, watch television, etc. Each room is supplied with
        Ethernet (100Mbps) and cable television jacks.
      </h2>
      <h2 className="operations-info">
        Room assignments are made each semester by the President and House
        Manager, and residents are allowed to request roommates and/or room
        locations. Residents are also provided the opportunity to request a room
        change midway through the academic year. All the men sleep in bunks in
        the third floor sleeping dorm, which had heating installed in Fall 2006.
      </h2>

      <h1 className="operations-header">Technology</h1>
      <h2 className="operations-info">
        Smith House has its own WiFi that is included in the cost of living,
        with each study room containing 100Mbps Ethernet jacks for all Smith
        Scholars. The house also has an office-sized color printer that each
        resident can use free of charge as well as a wall projector for cable
        TV. The Network Administrator(s) maintain the house computers and
        internet connections, while also being available to residents who have
        computer related issues.
      </h2>

      <hr />

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/about.jpg"
              text="Back to the About Page."
              label="ABOUT"
              path="/about"
            />
            <CardItem
              src="images/values.jpg"
              text="Understand the Three Core Values of Smith House."
              label="VALUES"
              path="/values"
            />
            <CardItem
              src="images/activities.JPG"
              text="Enjoy the Extracurricular Activities whith Peers."
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

export default Operations;
