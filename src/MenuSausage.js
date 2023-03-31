import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuSausage(props) {
  const plainPrices = [
    { size: "Small", price: 1.2 },
    { size: "Large", price: 1.9 },
  ];
  const batteredPrices = [
    { size: "Small", price: 1.3 },
    { size: "Large", price: 2 },
  ];
  const saveloyPrice = [{ price: 1.9 }];
  const bigfootPrice = [{ price: 4.1 }];
  const giantBatteredSausagePrice = [{ price: 2 }];
  return (
    <div className="MenuSausage" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <MenuItemGrid food="Plain sausage" price={plainPrices} />
          <MenuItemGrid food="Battered sausage" price={batteredPrices} />
          <MenuItemGrid food="Saveloy" price={saveloyPrice} />
          <MenuItemGrid
            food="Bigfoot  *served in a baguette*"
            price={bigfootPrice}
          />

          <MenuItemGrid
            food="Giant battered sausage"
            price={giantBatteredSausagePrice}
          />
        </div>
      </div>
    </div>
  );
}
