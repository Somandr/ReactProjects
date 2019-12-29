import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  return (
    <div>
      <a href="#" className={classes.profile__link}>
        Профиль
      </a>
      <div>
        <img src=""></img>
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
