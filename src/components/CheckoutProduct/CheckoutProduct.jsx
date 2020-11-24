import React, { useContext } from "react";
import "./CheckoutProduct.css";
import ContextData from "../../ContextData/ContextData";

const CheckoutProduct = () => {
  const { baskets, deleteBasket } = useContext(ContextData);
  return (
    <>
      {baskets.map((basket, ind) => (
        <div className="checkoutProduct" key={ind}>
          <img className="checkoutProduct__image" src={basket.image} alt="" />
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{basket.title} </p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{basket.price} </strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(basket.rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
            <button onClick={() => deleteBasket(basket.id)}>
              Remove from Basket
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CheckoutProduct;
