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
  const fishcakePrices = [{ price: 1.3 }];
  const scampiPrices = [{ price: 4.8 }];
  const codRoePrices = [{ price: 2 }];
  return (
    <div className="MenuFish" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <MenuItemGrid food="Cod" price={codPrices} button={props.button} />
          <MenuItemGrid
            food="Haddock"
            price={haddockPrices}
            button={props.button}
          />
          <MenuItemGrid
            food="Plaice"
            price={plaicePrices}
            button={props.button}
          />
          <small>*in breadcrumbs add 30p*</small>
          <MenuItemGrid
            food="Fishcake"
            price={fishcakePrices}
            button={props.button}
          />
          <MenuItemGrid
            food="Scampi (8)"
            price={scampiPrices}
            button={props.button}
          />
          <MenuItemGrid
            food="Cod roe"
            price={codRoePrices}
            button={props.button}
          />
        </div>
      </div>
    </div>
  );
}
