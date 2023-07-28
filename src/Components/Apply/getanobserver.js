import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function Getanobserver() {
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
          >Get an Observer</div>
          <p style={{ margin: "20px auto" }}>
            Having an Nwankwo Metaverse Records Observer present on your
            record-setting or breaking attempt comes with a lot of benefits.
          </p>
          <p style={{ margin: "20px auto" }}>
            If you get an Observer for your metaverse record attempt that could
            lead to a metaverse record title, we may be contacting you to
            confirm the state of your record attempt. This will help us know the
            XR hardware (VR for full immersion or the activities brought to our Advisors with AR) needed to ensure the NMR Observer has a hitch free
            process being present for your attempt.
          </p>
          <p style={{ margin: "20px auto" }}>
            By accepting the consent and disclaimer, you are consenting us to
            contact you by email or call and verify your identity by asking you
            the answers to security questions you provided and other personal
            information.
          </p>
          <div style={{ margin: "20px auto" }}>
            <Link to=""
              class="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s hover:a36"
              style={{ margin: "" }}
            >
              Send Us a Message Today
            </Link>
          </div>
          <p class="" style={{ margin: "20px auto", fontWeight: "bold" }}>
            Benefits of having an Nwankwo Metaverse Records Observer present
            during your record attempt:
          </p>
          <ul style={{ margin: "20px auto",listStyle:"initial" }}>
            <li>Instant verification, application submission, and decision</li>
            <li>
              Instant creation and presentation of Nwankwo Metaverse Records
              main NFT
            </li>
            <li>
              Getting access to pick free 3 digital wears and products (with
              total regular price not exceeding $9.99) from Nwankwo Metaverse
              Records avatar store
            </li>
            <li>Observers’s autograph on digital products</li>
          </ul>
      
        </div>
      </div>
    </div>
  );
}
