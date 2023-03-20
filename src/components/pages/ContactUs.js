import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { useReadCypher } from "use-neo4j/dist/cypher";

function ContactUs() {
  const currentSchoolYear = "2022-2023";

  const recruitingAndPresidentQuery = `MATCH (p:Person) -[:MEMBER_OF]-> (y:Year {schoolYear: $schoolYear}) WHERE p.position = "Recruiting Chair" OR p.position = "President" RETURN p`;
  const execDirectorQuery = `MATCH (e:ED) -[:MEMBER_OF]-> (y:Year {schoolYear: $schoolYear}) RETURN e`;
  const params = { schoolYear: currentSchoolYear };

  const { records } = useReadCypher(recruitingAndPresidentQuery, params);
  const { first } = useReadCypher(execDirectorQuery, params);

  let recruitingAndPresident;
  let executiveDirector;

  if (first === undefined || records === undefined) {
    return <div>LOADING...</div>;
  } else {
    executiveDirector = first.get("e").properties;
    recruitingAndPresident = records.map((x) => x.get("p").properties);
    return (
      <>
        <div className="contact-us">CONTACT US</div>
        <h2 className="contact-us-info">
          Are you interested in applying to Smith Scholarship House? <br />
          Are you a Smith House Alum and want to learn how the house has changed
          over time? <br />
          Do you have any questions that you would like to ask us? <br />
          Feel free to contact us using any of the information given below.
        </h2>
        <p className="contact-us-info2">
          <b>House Phone:</b> (785)-537-0042 <br />
          <b>House Email Address:</b> SmithScholarshipHouseKSU@gmail.com <br />
          <b>House Address:</b> 331 N M.L.K. Jr. Dr, Manhattan, KS 66502
        </p>
        <h4 className="contact-us-info3">
          *Hover Over Each Image Below to Display Additional Information*
        </h4>

        <div className="contact-us-image-wrapper">
          {recruitingAndPresident.map((element) => {
            if (element === undefined) {
              return <div>LOADING...</div>;
            } else {
              return (
                <div className="contact-us-container">
                  <img
                    src={element.imageSource}
                    alt={element.fullName}
                    className="contact-us-image"
                  />
                  <div className="centered-text-contact-us">
                    <h2>{element.fullName}</h2> <br /> <br />
                    <h3>
                      {element.grade} <hr className="members-line" />
                    </h3>
                    <h3>
                      {element.major} <hr className="members-line" />
                    </h3>
                    <h3>
                      {element.position} <hr className="members-line" />
                    </h3>
                    <h3>
                      {element.email} <hr className="members-line" />
                    </h3>
                    <h3>
                      {element.phone} <hr className="members-line" />
                    </h3>
                  </div>
                </div>
              );
            }
          })}
          <div className="contact-us-container">
            <img
              src={executiveDirector.imageSource}
              alt={executiveDirector.fullName}
              className="contact-us-image"
            />
            <div className="centered-text-contact-us">
              <h2>{executiveDirector.fullName}</h2> <br /> <br />
              <h3>
                {executiveDirector.position} <hr className="members-line" />
              </h3>
              <h3>
                {executiveDirector.email} <hr className="members-line" />
              </h3>
              <h3>
                {executiveDirector.phone} <hr className="members-line" />
              </h3>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
