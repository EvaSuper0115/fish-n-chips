import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuBurger(props) {
  const beefBurgerPrice = [
    { size: "Small", price: 2.8 },
    { size: "Large", price: 3.8 },
  ];
  const cheeseBurgerPrice = [
    { size: "Small", price: 3.1 },
    { size: "Large", price: 4.1 },
  ];
  const chickenBurgerPrice = [
    { size: "Small", price: 3.4 },
    { size: "Large", price: 4.9 },
  ];
  const spicyChickenBurgerPrice = [
    { size: "Small", price: 3.4 },
    { size: "Large", price: 4.9 },
  ];
  const veggieBurgerPrice = [
    { size: "Small", price: 3 },
    { size: "Large", price: 4 },
  ];
  const extraCheesePineapplePrice = [{ price: 0.3 }];
  return (
    <div className="MenuBurger" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>

          <MenuItemGrid food="Beef burger" price={beefBurgerPrice} />
          <MenuItemGrid food="Cheese burger" price={cheeseBurgerPrice} />
          <MenuItemGrid food="Chicken burger" price={chickenBurgerPrice} />
          <MenuItemGrid
            food="Spicy chicken burger"
            price={spicyChickenBurgerPrice}
          />
          <MenuItemGrid food="Veggie burger" price={veggieBurgerPrice} />
          <MenuItemGrid
            food="Extra cheese or pineapple"
            price={extraCheesePineapplePrice}
          />
        </div>
      </div>
    </div>
  );
}
