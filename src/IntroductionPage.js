import React from "react";
import fishNChipsImage from "./images/fish-chips.png";
import pieNSauceImage from "./images/food-image-currysauce.png";
import OrderGrid from "./OrderGrid";
export default function () {
  return (
    <div className="IntroductionPage">
      <div className="half-a-page-grid">
        <div className="introduction-half-page-image">
          <h3 className="white-text"> Fresh n’ Tasty !</h3>
          <p className="secondary-text-color subHeading">
            All our fish is cooked to order, this will ensure the fish tastes as
            crispy & light as possible.
          </p>
        </div>
        <div className="half-a-page-content">
          <h2>Must Try</h2>
          <h3>Our Specialty Homemade Curry Sauce. </h3>
          <p>
            A perfect accompaniment with chips (sprinkle of salt and vinegar on
            the chips) and is suitable for vegetarians.
          </p>
          <div className="image-grid">
            <img
              className="sqaure-image"
              src={fishNChipsImage}
              alt="fish-chips"
            ></img>
            <img
              className="sqaure-image"
              src={pieNSauceImage}
              alr="pieNSauce"
            ></img>
          </div>
          <OrderGrid textColor="black" />
        </div>
      </div>
    </div>
  );
}
