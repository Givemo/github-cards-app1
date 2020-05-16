import React from "react";
import "./App.css";
import Card from "./Card.js";

/* This is a function Component */
function CardList(props) {
  return (
    /* We can use divs or the empty angle brackets below to enclose more than one JSX into a Component because Components can only return one element */
    <>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </>
  );
}

export default CardList;
