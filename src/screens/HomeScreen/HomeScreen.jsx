import React from "react";
import classes from "./HomeScreen.module.css";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Filter from "./components/Filter/Filter";
import Posts from "./components/Posts/Posts"

const HomeScreen = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Input />
      <Filter />
      <Posts />
    </div>
  );
};

export default HomeScreen;