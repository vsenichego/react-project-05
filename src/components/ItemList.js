import React from "react";
import Item from "./Item.js";

export default function ItemList(props) {
  return (
    <ul className="ui-list">
      {props.items.map((it, index) => (
        <li className="ui-item-list" key={index}>
          <Item info={props.items[index]} />
          <button className="item-button" onClick={props.onRemoveButton}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}