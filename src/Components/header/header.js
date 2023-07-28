import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../HomeComponent/home.css";
import Logo from "../../nmr.png";
import { Badge } from "antd";
import { ShoppingCart } from "@material-ui/icons";
export default function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const itemCount = React.useState(1);

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
                <a
                  href="http://localhost:3001/horizon-ui-chakra#/auth/sign-in"
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
                  Login / Join
                </a>
              </div>
            </div>
            <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCart />{" "}
        </Badge>
          </div>
        </div>
      </header>
    </div>
  );
}
