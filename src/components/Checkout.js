import React from "react";
import CardIcon from "images/credit-card.svg";
import ProductImg from "images/product-image.jpg";
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
    </div>
  );
};

export default Checkout;
