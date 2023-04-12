import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SecretPage() {
  const [amount, setAmount] = useState(0.0);
  const [openErrorSnack, setOpenErrorSnack] = useState(false);

  const handleSnackClose = () => {
    setOpenErrorSnack(false);
  };

  const handleDonate = () => {
    if (amount < 0.5 || amount > 999999999) {
      setOpenErrorSnack(true);
    } else {
      fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [{ id: 1, price: amount }],
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
    }
  };

  return (
    <>
      <div className="secret-page">SECRET PAGE</div>
      <div className="secret-page-input-container">
        <TextField
          fullWidth
          label="Enter Amount:"
          variant="filled"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained" onClick={handleDonate}>
          <i class="fa-solid fa-lock"></i> PAY ${amount}
        </Button>
      </div>
      <Snackbar
        open={openErrorSnack}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid Amount! Please Try Again With a Different Number.
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}

export default SecretPage;
