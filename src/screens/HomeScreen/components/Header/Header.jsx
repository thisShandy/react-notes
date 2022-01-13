import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.head}>React-Notes</h1>
      </div>
    </header>
  );
};

export default Header;