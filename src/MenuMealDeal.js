import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuMealDeal(props) {
  const mealDealCodChipsPrice = [{ price: 7 }];
  const mealDealCheeseBurgerChipsPrice = [{ price: 5.9 }];
  const mealDealChickenNuggetChipsPrice = [{ price: 6.2 }];
  const mealDealLargeSuasageChipsPrice = [{ price: 4.7 }];
  const mealDealFishcakeChipsPrice = [{ price: 4.2 }];
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} (including a canned drink)`}</h3>
          <MenuItemGrid
            food="Cod & chips"
            price={mealDealCodChipsPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Cheese burger & chips"
            price={mealDealCheeseBurgerChipsPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Chicken nuggets & chips"
            price={mealDealChickenNuggetChipsPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Large Sausage & chips"
            price={mealDealLargeSuasageChipsPrice}
            button={props.button}
          />
          <MenuItemGrid
            food="Fishcake & chips"
            price={mealDealFishcakeChipsPrice}
            button={props.button}
          />
        </div>
      </div>
    </div>
  );
}
