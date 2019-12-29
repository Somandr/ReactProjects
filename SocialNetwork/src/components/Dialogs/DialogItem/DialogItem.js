import React from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialogs}>
      <NavLink to={path} className={classes.dialogs__link}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
