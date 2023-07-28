import React from "react";
import Header from "../header/header";

export default function Ourculture() {
  return (
    <div>
      <Header />
      <div
        style={{
          position: "relative",
          width: "60%",
          margin: "auto",
          marginTop: "10%",
        }}
      >
        <div class="container">
        <div
            style={{
              fontSize: "2rem",
              textTransform: "initial",
              fontWeight: "bold",
              marginTop: "2%",
              color: "#ff7a00",
              textAlign: "center",
            }}
          >Our culture</div>
          <p style={{ margin: "20px auto" }}>
            At NMR we believe that having a diverse and inclusive workforce
            would give us the best hands to serve metaverse citizens and people
            from around the world better. Understanding different cultures would
            help shape our decision making on metaverse records issuing.
          </p>
          <p className="a21" style={{textAlign:"left"}}>Careers***</p>
          <p className="a21" style={{textAlign:"left"}}><b>Why NMR?</b></p>
          <ul style={{ margin: "20px auto", listStyle: "initial" }}>
            <li>Unlimited vacation</li>
            <li>Remote Friendly</li>
            <li>Team Wins</li>
            <li>Peer Recognition</li>
            <li>Health</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
