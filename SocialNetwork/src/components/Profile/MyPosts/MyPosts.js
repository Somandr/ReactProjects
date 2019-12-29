import React from "react";
import classes from "./MyPosts.module.css";
import Post from './Post/Post'




const MyPosts = props => {
      // debugger;
  let postElements = props.posts.map(getPost => (

    <Post message={getPost.message} likesCount={getPost.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)

  };

  return (
    <div>
      My posts
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        <div className={classes.postItem}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
