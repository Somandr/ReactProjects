import React from "react";
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes.side_bar}>
      <NavLink to="/Profile" className={classes.side_bar__link}>
        Профиль
      </NavLink>
      <NavLink to="/Info" className={classes.side_bar__link}>
        Инфо
      </NavLink>
      <NavLink to="/Reports" className={classes.side_bar__link}>
        Отчёты
      </NavLink>
      <NavLink to="/Dialogs" className={classes.side_bar__link}>
        Чат
      </NavLink>
      <NavLink to="/Settings" className={classes.side_bar__link}>
        Настройки
      </NavLink>
    </div>
  );
};

export default Sidebar;
