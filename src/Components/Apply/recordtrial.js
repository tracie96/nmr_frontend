import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import "./pricing.css";
export default function Recordtrial() {
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
        <div className="container">
          <div
            style={{
              fontSize: "2rem",
              textTransform: "initial",
              fontWeight: "bold",
              marginTop: "2%",
              color: "#ff7a00",
              textAlign: "center",
            }}
          >
            Nwankwo Metaverse Records trial
          </div>
          <p style={{ margin: "20px auto" }}>
            Do you (individual and or organization) have what it takes to be a
            first-timer or beat the best? We have teamed up with
            metaverse/virtual/mixed worlds’ creators and builders to make preset
            record titles opportunities available to metaverse citizens like
            you, get in the conversation now from anywhere around the world. We
            also offer exclusive real-time virtual training.
          </p>

          <p style={{ margin: "20px auto" }}>
            All you need is to get your trial pass from the links below and have
            your XR hardware such as VR headsets and controllers, and more.
            Don’t have XR hardware? You can visit any of our offices today for
            your trials. You can access the trials from the links below (and it
            redirects to our partner’s websites) or from any of our partner’s
            websites. For best experience, make sure you purchase a trial pass
            that will take you through the trial, insufficient pass could
            affect your record setting or breaking chances. We advise that it
            could be best for all participants in a trial to use one brand of
            hardware, although this is not a criteria considered during record
            application processing.
          </p>
          <p style={{ margin: "20px auto" }}>
            You can make suggestions on activities and associated record titles
            that you would like to try out by submitting a{" "}
            <Link to="" style={{ color: "#fff", textDecoration: "underline" }}>
              web form
            </Link>
            , if approved it will be on the NMR trial list below and you will
            get a discount as you purchase pass.
          </p>

          <p style={{ margin: "20px auto" }}>
            Some trials may need the participants to have a dedicated{" "}
            <Link to="" style={{ color: "#fff", textDecoration: "underline" }}>
              avatar
            </Link>
            .
          </p>

          <p style={{ margin: "20px auto" }}>
            If you{" "}
            <Link to="" style={{ color: "#fff", textDecoration: "underline" }}>
              get an observer{" "}
            </Link>
            for your Nwankwo Metaverse Records trial that could lead to a
            metaverse record title, we may be contacting you to confirm the
            state of your record trial. This will help us know the XR hardware
            (VR for full immersion or the activities brought to our Advisors
            with AR) needed to ensure the NMR Observer has a hitch free process
            being present for your trial.
          </p>

          <p style={{ margin: "20px auto" }}>
            By accepting the consent and disclaimer, you are consenting us to
            contact you by email or call and verify your identity by asking you
            the answers to security questions you provided and other personal
            information.
          </p>

          <Link
            to=""
            className="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s hover:a36"
            style={{ margin: "" }}
          >
            Get an NMR Observer
          </Link>

          <div class="container text-center">
            <div class="row">
              <div class="col">
                <div
                  class="max-w-sm rounded overflow-hidden shadow-lg"
                  style={{ background: "#fff" }}
                >
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">3 Trials</div>
                    <p class="text-gray-700 text-base">{/* 24 Hours */}</p>
                    <p class="text-gray-700 text-base">$9.99</p>
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
                    <div class="font-bold text-xl mb-2">1 Week</div>
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
                    <div class="font-bold text-xl mb-2">7 Days</div>
                    <p class="text-gray-700 text-base"></p>
                    <p class="text-gray-700 text-base">$149.99</p>
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
    </div>
  );
}
