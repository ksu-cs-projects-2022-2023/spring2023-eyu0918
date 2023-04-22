import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function SecretPage() {
  return (
    <>
      <div className="secret-page">SECRET PAGE</div>
      <h2 className="secret-page-info">
        Smith House 2022-2023 Photo Album:&nbsp;
        <Link
          to="https://photos.google.com/share/AF1QipMY9hUVmrvFPgUTOqm83NAgrzxZG3Wvn3buVOKsDaZdlDs_LUC7obyOrghGdNr7kQ?key=c0JQeFFJak1RdlZNUnBSQ1BoWHJ1eEtBcTFDenZR"
          target="_blank"
        >
          GOOGLE PHOTOS
        </Link>
      </h2>
      <h2 className="secret-page-info">
        Master Calendar:&nbsp;
        <Link
          to="https://calendar.google.com/calendar/u/0/embed?src=afd962b6abcf65fff60b95cb2e41d957d3a387d50ec39a3cccd23f88889729ed@group.calendar.google.com&ctz=America/FChicago"
          target="_blank"
        >
          {" "}
          GOOGLE CALENDAR
        </Link>
      </h2>
      <Footer />
    </>
  );
}

export default SecretPage;
