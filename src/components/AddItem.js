import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
input {
  margin: 10px;
}

input {
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  font-size: 16px;
}

input[type="submit"] {
  background-color: var(--primary);
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

input[type="submit"]:hover {
  opacity: 0.8;
}

input[type="submit"]:disabled {
  opacity: 0.4;
  cursor: disabled;
}

input[type="submit"]:active {
  box-shadow: 0 0px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}
`;

export default function AddItem(props) {

  return (
    <WrapperDiv>
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="name">Название: </label>
        <input
          type="text"
          placeholder="Название товара"
          id="name"
          value={props.name}
          onChange={props.onNameChange}
        />
      </div>
      <div>
        <label htmlFor="desc">Описание: </label>
        <input
          type="text"
          placeholder="Описание товара"
          id="desc"
          value={props.desc}
          onChange={props.onDescChange}
        />
      </div>
      <div className="form-footer">
        {props.valid ? (
          <div className="validation"></div>
        ) : (
          <div className="validation">Заполните Название и Описание</div>
        )}
        <input
          type="submit"
          value="Добавить"
          onClick={props.onAddButton}
        />
      </div>
    </form>
    </WrapperDiv>
  );
}
