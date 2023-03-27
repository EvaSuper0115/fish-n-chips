import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuMealDeal(props) {
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} (including a canned drink)`}</h3>
          <MenuItemGrid food="Cod & chips" price={["£7"]} />
          <MenuItemGrid food="Cheese burger & chips" price={["£5.90"]} />
          <MenuItemGrid food="Chicken nuggets & chips" price={["£6.20"]} />
          <MenuItemGrid food="Large Sausage & chips" price={["£4.70"]} />
          <MenuItemGrid food="Fishcake & chips" price={["£4.20"]} />
        </div>
      </div>
    </div>
  );
}
