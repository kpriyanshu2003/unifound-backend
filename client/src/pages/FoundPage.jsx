import "../styles/Card.css";
import Card from "../Components/Card";
import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";

const FoundPage = () => {
  const [foundState, setFoundState] = useState(false);
  const updateItem = () => {
    setFoundState(!foundState);
  };

  return (
    <div
      className="card-container"
      style={{ overflow: foundState ? "hidden" : "auto" }}
    >
      <NavBar updateItem={updateItem} />
      {foundState && <Card updateItem={updateItem} />}
      <ListItem />
    </div>
  );
};

export default FoundPage;
