import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuOthers(props) {
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <div className="col-of-MenuItemGrid">
            <div className="menuItemCol">
              <MenuItemGrid food="Cheese & onion Fry" price={["£1.40"]} />
              <MenuItemGrid food="Onion rings" price={["£2.70"]} />
              <MenuItemGrid food="Mozzarella sticks (4)" price={["£2.70"]} />
              <MenuItemGrid food="Buttered roll" price={["£0.80"]} />
              <MenuItemGrid food="Pea fritter" price={["£1.40"]} />
            </div>
            <div className="menuItemCol">
              <MenuItemGrid food="Pineapple fritter" price={["£1.10"]} />
              <MenuItemGrid food="Garlic mushrooms" price={["£2.70"]} />
              <MenuItemGrid food="Battered burger" price={["£2.30"]} />
              <MenuItemGrid food="Mushy peas" price={["£1.10"]} />
              <MenuItemGrid food="Curry sauce" price={["£1.50"]} />
            </div>
            <div className="menuItemCol">
              <MenuItemGrid food="Pickled onion" price={["£0.40"]} />
              <MenuItemGrid food="Pickled egg" price={["£0.60"]} />
              <MenuItemGrid food="Pickled gherkin" price={["£0.60"]} />
              <MenuItemGrid food="Canned drink" price={["£1.30"]} />
              <MenuItemGrid food="Fruit Shoot" price={["£0.70"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
