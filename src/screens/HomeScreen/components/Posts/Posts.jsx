import React, {useState, useEffect} from "react";
import classes from "./Posts.module.css";
import Post from "./components/Post/Post"

import { connect } from "react-redux";

const Posts = ({ posts, tag }) => {

  const [ active, setActive ] = useState([]);

  useEffect(() => {
    setActive(tag.filter(el => el.active === true).map(el => el.name))
  }, [tag]);

  return (
    <div className={classes.container}>
      {
        posts.length === 0 ? <h1 className={classes.none}>There are currently no notes...</h1> : null
      }
      {
        active.length === 0 ?
          posts.map(el => <Post props={el} />)
          :
          posts.map(el => {
            const view = active.some(r => el.tags.includes(r))
            if (view) {
              return <Post props={el} />
            }
          })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.post,
    tag: state.tag,
  };
};

export default connect( mapStateToProps,null )(Posts);