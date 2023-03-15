import React from "react";
import GoogleMapIcon from "./images/Google_Maps_icon.png";
import FacebookIcon from "./images/facebooklogo.png";
import InstagramIcon from "./images/Instagram_icon.png";
import JustEatIcon from "./images/justEat.png";
import PhoneIcon from "./images/phone.png";
export default function PageHero() {
  return (
    <div className="PageHero">
      <div className="">
        <div className="pagehero-top-grid">
          <a
            href="https://goo.gl/maps/Z7tGC88AYkEfxXTd9"
            target="_blank"
            rel="noreferrer"
          >
            <div className="white-text">
              <span>
                <img
                  className="icon-adjustments"
                  src={GoogleMapIcon}
                  alt="google-map-icon"
                ></img>
              </span>
              <span className="display-none-when-small">
                11 Adastral Square, Canford Heath, Poole, BH17 8SA
              </span>
            </div>
          </a>
          <a
            className="display-none-when-extra-small"
            href="https://www.facebook.com/adastralfishnchips"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon-adjustments float-end"
              src={FacebookIcon}
              alt="google-map-icon"
            ></img>
          </a>
          <a
            className="display-none-when-extra-small"
            href="https://www.instagram.com/adastralfishnchips/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon-adjustments float-center"
              src={InstagramIcon}
              alt="google-map-icon"
            ></img>
          </a>
        </div>
        <section className="brand-name">
          <h1 className="largeHeading white-text text-center ">
            Adastral Fish & Chips
          </h1>
          <h2 className="subHeading secondary-text-color text-center display-none-when-extra-small">
            Delicious freshly cooked fish & chips
          </h2>
        </section>
        <div className="center-content">
          <a className="button" href="">
            Menu
          </a>
        </div>
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
              Order on Just Eat
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
            <span className="white-text high-light-text">07578 617349</span>
          </div>
        </div>
      </div>
    </div>
  );
}