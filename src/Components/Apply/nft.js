import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function NFT() {
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
          >NFT</div>
          <p style={{ margin: "20px auto" }}>
            The Nwankwo Metaverse Records main non-fungible token (NFT) issued
            to metaverse record achievers possesses amazing values. From its
            super slick 3D appearance, the priviledges it brings to you and or
            your organization, and everything in between. These priviledges come
            from us and possibly from{" "}
            <Link to="" style={{ color: "#fff", textDecoration: "underline" }}>
              our partners
            </Link>{" "}
            and initial{" "}
            <Link to="" style={{ color: "#fff", textDecoration: "underline" }}>
              humans
            </Link>
            . A total of 4 varying privileges (1 permanent privilege from NMR
            and 3 changeable privileges from the NFT seller- with at least 2 of
            the 3 providing real-world return) is what the holder would be
            accessible to on any NMR main NFT.
          </p>
          <p style={{ margin: "20px auto" }}>
            Our NFT has 2 versions: the main and the demo. Only the main is
            issued initially and bears all priviledges exclusively. We issue the
            demo to the initial human only when the main has been sold and this
            demo version is not transferable in any way. The aim of the demo
            version is to keep the unforgettable moments fresh and close to the
            achievers.
          </p>
          <p style={{ margin: "20px auto" }}>
          The main NFT we issue must not be duplicated without the consent and approval of Nwankwo Metaverse Records. Only the holder can and must get approval from NMR, subsequent to completing/submitting a web form to us requesting for a main NFT duplicate. The main NFT can only be duplicated in not more than 2 places. Duplicates here could be done by holders for many reasons such as fashion (using the NFT on jewelry/pendant), business related for NFTs permitted for commercial purposes by NMR, e.t.c.
          </p>
          <p style={{ margin: "20px auto" }}>
            The main NFT together with any duplicates must be held by the
            initial human for not less than 6 months from issue date before it
            can be sold to a third party on the NFTs marketplace. When a holder
            is selling the main NFT, the duplicates could be sold alongside the
            main NFT or any of the main NFT and each of the 2 duplicates sold
            independently on the NFTs marketplace.{" "}
          </p>{" "}
        </div>
        {/* <p className="a21 a22 a1O"> The NMR NFTs marketplace</p>
        <p style={{ margin: "20px auto" }}>
        Nwankwo Metaverse Records main NFT and any of its duplicates can only be
        sold on and also, with the ability to change the selling price at any
        time on the Nwankwo Metaverse Records NFTs marketplace. Third parties
        that want to buy/own/hold or sell an Nwankwo Metaverse Records main NFT
        and or any of its duplicates, of favourite individuals or organizations,
        will need to have or create an account to be able to carry out these
        acts or transactions. If you are not the initial human you must submit a
        web form that must include, but not limited to information about the
        privileges that the buyer/holder would get.
        The privileges that were on the NFT before a current holder purchased it
        could be passed on to the next buyer/holder.
      </p> */}

      {/* <p style={{ margin: "20px auto" }}>
        We get 5 percent (%) of any amount an Nwankwo Metaverse Records main NFT
        and any of its duplicates was sold for. When a buyer makes a payment for
        a main NFT or its duplicate, the payment goes to NMR and the main NFT
        seller must complete the web form requesting for 95 percent (%) of the
        proceeds from the sale to be paid into a provided bank account. The bank
        account name must match with the name of the first name and last name on
        the NMR account of the main NFT seller.
      </p> */}
      </div>
    
    </div>
  );
}
