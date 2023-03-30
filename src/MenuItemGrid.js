import { React, useState, useEffect } from "react";
export default function MenuItemGrid(props) {
  const [addedFood, setAddedFood] = useState("");
  useEffect(() => {
    if (addedFood !== "") {
      alert(addedFood);
    }
  });
  function handleAdd(event, price) {
    event.preventDefault();
    setAddedFood(
      `added ${props.food} - £${Number(price).toFixed(2)} to basket`
    );
  }
  return (
    <div className="MenuItemGrid">
      <div className="menu-item-grid">
        <div className="menu-item-col">{props.food}</div>
        <div className="menu-item-col">
          {props.price.map((price, index) => (
            <div key={index}>
              <div className="menu-item-col">
                {price.size} £{Number(price.price).toFixed(2)}
              </div>
              <span
                value={addedFood}
                onClick={(event) => handleAdd(event, price.price)}
              >
                {props.button}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
