import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "../../App.css";
import Footer from "../Footer";
import { useReadCypher } from "use-neo4j/dist/cypher";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const columns = [
  { field: "fullName", headerName: "Full Name", width: 200 },
  { field: "major", headerName: "Major", width: 325 },
  { field: "grade", headerName: "Grade", width: 150 },
  { field: "phone", headerName: "Phone Number", width: 200 },
  { field: "currentYear", headerName: "School Year", width: 150 },
  { field: "linkedIn", headerName: "LinkedIn", width: 350 },
];

function AlumniDatabase() {
  let Rows = [];
  let idNum = 0;

  const allMembersQuery = `MATCH (p:Person) RETURN p`;
  const { records } = useReadCypher(allMembersQuery);

  let allMembers;

  if (records === undefined) {
    return (
      <>
        <div className="loading-screen">
          <i class="fa-solid fa-spinner"></i>
          &nbsp;&nbsp;LOADING...
        </div>
        <Footer />
      </>
    );
  } else {
    allMembers = records.map((x) => x.get("p").properties);

    allMembers.forEach((element) => {
      idNum = idNum + 1;

      Rows.push({
        id: idNum,
        fullName: element.fullName,
        major: element.major,
        grade: element.grade,
        phone: element.phone,
        currentYear: element.currentYear,
        linkedIn: element.linkedIn,
      });
    });

    return (
      <>
        <div className="centered-datagrid">
          <Box
            sx={{
              height: 880,
              width: "90%",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <DataGrid
              rows={Rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 15,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 15, 20]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
        <div className="alumni-database-button">
          <Button variant="contained">
            <i class="fa-solid fa-angles-left fa-back-button"></i>
            <Link to="/members" className="clean-link">
              Back
            </Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
}

export default AlumniDatabase;
