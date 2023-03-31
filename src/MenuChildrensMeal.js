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
          <MenuItemGrid food="Cod & chips" price={childrenCodChipsPrice} />
          <MenuItemGrid
            food="Nuggets & chips"
            price={childrenNuggestChipsPrice}
          />
          <MenuItemGrid
            food="Fishcake & chips"
            price={childrenFishcakeChipsPrice}
          />
          <MenuItemGrid
            food="Sausage & chips"
            price={childrenSausageChipsPrice}
          />
        </div>
      </div>
    </div>
  );
}
