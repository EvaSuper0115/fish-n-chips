import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuOthers(props) {
  const cheeseOnionFryPrice = [{ price: 1.4 }];
  const onionRingsPrice = [{ price: 2.7 }];
  const mozzarellaSticksPrice = [{ price: 2.7 }];
  const butteredRollPrice = [{ price: 0.8 }];
  const peaFritterPrice = [{ price: 1.4 }];
  const pineappleFritterPrice = [{ price: 1.1 }];
  const garlicMushroomPrice = [{ price: 2.7 }];
  const batteredBurgerPrice = [{ price: 2.3 }];
  const mushyPeasPrice = [{ price: 1.1 }];
  const currySaucePrice = [{ price: 1.5 }];
  const pickledOnionPrice = [{ price: 0.4 }];
  const pickledEggPrice = [{ price: 0.6 }];
  const pickledGherkinPrice = [{ price: 0.6 }];
  const cannedDrinksPrice = [{ price: 1.5 }];
  const fruitShootPrice = [{ price: 0.7 }];
  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          <div className="col-of-MenuItemGrid">
            <div className="menuItemCol">
              <MenuItemGrid
                food="Cheese & onion Fry"
                price={cheeseOnionFryPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Onion rings"
                price={onionRingsPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Mozzarella sticks (4)"
                price={mozzarellaSticksPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Buttered roll"
                price={butteredRollPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Pea fritter"
                price={peaFritterPrice}
                button={props.button}
              />
            </div>
            <div className="menuItemCol">
              <MenuItemGrid
                food="Pineapple fritter"
                price={pineappleFritterPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Garlic mushrooms"
                price={garlicMushroomPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Battered burger"
                price={batteredBurgerPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Mushy peas"
                price={mushyPeasPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Curry sauce"
                price={currySaucePrice}
                button={props.button}
              />
            </div>
            <div className="menuItemCol">
              <MenuItemGrid
                food="Pickled onion"
                price={pickledOnionPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Pickled egg"
                price={pickledEggPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Pickled gherkin"
                price={pickledGherkinPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Canned drink"
                price={cannedDrinksPrice}
                button={props.button}
              />
              <MenuItemGrid
                food="Fruit Shoot"
                price={fruitShootPrice}
                button={props.button}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
