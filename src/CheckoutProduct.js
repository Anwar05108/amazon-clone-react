import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__info">
        <strong>{title}</strong>
        <p>
          <strong>$</strong>
          <strong className="checkoutProduct__price">{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img">⭐️</span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Remove From Cart 🛒</button>
    </div>
  );
}
// onClick={removeFromBasket}
export default CheckoutProduct;
