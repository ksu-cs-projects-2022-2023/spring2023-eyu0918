import React, { useState } from "react";
import "../../App.css";
import "../calendar.css";
import "react-calendar/dist/Calendar.css";
import Footer from "../Footer";
import Calendar from "react-calendar";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const availableTimes = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ScheduleAVisit() {
  const [date, setDate] = useState(new Date());
  const [visitTime, setVisitTime] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [htValue, setHtValue] = useState("");
  const [hsValue, setHsValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setVisitTime(typeof value === "string" ? value.split(",") : value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSnackClickOpen = () => {
    setOpenSnack(true);
    setOpen(false);

    setNameValue("");
    setHtValue("");
    setHsValue("");
    setPhoneValue("");
    setEmailValue("");

    setDate(new Date());
    setVisitTime([]);
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
      <div className="schedule-a-visit">SCHEDULE A VISIT</div>
      <h1 className="visit-info">
        Interested in Stopping By for a Visit? We'd love to have you!
      </h1>
      <h3 className="visit-info">
        Begin by filling out some basic information, then select a date and a
        time that work best for you on the Calendar
      </h3>
      <div className="visit-input-container">
        <TextField
          fullWidth
          required
          label="Name"
          variant="filled"
          margin="normal"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="Hometown"
          variant="filled"
          margin="normal"
          value={htValue}
          onChange={(e) => setHtValue(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="High School/College"
          variant="filled"
          margin="normal"
          value={hsValue}
          onChange={(e) => setHsValue(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="Phone Number"
          variant="filled"
          margin="normal"
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
        />
        <TextField
          fullWidth
          required
          label="Email"
          variant="filled"
          margin="normal"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>

      <div className="visit-combine">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>

        <br />

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="visit-time-label">Available Visit Time</InputLabel>
          <Select
            labelId="visit-time-label"
            id="visit-time-checkbox"
            multiple
            value={visitTime}
            onChange={handleChange}
            input={<OutlinedInput label="Available Visit Time" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {availableTimes.map((time) => (
              <MenuItem key={time} value={time}>
                <Checkbox checked={visitTime.indexOf(time) > -1} />
                <ListItemText primary={time} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="visit-input-container">
        <Button
          fullWidth
          color="success"
          variant="contained"
          size="large"
          onClick={handleClickOpen}
        >
          SCHEDULE VISIT
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="schedule-visit-confirmation"
        >
          <DialogTitle>{"Confirm Scheduling Visit?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="schedule-visit-confirmation">
              Please confirm your scheduled visit to Maitland E. Smith
              Scholarship House by making sure that the following information is
              correcrt.
              <br />
              <br />
              Name: {nameValue}
              <br />
              Hometown: {htValue}
              <br />
              High School/College: {hsValue}
              <br />
              Phone Number: {phoneValue}
              <br />
              Email: {emailValue}
              <br />
              Selected Date: {date.toDateString()}
              <br />
              Available Time: {visitTime.map((aTime) => aTime + "  ")}
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
            Visit Scheduled Successfully!
          </Alert>
        </Snackbar>
      </div>

      <Footer />
    </>
  );
}

export default ScheduleAVisit;
