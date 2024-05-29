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
  };

  return <div>Checkout</div>;
};

export default Checkout;
