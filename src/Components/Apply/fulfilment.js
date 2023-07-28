import React from "react";
import Header from "../header/header";

export default function Fulfilment() {
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
          >Record fulfilment</div>

          <p style={{ margin: "20px auto" }}>
            To hold a Nwankwo Metaverse Records title means all round best
            practice kept by the best. All records come with expectations that
            must be fulfilled or kept by the avatar (during the metaverse
            activity) and human identified on the main NFT. Record fulfilment is
            sent one week before receipt of record.
          </p>
          <p style={{ margin: "20px auto" }}>
            In a case the record main NFT is sold out to a third party, the
            avatar and human identified on the NFT must keep adhering to the
            accompanying record fulfillment.
          </p>

          <p className="a21 a22 a1O">Policies</p>

          <p style={{ margin: "20px auto" }}>
            We strictly ensure that all Nwankwo Metaverse Records titles are in
            compliance with all associated NMR policies. Our policy list is
            updated frequently to ensure due diligence.
          </p>
        </div>
      </div>
    </div>
  );
}
