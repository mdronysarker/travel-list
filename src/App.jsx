import React from "react";

const App = () => {
  const initialItem = [
    { id: 1, description: "passport", qunatity: 2, packed: false },
    { id: 2, description: "socks", qunatity: 12, packed: false },
  ];

  const Logo = () => {
    return <h1>Far Way</h1>;
  };

  const Form = () => {
    return <div className="add-form">What do you need for your trip?</div>;
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
    return <li>{item.description}</li>;
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
