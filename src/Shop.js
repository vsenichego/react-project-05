import React, { useState } from "react";
import ItemList from "./components/ItemList.js";
import AddItem from "./components/AddItem.js";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState(true);

  function handleFormSubmit(event) {
    event.preventDefault();
    setName("");
    setDesc("");
    if (name === "" || desc === "") {
      setValid(false);
      return null;
    } else {
      setItems([...items, item]);
      setValid(true);
    }
  }

  function handleAddButton() {
    setItem({
      id: uuid(),
      name: name,
      desc: desc
    });
  }

  function handleRemoveButton() {
    setItems(items.slice(1));
    setValid(true);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onFormSubmit={handleFormSubmit}
        onAddButton={handleAddButton}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
      />

      {items.length === 0 && (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      )}

      <ItemList items={items} onRemoveButton={handleRemoveButton} />
    </>
  );
}
