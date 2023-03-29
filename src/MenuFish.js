import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuFish(props) {
  const codPrices = [
    { size: "Small", price: 4.2 },
    { size: "Regular", price: 6.8 },
    { size: "Large", price: 8.2 },
  ];
  const haddockPrices = [{ price: 7.5 }];
  const plaicePrices = [{ price: 7.5 }];
  return (
    <div className="MenuFish" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <MenuItemGrid food="Cod" price={codPrices} />
          <MenuItemGrid food="Haddock" price={haddockPrices} />
          <MenuItemGrid food="Plaice" price={plaicePrices} />
          <small>*in breadcrumbs add 30p*</small>
          <MenuItemGrid food="Fishcake" price={["£1.30"]} />
          <MenuItemGrid food="Scampi (8)" price={["£4.80"]} />
          <MenuItemGrid food="Cod roe" price={["£2"]} />
        </div>
      </div>
    </div>
  );
}
