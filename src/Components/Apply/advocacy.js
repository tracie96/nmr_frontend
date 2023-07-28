import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function Advocacy() {
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
          <p className="a21 a22 a1O">For advocacy</p>
          <p style={{ margin: "20px auto" }}>
          Nwankwo Metaverse Records issue record titles that would help ensure your ease of PR (to gain supporters, raise funds, and boost awareness on a matter) for persons and groups championing advocacy in the metaverse.
          </p>
          <p style={{ margin: "20px auto" }}>
            By accepting the consent and disclaimer, you are consenting us to
            contact you by email or call and verify your identity by asking you
            the answers to security questions you provided and other personal
            information.
          </p>

          <p style={{ margin: "20px auto" }}>
            Ready, Set, Go! Talk to an advocacy expert now!{" "}
          </p>
          <Link
            to=""
            class="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s hover:a36"
            style={{ margin: "" }}
          >
            Get in Touch
          </Link>

        </div>
      </div>
    </div>
  );
}
