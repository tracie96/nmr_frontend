import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function Educators() {
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
          >For educators</div>
          <p style={{ margin: "20px auto" }}>
            The Nwankwo Metaverse Records is highly rated in metaverse learning
            for educational institutions, educators, parents, and or students.
            Be it metaverse and related technology studies or recreation for
            students/childeren.
          </p>
          <p style={{ margin: "20px auto" }}>
          Our museum, wide range of devices collection (available in any of our offices), our partners, and our consultants make up a resource chain that we make available and you would like to learn from or experience.
          </p>
          <p style={{ margin: "20px auto" }}>
          The devices like phone, computer, virtual reality devices such as VR headsets and controllers, augmented reality (AR) devices, missed reality (MR) devices, or extended reality (XR) devices - that encompasses the 3 areas and interpolations among them. Guests may need to have a dedicated avatar.
          </p>
          <p style={{ margin: "20px auto" }}>
            By accepting the consent and disclaimer, you are consenting us to
            contact you by email or call and verify your identity by asking you
            the answers to security questions you provided and other personal
            information.{" "}
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
