import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";

export default function RecordMuseum() {
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
          >Nwankwo Metaverse Records museum</div>
          <p style={{ margin: "20px auto" }}>
            If you are reading this, you are on our museum page. This will be
            your reference point to get links to every record title and main{" "}
            <Link to="" style={{ color: "#fff", textDecoration: "underline" }}>
              NFT
            </Link>{" "}
            display of current and past metaverse record title holders you want
            to see.
          </p>
          <p style={{ margin: "20px auto" }}>
            Our sophisticated digital museum is accessible from anywhere at any
            time, be it from the comfort of your living room, while travelling,
            in the classroom, e.t.c. You just need your tour pass and devices
            like phone, computer, virtual reality (VR) devices such as VR
            headsets and controllers, augmented reality (AR) devices, missed
            reality (MR) devices, or extended reality (XR) devices - that
            encompasses the 3 areas and interpolations among them. Guests may
            need to have a dedicated avatar.
          </p>
          <p style={{ margin: "20px auto" }}>
            Want to fully immerse and don’t have VR devices or any other devices
            needed to access our museum? You can visit any of our offices and
            utilize the wide range of devices available to fully immerse/access
            our museum, best in the company of friends, loved ones, and even
            your students. Main NFT holders have the privilege of unlimited
            access to the museum.{" "}
          </p>{" "}
          <p style={{ margin: "20px auto" }}>
            In our museum you only have to walk around and you will see and
            discover:
          </p>
          <ul style={{ margin: "20px auto", listStyle: "initial" }}>
            <li><b>Names and incredible record titles by year</b></li>
            <li><b>Paths to record titles</b></li>
            <li><b>First-timers</b></li>
            <li><b>Categories by industry, teens achievements, e.t.c.</b></li>
          </ul>
          <p style={{ margin: "20px auto" }}>
            You have various tour pass options to pick from: **We will have list
            of tour time options with associated cost Visit any of our offices.
            **We will have list of the offices
          </p>
          <div class="row">
              <div class="col">
                <div
                  class="max-w-sm rounded overflow-hidden shadow-lg"
                  style={{ background: "#fff" }}
                >
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">3 Tours</div>
                    <p class="text-gray-700 text-base">{/* 24 Hours */}</p>
                    <p class="text-gray-700 text-base">$19.99</p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="max-w-sm rounded overflow-hidden shadow-lg"
                  style={{ background: "#fff" }}
                >
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">7 days</div>
                    <p class="text-gray-700 text-base">{/* 720 Hours */}</p>
                    <p class="text-gray-700 text-base">$99.99</p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="max-w-sm rounded overflow-hidden shadow-lg"
                  style={{ background: "#fff" }}
                >
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">1 week</div>
                    <p class="text-gray-700 text-base"></p>
                    <p class="text-gray-700 text-base">$249.99</p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
