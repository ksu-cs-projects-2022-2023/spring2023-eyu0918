import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useReadCypher } from "use-neo4j/dist/cypher";

function Members() {
  const [schoolYear, setSchoolYear] = useState("2022-2023");
  const [searchedName, setSearchedName] = useState("");
  const [searchedGrade, setSearchedGrade] = useState("");
  const [searchedMajor, setSearchedMajor] = useState("");
  const [searchedPosition, setSearchedPosition] = useState("");

  const allMembersQuery = `MATCH (p:Person) -[:MEMBER_OF]-> (y:Year {schoolYear: $schoolYear}) RETURN p`;
  const params = { schoolYear: schoolYear };
  const { first, records } = useReadCypher(allMembersQuery, params);

  const handleChange = (event) => {
    setSchoolYear(event.target.value);
  };

  const handleReset = (event) => {
    setSearchedName("");
    setSearchedGrade("");
    setSearchedMajor("");
    setSearchedPosition("");
  };

  let allMembers;

  if (first === undefined || records === undefined) {
    return <div>LOADING...</div>;
  } else {
    allMembers = records.map((x) => x.get("p").properties);
    //console.log(schoolYear);
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
        <div className="members-search-container">
          <TextField
            label="Name"
            variant="filled"
            value={searchedName}
            onChange={(e) => setSearchedName(e.target.value)}
          />
          <TextField
            label="Grade"
            variant="filled"
            value={searchedGrade}
            onChange={(e) => setSearchedGrade(e.target.value)}
          />
          <TextField
            label="Major"
            variant="filled"
            value={searchedMajor}
            onChange={(e) => setSearchedMajor(e.target.value)}
          />
          <TextField
            label="Position"
            variant="filled"
            value={searchedPosition}
            onChange={(e) => setSearchedPosition(e.target.value)}
          />
          <Button variant="contained" size="large">
            SEARCH
          </Button>
          <Button variant="outlined" size="large" onClick={handleReset}>
            RESET
          </Button>
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
                  <div className="centered-text-members">
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
                      <a
                        href={element.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                      <hr className="members-line" />
                    </h3>
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
