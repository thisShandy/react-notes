import React, { useState, useEffect } from "react";
import classes from "./Filter.module.css";

import { connect } from "react-redux";

import Tag from "./components/Tag/Tag";
import { setTags } from "../../../../redux/actions";

const Filter = ({ posts, setTags }) => {

  const [ tag, setTag ] = useState([])

  useEffect(() => {
    const tags = posts.map(el => {
      return el.tags
    }).flat();
    const tagsNew = Array.from(new Set(tags));
    setTag( tagsNew[0] !== null ? tagsNew.map(el => {
      return {
        id: (Math.floor(Math.random() * (1000 - 100 + 1)) + 100 + Math.floor(Math.random() * (1000 - 100 + 1))).toString(),
        name: el,
        active: false,
      }
    }) : []);
  }, [posts]);

  const setActive = id => {
    setTag(tag.map(el => {
      if (el.id === id) {
        el.active = !el.active
      }
      return el
    }));
  };

  setTags(tag);

  return (
    <div className={classes.container}>
      <h1 className={classes.head}>All notes</h1>
      <div className={classes.tags}>
        {
          tag.map( el => <Tag props={el} setActive={setActive} /> )
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.post,
  };
};

const mapDispatchToProps = {
  setTags,
};

export default connect( mapStateToProps, mapDispatchToProps )(Filter);