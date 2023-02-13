import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ApplyToday() {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [programValue, setProgramValue] = useState("");
  const [hsValue, setHsValue] = useState("");
  const [gpaValue, setGPAValue] = useState("");
  const [actValue, setACTValue] = useState("");
  const [secEdValue, setSecEdValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [birthValue, setBirthValue] = useState("");

  const [gradeValue, setGradeValue] = useState("");
  const [gradDateValue, setGradDateValue] = useState("");
  const [awardValue, setAwardValue] = useState("");
  const [extraValue, setExtraValue] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [familyValue, setFamilyValue] = useState("");
  const [reasonValue, setReasonValue] = useState("");
  const [sevenValue, setSevenValue] = useState("");
  const [roommateValue, setRoommateValue] = useState("");
  const [referenceValue, setReferenceValue] = useState("");
  const [signatureValue, setSignatureValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const handleChange = (event) => {
    setGradeValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSnackClickOpen = () => {
    setOpenSnack(true);
    setOpen(false);

    setNameValue("");
    setProgramValue("");
    setHsValue("");
    setGPAValue("");
    setACTValue("");
    setSecEdValue("");
    setAddressValue("");
    setPhoneValue("");
    setEmailValue("");
    setBirthValue("");

    setGradeValue("");
    setGradDateValue("");
    setAwardValue("");
    setExtraValue("");
    setJobValue("");
    setFamilyValue("");
    setReasonValue("");
    setSevenValue("");
    setRoommateValue("");
    setReferenceValue("");
    setSignatureValue("");
    setDateValue("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpenSnack(false);
    }

    setOpen(false);
    setOpenSnack(false);
  };

  return (
    <>
      <h1 className="apply-today">APPLY TODAY</h1>
      <h1 className="apply-info">
        Think You Got What It Takes To Become A Smithie?
      </h1>
      <h2 className="apply-info">Apply Today to Begin a Brand New Adventure</h2>
      <p className="apply-info-2">
        - If you haven't done so, we encourage you to visit for a house tour
        after applying. During your visit, our Recruiting Chair(s) will give you
        a proper tour of the house along with an interview. Click{" "}
        <a href="/schedule-a-visit">HERE</a> to schedule a visit. <br /> <br />-
        Wemake no final decisions about accepting your application until{" "}
        <b>after</b> an interview. We will notify you of your status by{" "}
        <b>April 1st</b> at the latest. <br />
        <br />
        - Do not be afriad if you think that your GPA or ACT score is not high
        enough. We also take into consideration your personality, enthusiasm
        about the program, past achievements, future goals, and any specific
        qualities that you can contribute to make Smith House a great place to
        live for all residents. <br />
        <br />- This application, in conjunction with your interview, will form
        the basis of our decision to your acceptance or denial. Please answer
        the following questions truthfully while being as organized and complete
        as possible.
      </p>

      <br />
      <br />

      <div className="apply-input-container">
        <TextField
          required
          fullWidth
          label="Name"
          variant="filled"
          margin="normal"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Intended Program(s) of Study"
          variant="filled"
          margin="normal"
          value={programValue}
          onChange={(e) => setProgramValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="High School Name & City"
          variant="filled"
          margin="normal"
          value={hsValue}
          onChange={(e) => setHsValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Current Unweighted GPA"
          variant="filled"
          margin="normal"
          value={gpaValue}
          onChange={(e) => setGPAValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="ACT/SAT scores"
          variant="filled"
          margin="normal"
          value={actValue}
          onChange={(e) => setACTValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          multiline
          rows={3}
          label="Other Secondary Education (Names/Locations only)"
          variant="filled"
          margin="normal"
          value={secEdValue}
          onChange={(e) => setSecEdValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          multiline
          rows={3}
          label="Permanent Address"
          variant="filled"
          margin="normal"
          value={addressValue}
          onChange={(e) => setAddressValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Phone Number"
          variant="filled"
          margin="normal"
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Email Address"
          variant="filled"
          margin="normal"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Date of Birth"
          variant="filled"
          margin="normal"
          value={birthValue}
          onChange={(e) => setBirthValue(e.target.value)}
        />
      </div>

      <hr />

      <h2 className="apply-info-2">
        1. As a potential new house members, what will be your status as a
        Kansas State University student?
      </h2>
      <div className="apply-input-container">
        <FormControl fullWidth>
          <InputLabel id="grade-select-label">Status</InputLabel>
          <Select
            labelId="grade-select-label"
            value={gradeValue}
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value={"Freshman"}>Freshman</MenuItem>
            <MenuItem value={"Transfer"}>Transfer</MenuItem>
            <MenuItem value={"Current"}>Current</MenuItem>
          </Select>
        </FormControl>
      </div>
      <h2 className="apply-info-2">
        When is/was your high school graduation? If not currently in high
        school, please indicate the number of semesters or credit hours
        completed.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          variant="filled"
          value={gradDateValue}
          onChange={(e) => setGradDateValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        2. Indicate your academic accomplishments and any awards and honors you
        have received.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="filled"
          value={awardValue}
          onChange={(e) => setAwardValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        3. Describe your extracurricular activities.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="filled"
          value={extraValue}
          onChange={(e) => setExtraValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">4. List any jobs or work experience.</h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="filled"
          value={jobValue}
          onChange={(e) => setJobValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        5. Describe your family structure and a typical day.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="filled"
          value={familyValue}
          onChange={(e) => setFamilyValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        6. Explain your reasons for attending university.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="filled"
          value={reasonValue}
          onChange={(e) => setReasonValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        7. In seven (7) words or fewer, why choose Smith House?
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          variant="filled"
          value={sevenValue}
          onChange={(e) => setSevenValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        8. Illustrate your ideal roommate's personality.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="filled"
          value={roommateValue}
          onChange={(e) => setRoommateValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        9. Please provide the names and contact information of two (2)
        non-family members or relatives who know you well and could comment on
        your potential as a student, house mate, employee, or other similar
        role.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          multiline
          rows={8}
          variant="filled"
          value={referenceValue}
          onChange={(e) => setReferenceValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        <u>10. Statment of Non-Descrimination</u>
      </h2>
      <h4 className="apply-info-3">
        Smith Scholarship House is open to all men enrolled at Kansas State
        University’s Manhattan campus. The house will not discriminate against
        its members or prospective members because of race, color, ethnic or
        national origin, sexual orientation, religion, age, ancestry,
        disability, military status, veteran status, or other non-merit reasons.{" "}
        <br />
        <br />
        The most important factors for consideration of future Smithies are
        enthusiasm and an attitude of cooperation. The inhabitants of this house
        must be willing to display this attitude of cooperation to all other
        house members in various situations, including day-to-day operations.
        <br />
        <br />
        We encourage all to apply, even if you feel your grades or standardized
        test scores would be lower than those of other applicants or if
        application writing is not a particular strength. Applicant evaluations
        occur on an individual basis and acceptance cannot be determined until
        after conducting an interview.
        <br />
        <br />
        <b>
          I understand that my selection will be determined only{" "}
          <u>after an interview</u> and affirm that this application is not
          binding upon myself, Smith Scholarship House, or the Smith Scholarship
          House Alumni Association.
          <br />
          <br />
          Furthermore, I understand that this application will not be considered
          complete until I have submitted a copy of my current high school or
          collegiate/university transcript.
        </b>
      </h4>
      <div className="apply-input-container">
        <TextField
          required
          fullWidth
          label="Signature"
          variant="filled"
          margin="normal"
          value={signatureValue}
          onChange={(e) => setSignatureValue(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Date"
          variant="filled"
          margin="normal"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
        />
        <h2 className="apply-info-2">Transcript (REQUIRED)</h2>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="pdf/*" multiple type="file" />
        </Button>

        <h2 className="apply-info-2">Resume (Optional)</h2>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="pdf/*" multiple type="file" />
        </Button>
      </div>

      <div className="apply-input-container">
        <Button
          fullWidth
          color="success"
          variant="contained"
          size="large"
          onClick={handleClickOpen}
        >
          SUBMIT APPLICATION
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="application-submission-confirmation"
        >
          <DialogTitle>{"Confirm Application Submission?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="application-submission-confirmation">
              Please confirm your application to Maitland E. Smith Scholarship
              House by making sure that all required fields are filled and your
              most recent transcript is attached.
              <br />
              <br />
              Except to hear back from us in no longer than two weeks maximum.
              Thank you again for showing interest in Smith Scholarship House.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSnackClickOpen}>Confirm</Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          open={openSnack}
          autoHideDuration={6000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Application Submission Successful!
          </Alert>
        </Snackbar>
      </div>

      <Footer />
    </>
  );
}

export default ApplyToday;
