import React from "react";
export default function MenuFilter(props) {
  return (
    <div className="MenuFilter" id={props.id}>
      <h2 className="black-large-title">What food would you like ?</h2>
      <div className="menuTypeGrid">
        {props.menuFilterTypes.map((menuType, index) => (
          <a
            className="menuType white-text"
            key={index}
            href={props.menuPagehref[index]}
          >
            {menuType}
          </a>
        ))}
      </div>
    </div>
  );
}
