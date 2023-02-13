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

function ScheduleAVisit() {
  const [date, setDate] = useState(new Date());
  const [visitTime, setVisitTime] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setVisitTime(typeof value === "string" ? value.split(",") : value);
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
        />
        <TextField
          fullWidth
          required
          label="Home Town"
          variant="filled"
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="High School"
          variant="filled"
          margin="normal"
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

      <Footer />
    </>
  );
}

export default ScheduleAVisit;
