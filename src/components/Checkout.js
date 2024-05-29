import React from "react";
import CardIcon from "images/credit-card.svg";
import botella from "images/botellla.png";
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
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    console.log("redirectCheckout");

    const stripe = await getStripe();

    await stripe.redirectToCheckout(checkoutOptions);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-4">Stripe Checkout</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad omnis
        mollitia eaque placeat cum esse reiciendis aspernatur repellat ipsam
        quis.
      </p>
      <img src={botella} alt="botella" className="w-[25%] " />
      <div className="w-[300px] flex flex-row justify-around items-center">
        <img
          src={CardIcon}
          className="w-[100px] hover:cursor-pointer"
          alt="card"
        />
        <button
          onClick={redirectToCheckout}
          className="text-white bg-slate-500 hover:bg-slate-800 px-4 py-2 rounded"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Checkout;
