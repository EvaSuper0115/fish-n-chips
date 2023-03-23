import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuSausagesBurgers(props) {
  return (
    <div className="MenuSausagesBurgers" id={props.id}>
      <div className="section-padding">
        <h2 className="black-large-title">Sausages and Burgers Menu</h2>
        <div className="menu-card-grid">
          <div className="menu-card">
            <h3 className="itallic-subHeading">Sausages</h3>
            <MenuItemGrid food="Plain" price={["Small £1.20", "Large £1.90"]} />
            <MenuItemGrid
              food="Battered"
              price={["Small £1.30 ", "Large £2"]}
            />
            <MenuItemGrid food="Saveloy" price={["£1.90"]} />
            <MenuItemGrid food="Bigfoot" price={["£4.10"]} />
            <small>*served in a baguette*</small>
            <MenuItemGrid food="Giant battered sausage" price={["£2"]} />
          </div>
          <div className="menu-card">
            <h3 className="itallic-subHeading">Burgers</h3>
            <MenuItemGrid
              food="Beef burger"
              price={["Small £2.80 ", "Large £3.80"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
