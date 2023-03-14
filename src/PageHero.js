import React from "react";
import GoogleMapIcon from "./images/Google_Maps_icon.png";
import FacebookIcon from "./images/facebooklogo.png";
import InstagramIcon from "./images/Instagram_icon.png";
export default function PageHero() {
  return (
    <div className="PageHero">
      <div className="page-divider">
        <div className="pagehero-top-grid">
          <p className="white-text">
            <span>
              <img
                className="icon-adjustments"
                src={GoogleMapIcon}
                alt="google-map-icon"
              ></img>
            </span>
            11 Adastral Square, Canford Heath, Poole, BH17 8SA
          </p>

          <img
            className="icon-adjustments float-end"
            src={FacebookIcon}
            alt="google-map-icon"
          ></img>
          <img
            className="icon-adjustments float-center"
            src={InstagramIcon}
            alt="google-map-icon"
          ></img>
        </div>
      </div>
    </div>
  );
}
