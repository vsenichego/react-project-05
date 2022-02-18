import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="name">Название: </label>
        <input
          type="text"
          placeholder="Название товара"
          className="ui-textfield"
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
          className="ui-textfield"
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
          className="ui-button"
          value="Добавить"
          onClick={props.onAddButton}
        />
      </div>
    </form>
  );
}
