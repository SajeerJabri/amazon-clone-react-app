import React, { useContext } from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import ContextData from "../../ContextData/ContextData";

const Checkout = () => {
  const { user } = useContext(ContextData);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg"
          alt="ad"
        />
        <div>
          <h3>Hello, {user?.email} </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
