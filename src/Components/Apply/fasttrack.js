import React from "react";
import Header from "../header/header";

export default function Fasttrack() {
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
          >Fast track application</div>
          <p style={{ margin: "20px auto" }}>
            Our paid fast track application process helps you leap into the
            limitless values of holding a Nwankwo Metaverse Records title
          </p>
          <p style={{ margin: "20px auto" }}>
            You can select the option to fast track your application during
            initial record application or get a submitted application fast
            tracked by submitting a web form and we could also ask for
            additional documents if needed.
          </p>
          <p style={{ margin: "20px auto" }}>
            Application initially submitted with a fast-track takes 3 weeks to
            process and ones that were fast tracked after initial submission
            might take less than 3 weeks from the fast-track request date,
            depending on the stage processing had gotten before the fast-track
            request. See our current processing time.
          </p>
        </div>
      </div>
    </div>
  );
}
