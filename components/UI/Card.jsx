// This card compontend holds the css classes wrapped around the form in the add user component. the form is out put inside of the card component.
import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
