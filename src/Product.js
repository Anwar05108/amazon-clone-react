import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, rating, price }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <strong>{title}</strong>
        <p>
          <strong>$</strong>
          <strong className="product__price">{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img">⭐️</span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart 🛒</button>
    </div>
  );
}

export default Product;
