import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1242453"
          title="Brita Water Replacement Filters for Pitchers and Dispensers, 3 Count, White"
          price={11.96}
          rating={5}
          image="data:image/webp;base64,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"
        />

        <Product
          id="1242453"
          title="Brita Water Replacement Filters for Pitchers and Dispensers, 3 Count, White"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1242453"
          title="Brita Water Replacement Filters for Pitchers and Dispensers, 3 Count, White"
          price={11.96}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="1242453"
          title="Thermoflask Double Stainless Steel Insulated Water Bottle, 40 oz, White"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71dDzLe-WzL._AC_SL1500_.jpg"
        />
        <Product
          id="1242453"
          title="Logitech M570 Wireless Trackball Mouse – 
                Ergonomic Design with Sculpted Right-Hand Shape,
                Compatible with
                Apple Mac and Microsoft Windows Computers, 
                USB Unifying Receiver, Dark Gray"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61QrqZ8uurL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="124245"
          title="adidas Alliance II Sackpack.As useful as it is classic - this is the iconic sackpack for athletes. perfect for when you need a bit of extra storage for shoes or clothes or it can be worn alone as a backpack alternative. 
                with two water bottle pockets and a zippered outside drop pocket - it has all the value you need."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61QiW47h3EL._AC_UX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
