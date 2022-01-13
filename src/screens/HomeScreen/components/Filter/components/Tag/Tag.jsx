import React from "react";
import classes from "./Tag.module.css";

const Tag = ({ props, setActive }) => {
  return (
    <button onClick={() => {
      setActive(props.id)
    }} style={ props.active ? { backgroundColor: "#F45B69", color: "#FAFAFF" } : null} className={classes.item}>
      { props.name }
    </button>
  );
};

export default Tag;