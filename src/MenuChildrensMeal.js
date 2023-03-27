import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChildrensMeal(props) {
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} (including a drink)`}</h3>
          <MenuItemGrid food="Cod & chips" price={["£5.20"]} />
          <MenuItemGrid food="Nuggets & chips" price={["£4.50"]} />
          <MenuItemGrid food="Fishcake & chips" price={["£3.60"]} />
          <MenuItemGrid food="Sausage & chips" price={["£3.50"]} />
        </div>
      </div>
    </div>
  );
}
