import { useState } from "react";
import axios from "axios";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Modal from "antd/es/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';

// import Router from "next/router";

const UserCheckout = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newsuccess, setNewSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const products = [
    {
      name: "Tracy",
      price: "0.91 ETH",
      image:
        "https://res.cloudinary.com/tracysoft/image/upload/v1675543417/avatar3.png",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        // iconColor: "#c4f0ff",
        color: "black",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "black" },
        "::placeholder": { color: "black" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "black",
      },
    },
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardCvcElement,
        CardExpiryElement,
        CardNumberElement
      ),
    });
    console.log(!error, "paymentmethods");
    if (!error) {
      try {
        const { id } = paymentMethod.id;
        const response = await axios.post("http://localhost:8083/api/users/checkout", {
          amount: 10000,
          id: paymentMethod.id,
        });
        if (response.data.success === true) {
             var newData = localStorage.getItem('data')
            let data = newData
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'http://localhost:8083/api/application/create-application',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };
            
            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });

          showModal();
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  const cardOptions = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#1890ff",
        color: "rgba(0, 0, 0, 0.65)",
        fontWeight: 500,
        fontFamily: "Segoe UI, Roboto, Open Sans, , sans-serif",
        fontSize: "15px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#bfbfbf" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };
  return (
    <>
      <div class="container mt-5 px-5">
        <div class="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            User would be Notified once payment is made
          </span>
        </div>

        <div class="row">
          <div class="col-md-8">
            <div class="card p-3">
              <h6 class="text-uppercase">Payment details</h6>
              <form onSubmit={handleSubmit}>
                <div class="inputbox mt-3">
                  {" "}
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />{" "}
                  <span>Name on card</span>{" "}
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="inputbox mt-3 mr-2">
                      {" "}
                      <CardNumberElement
                        options={CARD_OPTIONS}
                        class="form-control"
                      />
                      <i class="fa fa-credit-card"></i>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="d-flex flex-row">
                      <div class="inputbox mt-3 mr-2">
                        {" "}
                        <CardExpiryElement />
                      </div>

                      <div class="inputbox mt-3 mr-2">
                        {" "}
                        <CardCvcElement />
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <div class="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          required="required"
                        />{" "}
                        <span>Phone Number</span>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          required="required"
                        />{" "}
                        <span>Country</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-4 d-flex justify-content-between">
                  <span onClick={() => navigate('/dashboard')}>Go back</span>

                  <button class="btn btn-success px-3">Pay $5</button>
                </div>
              </form>
            </div>


          </div>

        </div>
      </div>
      {console.log(isModalOpen,"ffff")}
      <Modal title="Success" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {isModalOpen ? (
           <Result
           status="success"
           title="User would be notified once payment is made"
           subTitle="Order number: 2017182818828182881."
           okText="View Application"
       
         />
        ) : (
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardNumberElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardExpiryElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardCvcElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button>Pay</button>
          </form>
        )}
      </Modal>

    </>
  );
};
export default UserCheckout;
