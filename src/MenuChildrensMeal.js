import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChildrensMeal(props) {
  const childrenCodChipsPrice = [{ price: 5.2 }];
  const childrenNuggestChipsPrice = [{ price: 4.5 }];
  const childrenFishcakeChipsPrice = [{ price: 3.6 }];
  const childrenSausageChipsPrice = [{ price: 3.5 }];
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} (including a drink)`}</h3>
          <MenuItemGrid
            food="Cod & chips"
            price={childrenCodChipsPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Nuggets & chips"
            price={childrenNuggestChipsPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Fishcake & chips"
            price={childrenFishcakeChipsPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Sausage & chips"
            price={childrenSausageChipsPrice}
            button={props.button}
          />
        </div>
      </div>
    </div>
  );
}
