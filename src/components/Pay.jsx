import axios from "axios";
import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51MwZWrD4Mmtyc8EQGpsWNaDRQS2UHPDS9vajjTyxkHWrGTTw0BTKuZZLTcMrBqsxGcaSFKeddGtkO5bncEplIlSe00Be8ke9iu";

const Container = styled.div`
  height: 100vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PayButton = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
`;

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        console.log(stripeToken.id);
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res);
        navigate("/success");
      } catch (e) {
        console.log(e);
      }
    };
    if (stripeToken != null) {
      makeRequest();
    }
  }, [stripeToken, navigate]);

  return (
    <Container>
      <h1>Pay</h1>
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Lama Shop"
          image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <PayButton>Pay Now</PayButton>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Pay;
