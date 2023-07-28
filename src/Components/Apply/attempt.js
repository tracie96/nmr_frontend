import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function Attempt() {
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
          >Record attempt</div>
          <p style={{ margin: "20px auto" }}>
            Activities done personally or ones that were hosted by other
            organizations or individuals and you (individual or organization)
            participated, could lead to achieving an Nwankwo Metaverse Records
            title.
          </p>

          <p style={{ margin: "20px auto" }}>
          If you get an Observer for your metaverse record attempt that could lead to a metaverse record title, we may be contacting you to confirm the state of your record attempt. This will help us know the XR hardware (VR for full immersion or the activities brought to our Advisors with AR) needed to ensure the NMR Observer has a hitch free process being present for your attempt.
          </p>
          <p style={{ margin: "20px auto" }}>
          For activities hosted by an organization, there are chances that the organizer might invite Nwankwo Metaverse Records or not. You may need to keep watch on the latest NMR news as we would publish information on activities or events that we are invited to.
          </p>
          <p style={{ margin: "20px auto" }}>
          We advise that it could be best for all participants in a trial to use one brand of hardware, although this is not a criteria considered during record application processing.
          </p>
          <p style={{ margin: "20px auto" }}>
          By accepting the consent and disclaimer, you are consenting us to contact you by email or call and verify your identity by asking you the answers to security questions you provided and other personal information.
          </p>
          <Link
            to=""
            class="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s hover:a36"
            style={{ margin: "" }}
          >
            Get an NMR Observer
          </Link>
          <p>Ready, Set, Go! Talk to a record expert now!</p>

          <Link
            to=""
            class="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s hover:a36"
            style={{ margin: "" }}
          >
            Get in Touch With an Advisor
          </Link>
          <p>
            Benefits of having an NMR Observer resent during record attempt are:
          </p>

          <ul style={{ fontWeight: "bold",listStyle:"initial" }}>
            <li>Instant verification, application submission, and decision</li>
            <li>
              Instant creation and presentation of Nwankwo Metaverse Records NFT
            </li>
            <li>
              Getting access to pick free 3 digital wears and products (with
              total regular price not exceeding $9.99) from Nwankwo Metaverse
              Records avatar store
            </li>
            <li>Observer’s autograph on digital products</li>
          </ul>

          <p style={{ margin: "20px auto" }}>
          If you love to explore opportunities to be a Nwankwo Metaverse Records title holder or want to get real-virtual training, then Nwankwo Metaverse Records trial might interest you to check out.
          </p>
        </div>
      </div>
    </div>
  );
}
