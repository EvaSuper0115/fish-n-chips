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
          <MenuItemGrid food="Cod & chips" price={mealDealCodChipsPrice} />
          <MenuItemGrid
            food="Cheese burger & chips"
            price={mealDealCheeseBurgerChipsPrice}
          />
          <MenuItemGrid
            food="Chicken nuggets & chips"
            price={mealDealChickenNuggetChipsPrice}
          />
          <MenuItemGrid
            food="Large Sausage & chips"
            price={mealDealLargeSuasageChipsPrice}
          />
          <MenuItemGrid
            food="Fishcake & chips"
            price={mealDealFishcakeChipsPrice}
          />
        </div>
      </div>
    </div>
  );
}
