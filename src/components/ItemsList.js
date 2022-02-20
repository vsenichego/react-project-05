import React from "react";
import Item from "./Item.js";
import styled from "styled-components";

const WrapperDiv = styled.div`

  ul {
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }

  li {
    margin: 10px 10px 80px 10px;
  }

  button {
    background-color: white;
    color: black;
    border: 1px solid var(--light-gray);
    padding: 5px 20px;
    min-width: 50px;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    transition: opacity 200ms ease-out;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    margin-left: 10px;
  }

  button:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }

  button:hover {
    opacity: 0.8;
  }

  button:disabled {
    opacity: 0.4;
    cursor: disabled;
  }
`;

export default function ItemsList(props) {
  return (
    <WrapperDiv>
    <ul>
      {props.items.map((it, index) => (
        <li key={index}>
          <Item info={props.items[index]} />
          <button onClick={props.onRemoveButton}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
    </WrapperDiv>
  );
}
