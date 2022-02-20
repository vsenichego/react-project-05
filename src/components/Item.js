import React, { useState } from "react";
import styled from "styled-components"

const WrapperDiv = styled.div`

  div:nth-child(1) {
    margin-left: 10px;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }

  div>h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 16px;
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

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <WrapperDiv>
      <div>
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div>
        <button
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3>{total ? total : ""}</h3>
        <button onClick={handleAddClick}>
          +
        </button>
      </div>
    </WrapperDiv>
  );
}
