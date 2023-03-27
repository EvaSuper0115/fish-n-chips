import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChips(props) {
  return (
    <div className="MenuChips" id={props.id}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">Chips</h3>
          <MenuItemGrid
            food="Chips"
            price={["Small £1.60", "Regular £2.80", "Large £4.20"]}
          />
          <MenuItemGrid food="Chip butty" price={["£2.40"]} />
          <MenuItemGrid food="Cheesy chips" price={["£7.50"]} />

          <MenuItemGrid
            food="Curry chips"
            price={["Regular £4.10", "Large £5.40"]}
          />
          <MenuItemGrid
            food="
Cheesy curry chips"
            price={["Regular £4.70", "Large £6"]}
          />
        </div>
      </div>
    </div>
  );
}
