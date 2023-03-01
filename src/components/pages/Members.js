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

  const query = `MATCH (p:Person ) RETURN p`;
  const { first } = useReadCypher(query);

  const handleChange = (event) => {
    setSchoolYear(event.target.value);
  };

  let value;

  if (first === undefined) {
    return <div>LOADING...</div>;
  } else {
    value = first.get("p");

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
        <div className="members-container">
          <img
            src={value.properties.imageSource}
            alt={value.properties.fullName}
          />
          <div className="centered-text">
            <p>
              {value.properties.fullName} <br />
              {value.properties.major} <br />
              Freshman <br />
              {value.properties.position} <br />
            </p>
            <a
              href={value.properties.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>{schoolYear}</div>
        <div>{value.properties.firstName}</div>
        <Footer />
      </>
    );
  }
}

export default Members;
