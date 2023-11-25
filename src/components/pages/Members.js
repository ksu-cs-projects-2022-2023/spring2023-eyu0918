import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "@mui/material";
import { useReadCypher } from "use-neo4j/dist/cypher";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const housePositions = [
  "President",
  "Vice-President",
  "Mediation Board",
  "House Manager",
  "Kitchen Manager",
  "Treasurer",
  "Recruiting Chair",
  "Secretary",
  "Social Chair",
  "Intramural & Health Chair",
  "University Representative",
  "Scholarship Chair",
  "Alumni Relations Chair",
  "Cultural Chair",
  "Network Administrator",
  "Fundraising Chair",
  "Vocational Chair",
  "Historian",
];

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

  //const [schoolYear, setSchoolYear] = useState("2022-2023");

  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [openCreateSnackError, setOpenCreateSnackError] = useState(false);
  const [openCreateSnackSuccess, setOpenCreateSnackSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [currentYear, setCurrentYear] = useState("");
  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [grade, setGrade] = useState("");
  const [major, setMajor] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState([]);
  const [linkedIn, setLinkedIn] = useState("");

  let allPositions = "";

  let records = RunAllMembersQuery(schoolYear);
  let first = RunExecutiveDirectorQuery(schoolYear);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleAuthentication = () => {
    if (password.toLowerCase() !== "whoisjack123") {
      setOpenSnack(true);
    } else {
      setOpen(false);
      setOpenCreate(true);
    }
  };

  // const handleSchoolYearChange = (event) => {
  //   setSchoolYear(event.target.value);
  // };

  const handleCreateNewMember = () => {
    if (
      currentYear === "" ||
      //firstName === "" ||
      //lastName === "" ||
      fullName === "" ||
      grade === "" ||
      major === "" ||
      phone === "" ||
      email === ""
    ) {
      console.log(fullName);
      setOpenCreateSnackError(true);
    } else {
      setOpenCreateSnackSuccess(true);
      setOpenCreate(false);

      if (position.length > 1) {
        position.forEach(
          (element) => (allPositions = allPositions.concat(element + "/"))
        );
        allPositions = allPositions.substring(0, allPositions.length - 1);
      } else if (position.length === 1) {
        allPositions = position[0];
      } else {
        allPositions = "Member";
      }

      CreateNewMember();

      //setFirstName("");
      //setLastName("");
      setFullName("");
      setGrade("");
      setMajor("");
      setPhone("");
      setEmail("");
      setPosition([]);
      setLinkedIn("");
    }
  };

  const CreateNewMember = async () => {
    const neo4j = require("neo4j-driver");

    const uri = "neo4j+s://ed1fd98a.databases.neo4j.io";
    const user = "neo4j";
    const password = "Whoisjack123!";

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

    try {
      const newCurrentYear = currentYear;
      //const newFirstName = firstName;
      //const newLastName = lastName;
      const newFullName = fullName;
      const newGrade = grade;
      const newMajor = major;
      const newPhone = phone;
      const newEmail = email;
      const newPosition = allPositions;
      const newLinkedIn =
        linkedIn === ""
          ? "https://www.linkedin.com/groups/14249255/"
          : linkedIn;
      const newImageSource =
        "images/" + currentYear + "/" + fullName.toUpperCase() + ".jpg";

      await createNewSmithie(
        driver,
        newCurrentYear,
        //newFirstName,
        //newLastName,
        newFullName,
        newGrade,
        newMajor,
        newPhone,
        newEmail,
        newPosition,
        newLinkedIn,
        newImageSource
      );
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    } finally {
      await driver.close();
    }

    async function createNewSmithie(
      driver,
      newCurrentYear,
      //newFirstName,
      //newLastName,
      newFullName,
      newGrade,
      newMajor,
      newPhone,
      newEmail,
      newPosition,
      newLinkedIn,
      newImageSource
    ) {
      const session = driver.session({ database: "neo4j" });

      try {
        const writeQuery = `MATCH (y:Year {schoolYear: $newCurrentYear})
              CREATE (p:Person {fullName: $newFullName,
                                grade: $newGrade,
                                major: $newMajor,
                                phone: $newPhone,
                                email: $newEmail,
                                position: $newPosition,
                                linkedIn: $newLinkedIn,
                                imageSource: $newImageSource
                              }) -[:MEMBER_OF]-> (y)`;

        const writeResult = await session.executeWrite((tx) =>
          tx.run(writeQuery, {
            newCurrentYear,
            //newFirstName,
            //newLastName,
            newFullName,
            newGrade,
            newMajor,
            newPhone,
            newEmail,
            newPosition,
            newLinkedIn,
            newImageSource,
          })
        );

        console.log(writeResult);
      } catch (error) {
        console.error(`Something went wrong: ${error}`);
      } finally {
        await session.close();
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenCreate(false);
  };

  const handleSnackClose = () => {
    setOpenSnack(false);
    setOpenCreateSnackError(false);
    setOpenCreateSnackSuccess(false);
  };

  const handleChangeHousePositions = (event) => {
    const {
      target: { value },
    } = event;
    setPosition(typeof value === "string" ? value.split(",") : value);
  };

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
        {/* <div className="members-school-year-dropdown">
          <FormControl>
            <InputLabel id="school-year-select-label">School Year</InputLabel>
            <Select
              labelId="school-year-select-label"
              id="school-year-select"
              value={schoolYear}
              label="School Year"
              onChange={handleSchoolYearChange}
            >
              <MenuItem value={"2022-2023"}>2022-2023</MenuItem>
              <MenuItem value={"2023-2024"}>2023-2024</MenuItem>
              <MenuItem value={"2024-2025"}>2024-2025</MenuItem>
            </Select>
          </FormControl>
        </div> */}

        <h1 className="members-header">
          {schoolYear} Smith Scholarship House Members
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
                    <a
                      href={element.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="clean-link"
                    >
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
                    <a
                      href={element.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="clean-link"
                    >
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
                    <a
                      href={element.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="clean-link"
                    >
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
                    <a
                      href={element.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="clean-link"
                    >
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
          src={"images/" + schoolYear + "/COMPOSITE.jpg"}
          alt="Composite"
          className="members-composite-picture"
        />
        <div className="members-button">
          <Button variant="contained">
            <Link to="/alumni-database" className="clean-link">
              View Alumni Database
            </Link>
          </Button>
        </div>

        <div className="members-add-button">
          <Fab variant="extended" color="primary" onClick={handleOpen}>
            <AddIcon sx={{ mr: 1 }} />
            Add New Member
          </Fab>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Password Required</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create a new member, please first provide the password. <br />
            </DialogContentText>
            <br />
            <FormControl>
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <DialogActions>
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                onClick={handleAuthentication}
              >
                <CheckIcon sx={{ mr: 1 }} />
                Enter
              </Fab>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Snackbar
          open={openSnack}
          autoHideDuration={5000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Password Incorrect!
          </Alert>
        </Snackbar>

        <Dialog open={openCreate} onClose={handleClose}>
          <DialogTitle>Create New Member</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create a new member, please provide the following information.{" "}
              <br />
            </DialogContentText>
            <br />
            <TextField
              fullWidth
              required
              label="Current Year (Ex. 2022-2023): "
              variant="filled"
              margin="normal"
              value={currentYear}
              onChange={(e) => setCurrentYear(e.target.value)}
            />
            <br />
            {/* <TextField
              fullWidth
              required
              label="First Name: "
              variant="filled"
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <TextField
              fullWidth
              required
              label="Last Name: "
              variant="filled"
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br /> */}
            <TextField
              fullWidth
              required
              label="Full Name (First & Last): "
              variant="filled"
              margin="normal"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />
            <br />
            <FormControl fullWidth required>
              <InputLabel id="grade-select-label">Grade: </InputLabel>
              <Select
                labelId="grade-select-label"
                id="grade-select"
                value={grade}
                label="Grade: "
                onChange={(e) => setGrade(e.target.value)}
              >
                <MenuItem value={"Freshman"}>Freshman</MenuItem>
                <MenuItem value={"Sophomore"}>Sophomore</MenuItem>
                <MenuItem value={"Junior"}>Junior</MenuItem>
                <MenuItem value={"Senior"}>Senior</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              fullWidth
              required
              label="Major: "
              variant="filled"
              margin="normal"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
            <br />
            <TextField
              fullWidth
              required
              label="Phone Number: "
              placeholder="xxx-xxx-xxxx"
              variant="filled"
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <TextField
              fullWidth
              required
              label="K-State Email: "
              placeholder="example@ksu.edu"
              variant="filled"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel id="position-select-label">
                In-House Position(s) (Leave balnk if no positions):{" "}
              </InputLabel>
              <Select
                labelId="position-select-label"
                id="position-select"
                multiple
                value={position}
                onChange={handleChangeHousePositions}
                input={
                  <OutlinedInput label="In-House Position(s) (Leave blank if no position(s)): " />
                }
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {housePositions.map((eachPosition) => (
                  <MenuItem key={eachPosition} value={eachPosition}>
                    <Checkbox checked={position.indexOf(eachPosition) > -1} />
                    <ListItemText primary={eachPosition} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              fullWidth
              label="LinkedIn: "
              variant="filled"
              margin="normal"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
            />

            <DialogActions>
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                onClick={handleCreateNewMember}
              >
                <CheckIcon sx={{ mr: 1 }} />
                Create
              </Fab>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Snackbar
          open={openCreateSnackError}
          autoHideDuration={5000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Not All Required Fields Are Filled!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openCreateSnackSuccess}
          autoHideDuration={5000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Member Created Successfully!
          </Alert>
        </Snackbar>

        <Footer />
      </>
    );
  }
}

export default Members;
