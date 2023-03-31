import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChicken(props) {
  const quarterBreastPrice = [{ price: 5 }];
  const nuggetsPrice = [{ price: 4.6 }];
  const popcornChickenPrice = [{ price: 2.7 }];
  const SpicyChickenWingsPrice = [{ price: 2.7 }];
  return (
    <div className="MenuChicken" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>

          <MenuItemGrid
            food="Quarter breast"
            price={quarterBreastPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Nuggets (8)"
            price={nuggetsPrice}
            button={props.button}
          />

          <MenuItemGrid
            food="Popcorn chicken"
            price={popcornChickenPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="
Spicy chicken wings (4)"
            price={SpicyChickenWingsPrice}
            button={props.button}
          />
        </div>
      </div>
    </div>
  );
}
