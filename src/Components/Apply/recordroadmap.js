import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function Recordroadmap() {
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
          >Record roadmap</div>
          <p className="a21 a22 a1O">
            Preparing to apply for a metaverse record
          </p>
          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Login or create an account
            </Link>
          </p>
          <p>
            Account must be created with applicant’s (individual or
            organization) information and application is done through the
            applicants account
          </p>

          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Nwankwo Metaverse Records title worthiness
            </Link>
          </p>
          <p>Find information on NMR title application and screening process</p>

          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Use of Representative (NMR03)
            </Link>
          </p>
          <p>
            Fill and sign Use of Representative form and upload under required
            documents
          </p>

          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Reasons for application rejection
            </Link>
          </p>
          <p>Find information on reasons an application could be rejected</p>
          <p style={{ margin: "20px auto", fontWeight: "bold",
 }} className="a21 a22 a1O">
            During record application, after record application, or after
            decision
          </p>
          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Nwankwo Metaverse Records title worthiness
            </Link>
          </p>
          <p>Ensure you apply with an approved record title</p>
          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Individuals Applications
            </Link>
          </p>
          <p>For achievement accomplished by an individual in the metaverse</p>

          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Organizations Applications
            </Link>
          </p>
          <p>
            For achievement accomplished by a registered for-profit or
            non-profit organization in the metaverse or for workforce
            recognition awards
          </p>

          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              Web Form
            </Link>
          </p>
          <p>
            If you need to change information or tell us anything about your
            application use the web form
          </p>

          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                margin: "20px auto",
                textDecoration: "underline",
              }}
            >
              Information Sharing Authorization (NMR04)
            </Link>
          </p>
          <p>
            For authorization to share your application or profile information
            with a dedicated individual or organization
          </p>
          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                margin: "20px auto",
                textDecoration: "underline",
              }}
            >
              Record fulfilment
            </Link>
          </p>
          <p>
            If application is approved a record fulfilment will be sent to you
            before you receive the record’s NFT
          </p>
          <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "underline",
                margin: "20px auto",
              }}
            >
              NFT
            </Link>
          </p>
          <p>First issuance will be made to the human (behind the avatar)</p>

          {/* <p style={{ textTransform: "initial" }}>
            <Link
              to=""
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              PROCESSING TIME
            </Link>
          </p> */}
          {/* <p>
            The regular applications take 3.5 months to process, while fast
            tracked applications should be processed under 3 weeks.
          </p> */}
        </div>
      </div>
    </div>
  );
}
