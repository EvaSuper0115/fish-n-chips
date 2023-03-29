import React from "react";
export default function MenuItemGrid({ food, price }) {
  return (
    <div className="MenuItemGrid">
      <div className="menu-item-grid">
        <div className="menu-item-col">{food}</div>
        <div className="menu-item-col">
          {price.map((price, index) => (
            <div className="menu-item-col" key={index}>
              {price.size} £{Number(price.price).toFixed(2)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
