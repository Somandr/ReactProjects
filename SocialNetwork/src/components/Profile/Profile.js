import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {





  return (
    <div className={classes.main_content__info}>
      <ProfileInfo />
      <MyPosts postsTransfer = {props.profilePage.postsData}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
