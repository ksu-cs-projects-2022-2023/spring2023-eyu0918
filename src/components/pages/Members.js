import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useReadCypher } from "use-neo4j/dist/cypher";

function Members() {
  const [schoolYear, setSchoolYear] = useState("");

  const allMembersQuery = `MATCH (p:Person) RETURN p`;
  const { first, records } = useReadCypher(allMembersQuery);

  const handleChange = (event) => {
    setSchoolYear(event.target.value);
  };

  let allMembers;

  if (first === undefined || records === undefined) {
    return <div>LOADING...</div>;
  } else {
    allMembers = records.map((x) => x.get("p").properties);

    return (
      <>
        <h1 className="members">MEMBERS</h1>

        <div className="members-input-container">
          <FormControl fullWidth>
            <InputLabel id="year-select-label">School Year</InputLabel>
            <Select
              labelId="year-select-label"
              value={schoolYear}
              label="School Year"
              onChange={handleChange}
            >
              <MenuItem value={"2022-2023"}>2022-2023</MenuItem>
              <MenuItem value={"2023-2024"}>2023-2024</MenuItem>
              <MenuItem value={"2024-2025"}>2024-2025</MenuItem>
            </Select>
          </FormControl>
        </div>
        <h4 className="contact-us-info3">
          *Hover Over Each Image Below to Display Additional Information*
        </h4>
        <div className="members-image-wrapper">
          {allMembers.map((element) => {
            if (element === undefined) {
              return <div>LOADING...</div>;
            } else {
              return (
                <div className="members-container">
                  <img
                    src={element.imageSource}
                    alt={element.fullName}
                    className="members-image"
                  />
                  <div className="centered-text-special">
                    <h2>{element.fullName}</h2> <br />
                    <p>
                      {element.grade} <br />
                      {element.major} <br />
                      {element.position} <br />
                      {element.email} <br />
                    </p>
                    <a href={element.linkedIn} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <Footer />
      </>
    );
  }
}

export default Members;
