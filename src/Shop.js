import React, { useState, useEffect } from "react";
import ItemsList from "./components/ItemsList.js";
import AddItem from "./components/AddItem.js";
import uuid from "react-uuid";

export default function Shop() {

  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")));
  const [item, setItem] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (items.length === 0) {
      document.title = `Товары отсутствуют`;
    } else {
      document.title = `${items.length} товаров`;
    }
  });

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

  function handleRemoveButton(id) {
    setItems(items.filter((item) => item.id !== id));
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
     <div>{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      <ItemsList items={items} onRemoveButton={handleRemoveButton} />
    </>
  );
}
