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
          </div>
        </div>
      </div>
    </div>
  );
}
