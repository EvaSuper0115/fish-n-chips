import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuPie(props) {
  const piePrice = [{ price: 3.8 }];
  return (
    <div className="MenuPie" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>

          <MenuItemGrid food="Chicken & mushroom pie" price={piePrice} />
          <MenuItemGrid food="Steak & kidney pie" price={piePrice} />
          <MenuItemGrid food="Beef & onion pie" price={piePrice} />
        </div>
      </div>
    </div>
  );
}
