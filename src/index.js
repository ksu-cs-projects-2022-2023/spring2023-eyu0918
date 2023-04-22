import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Neo4jProvider, createDriver } from "use-neo4j";

const driver = createDriver(
  "neo4j+s", // scheme
  "45bb78bb.databases.neo4j.io", // host
  7687, // port
  "neo4j", // username
  "whoisjack123" // password
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Neo4jProvider driver={driver}>
      <App />
    </Neo4jProvider>
  </React.StrictMode>
);
