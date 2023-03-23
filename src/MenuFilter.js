import React from "react";
export default function MenuFilter(props) {
  return (
    <div className="MenuFilter" id={props.id}>
      <h2 className="black-large-title">What food would you like ?</h2>
      <div className="menuTypeGrid">
        <a className="menuType" href={props.menuPagehref[0]}>
          Fish & Chips
        </a>
      </div>
    </div>
  );
}
