import React from "react";
import classes from "./MyPosts.module.css";
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';




const MyPosts = props => {
  let postElements = props.postsTransfer.map(getPost => (
    <Post message={getPost.message} likesCount={getPost.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
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
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        <div className={classes.postItem}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
