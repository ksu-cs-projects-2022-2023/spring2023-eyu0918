import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "@mui/material";
import { useReadCypher } from "use-neo4j/dist/cypher";

function RunAllMembersQuery(inputSchoolYear) {
  const allMembersQuery = `MATCH (p:Person) -[:MEMBER_OF]-> (y:Year {schoolYear: $schoolYear}) RETURN p`;
  const params = { schoolYear: inputSchoolYear };
  const { records } = useReadCypher(allMembersQuery, params);

  return records;
}

function RunExecutiveDirectorQuery(inputSchoolYear) {
  const execDirectorQuery = `MATCH (e:ED) -[:MEMBER_OF]-> (y:Year {schoolYear: $schoolYear}) RETURN e`;
  const params = { schoolYear: inputSchoolYear };
  const { first } = useReadCypher(execDirectorQuery, params);

  return first;
}

function Members() {
  let schoolYear = "2022-2023";

  let records = RunAllMembersQuery(schoolYear);
  let first = RunExecutiveDirectorQuery(schoolYear);

  let allMembers;
  let executiveDirector;
  // eslint-disable-next-line
  let allSeniors = new Array();
  // eslint-disable-next-line
  let allJuniors = new Array();
  // eslint-disable-next-line
  let allSophomores = new Array();
  // eslint-disable-next-line
  let allFreshmen = new Array();

  if (first === undefined || records === undefined) {
    return (
      <>
        <h1 className="members">MEMBERS</h1>
        <div className="loading-screen">
          <i class="fa-solid fa-spinner"></i>
          &nbsp;&nbsp;LOADING...
        </div>
        <Footer />
      </>
    );
  } else {
    executiveDirector = first.get("e").properties;
    allMembers = records.map((x) => x.get("p").properties);

    allMembers.forEach((element) => {
      if (element.grade === "Senior") allSeniors.push(element);
      else if (element.grade === "Junior") allJuniors.push(element);
      else if (element.grade === "Sophomore") allSophomores.push(element);
      else allFreshmen.push(element);
    });

    return (
      <>
        <h1 className="members">MEMBERS</h1>
        <h1 className="members-header">
          2022-2023 Smith Scholarship House Members
        </h1>
        <h4 className="contact-us-info3">
          *Hover Over Each Image Below to Display Additional Information*
        </h4>
        <h2 className="members-header2">Executive Director</h2>
        <div className="members-image-wrapper">
          <div className="members-container">
            <img
              src={executiveDirector.imageSource}
              alt={executiveDirector.fullName}
              className="members-image"
            />
            <div className="centered-text-members">
              <h2>{executiveDirector.fullName}</h2> <br /> <br />
              <h3>
                {executiveDirector.email} <hr className="members-line" />
              </h3>
              <h3>
                {executiveDirector.phone} <hr className="members-line" />
              </h3>
            </div>
          </div>
        </div>
        <h2 className="members-header2">Senior</h2>
        <div className="members-image-wrapper">
          {allSeniors.map((element) => {
            return (
              <div className="members-container">
                <img
                  src={element.imageSource}
                  alt={element.fullName}
                  className="members-image"
                />
                <div className="centered-text-members">
                  <h2>{element.fullName}</h2> <br /> <br />
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
                    <a href={element.linkedIn} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <hr className="members-line" />
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="members-header2">Junior</h2>
        <div className="members-image-wrapper">
          {allJuniors.map((element) => {
            return (
              <div className="members-container">
                <img
                  src={element.imageSource}
                  alt={element.fullName}
                  className="members-image"
                />
                <div className="centered-text-members">
                  <h2>{element.fullName}</h2> <br /> <br />
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
                    <a href={element.linkedIn} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <hr className="members-line" />
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="members-header2">Sophomore</h2>
        <div className="members-image-wrapper">
          {allSophomores.map((element) => {
            return (
              <div className="members-container">
                <img
                  src={element.imageSource}
                  alt={element.fullName}
                  className="members-image"
                />
                <div className="centered-text-members">
                  <h2>{element.fullName}</h2> <br /> <br />
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
                    <a href={element.linkedIn} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <hr className="members-line" />
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="members-header2">Freshman</h2>
        <div className="members-image-wrapper">
          {allFreshmen.map((element) => {
            return (
              <div className="members-container">
                <img
                  src={element.imageSource}
                  alt={element.fullName}
                  className="members-image"
                />
                <div className="centered-text-members">
                  <h2>{element.fullName}</h2> <br /> <br />
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
                    <a href={element.linkedIn} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <hr className="members-line" />
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <img
          src="images/2022-2023/COMPOSITE.jpg"
          alt="Composite"
          className="members-composite-picture"
        />
        <div className="members-button">
          <Button variant="contained">View Alumni Database</Button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Members;
