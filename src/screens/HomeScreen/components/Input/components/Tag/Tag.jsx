import React from "react";
import classes from "./Tag.module.css";

const Tag = ({ props }) => {
  return (
    <span className={classes.head}>
      { props }
    </span>
  );
};

export default Tag;