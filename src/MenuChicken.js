import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChicken(props) {
  return (
    <div className="MenuChicken" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>

          <MenuItemGrid food="Quarter breast" price={["£5.00"]} />
          <MenuItemGrid food="Nuggets (8)" price={["£4.60"]} />

          <MenuItemGrid food="Popcorn chicken" price={["£2.70"]} />
          <MenuItemGrid
            food="
Spicy chicken wings (4)"
            price={["£2.70"]}
          />
        </div>
      </div>
    </div>
  );
}
