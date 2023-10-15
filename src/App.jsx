import React, { useState } from "react";

const App = () => {
  const initialItem = [
    { id: 1, description: "passport", qunatity: 2, packed: false },
    { id: 2, description: "socks", qunatity: 12, packed: true },
    { id: 2, description: "charger", qunatity: 1, packed: false },
  ];

  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDelteItem = (id) => {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const Logo = () => {
    return <h1>Far Way</h1>;
  };

  const Form = ({ onAddItems }) => {
    const [description, setDescription] = useState("");
    const [select, setSelect] = useState(1);

    const handleSubmit = (e) => {
      if (!description) return;
      e.preventDefault();

      const newItem = {
        description,
        select,
        packed: false,
        id: Date.now(),
      };
      // console.log(newItem);
      onAddItems(newItem);

      setDescription("");
      setSelect(1);
    };

    const handleChange = (e) => {
      setDescription(e.target.value);
    };

    const handleSelect = (e) => {
      setSelect(Number(e.target.value));
    };

    // console.log(select);

    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select onChange={handleSelect} value={select}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    );
  };

  const Pakagelist = ({ items, onDelteItem }) => {
    return (
      <div className="list">
        <ul>
          {items.map((item, i) => (
            <Item onDelteItem={handleDelteItem} key={i} item={item} />
          ))}
        </ul>
      </div>
    );
  };

  const Status = () => {
    return (
      <footer className="stats">
        <em>You Have X items in Your List, and you already packed X</em>
      </footer>
    );
  };

  const Item = ({ item, onDelteItem }) => {
    // console.log(item);
    return (
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.select} {item.description}
        </span>
        <button onClick={() => onDelteItem(item.id)} className="button">
          &times;
        </button>
      </li>
    );
  };

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <Pakagelist onDelteItem={handleDelteItem} items={items} />
        <Status />
      </div>
    </>
  );
};

export default App;
