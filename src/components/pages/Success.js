import React from "react";
import "../../App.css";
import Footer from "../Footer";

function Success() {
  return (
    <>
      <h1 className="success">
        Payment successful! Thank you for your generosity & support!
      </h1>
      <img
        className="activities-image"
        src="images/success.jpg"
        alt="success"
      />
      <Footer />
    </>
  );
}

export default Success;
