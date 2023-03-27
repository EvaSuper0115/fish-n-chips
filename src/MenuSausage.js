import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuSausage(props) {
  return (
    <div className="MenuSausage" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <MenuItemGrid food="Plain" price={["Small £1.20", "Large £1.90"]} />
          <MenuItemGrid food="Battered" price={["Small £1.30 ", "Large £2"]} />
          <MenuItemGrid food="Saveloy" price={["£1.90"]} />
          <MenuItemGrid food="Bigfoot" price={["£4.10"]} />
          <small>*served in a baguette*</small>
          <MenuItemGrid food="Giant battered sausage" price={["£2"]} />
        </div>
      </div>
    </div>
  );
}
