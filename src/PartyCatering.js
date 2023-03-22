import React from "react";
import MenuButton from "./MenuButton";
export default function PartyCatering(props) {
  return (
    <div className="PartyCatering" id={props.id}>
      {" "}
      <div className="half-a-page-grid">
        <div className="party-half-page-image">
          {" "}
          <div className="section-padding">
            <h3 className="white-text largeHeading"> Let's Party !</h3>{" "}
            <p className="secondary-text-color itallic-subHeading">
              We can cater for larger groups, all we need is 48 hours notice.
              Come in and let us know your requirement.
            </p>
          </div>
        </div>
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">Just let us know.</h2>
            <MenuButton />
            <h2 className="black-large-title">We take care of the rest.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
