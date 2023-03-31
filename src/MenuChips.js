import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChips(props) {
  const chipPrices = [
    { size: "Small", price: 1.6 },
    { size: "Regular", price: 2.8 },
    { size: "Large", price: 4.2 },
  ];
  const chipButtyPrice = [{ price: 2.4 }];
  const cheesyChipPrice = [{ price: 7.5 }];
  const curryChipPrice = [
    { size: "Regular", price: 4.1 },
    { size: "Large", price: 5.4 },
  ];
  const cheeseCurryChipPrice = [
    { size: "Regular", price: 4.7 },
    { size: "Large", price: 6 },
  ];
  return (
    <div className="MenuChips" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <MenuItemGrid food="Chips" price={chipPrices} />
          <MenuItemGrid food="Chip butty" price={chipButtyPrice} />
          <MenuItemGrid food="Cheesy chips" price={cheesyChipPrice} />

          <MenuItemGrid food="Curry chips" price={curryChipPrice} />
          <MenuItemGrid
            food="Cheesy curry chips"
            price={cheeseCurryChipPrice}
          />
        </div>
      </div>
    </div>
  );
}
