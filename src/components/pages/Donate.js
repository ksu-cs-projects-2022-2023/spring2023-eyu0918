import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Donate() {
  const [amount, setAmount] = useState("");

  return (
    <>
      <div className="donate">DONATE</div>
      <div className="donate-input-container">
        <TextField
          fullWidth
          required
          label="Amount"
          variant="filled"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained">Donate ${amount}</Button>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
