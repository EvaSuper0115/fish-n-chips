import { React, useState, useEffect } from "react";
export default function MenuItemGrid(props) {
  const [addedFood, setAddedFood] = useState("");
  const [addedPrice, setAddedPrice] = useState(null);
  useEffect(() => {
    if (addedFood !== "") {
      alert(`added ${addedFood} - £${Number(addedPrice).toFixed(2)} to basket`);
    }
  });
  function handleAdd(event, price) {
    event.preventDefault();
    setAddedFood(props.food);
    setAddedPrice(price);
  }
  return (
    <div className="MenuItemGrid">
      <div className="menu-item-grid">
        <div className="menu-item-col">{props.food}</div>
        <div className="menu-item-col">
          {props.price.map((price, index) => (
            <div key={index}>
              <span className="menu-item-col">
                {price.size} £{Number(price.price).toFixed(2)}
              </span>
              <span
                value={addedFood}
                onClick={(event) => handleAdd(event, price.price)}
                title={`add ${props.food} to basket`}
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
