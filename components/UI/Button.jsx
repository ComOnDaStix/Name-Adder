//this is the button component that contains the css and logic. its a custom button that is imported into the add user component.
import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
     {props.children}
    </button>
  );
};

export default Button;
