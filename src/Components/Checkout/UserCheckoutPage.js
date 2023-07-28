import "./CheckoutForm.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import { Col, Row } from "antd";
import UserCheckout from "./UserCheckout";

const UserCheckoutPage = () => {
  const stripePromise = loadStripe(
    "pk_test_51LhaUoDdS1bOAzAft0r8Q9w4x5qNcGty5aW89UVmgldKYtXoWG59k5xXq0o0xtHszylkUSsc7MARG5NMwfK7PKpU00ytFvgXst"
  );
  return (
    <Row>
      <Col offset={6} span={12} className="stripe-form-container">
        <div className="stripe-form">
          <Row gutter={12}>
            <Col span={24}>
              <Elements stripe={stripePromise}>
                <UserCheckout />
              </Elements>
            </Col>
            {/* <Col span={10}>
              <OrderSummary />
            </Col> */}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default UserCheckoutPage;
