import React from "react";
export default function OpeningHours(props) {
  return (
    <div className="OpeningHours" id={props.id}>
      <div className="half-a-page-grid">
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">Opening Hours</h2>
            <p>Monday - Thursday</p>
          </div>
        </div>
      </div>
    </div>
  );
}
