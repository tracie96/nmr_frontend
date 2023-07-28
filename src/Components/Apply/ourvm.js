import React from "react";
import Header from "../header/header";

export default function Vision() {
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
          >Our vision, mission, and values</div>
          <p className="a21" style={{textAlign:"left"}}>Our vision</p>
          <p style={{ margin: "20px auto" }}>
            To drive endless possibilities in the metaverse by making
            comprehensive documentation in reference to achievements.
          </p>
          <p className="a21" style={{textAlign:"left"}}>Our mission</p>
          <p style={{ margin: "20px auto" }}>
            To immortalize groundbreaking and remarkable metaverse achievements
            in an entertaining manner as the world goes in search of incredible
            metaverse.
          </p>

          <p className="a21" style={{textAlign:"left"}}>Our values</p>
<p><b>P-R-O</b>
</p>
<p><b>Promote</b> the development and interests in virtual worlds through entertainment and media.
</p>
<p><b>Reverence</b> is the watchword in all our external and internal dealings.

</p>
<p><b>One</b> mission, multiple metaverses.
</p>
        </div>
      </div>
    </div>
  );
}
