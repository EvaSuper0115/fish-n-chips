import React from "react";
import JustEatIcon from "./images/justEat.png";
import PhoneIcon from "./images/phone.png";

export default function OrderGrid(props) {
  return (
    <div className="order-grid ">
      <a
        className="float-end"
        href="https://www.just-eat.co.uk/restaurants-adastral-fish-and-chips-poole/menu/?utm_source=adastralfishnchips.co.uk&utm_medium=restaurant&utm_campaign=order%20button"
        target="_blank"
        rel="noreferrer"
      >
        <div className="white-text high-light-text">
          <span>
            <img
              className="icon-adjustments"
              src={JustEatIcon}
              alt="google-map-icon"
            ></img>
          </span>
          <span style={{ color: props.textColor }}>Order on Just Eat</span>
        </div>
      </a>

      <div className="float-start">
        <span>
          <img
            className="icon-adjustments"
            src={PhoneIcon}
            alt="google-map-icon"
          ></img>
        </span>
        <span style={{ color: props.textColor }} className="high-light-text">
          07578 617349
        </span>
      </div>
    </div>
  );
}
