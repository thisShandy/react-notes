import React, { useState, useEffect } from "react";
import classes from "./ModalScreen.module.css";
import close from "./img/close.svg";
import pen from "../HomeScreen/components/Posts/components/Post/img/edit.svg";

import { connect } from "react-redux";
import { closeModal, changePost } from "../../redux/actions";

import Tag from "./components/Tag/Tag";

const ModalScreen = ({ modal, closeModal, changePost }) => {

  const [ item, setItem ] = useState({})

  useEffect(() => {
    setItem(modal.post)
  }, [modal])

  const setText = text => {
    setItem({
      ...item,
      text,
      tags: text.match(/#\w+/g),
    });
  };

  return (
    <div style={ modal.active ? { display: "block" } : { display: "none", opacity: 0 } } className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.input}>
          <header className={classes.header}>
            <h1 className={classes.head}>Edit note</h1>
            <button onClick={closeModal} className={classes.close}>
              <img src={close} className={classes.cross} alt=""/>
            </button>
          </header>
          <textarea onChange={e => {
            setText(e.target.value)
          }} value={item.text} className={classes.textarea} />
          <footer className={classes.footer}>
            <div className={classes.tags}>
              {
                item.tags ?
                  item.tags.map(el => <Tag props={el} />)
                  : null
              }
            </div>
            <button onClick={() => {
              if ( item.text !== "" ) {
                changePost(item);
                closeModal();
              };
            }} className={classes.edit}>
              <img src={pen} className={classes.pen} alt="pen"/>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = {
  closeModal,
  changePost,
}

export default connect( mapStateToProps, mapDispatchToProps )(ModalScreen);