import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Donate() {
  const [amount, setAmount] = useState(0.0);
  const [amountWithFee, setAmountWithFee] = useState(0.0);
  const [openErrorSnack, setOpenErrorSnack] = useState(false);

  const handleSnackClose = () => {
    setOpenErrorSnack(false);
  };

  const handleCalculateFee = () => {
    if (amount < 0.5 || amount > 999999999) {
      setOpenErrorSnack(true);
    } else {
      setAmountWithFee((amount * 1.029 + 0.3).toFixed(2));
    }
  };

  return (
    <>
      <div className="donate">DONATE</div>
      <h1 className="donate-info">
        The Entirety Of Smith Scholarship House Thank You For Your Act of
        Kindness.
      </h1>
      <div className="donate-input-container">
        <Button variant="contained" fullWidth>
          <Link
            className="clean-link"
            to="https://buy.stripe.com/bIY3fv9IOa6M7BudQR"
            target="_blank"
          >
            <i class="fa-solid fa-lock"></i> Donate
          </Link>
        </Button>
      </div>

      <h3 className="donate-info">
        NOTE: This donation process uses Stripe's payment service, where a
        <b> 2.9% + 30¢</b> transaction fee is applied per transaction. <br />
        If you would like to cover the transaction fee, feel free to use the
        calculator below to calculate the overall amount.
      </h3>
      <div className="donate-input-container">
        <TextField
          fullWidth
          label="Amount:"
          variant="filled"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={handleCalculateFee} variant="contained">
          Calculate Amount With Transaction Fee
        </Button>
        <TextField
          fullWidth
          label="Amount with Transaction Fee:"
          variant="filled"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            readOnly: true,
          }}
          value={amountWithFee}
          onChange={(e) => setAmountWithFee(e.target.value)}
        />
      </div>
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
          Please enter an amount between $0.5 and $999,999,999.
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}

export default Donate;
