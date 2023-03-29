import React from "react";
export default function MenuItemGrid(props) {
  return (
    <div className="MenuItemGrid">
      <div className="menu-item-grid">
        <div className="menu-item-col">{props.food}</div>
        <div className="menu-item-col">
          {props.price.map((price, index) => (
            <div key={index}>
              <div className="menu-item-col">
                {price.size} £{Number(price.price).toFixed(2)}
              </div>
              <span>{props.button}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
