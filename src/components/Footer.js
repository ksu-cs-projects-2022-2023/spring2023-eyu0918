import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import "./Footer.css";
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
import CheckIcon from "@mui/icons-material/Check";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Footer() {
  const [secret, setSecret] = useState("");
  const [open, setOpen] = useState(false);
  const [openOnPage, setOpenOnPage] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSecretPageClick = () => {
    if (window.location.pathname === "/secret-page") {
      setOpenOnPage(true);
    } else {
      setOpen(true);
    }
  };

  //console.log(window.location.pathname);

  const navigate = useNavigate();
  const handleAuthentication = () => {
    if (secret !== "whoisjack123" && secret !== "Whoisjack123") {
      setOpenSnack(true);
      setOpen(true);
    } else {
      setOpen(false);
      navigate("/secret-page");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenOnPage(false);
  };

  const handleSnackClose = () => {
    setOpenSnack(false);
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Think You Got What It Takes to Become a Smithie?
        </p>
        <p className="footer-subscription-text">
          Apply Today to Begin a Brand New Adventure
        </p>
        <div className="apply-button">
          <Link to="/apply-today">
            <Button buttonSize="btn--outline">APPLY TODAY</Button>
          </Link>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/values">Values</Link>
            <Link to="/operations">Operations</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/costs">Costs</Link>
          </div>
          <div class="footer-link-items">
            <h2>Documents</h2>
            <a
              href="documents/Smith House Constitution 2017.pdf"
              target="_blank"
            >
              Constitution
            </a>
            <a
              href="documents/Bylaws of Smith House Alumni Association.pdf"
              target="_blank"
            >
              By-laws
            </a>
            <a href="documents/Smith House Application.pdf" target="_blank">
              Application
            </a>
            <a href="documents/Smith House Brochure 2023.pdf" target="_blank">
              Brochure
            </a>
          </div>
          <div class="footer-link-items">
            <h2>Stay Connected</h2>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="https://www.k-state.edu/smithhouse/" target="_blank">
              Official K-State Page
            </Link>
            <Link
              to="https://www.google.com/maps/place/Smith+Scholarship+House/@39.1829263,-96.5856782,17z/data=!3m1!4b1!4m6!3m5!1s0x87bdcd869fbdbb81:0xefeac6391f781beb!8m2!3d39.1829222!4d-96.5834842!16s%2Fg%2F1v1kqct_"
              target="_blank"
            >
              Location
            </Link>
            <Link
              to="https://housing.k-state.edu/living-options/smurthwaite/"
              target="_blank"
            >
              Smurthwaite
            </Link>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Secret Page</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Congratulations on finding the secret page! <br />
            To enter, please provide the correct password below.
          </DialogContentText>
          <br />
          <FormControl>
            <InputLabel htmlFor="filled-adornment-password">
              Secret Page Password
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
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
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
        autoHideDuration={6000}
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

      <Dialog open={openOnPage} onClose={handleClose}>
        <DialogTitle>Smith House Pre-Formal Dinner Song</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ fontFamily: "cursive" }}>
              Be Present At Our Table Lord, <br />
              Be Here And Everywhere Adore. <br />
              Thy Mercy's Bless And Grant That We, <br />
              May Feast In Fellowship With Thee. <br />
              Amen. <br /> <br />
            </p>
          </DialogContentText>
          <DialogActions>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              onClick={handleClose}
            >
              <CheckIcon sx={{ mr: 1 }} />
              Close
            </Fab>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="smith-logo">
              SMITH <i class="fa-solid fa-house-user" />
            </Link>
          </div>
          <small className="website-rights" onClick={handleSecretPageClick}>
            Maitland E. Smith Scholarship House © 2023
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/ksusmithhouse/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/smithhousekstate"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>

            <Link
              className="social-icon-link youtube"
              to="https://www.youtube.com/@BenBenSmith"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="https://twitter.com/ksusmithhouse"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="https://www.linkedin.com/in/eric-yu-346762196/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
