import React, { useState, useEffect } from "react";
import ItemsList from "./components/ItemsList";
import AddItem from "./components/AddItem";
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

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ name: name, desc: desc }),
      headers: { "Content-type": "application/json" }
    };

    if (name && desc) {
      fetch("https://covid-shop-mcs.herokuapp.com", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
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
