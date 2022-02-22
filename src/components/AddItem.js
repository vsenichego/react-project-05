import React from "react";
import { StyledButtonAdd } from "../styled-components/StyledButtonAdd"
import { StyledTextfield } from "../styled-components/StyledTextfield";

export default function AddItem(props) {

  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="name">Название: </label>
        <StyledTextfield
          type="text"
          placeholder="Название товара"
          id="name"
          value={props.name}
          onChange={props.onNameChange}
        />
      </div>
      <div>
        <label htmlFor="desc">Описание: </label>
        <StyledTextfield
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
        <StyledButtonAdd
          type="submit"
          value="Добавить"
          onClick={props.onAddButton}
        />
      </div>
    </form>
  );
}
