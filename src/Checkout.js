import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import ad from "./images/image.jpg";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__top">
        <div className="checkout__ad__image">
          <img src={ad} alt="ad" />
        </div>
        <div className="checkout__subtotal">
          {basket.length > 0 && (
            <h1>
              <Subtotal />
            </h1>
          )}
        </div>
      </div>

      {basket?.length === 0 ? (
        <h2>Your Shopping Cart is Empty</h2>
      ) : (
        <div>
          <h2>Your Shopping Cart has some items</h2>
          <div>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
