import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuPie(props) {
  return (
    <div className="MenuPie" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>

          <MenuItemGrid food="Chicken & mushroom" price={["£3.80"]} />
          <MenuItemGrid food="Steak & kidney" price={["£3.80"]} />
          <MenuItemGrid food="Beef & onion" price={["£3.80"]} />
        </div>
      </div>
    </div>
  );
}
