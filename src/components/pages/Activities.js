import React from "react";
import "../../App.css";
import Footer from "../Footer";
import CardItem from "../CardItem";

function Activities() {
  return (
    <>
      <div className="activities">ACTIVITIES</div>

      <h1 className="activities-header">Social</h1>
      <h2 className="activities-info">
        Communicating and interacting with people is a valuable skill that is
        developed at Smith Scholarship House. The social chairman and the social
        committee plan and coordinate several functions throughout the year to
        get house members involved with the various women's organizations
        (Smurthwaite and Clovia Scholarship Houses), as well as the rest of
        campus.
      </h2>
      <h2 className="operations-info">
        These functions range from exchange dinners and Christmas parties to
        movie marathon parties, dances, and an annual formal. Smith House is a
        DRY house, and thus no alcohol or containers are allowed on the
        premises. Smith House also has a No Tobacco policy.
      </h2>
      <h2 className="operations-info">
        The parents can also get involved with the Family Weekend events held at
        the house, and the men also have a chance to attend Christmas Tea in the
        fall and the Smith-Smurthwaite Formal in the spring.
      </h2>
      <img
        className="activities-image"
        src="images/dance.jpg"
        alt="Ballroom Dancing"
      />

      <h1 className="activities-header">Intramural</h1>
      <h2 className="activities-info">
        Smith Scholarship House has a long-standing tradition of excellence in
        intramural athletics. Smith House participates in team events such as
        football, basketball, volleyball, and softball, as well as many other
        individual events. Smith House has taken the All-University Independent
        Intramural Title for most cumulative points in 1987-88, 1988-89,
        1992-93, 1993-94, 2006-07, and 2011-12. Smith men regularly head out to
        the Recreation Complex, located three blocks north of campus, to indulge
        in basketball, racquetball, or even swimming at the Natatorium. For
        stress relief, many Smith Scholars enjoy jogging around town, playing
        Ultimate Frisbee, or throwing a football or baseball around.
      </h2>
      <h2 className="operations-info">
        The entry fees for intramural activities are included each resident's
        rent payment. The Intramural Chairman informs the Smith House teams of
        upcoming deadlines at the Peters Recreation Center, posts team schedules
        and standings, and orders the annual intramural t-shirts. He also has a
        delegated committee that sponsors all sporting activities during the
        school year.
      </h2>
      <img
        className="activities-image"
        src="images/frisbee.jpg"
        alt="frisbee"
      />

      <h1 className="activities-header">University/Community Involvement</h1>
      <h2 className="activities-info">
        A Smith Scholar who restricts his activities to what happens in the
        house will have a very limited view of the world. All Smith Scholars are
        encouraged to get involved in some campus organization, community
        project, or charity.Our University Representative keeps residents
        informed of happenings on campus, around Manhattan, and in Student
        Government.
      </h2>
      <h2 className="operations-info">
        The Community Service Chairman, with the aid of his committee, plans and
        carries out at least one community service project each semester.At
        Halloween, Smith House residents participate in the Smurthwaite/Clovia
        Halloween Auction, where they are made costumes by the girls and then go
        trick-or-treating to collect non-perishable food items for the Flint
        Hills Breadbasket.
      </h2>
      <img
        className="activities-image-special"
        src="images/Halloween.jpg"
        alt="Halloween"
      />

      <h1 className="activities-header">Cultural</h1>
      <h2 className="activities-info">
        As a Smith Scholar, you'll have opportunities to participate in the many
        concerts, lectures, and theater productions regularly presented on
        campus. You'll have access to free season tickets to events in Nichols
        Theater and select tickets to McCain Auditorium, Purple Masque Theater,
        and the Little Theater. Past events have included Guys and Dolls,
        Fiddler on the Roof, Kansas, Gallic Storm, and Cantus. In 1985, Mrs. Ila
        King donated $5000 to establish a trust fund for Smith Scholarship
        House. The interest from the fund is used to help purchase season
        tickets to cultural events.
      </h2>
      <h2 className="operations-info">
        Throughout the year, distinguished guests are invited to attend dinner
        and give informal presentations on various topics. Deans of various
        colleges, cultural experts, and university/community leaders are some of
        the guests you could meet.
      </h2>
      <img className="activities-image" src="images/museum.jpg" alt="museum" />

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
