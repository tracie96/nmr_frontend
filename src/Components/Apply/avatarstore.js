import React from "react";
import Header from "../header/header";

export default function AvatarStore() {
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
          >Nwankwo Metaverse Records avatar store</div>

          <p style={{ margin: "20px auto" }}>
          Shop now!  We have partnered with world class manufacturers to produce Nwankwo Metaverse Records branded digital wear and products, thereby ensuring that you get the best experience on your record journey.
          </p>
          <p style={{ margin: "20px auto" }}>
          Shoppers might need to have a dedicated avatar.
          </p>
          <p style={{ margin: "20px auto" }}>
          Shop our branded digital wears and products.
          </p>
          <p style={{ margin: "20px auto" }}>
          **We will have list of wears and products here
          </p>
        
        </div>
      </div>
    </div>
  );
}
