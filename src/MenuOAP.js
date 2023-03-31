import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuOAP(props) {
  const OAPprice = [{ price: 5.7 }];
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} `}</h3>
          <MenuItemGrid
            food="OAP cod & chips"
            price={OAPprice}
            button={props.button}
          />
        </div>
      </div>
    </div>
  );
}
