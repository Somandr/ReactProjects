import React from "react";
// import classes from "./Post";
import classes from "./Post.module.css";

const Post = props => {
    return (
      <div className={classes.posts}>
        {props.message} {props.likesCount}
      </div>
    );
  };

  export default Post;