import "./CheckoutForm.css";
import { Col, Row } from "antd";
let count = Number(localStorage.getItem("item"));

const products = [
  {
    name: "Tracy",
    price: "0.91 ETH",
    image:
      "https://res.cloudinary.com/tracysoft/image/upload/v1675543417/avatar3.png",
  },
];
const OrderSummary = () => {
  return (
    <div className="order-summary">
      <div class="col-md-4">

<div class="card card-blue p-3 text-white mb-3">

   {/* <span>You have to pay</span> */}
    <div class="d-flex flex-row align-items-end mb-3">
        <h1 class="mb-0 yellow">$549</h1> <span>.99</span>
    </div>

    <span>Enjoy all the features and perk after you complete the payment</span>
    <a href="#" class="yellow decoration">Know all the features</a>

    <div class="hightlight">

        <span>100% Guaranteed support and update for the next 5 years.</span>
        

    </div>
    
</div>

</div>

      <Row>
        <Col span={1}>
          <div className="divider"></div>
        </Col>

        <Col span={23}>
          <h1>Order Summary</h1>
          <Row>

            <Col span={12}>
              <div className="order-item-price">
                <p>$10.00 monthly</p>
              </div>
            </Col>
          </Row>
          <Col>
            <div style={{ overflow: "scroll", height: "500px" }}>
              {products.map((m, count) => (
                <>
                  <div key={count}>
                    <p style={{ color: "#000" }}>Name:{m.name}</p>
                    <img src={m.image} />
                    <p style={{ color: "#000" }}>Price:{m.price}</p>
                  </div>
                  <div key={count}>
                    <p style={{ color: "#000" }}>Name:{m.name}</p>
                    <img src={m.image} />
                    <p style={{ color: "#000" }}>Price:{m.price}</p>
                  </div>
                  <div key={count}>
                    <p style={{ color: "#000" }}>Name:{m.name}</p>
                    <img src={m.image} />
                    <p style={{ color: "#000" }}>Price:{m.price}</p>
                  </div>
                </>
              ))}
            </div>
          </Col>

          <hr></hr>
          <h3>Today's charge: $10.00</h3>
        </Col>
      </Row>
    </div>
  );
};

export default OrderSummary;
