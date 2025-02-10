import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [openErrorSnack, setOpenErrorSnack] = useState(false);

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

  const [reference1NameValue, setReference1NameValue] = useState("");
  const [reference1RelationValue, setReference1RelationValue] = useState("");
  const [reference1PhoneValue, setReference1PhoneValue] = useState("");
  const [reference1EmailValue, setReference1EmailValue] = useState("");
  const [reference1AddressValue, setReference1AddressValue] = useState("");

  const [reference2NameValue, setReference2NameValue] = useState("");
  const [reference2RelationValue, setReference2RelationValue] = useState("");
  const [reference2PhoneValue, setReference2PhoneValue] = useState("");
  const [reference2EmailValue, setReference2EmailValue] = useState("");
  const [reference2AddressValue, setReference2AddressValue] = useState("");

  const [signatureValue, setSignatureValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  var applicantInfo = {
    applicant_name: nameValue,
    intended_study: programValue,
    applicant_hs: hsValue,
    applicant_GPA: gpaValue,
    applicant_ACT: actValue,
    other_sec_ed: secEdValue,
    applicant_address: addressValue,
    applicant_phone: phoneValue,
    applicant_email: emailValue,
    appilcant_dob: birthValue,

    applicant_status: gradeValue,
    applicant_grad_date: gradDateValue,
    academic_accomp: awardValue,
    extracurricular: extraValue,
    job_experience: jobValue,
    family_structure: familyValue,
    university_reason: reasonValue,
    why_smith: sevenValue,
    ideal_roommate: roommateValue,

    reference_1_name: reference1NameValue,
    reference_1_relation: reference1RelationValue,
    reference_1_phone: reference1PhoneValue,
    reference_1_email: reference1EmailValue,
    reference_1_address: reference1AddressValue,

    reference_2_name: reference2NameValue,
    reference_2_relation: reference2RelationValue,
    reference_2_phone: reference2PhoneValue,
    reference_2_email: reference2EmailValue,
    reference_2_address: reference2AddressValue,
  };

  const sendEmail = (e) => {
    emailjs
      .send("smith_gmail", "apply_today", applicantInfo, "A_cAZ_h_IxE7dDDVZ")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (event) => {
    setGradeValue(event.target.value);
  };

  const handleClickOpen = () => {
    if (
      nameValue === "" ||
      programValue === "" ||
      hsValue === "" ||
      gpaValue === "" ||
      actValue === "" ||
      secEdValue === "" ||
      addressValue === "" ||
      phoneValue === "" ||
      emailValue === "" ||
      birthValue === "" ||
      gradeValue === "" ||
      gradDateValue === "" ||
      awardValue === "" ||
      extraValue === "" ||
      jobValue === "" ||
      familyValue === "" ||
      reasonValue === "" ||
      sevenValue === "" ||
      roommateValue === "" ||
      reference1NameValue === "" ||
      reference1RelationValue === "" ||
      reference1PhoneValue === "" ||
      reference1EmailValue === "" ||
      reference1AddressValue === "" ||
      reference2NameValue === "" ||
      reference2RelationValue === "" ||
      reference2PhoneValue === "" ||
      reference2EmailValue === "" ||
      reference2AddressValue === "" ||
      signatureValue === "" ||
      dateValue === ""
    ) {
      setOpenErrorSnack(true);
    } else {
      setOpen(true);
    }
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

    setReference1NameValue("");
    setReference1RelationValue("");
    setReference1PhoneValue("");
    setReference1EmailValue("");
    setReference1AddressValue("");

    setReference2NameValue("");
    setReference2RelationValue("");
    setReference2PhoneValue("");
    setReference2EmailValue("");
    setReference2AddressValue("");

    setSignatureValue("");
    setDateValue("");

    sendEmail();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackClose = (event, reason) => {
    setOpen(false);
    setOpenSnack(false);
    setOpenErrorSnack(false);
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
        We make no final decisions about accepting your application until{" "}
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
        the following questions truthfully while being as complete and organized
        as possible. For any field that does not apply to you, please enter
        'N/A'.
      </p>

      <br />
      <br />

      <div className="apply-input-container">
        <TextField
          required
          fullWidth
          label="Full Name"
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
          label="ACT/SAT Score (Highest)"
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
          placeholder="xxx-xxx-xxxx"
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
          placeholder="mm/dd/yyyy"
          value={birthValue}
          onChange={(e) => setBirthValue(e.target.value)}
        />
      </div>

      <hr />

      <h2 className="apply-info-2">
        1. As a potential new house member, what will your status be as a Kansas
        State University student?
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
        2. When is/was your high school graduation? If not currently in high
        school, please indicate the number of semesters or credit hours
        completed.
      </h2>
      <div className="apply-input-container">
        <TextField
          fullWidth
          required
          variant="filled"
          value={gradDateValue}
          onChange={(e) => setGradDateValue(e.target.value)}
        ></TextField>
      </div>

      <h2 className="apply-info-2">
        3. Indicate your academic accomplishments and any awards/honors you have
        received.
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
        4. Describe your extracurricular activities.
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

      <h2 className="apply-info-2">5. List any jobs or work experience.</h2>
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
        6. Describe your family structure and a typical day.
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
        7. Explain your reasons for attending university.
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
        8. In seven (7) words or fewer, why choose Smith House?
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
        9. Illustrate your ideal roommate's personality.
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
        10. Please provide the names and contact information of two (2)
        non-family members or relatives who know you well and could comment on
        your potential as a student, house mate, employee, or other similar
        roles.
      </h2>
      <div className="apply-input-container-2">
        <h4>Reference #1</h4>
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference1NameValue}
          onChange={(e) => setReference1NameValue(e.target.value)}
          label="Full Name"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference1RelationValue}
          onChange={(e) => setReference1RelationValue(e.target.value)}
          label="Relationship"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference1PhoneValue}
          onChange={(e) => setReference1PhoneValue(e.target.value)}
          label="Phone Number"
          placeholder="xxx-xxx-xxxx"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference1EmailValue}
          onChange={(e) => setReference1EmailValue(e.target.value)}
          label="Email"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          multiline
          rows={3}
          value={reference1AddressValue}
          onChange={(e) => setReference1AddressValue(e.target.value)}
          label="Address"
        ></TextField>
      </div>
      <br />
      <div className="apply-input-container-2">
        <h4>Reference #2</h4>
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference2NameValue}
          onChange={(e) => setReference2NameValue(e.target.value)}
          label="Full Name"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference2RelationValue}
          onChange={(e) => setReference2RelationValue(e.target.value)}
          label="Relationship"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference2PhoneValue}
          onChange={(e) => setReference2PhoneValue(e.target.value)}
          label="Phone Number"
          placeholder="xxx-xxx-xxxx"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          value={reference2EmailValue}
          onChange={(e) => setReference2EmailValue(e.target.value)}
          label="Email"
        ></TextField>
      </div>
      <div className="apply-input-container-2">
        <br />
        <TextField
          fullWidth
          variant="filled"
          multiline
          rows={3}
          value={reference2AddressValue}
          onChange={(e) => setReference2AddressValue(e.target.value)}
          label="Address"
        ></TextField>
      </div>
      <br />
      <h2 className="apply-info-2">
        <u>11. Statment of Non-Descrimination</u>
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
          placeholder="mm/dd/yyyy"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
        />
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
              House by making sure that all information entered are accurate.
              <br />
              <br />
              <b>IMPORTANT</b>
              <br />
              To submit a copy of your transcript (and an optional resume),
              choose one of the two following actions:
              <br /> 1. Email a digital copy to
              <b> smithscholarshiphouseksu@gmail.com</b> at your earliest
              convenience.
              <br /> 2. Bring a physical copy with you and give it to the
              recruiting chair(s) during your visit.
              <br />
              <br />
              Expect to hear back from us in no longer than two weeks maximum.
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
          autoHideDuration={5000}
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
        <Snackbar
          open={openErrorSnack}
          autoHideDuration={5000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Not All Fields Are Filled!
          </Alert>
        </Snackbar>
      </div>

      <Footer />
    </>
  );
}

export default ApplyToday;
