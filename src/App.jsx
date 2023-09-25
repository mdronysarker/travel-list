import React, { useState } from "react";

const App = () => {
  const initialItem = [
    { id: 1, description: "passport", qunatity: 2, packed: false },
    { id: 2, description: "socks", qunatity: 12, packed: true },
    { id: 2, description: "charger", qunatity: 1, packed: false },
  ];

  const Logo = () => {
    return <h1>Far Way</h1>;
  };

  const Form = () => {
    const [description, setDescription] = useState("");
    const [select, setSelect] = useState(1);

    const handleSubmit = (e) => {
      e.preventDefault();
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

  const Pakagelist = () => {
    return (
      <div className="list">
        <ul>
          {initialItem.map((item, i) => (
            <Item key={i} item={item} />
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

  const Item = ({ item }) => {
    return (
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.qunatity} {item.description}
        </span>
        <button className="button">&times;</button>
      </li>
    );
  };

  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <Pakagelist />
        <Status />
      </div>
    </>
  );
};

export default App;
