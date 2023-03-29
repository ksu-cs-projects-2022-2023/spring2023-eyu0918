import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Donate() {
  const [amount, setAmount] = useState("");

  const handleDonate = () => {
    fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

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
        <Button variant="contained" onClick={handleDonate}>
          Donate ${amount}
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
