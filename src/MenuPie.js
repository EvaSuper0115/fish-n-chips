import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuPie(props) {
  return (
    <div className="MenuPie" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <MenuItemGrid
            food="Cod"
            price={["Small £4.20", "Regular £6.80", "Large £8.20"]}
          />
          <MenuItemGrid food="Haddock" price={["£7.50"]} />
          <MenuItemGrid food="Plaice" price={["£7.50"]} />
          <small>*in breadcrumbs add 30p*</small>
          <MenuItemGrid food="Fishcake" price={["£1.30"]} />
          <MenuItemGrid food="Scampi (8)" price={["£4.80"]} />
          <MenuItemGrid food="Cod roe" price={["£2"]} />
        </div>
      </div>
    </div>
  );
}
