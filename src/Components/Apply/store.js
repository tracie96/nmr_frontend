import React from "react";
import Header from "../header/header";

export default function Store() {
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
          >Store</div>
          <p style={{ margin: "20px auto" }}>
            Shop now! Buy real life Nwankwo Metaverse Records branded consumer
            products.
          </p>
          <p style={{ margin: "20px auto" }}>
            Our products could be sold by partners, so you could purchase from
            your favourite e-commerce and walk-in stores in different countries
            of the world.
          </p>
          <p style={{ margin: "20px auto" }}>
            Need our avatar or metaverse product? Visit our avatar store.
          </p>
          <p style={{ margin: "20px auto" }}>
            Shop our branded consumer products.
          </p>
          <p style={{ margin: "20px auto" }}>
            **We will have list of wears and products here{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
