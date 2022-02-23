import React from "react";
import { StyledButtonAdd } from "../styled-components/StyledButtonAdd"
import { StyledTextfield } from "../styled-components/StyledTextfield";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <StyledTextfield>
        <label htmlFor="name">Название: </label>
        <input
          type="text"
          placeholder="Название товара"
          id="name"
          value={props.name}
          onChange={props.onNameChange}
        />
      </StyledTextfield>
      <StyledTextfield>
        <label htmlFor="desc">Описание: </label>
        <input
          type="text"
          placeholder="Описание товара"
          id="desc"
          value={props.desc}
          onChange={props.onDescChange}
        />
      </StyledTextfield>
      <div>
        {props.valid ? (
          <div></div>
        ) : (
          <div>Заполните Название и Описание</div>
        )}
        <StyledButtonAdd
          type="submit"
          value="Добавить"
          onClick={props.onAddButton}
        />
      </div>
    </form>
  );
}
