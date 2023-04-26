import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function SecretPage() {
  return (
    <>
      <div className="secret-page">SECRET PAGE</div>
      <div className="secret-page-buttons">
        <Button variant="contained">
          <Link
            className="clean-link"
            to="https://calendar.google.com/calendar/u/0/embed?src=afd962b6abcf65fff60b95cb2e41d957d3a387d50ec39a3cccd23f88889729ed@group.calendar.google.com&ctz=America/FChicago"
            target="_blank"
          >
            Master Calendar
          </Link>
        </Button>
        <Button variant="contained">
          <Link
            className="clean-link"
            to="https://photos.google.com/share/AF1QipMY9hUVmrvFPgUTOqm83NAgrzxZG3Wvn3buVOKsDaZdlDs_LUC7obyOrghGdNr7kQ?key=c0JQeFFJak1RdlZNUnBSQ1BoWHJ1eEtBcTFDenZR"
            target="_blank"
          >
            2022-2023 Photo Album
          </Link>
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default SecretPage;
