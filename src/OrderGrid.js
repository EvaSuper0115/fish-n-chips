import React from "react";

export default function OrderGrid(props) {
  return (
    <div className="order-grid ">
      <a
        className="float-end"
        href={props.link1}
        target="_blank"
        rel="noreferrer"
      >
        <div className="white-text high-light-text">
          <span>
            <img
              className="icon-adjustments"
              src={props.logo1}
              alt="google-map-icon"
            ></img>
          </span>
          <span style={{ color: props.textColor }}>Order here</span>
        </div>
      </a>
      <a
        className="float-start high-light-text"
        href={props.link2}
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <img
            className="icon-adjustments"
            src={props.logo2}
            alt="google-map-icon"
          ></img>
        </span>
        <span style={{ color: props.textColor }}>{props.content}</span>
      </a>
    </div>
  );
}
