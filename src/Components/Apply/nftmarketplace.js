import React,{useState} from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Bag from "../../bag.svg";
import NMR from "../../nmr.svg";


export default function NFTMarketplace() {
  const [auth, setAuth] = useState(false);
const [colorChange] = useState(false);
const [itemCount, setItemCount] = React.useState(0);
const isListed = JSON.parse(localStorage.getItem('list'));

const handleLogin = () => {
  window.open(
    "http://localhost:3001/horizon-ui-chakra#/auth/sign-in",
    "_blank"
  );
  setAuth(true);
};
const handleItemAdd = () => {
  setItemCount(itemCount + 1);
};
  return (
    <div className="a2L">
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
          >NFTs marketplace</div>

          <p style={{ margin: "20px auto" }}>
            Nwankwo Metaverse Records main NFT and any of its duplicates can
            only be sold on and also, with the ability to change the selling
            price at any time on the Nwankwo Metaverse Records NFTs marketplace.
            Third parties that want to buy/own/hold or sell an Nwankwo Metaverse
            Records main NFT and or any of its duplicates, of favourite
            individuals or organizations, will need to have or create an account
            to be able to carry out these acts or transactions.
            {/* <Link style={{ textDecoration: "underline", color: "#fff" }}>
              human
            </Link>{" "}
            you must submit a{" "}
            <Link style={{ textDecoration: "underline", color: "#fff" }}>
              web form
            </Link>{" "} */}
            that must include, but not limited to information about the
            privileges that the buyer/holder would get. The privileges that were
            on the NFT before a current holder purchased it could be passed on
            to the next buyer/holder. Read about our NFT and find more
            information you may need about the NFTs marketplace.
          </p>
          <p style={{ margin: "20px auto" }}>
            If you are not the initial human you must submit a web form that
            must include, but not limited to information about the privileges
            that the buyer/holder would get. The privileges that were on the NFT
            before a current holder purchased it could be passed on to the next
            buyer/holder. Only an approval from NMR, subsequent to the web form
            completion/submission permits the main NFT/duplicate holder (but not
            applicable to the initial human) to sell it on our NFTs marketplace.
          </p>
          <p style={{ margin: "20px auto" }}>
            We get 5 percent (%) of any amount an Nwankwo Metaverse Records main
            NFT and any of its duplicates was sold for. When a buyer makes a
            payment for a main NFT or its duplicate, the payment goes to NMR and
            the main NFT seller must complete the web form requesting for 95
            percent (%) of the proceeds from the sale to be paid into a provided
            bank account. The bank account name must match with the name (first
            name and last name) on the NMR account of the main NFT seller.{" "}
          </p>
          <p style={{ margin: "20px auto" }}>
          <div className="a1R a3 a1S">
          {isListed === true ?  <div className="a4 ak md:a1T/2 lg:a1T/3 2xl:a1T/4">
              <div
                className="a1U a1V a1W a1G aM a2T[18px]"
                style={{ height: "500px" }}
              >
                <div className="af a1Y a2p av">
                  <img
                    src={
                      "http://res.cloudinary.com/tracysoft/image/upload/v1684347649/lpgn9afoep59eukyvnpz.png"
                    }
                    alt="auctions"
                    className="a4"
                  />
                </div>
                <div>
                  <h3>
                    <Link to="" href="" className="a2D a2a a1Q aX aZ hover:a1u">
                      Adebanjo
                    </Link>
                  </h3>
                  <div className="a2b a3 a5 ah">
                    <div className="a4">
                      <div className="a3 a5">
                        <div className="a4">
                          <h4 className="a2Y aX aZ">
                            <span className="al a2Y a1o a1t">
                              listed by @Adebanjo
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="a4">
                      <h5 className="a33 a2Y aX aZ">
                        CAD 9
                        <span className="al a2Y a1o a1t"></span>
                      </h5>
                    </div>
                  </div>
                  {auth === false ? (
                    <div>
                      <Link
                        to=""
                        href=""
                        className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                        onClick={handleLogin}
                      >
                        Login to Add
                      </Link>
                    </div>
                  ) : (
                    <div className="a3 a5 ah a34 a1G a35">
                      <Link
                        to=""
                        href=""
                        className="a3 a5 a1Z a1f a1C aP ak a1n aX aZ a1w hover:a36 sm:a2u"
                        onClick={handleItemAdd}
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
                  )}
                </div>
              </div>
            </div> :"No Item Listed"}
           

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
                    </p>
        </div>
      </div>
    

    </div>
  );
}
