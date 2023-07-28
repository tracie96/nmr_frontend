import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function Business() {
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
          >For business</div>
          <p style={{ margin: "20px auto" }}>
            Bringing Nwankwo Metaverse Records into your business brings better
            experience when you have a product to launch or market, when you
            want to attempt a record, when you celebrate those remarkable
            accomplishments, when you want to reward your outstanding team
            members, and more. This can be in the form of a title issuing for
            your metaverse records and or licensing for use of the official
            Nwankwo Metaverse Records logo and NWANKWO METAVERSE RECORDS™️ for
            your business use.{" "}
          </p>
          <p style={{ margin: "20px auto" }}>
          By accepting the consent and disclaimer, you are consenting us to contact you by email or call and verify your identity by asking you the answers to security questions you provided and other personal information.
          </p>

          <p style={{ margin: "20px auto" }}>
            Ready, Set, Go! Talk to a record expert now!
          </p>
          <Link
            to=""
            class="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s hover:a36"
            style={{ margin: "" }}
          >
            Get in touch{" "}
          </Link>

          <p style={{ margin: "20px auto" }}>
          Do you need licensing for use of our official logo and trademark? fill and submit a web form.
            </p>

            <p style={{ margin: "20px auto" }}>Getting licensed to use Nwankwo Metaverse Records official logo boosts:</p>
            <ul style={{listStyle:"initial"}}>
  <li><b>Brand and product marketing</b></li>
  <li><b>Product launch strategies</b>
</li>
<li><b>Fundraising strategies</b>
</li>
<li><b>Ads aide</b>
</li>
<li><b>Recreational activities</b>
</li>
<li><b>Community engagement</b>
</li>
</ul>
<p style={{ margin: "20px auto" }}>Things that can lead to a Nwankwo Metaverse Records title:</p>

<ul style={{listStyle:"initial"}}>
  <li><b>Business anniversaries and accomplishments</b></li>
  <li><b>Workforce recognition</b></li>
</ul>

        </div>
      </div>
    </div>
  );
}
