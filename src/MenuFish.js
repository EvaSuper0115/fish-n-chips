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
  const InBreadcrumbsPrices = [{ price: 0.3 }];
  const fishcakePrices = [{ price: 1.3 }];
  const scampiPrices = [{ price: 4.8 }];
  const codRoePrices = [{ price: 2 }];
  return (
    <div className="MenuFish" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <MenuItemGrid food="Cod" price={codPrices} />
          <MenuItemGrid food="Haddock" price={haddockPrices} />
          <MenuItemGrid food="Plaice" price={plaicePrices} />
          <MenuItemGrid food="*in breadcrumbs*" price={InBreadcrumbsPrices} />

          <MenuItemGrid food="Fishcake" price={fishcakePrices} />
          <MenuItemGrid food="Scampi (8)" price={scampiPrices} />
          <MenuItemGrid food="Cod roe" price={codRoePrices} />
        </div>
      </div>
    </div>
  );
}
