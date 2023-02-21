// this component is responsible for outputting the user data from the addUser component. in this component I want to return an unordered list where
// i want to go through a list of users, and output a list item for every user.

import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old.)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
