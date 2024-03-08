import "../styles/Card.css";
import Card from "../Components/Card";
import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";

const LostPage = () => {
  const [lostState, setLostState] = useState(false);
  const updateItem = () => {
    setLostState(!lostState);
  };
  return (
    <div
      className="card-container"
      style={{ overflow: lostState ? "hidden" : "auto" }}
    >
      <NavBar updateItem={updateItem} />
      {lostState && <Card updateItem={updateItem} />}
      <ListItem />
    </div>
  );
};

export default LostPage;
