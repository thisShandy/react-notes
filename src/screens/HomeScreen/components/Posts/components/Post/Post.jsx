import React from "react";
import classes from "./Post.module.css";

import { connect } from "react-redux";
import { removePost, openModal } from "../../../../../../redux/actions"

import edit from "./img/edit.svg";
import remove from "./img/remove.svg";

const Post = ({ props, removePost, openModal }) => {
  return (
    <div className={classes.container}>
      <div className={classes.textWrapper}>
        <p className={classes.head}>{ props.text }</p>
      </div>
      <div className={classes.buttonWrapper}>
        <button onClick={() => {
          openModal(props)
        }} className={classes.button}>
          <img src={edit} className={classes.img} alt="pen" />
        </button>
        <button onClick={() => {
          removePost(props.id)
        }} className={classes.button}>
          <img src={remove} className={classes.img} alt="trash" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = {
  removePost,
  openModal,
};

export default connect(null, mapStateToProps)(Post);