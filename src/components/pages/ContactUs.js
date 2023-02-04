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
        House Phone: (785)-537-0042 <br />
        House Email Address: SmithScholarshipHouseKSU@gmail.com <br />
        House Address: 331 N M.L.K. Jr. Dr, Manhattan, KS 66502
      </p>
      <div className="contact-us-image-wrapper">
        <img
          src="images/2022-2023/BRIAN GARCIA SANDOVAL.jpg"
          alt="Snow"
          className="contact-us-image"
        />
        <img
          src="images/2022-2023/JOSHUA PETERSON.jpg"
          alt="Forest"
          className="contact-us-image"
        />
        <img
          src="images/2022-2023/ANNELIESE SNYDER.jpg"
          alt="Mountains"
          className="contact-us-image"
        />
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
