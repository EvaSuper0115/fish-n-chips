import { React, useState, useEffect } from "react";
import Note from "./Note";
import SaveButton from "./SaveButton";
export default function MenuItemGrid(props) {
  let button = <button className="highlight-background">Save</button>;
  let savedButton = <button className="highlight-background">Saved</button>;
  const [note, setNote] = useState("");
  const [buttonText, setButtonText] = useState([button]);
  const [addedFood, setAddedFood] = useState("");
  const [addedPrice, setAddedPrice] = useState(null);
  useEffect(() => {
    if (addedFood !== "") {
      setButtonText([savedButton]);
      setNote(`saved 
      ${addedFood} - £${Number(addedPrice).toFixed(2)} to note`);
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
                onClick={(event) => handleAdd(event, price.price)}
                title={`save ${props.food} to note`}
              >
                <SaveButton button={buttonText} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <Note note={note} />
    </div>
  );
}
