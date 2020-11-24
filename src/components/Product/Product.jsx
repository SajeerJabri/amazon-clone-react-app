import React, { useContext } from "react";
import "./Product.css";
import ContextData from "../../ContextData/ContextData";

const Product = ({ id, title, image, price, rating }) => {
  const { addBasket } = useContext(ContextData);
  const addToBasket = () => {
    addBasket({
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
