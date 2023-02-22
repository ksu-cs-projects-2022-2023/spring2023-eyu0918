import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { useReadCypher } from "use-neo4j/dist/cypher";

function Members() {
  const query = `MATCH (p:Person) RETURN p`;

  const { loading, first } = useReadCypher(query);
  if (loading) return <div>Loading...</div>;

  const value = first.get("p");

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
      <div>{value.properties.firstName}</div>
      <Footer />
    </>
  );
}

export default Members;
