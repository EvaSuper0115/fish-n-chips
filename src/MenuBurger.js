import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuBurger(props) {
  return (
    <div className="MenuBurger" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>

          <MenuItemGrid
            food="Beef burger"
            price={["Small £2.80", "Large £3.80"]}
          />
          <MenuItemGrid
            food="Cheese burger"
            price={["Small £3.10", "Large £4.10"]}
          />
          <MenuItemGrid
            food="Chicken burger"
            price={["Small £3.40", "Large £4.90"]}
          />
          <MenuItemGrid
            food="Spicy chicken burger"
            price={["Small £3.40", "Large £4.90"]}
          />
          <MenuItemGrid food="Veggie burger" price={["Small £3", "Large £4"]} />
          <MenuItemGrid food="Extra cheese or pineapple" price={["£0.30"]} />
        </div>
      </div>
    </div>
  );
}
