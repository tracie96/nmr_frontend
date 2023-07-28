import React from "react";
import Header from "../header/header";

export default function Worthiness() {
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
          >
            Nwankwo Metaverse Records title worthiness
          </div>
          <p style={{ margin: "20px auto" }}>
            For record purposes we see all metaverses as one virtual world which
            means records could be set in any metaverse and same records could
            be broken in another metaverse, possibly different from the one it
            was first created.
          </p>
          <p style={{ margin: "20px auto" }}>
            For record application you can fill in 3 (with 1 compulsory) title
            choices. Title(s) will be screened with the information listed
            below. We will pick the most suitable according to the choice order
            and we could edit the titles you submitted before use. If none
            passes screening we will give the record title independently.
          </p>
          <p style={{ margin: "20px auto" }}>
            All records and associated titles must be:
          </p>
          <ul style={{ margin: "20px auto",listStyle:"initial" }}>
            <li><b>Best</b>: record title must be second to none at time of issue</li>
            <li>
              <b>Breakable</b>: record must be clearly attemptable and our trials could
              attempt to break the record
            </li>
            <li>
              <b>Interpretable</b>: record information and record data must be
              comprehensible
            </li>
            <li><b>Measurable</b>: record information must be quantifiable</li>
            <li>
              <b>Verifiable</b>: record application must be backed with necessary
              proofs such as record data sharing and more
            </li>
          </ul>
          <p style={{ margin: "20px auto" }}>All records and associated titles must not be promoting:</p>
          <ul style={{ margin: "20px auto",listStyle:"initial" }}>
            <li>
              <b>Consumption of alcoholic beverages by underage human or the avatar</b>
            </li>
            <li><b>Racial discrimination and body shaming</b></li>
            <li><b>Animal cruelty</b></li>
            <li><b>Harm to public safety</b></li>
            <li><b>Sexual harassment, assault, and abuse</b></li>
            <li><b>Food wastage</b></li>
            <li>
              <b>Engagement in unlawful activities for record achievement purposes</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
