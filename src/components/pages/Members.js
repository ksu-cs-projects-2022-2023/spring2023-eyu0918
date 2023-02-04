import React from "react";
import "../../App.css";
import Footer from "../Footer";

function Members() {
  return (
    <>
      <h1 className="members">MEMBERS</h1>
      <div className="members-container">
        <img src="images/2022-2023/PEDRO GARCIA.jpg" alt="Pedro Garcia" />
        <div className="centered-text">
          <p>
            Pedro Garcia <br />
            Architecture <br />
            Freshman <br />
            *NO LONGER IN THE HOUSE* <br />
          </p>
          <a
            href="https://www.smithscholarshiphouse.org/current-smithees"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Members;
