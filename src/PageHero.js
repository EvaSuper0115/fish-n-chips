import React from "react";
import GoogleMapIcon from "./images/Google_Maps_icon.png";
import FacebookIcon from "./images/facebooklogo.png";
import InstagramIcon from "./images/Instagram_icon.png";
import OrderGrid from "./OrderGrid";
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
          <a className="button">Menu</a>
        </div>
        <OrderGrid textColor="white" />
      </div>
    </div>
  );
}
