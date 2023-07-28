import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function Government() {
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
          >For government and politics</div>

          <p style={{ margin: "20px auto" }}>
          If there is a recognized government, government organizations, intergovernmental organizations, political parties, and elected officials in the metaverse, Nwankwo Metaverse Records could decorate their collective and individual achievements with our record titles. This would apply to the real world counterparts that aim to promote their campaigns and works in the metaverse.
          </p>

          <p style={{ margin: "20px auto" }}>
            By accepting the consent and disclaimer, you are consenting us to
            contact you by email or call and verify your identity by asking you
            the answers to security questions you provided and other personal
            information.
          </p>

          <p style={{ margin: "20px auto" }}>
            Ready, Set, Go! Talk to a governance expert now!
          </p>

          <Link
            to=""
            class="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s hover:a36"
            style={{ margin: "" }}
          >
            Get in Touch
          </Link>

          <p style={{ margin: "20px auto" }}>
          Governance of the metaverse will address how the technologies and environments for the metaverse can be developed in safe, secure, interoperable and inclusive ways.
          </p>

        </div>
      </div>
    </div>
  );
}
