import React from "react";
import CardIcon from "images/credit-card.svg";
import botella from "images/botellla.jpg";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

const Checkout = () => {
  const item = {
    price: "price_1PLhPCHui8JNyJ0cnH0WxjiZ",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin} /success`,
    cancelUrl: `${window.location.origin} /cancel`,
  };

  const redirectCheckout = async () => {
    console.log("redirectCheckout");

    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout(checkoutOptions);

    console.log("stripe checkout error : ", error);
  };

  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad omnis
        mollitia eaque placeat cum esse reiciendis aspernatur repellat ipsam
        quis.
      </p>
      <img src={botella} alt="botella" />
    </div>
  );
};

export default Checkout;
