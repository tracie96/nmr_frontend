import React, { useState } from "react";
import Home from "../../newheader.mp4";
import Newhome from "../../new_logo.png";

import Common from "../../common-bg.jpeg";
import NMR from "../../nmr.svg";
import Bag from "../../bag.svg";
import Logo from "../../nmr.png";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
export default function Index() {
  const [itemCount, setItemCount] = React.useState(0);
  const [showbutton, setShowutton] = React.useState(false);
  const [auth, setAuth] = useState(false);
  const [colorChange] = useState(false);
  const isListed = JSON.parse(localStorage.getItem('list'));

  const handleLogin = () => {
    window.open(
      "/signin",
      "_blank"
    );
    setAuth(true);
  };
  const showButton = () => {
    setShowutton(!showbutton);
  };
  const handleItemAdd = () => {
    setItemCount(itemCount + 1);
  };
  localStorage.setItem("item", itemCount);
  console.log(auth);
  return (
    <div>
      <header
        x-data="
        {
          navbarOpen: false,
          submenuOpen: false
        }
      "
        className="header a1 a2 a3 a4 a5 a6 a7 a8"
        style={{ zIndex: "999999999", background: colorChange ? "#000" : "" }}
      >
        <div className="ae">
          <div className="af ag[-16px] a3 a5 ah">
            <div className="ai aj ak">
              <Link to="/" href="index.html" className="header-logo al a4">
                <img
                  src={Logo}
                  alt="logo"
                  className="aq aj"
                  width="300px"
                  height="500px"
                />
              </Link>
            </div>
            <div className="a3 a4 a5 ah ak">
              <div>
                <button
                  id="navbarToggler"
                  name="navbarToggler"
                  aria-label="navbarToggler"
                  className="ar as at/2 al au[-50%] av aw ax[6px] ay focus:az lg:aA navbarTogglerActive"
                >
                  <span className="af aE[6px] al aF[2px] aG[30px] aH"></span>
                  <span className="af aE[6px] al aF[2px] aG[30px] aH"></span>
                  <span className="af aE[6px] al aF[2px] aG[30px] aH aD[-8px] aJ[135deg]"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="ar as aK a4 aL[250px] aA av aM aN lg:aO lg:al lg:a4 lg:aj lg:a6 aP lg:aQ lg:ak lg:aR xl:aS"
                  style={{ padding: "0px" }}
                >
                  <ul className="aT lg:a3">
                    <li className="aU submenu-item af">
                      <Link
                        to=""
                        className="af aV a3 an aW aX aY[#bababa] after:ar after:a15 after:at/2 after:a16[-2px] after:a17 after:a18 after:au[-50%] after:aC after:a19 after:a1a after:a1b group-hover:aZ lg:a_ lg:a13 lg:a10 lg:a11 lg:a1c lg:a1d lg:after:a1e xl:a14"
                      >
                        Records
                      </Link>
                      <div className="submenua al af aK a2 aG[250px] a1f aa a1g a1h[top] a1i group-hover:a1j lg:a1k lg:ar lg:aD[110%] lg:al lg:aI lg:aN lg:group-hover:a1l lg:group-hover:aK">
                        <Link
                          to="/apply"
                          href="explore-items.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Apply (Set or Break)
                        </Link>

                        <Link
                          to="/fasttrack"
                          href="explore-items.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Fast track application
                        </Link>

                        <Link
                          to="/findadvisor"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Find an Advisor
                        </Link>
                        <Link
                          to="/getanobserver"
                          href="create-item.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Get an Observer
                        </Link>
                        <Link
                          to="/recordroadmap"
                          href="connect-wallet.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Record roadmap
                        </Link>
                        <Link
                          to="/verification"
                          href="support.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Nwankwo Metaverse Records verification
                        </Link>

                        <Link
                          to="/worthiness"
                          href="signin.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Nwankwo Metaverse Records title worthiness
                        </Link>
                        <Link
                          to="/processingtime"
                          href="explore-items.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Processing time
                        </Link>
                        <Link
                          to="/fulfilment"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Record fulfilment
                        </Link>

                        <Link
                          to="/attempt"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Record attempt
                        </Link>
                        <Link
                          to="/recordtrial"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Nwankwo Metaverse Records trial
                        </Link>
                      </div>
                    </li>
                    <li className="aU submenu-item af">
                      <Link
                        to=""
                        className="af aV a3 an aW aX aY[#bababa] after:ar after:a15 after:at/2 after:a16[-2px] after:a17 after:a18 after:au[-50%] after:aC after:a19 after:a1a after:a1b group-hover:aZ lg:a_ lg:a13 lg:a10 lg:a11 lg:a1c lg:a1d lg:after:a1e xl:a14"
                      >
                        What We Make
                      </Link>
                      <div className="submenu submenuOpen ? 'al' : 'aA' af aK a2 aG[250px] a1f aa a1g a1h[top] a1i group-hover:a1j lg:a1k lg:ar lg:aD[110%] lg:al lg:aI lg:aN lg:group-hover:a1l lg:group-hover:aK">
                        <Link
                          to="/nft"
                          href="explore-items.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          NFT
                        </Link>
                        <Link
                          to="/store"
                          href="explore-items.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Store
                        </Link>
                        <Link
                          to="/nftmarket"
                          href="item-details.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          NFT
                          <span style={{ textTransform: "lowercase" }}>
                            s
                          </span>{" "}
                          marketplace
                        </Link>
                        <Link
                          to="/avatarstore"
                          href="create-item.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Nwankwo Metaverse Records avatar store
                        </Link>
                        <Link
                          to="/recordmuseum"
                          href="connect-wallet.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Nwankwo Metaverse Records museum
                        </Link>
                      </div>
                    </li>
                    <li className="aU submenu-item af">
                      <Link
                        to=""
                        className="af aV a3 an aW aX aY[#bababa] after:ar after:a15 after:at/2 after:a16[-2px] after:a17 after:a18 after:au[-50%] after:aC after:a19 after:a1a after:a1b group-hover:aZ lg:a_ lg:a13 lg:a10 lg:a11 lg:a1c lg:a1d lg:after:a1e xl:a14"
                      >
                        Resources
                      </Link>
                      <div className="submenu af aK a2 aG[250px] a1f al aa a1g a1h[top] a1i group-hover:a1j lg:a1k lg:ar lg:aD[110%] lg:al lg:aI lg:aN lg:group-hover:a1l lg:group-hover:aK">
                        <Link
                          to="/businness"
                          href="explore-items.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          For business
                        </Link>
                        <Link
                          to="/government"
                          href="item-details.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          For government and politics
                        </Link>
                        <Link
                          to="/advocacy"
                          href="create-item.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          For advocacy
                        </Link>
                        <Link
                          to="/educators"
                          href="connect-wallet.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          For educators
                        </Link>
                      </div>
                    </li>
                    <li className="aU submenu-item af">
                      <Link
                        to=""
                        className="af aV a3 an aW aX aY[#bababa] after:ar after:a15 after:at/2 after:a16[-2px] after:a17 after:a18 after:au[-50%] after:aC after:a19 after:a1a after:a1b group-hover:aZ lg:a_ lg:a13 lg:a10 lg:a11 lg:a1c lg:a1d lg:after:a1e xl:a14"
                      >
                        Who We Are
                      </Link>
                      <div className="submenu submenuOpen ? 'al' : 'aA'  af aK a2 aG[250px] a1f aa a1g a1h[top] a1i group-hover:a1j lg:a1k lg:ar lg:aD[110%] lg:al lg:aI lg:aN lg:group-hover:a1l lg:group-hover:aK">
                        <Link
                          to="/ourstory"
                          href="explore-items.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Our story
                        </Link>
                        <Link
                          to="/ourvm"
                          href="item-details.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Our vision, mission, and values
                        </Link>
                        <Link
                          to="/ourculture"
                          href="create-item.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Our culture
                        </Link>
                        <Link
                          to=""
                          href="connect-wallet.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Our leadership, partners, and consultants
                        </Link>
                        <Link
                          to=""
                          href="connect-wallet.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Our offices
                        </Link>
                        <Link
                          to=""
                          href="connect-wallet.html"
                          className="al a1m ax[10px] ak a1n a1o aY[#bababa] hover:aZ"
                        >
                          Contact us
                        </Link>
                      </div>
                    </li>
                    <li className="aU af">
                      <Link
                        to=""
                        href="index.html"
                        className="aV a3 an aW aX aZ group-hover:aZ lg:a_ lg:a10 lg:a11 lg:a12"
                      >
                        Press
                      </Link>
                    </li>
                    <li className="aU af">
                      <Link
                        to=""
                        href="index.html"
                        className="aV a3 an aW aX aZ group-hover:aZ lg:a_ lg:a10 lg:a11 lg:a12"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="aA a1p a1q sm:a3 lg:a1r">
                <div className="aU af aA md:a3">
                  <button
                    className="aP aW aX a1t a7 hover:a1u lg:ak xl:a1s"
                    name="search"
                    aria-label="search"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2917 3.25C12.1592 3.25 13.9503 3.99189 15.2709 5.31246C16.5914 6.63303 17.3333 8.4241 17.3333 10.2917C17.3333 12.0358 16.6942 13.6392 15.6433 14.8742L15.9358 15.1667H16.7917L22.2083 20.5833L20.5833 22.2083L15.1667 16.7917V15.9358L14.8742 15.6433C13.6392 16.6942 12.0358 17.3333 10.2917 17.3333C8.4241 17.3333 6.63303 16.5914 5.31246 15.2709C3.99189 13.9503 3.25 12.1592 3.25 10.2917C3.25 8.4241 3.99189 6.63303 5.31246 5.31246C6.63303 3.99189 8.4241 3.25 10.2917 3.25ZM10.2917 5.41667C7.58333 5.41667 5.41667 7.58333 5.41667 10.2917C5.41667 13 7.58333 15.1667 10.2917 15.1667C13 15.1667 15.1667 13 15.1667 10.2917C15.1667 7.58333 13 5.41667 10.2917 5.41667Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div className="a1k ar aD[110%] a1e aG[250px] a1f aa a1v aI a1w group-hover:a1l group-hover:aK group-hover:a1j">
                    <form className="a3">
                      <input
                        type="text"
                        placeholder="Search here..."
                        className="a4 a6 an ak aZ a1x"
                      />
                      <button
                        className="aZ"
                        name="search-button"
                        aria-label="search-button"
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2917 3.25C12.1592 3.25 13.9503 3.99189 15.2709 5.31246C16.5914 6.63303 17.3333 8.4241 17.3333 10.2917C17.3333 12.0358 16.6942 13.6392 15.6433 14.8742L15.9358 15.1667H16.7917L22.2083 20.5833L20.5833 22.2083L15.1667 16.7917V15.9358L14.8742 15.6433C13.6392 16.6942 12.0358 17.3333 10.2917 17.3333C8.4241 17.3333 6.63303 16.5914 5.31246 15.2709C3.99189 13.9503 3.25 12.1592 3.25 10.2917C3.25 8.4241 3.99189 6.63303 5.31246 5.31246C6.63303 3.99189 8.4241 3.25 10.2917 3.25ZM10.2917 5.41667C7.58333 5.41667 5.41667 7.58333 5.41667 10.2917C5.41667 13 7.58333 15.1667 10.2917 15.1667C13 15.1667 15.1667 13 15.1667 10.2917C15.1667 7.58333 13 5.41667 10.2917 5.41667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
                <Link
                to="/signin"
                onClick={handleLogin}
                target="blank"
                className="a3 a5 a1f a1y a1z aP btnn aS aW aX aZ a7 a1i a1A hover:a1B hover:a1C lg:ak xl:aS"
                >
                  <span className="a1D">
                    <svg
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.125 17.75V18.7083C20.125 19.2167 19.9231 19.7042 19.5636 20.0636C19.2042 20.4231 18.7167 20.625 18.2083 20.625H4.79167C3.72792 20.625 2.875 19.7625 2.875 18.7083V5.29167C2.875 4.78333 3.07693 4.29582 3.43638 3.93638C3.79582 3.57693 4.28334 3.375 4.79167 3.375H18.2083C18.7167 3.375 19.2042 3.57693 19.5636 3.93638C19.9231 4.29582 20.125 4.78333 20.125 5.29167V6.25H11.5C10.4363 6.25 9.58333 7.1125 9.58333 8.16667V15.8333C9.58333 16.3417 9.78527 16.8292 10.1447 17.1886C10.5042 17.5481 10.9917 17.75 11.5 17.75H20.125ZM11.5 15.8333H21.0833V8.16667H11.5V15.8333ZM15.3333 13.4375C14.9521 13.4375 14.5865 13.286 14.3169 13.0165C14.0473 12.7469 13.8958 12.3812 13.8958 12C13.8958 11.6188 14.0473 11.2531 14.3169 10.9835C14.5865 10.714 14.9521 10.5625 15.3333 10.5625C15.7146 10.5625 16.0802 10.714 16.3498 10.9835C16.6194 11.2531 16.7708 11.6188 16.7708 12C16.7708 12.3812 16.6194 12.7469 16.3498 13.0165C16.0802 13.286 15.7146 13.4375 15.3333 13.4375Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  {auth === true ? ' Join' : 'Login / Join'}
                </Link>
              </div>
            </div>
            <div>
              <Badge
                color="secondary"
                badgeContent={itemCount}
                style={{ padding: "10px" }}
              >
                <Link to="checkout" style={{ color: "#fff" }}>
                  <ShoppingCartIcon color="#fff" onClick={showButton} />
                </Link>
              </Badge>
            </div>
          </div>
        </div>
      </header>
      <section
        id="home"
        className="af a2o a2p a38 a39 a3a a1E[150px] a1F"
        style={{ backgroundImage: `url(${Common})` }}
      >
        <div
          className="ar a2 a1 a3b a30 a4"
          style={{
            "--color-1": "rgba(20,20,32,0.65)",
            "--color-2": "#141420",

            background: `
            linear-gradient(
                180deg,
              var(--color-1) 0%,
              var(--color-2) 100%
            )
          `,
          }}
        ></div>
        <div className="ae">
          <div className="a1R a3 a1S a5">
            <div className="a4 ak lg:a1T/2">
              <div className="a2w aL[570px] lg:a2x">
                <h1
                  className="a1M aY[40px] a1O a1P aZ md:aY[30px] lg:aY[40px] xl:aY[46px] 2xl:aY[30px] sm:text-[46px]"
                  style={{ fontSize: "30px" }}
                >
                  <b>
                    Metaverse (virtual worlds / digital twin worlds) record
                    recognitions authority
                  </b>
                </h1>
                <p className="a2e a1Q a1o a3c a1t md:a3d">
                  Nwankwo Metaverse Records issue record titles to metaverse
                  citizens and avatars that pushed it across the line.
                </p>
                <div className="flex flex-wrap items-center">
                  <Link
                    to=""
                    href="explore-items.html"
                    className="a2c a1Y a10 a5 a1Z a1f a1y a1B a1C aP a1s aW aX aZ a1w hover:a36"
                  >
                    Explore Opportunities
                  </Link>
               
                </div>
              </div>
            </div>
            <div className="a4 ak lg:a1T/2">
              <div className="a1L">

              </div>
            </div>
          </div>
        </div>

        <div className="a0" style={{ background: "#000" }}>
          <span className="ar a3e a3f a3b">
            <svg
              width="111"
              height="115"
              viewBox="0 0 111 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_21_53)">
                <g filter="url(#filter1_i_21_53)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M73.287 91.7144C92.1417 80.8286 98.5953 56.729 87.7122 37.8789C76.8291 19.0288 52.7314 12.568 33.8767 23.4537C15.0312 34.3342 8.56843 58.4391 19.4515 77.2892C30.3346 96.1393 54.4415 102.595 73.287 91.7144Z"
                    fill="url(#paint0_linear_21_53)"
                  />
                </g>
                <path
                  opacity="0.7"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M69.4961 86.3067C86.2379 76.6408 91.9683 55.2418 82.3048 38.5041C72.6412 21.7663 51.244 16.0295 34.5021 25.6954C17.7685 35.3566 12.0299 56.7603 21.6934 73.498C31.357 90.2358 52.7625 95.9679 69.4961 86.3067Z"
                  fill="url(#paint1_radial_21_53)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_21_53"
                  x="-3.83423"
                  y="0.165771"
                  width="114.834"
                  height="114.834"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="9"
                    result="effect1_foregroundBlur_21_53"
                  />
                </filter>
                <filter
                  id="filter1_i_21_53"
                  x="14.1658"
                  y="10.1658"
                  width="86.8342"
                  height="86.8342"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="8" dy="-8" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.321569 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_21_53"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_21_53"
                  x1="31.6878"
                  y1="19.1263"
                  x2="63.3007"
                  y2="99.1224"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EBC77A" />
                  <stop offset="0.541667" stopColor="#CA3F8D" />
                  <stop offset="1" stopColor="#5142FC" />
                </linearGradient>
                <radialGradient
                  id="paint1_radial_21_53"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(56.6039 36.9093) rotate(63.4349) scale(29.0091)"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          <div className="ar a2 a1 a3b a3 a30 a4 a3g a3h">
            <span className="a30 aG[1.1px] a3i a3j a3k aA lg:a3"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k aA lg:a3"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k aA lg:a3"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k aA md:a3"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k aA md:a3"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k aA md:a3"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k"></span>
            <span className="a30 aG[1.1px] a3i a3j a3k"></span>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="a1E[90px]"
        style={{ backgroundColor: "rgb(20 20 32 / var(--tw-bg-opacity))" }}
      >
        <div className="ae">
          <div className="a1J a1K aL[650px] a1L">
            <h2 className="a1M a1N a1O a1P aZ sm:aY[42px]">Records</h2>
          </div>
          <div className="a1R a3 a1S">
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/3">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  APPLY (Set or Break)
                </h3>
                <p className="aW a1o a1t">
                  Achievement accomplished in the metaverse? Find information on
                  how you (individuals and or organizations) can set or break
                  records when you create novel boundaries with your avatar.{" "}
                </p>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/3">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  FAST TRACK APPLICATION
                </h3>
                <p className="aW a1o a1t">
                  Our paid fast track application process helps you leap into
                  the limitless values of holding a Nwankwo Metaverse Records
                  title.
                </p>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/3">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  FIND AN ADVISOR
                </h3>
                <p className="aW a1o a1t">
                  Get a helping hand you may need not just for advisory on how
                  to successfully apply to set or break a record in the
                  metaverse, but also we could on request dedicate an Advisor to
                  help bring out the best on workforce recognition awards in
                  your organization.
                </p>
              </div>
            </div>

            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/3">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  GET AN OBSERVER
                </h3>
                <p className="aW a1o a1t">
                  If you get an Observer for your metaverse record attempt that
                  could lead to a metaverse record title, we may be contacting
                  you to confirm the state of your record attempt. This will
                  help us know the XR hardware needed to ensure the NMR Observer
                  has a hitch free process being present for your attempt.
                </p>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/3">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  RECORD ATTEMPT
                </h3>
                <p className="aW a1o a1t">
                  Activities done personally or ones that were hosted by other
                  organizations or individuals and you (individual or
                  organization) participated, could lead to achieving an Nwankwo
                  Metaverse Records title.{" "}
                </p>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/3">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">NMR TRIAL</h3>
                <p className="aW a1o a1t">
                  Do you (individual and or organization) have what it takes to
                  be first-timer or beat the best? We have teamed up with
                  metaverse/ virtual worlds’ creators and builders to make
                  record titles opportunities available to metaverse citizens
                  like you, get in the conversation now.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="a2L">
        <div className="ae">
          <div className="a2w a3l a1z a3m">
            <div className="ah sm:a3">
              <h2 className="a1M a3n a1O a3r aZ">Explore Opportunities</h2>
            </div>
          </div>
          <h3
            className="a1M a3n a1O a3r aZ"
            style={{ fontSize: "20px", margin: "5% auto" }}
          >
            NFTs marketplace
          </h3>
          <div className="a1R a3 a1S">


          {auth === false?"Login to add": isListed? isListed.map(items=>{
                <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
                <div className="a1U a1V a1W a1G aM a2T[18px]">
                  <div className="af a1Y a2p av">
                    <img
                      src={items.url}
                      alt="auctions"
                      className="a4"
                      style={{ width: "260px", height: "146px" }}
                    />
                  </div>
                  <div>
                    <h3>
                      <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                       {items.title}
                      </Link>
                    </h3>
                    <div className="a2b a3 a5 ah">
                      <div className="a4">
                        <div className="a3 a5">
                          <div className="a4">
                            <h4 className="a2Y aX aZ">
                              {items.user}
                              <span className="al a2Y a1o a1t">listed by</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="a4">
                        <h5 className="a33 a2Y aX aZ">
                          {items.price} <span className="al a2Y a1o a1t"></span>
                        </h5>
                      </div>
                    </div>
                    <div className="a3 a5 ah a34 a1G a35">
                      <Link
                        to=""
                        href=""
                        className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                      >
                        Pay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          }):"No NFT Created"}

            <div style={{ display: "block", padding: 30 }}>
              <div>
                {/* <ButtonGroup>
                  <Button
                    onClick={() => {
                      setItemCount(Math.max(itemCount - 1, 0));
                    }}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => {
                      setItemCount(itemCount + 1);
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup> */}
              </div>
            </div>

            <div className="a4 ak">
              <div className="a2L a1L">
                <Link
                  to=""
                  href=""
                  className="a10 a5 a1Z a1f a1y a1z aP a1s aW aX aZ a1w hover:a1B hover:a1C"
                >
                  Load More...
                </Link>
              </div>
            </div>
          </div>
          <h3
            className="a1M a3n a1O a3r aZ"
            style={{ fontSize: "20px", margin: "5% auto" }}
          >
            Nwankwo Metaverse Records trial
          </h3>
          <div className="a1R a3 a1S">
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img
                    src={NMR}
                    alt="auctions"
                    className="a4"
                    style={{ width: "260px", height: "146px" }}
                  />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @user_name...
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85 <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
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

            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img
                    src={NMR}
                    alt="auctions"
                    className="a4"
                    style={{ width: "260px", height: "146px" }}
                  />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-02.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4"></div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
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
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img
                    src={NMR}
                    alt="auctions"
                    className="a4"
                    style={{ width: "260px", height: "146px" }}
                  />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-03.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name...
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4"></div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
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
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img
                    src={NMR}
                    alt="auctions"
                    className="a4"
                    style={{ width: "260px", height: "146px" }}
                  />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-04.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4"></div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
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

            <div className="a4 ak">
              <div className="a2L a1L">
                <Link
                  to=""
                  href=""
                  className="a10 a5 a1Z a1f a1y a1z aP a1s aW aX aZ a1w hover:a1B hover:a1C"
                >
                  Load More...
                </Link>
              </div>
            </div>
          </div>
          <h3
            className="a1M a3n a1O a3r aZ"
            style={{ fontSize: "20px", margin: "5% auto" }}
          >
            Nwankwo Metaverse Records avatar store
          </h3>
          <div className="a1R a3 a1S">
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-01.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85
                        <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-02.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85
                        <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-03.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name...
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85
                        <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-04.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85 <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="a4 ak">
              <div className="a2L a1L">
                <Link
                  to=""
                  href=""
                  className="a10 a5 a1Z a1f a1y a1z aP a1s aW aX aZ a1w hover:a1B hover:a1C"
                >
                  Load More...
                </Link>
              </div>
            </div>
          </div>

          <h3
            className="a1M a3n a1O a3r aZ"
            style={{ fontSize: "20px", margin: "5% auto" }}
          >
            Store
          </h3>
          <div className="a1R a3 a1S">
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-01.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85
                        <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-02.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85
                        <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-03.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name...
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85
                        <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="a1U a1V a1W a1G aM a2T[18px]">
                <div className="af a1Y a2p av">
                  <img src={Bag} alt="auctions" className="a4" />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      3d abstract illustration
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a2Z a2_ a4 aL[32px] a1f">
                          <img
                            src="images/picks/creator-04.png"
                            alt="creator"
                            className="a30 a4 a31 a32"
                          />
                        </div>
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            @company_name
                            <span className="al a2Y a1o a1t">listed by</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        $ 2.85 <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="a3 a5 ah a34 a1G a35">
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to=""
                      href=""
                      className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="a4 ak">
              <div className="a2L a1L">
                <Link
                  to=""
                  href=""
                  className="a10 a5 a1Z a1f a1y a1z aP a1s aW aX aZ a1w hover:a1B hover:a1C"
                >
                  Load More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="a1E[90px]"
        style={{ backgroundColor: "rgb(20 20 32 / var(--tw-bg-opacity))" }}
      >
        <div className="ae">
          <div className="a1J a1K aL[650px] a1L">
            <h2 className="a1M a1N a1O a1P aZ sm:aY[42px]">Meet the People</h2>
            <p className="a1Q a1o a1t">
              Meet the people that help bring your NMR experience to life!
            </p>
          </div>
          <div className="a1R a3 a1S">
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">Editors</h3>
                <p className="aW a1o a1t">
                  Lorem ipsum dolor sit amet consectetur smit.
                </p>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  Metaverses
                </h3>
                <p className="aW a1o a1t">
                  Lorem ipsum dolor sit amet consectetur smit.
                </p>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  Organizations
                </h3>
                <p className="aW a1o a1t">
                  Lorem ipsum dolor sit amet consectetur smit.
                </p>
              </div>
            </div>
            <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div className="aU a1U a1V a1W a1G aM a1X a1w hover:a1z hover:aH">
                <div className="a1Y "></div>
                <h3 className="a21 a22 a1O aZ a7 group-hover:a23">
                  Consultants
                </h3>
                <p className="aW a1o a1t">
                  Lorem ipsum dolor sit amet consectetur smit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
