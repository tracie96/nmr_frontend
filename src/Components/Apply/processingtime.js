
import React from "react";
import Header from "../header/header";

export default function Processingtime() {
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
          >Processing time</div>
          <p style={{ margin: "20px auto" }}>
          The regular applications take 3.5 months to process, while our fast-track application would reduce the processing time to 3 weeks.
          </p>
        
        </div>
      </div>
    </div>
  );
}
