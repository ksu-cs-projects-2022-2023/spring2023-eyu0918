import React from "react";
import "../../App.css";
import Footer from "../Footer";

function ContactUs() {
  return (
    <>
      <div className="contact-us">CONTACT US</div>
      <h2 className="contact-us-info">
        Are you interested in applying to Smith Scholarship House? <br />
        Are you a Smith House Alum and want to learn how the house has changed
        over time? <br />
        Do you have any questions that you would like to ask us? <br />
        Feel free to contact us using any of the information given below.
      </h2>
      <p className="contact-us-info2">
        <b>House Phone:</b> (785)-537-0042 <br />
        <b>House Email Address:</b> SmithScholarshipHouseKSU@gmail.com <br />
        <b>House Address:</b> 331 N M.L.K. Jr. Dr, Manhattan, KS 66502
      </p>
      <h4 className="contact-us-info3">
        *Hover Over Each Image Below to Display Additional Information*
      </h4>
      <div className="contact-us-image-wrapper">
        <div className="contact-us-container">
          <img
            src="images/2022-2023/BRIAN GARCIA SANDOVAL.jpg"
            alt="Brian Garcia"
            className="contact-us-image"
          />
          <div className="centered-text">
            <p>
              Brian Garcia <br />
              Junior <br />
              Recruiting Chair <br />
              brigar20@ksu.edu <br />
            </p>
          </div>
        </div>
        <div className="contact-us-container">
          <img
            src="images/2022-2023/JOSHUA PETERSON.jpg"
            alt="Joshua Peterson"
            className="contact-us-image"
          />
          <div className="centered-text">
            <p>
              Joshua Peterson <br />
              Senior <br />
              President <br />
              josh811@ksu.edu <br />
            </p>
          </div>
        </div>
        <div className="contact-us-container">
          <img
            src="images/2022-2023/ANNELIESE SNYDER.jpg"
            alt="Anneliese Snyder"
            className="contact-us-image"
          />
          <div className="centered-text-special">
            <p>
              Anneliese Snyder <br />
              Executive Director <br />
              *PHONE NUMBER* <br />
              ???@ksu.edu <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
