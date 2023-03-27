import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuOAP(props) {
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} `}</h3>
          <MenuItemGrid food="£5.70" price={[""]} />
        </div>
      </div>
    </div>
  );
}
