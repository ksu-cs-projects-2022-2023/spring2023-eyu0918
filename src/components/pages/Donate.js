import React, { useState } from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InfoIcon from "@mui/icons-material/Info";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Donate() {
  const [amount, setAmount] = useState(0.0);
  const [openErrorSnack, setOpenErrorSnack] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSnackClose = () => {
    setOpenErrorSnack(false);
  };

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);

    if (event.target.checked) {
      setAmount((amount * 1.029 + 0.3).toFixed(2));
    } else {
      setAmount(((amount - 0.3) / 1.029).toFixed(2));
    }
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? "simple-popover" : undefined;

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
      <div className="donate">DONATE</div>
      <h1 className="donate-info">
        The Entirety Of Smith Scholarship House Thank You For Your Act of
        Kindness.
      </h1>
      <h3 className="donate-info">
        To Begin, enter in the amount you would like to donate (Minumum of
        $5.00). <br />
        Then, click the <b>DONATE</b> button and follow the steps on your screen
        to complete the process.
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
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={checked}
              onChange={handleCheckBox}
            />
          }
          label="I would like to cover the transaction fee."
        />
        <InfoIcon onClick={handleOpenPopover} />
        <Popover
          id={id}
          open={openPopover}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            This donation process uses Stripe's payment service, where a
            <b> 2.9% + 30¢</b> transaction fee is applied per transaction.{" "}
            <br />
            By checking this box, you are agreeing to provide the addtional
            transaction fee alongside your initial donation amount.{" "}
          </Typography>
        </Popover>
        <Button variant="contained" onClick={handleDonate}>
          <i class="fa-solid fa-lock"></i> Donate ${amount}
        </Button>
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
          Invalid Donation Amount.
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}

export default Donate;
