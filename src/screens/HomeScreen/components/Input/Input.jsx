import React, {useEffect, useState} from "react";
import classes from "./Input.module.css";

import { connect } from "react-redux";
import { addPost } from "../../../../redux/actions";

const Input = ({ addPost }) => {

  const [ post, setPost ] = useState({
    id: Date.now().toString(),
    text: "",
    tags: [],
  });

  const setText = text => {
    setPost({
      ...post,
      text,
      tags: text.match(/#\w+/g),
    });
  };

  return (
    <div className={classes.container}>
      <textarea onChange={e => {
        setText(e.target.value)
      }} placeholder="Type smth..." value={post.text} className={classes.textarea} />
      <button onClick={() => {
        if ( post.text !== "" ) {
          addPost(post);
          setPost({
            id: Date.now().toString(),
            text: "",
            tags: [],
          })
        }
      }} className={classes.button}>ADD</button>
    </div>
  );
};

const mapDispatchToProps = {
  addPost,
}

export default connect( null, mapDispatchToProps )(Input);