import React, { useEffect } from "react";
import "./reset.min.css";
import "./App.css";

import { connect } from "react-redux";
import { getPost } from "./redux/actions";

import ModalScreen from "./screens/ModalScreen/ModalScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const App = ({ getPost }) => {

  useEffect(() => {
    const post = localStorage.getItem("posts");
    if (Array.isArray(JSON.parse(post))) {
      getPost(JSON.parse(post))
    }
  }, [])

  return (
    <>
      <ModalScreen />
      <HomeScreen />
    </>
  );
};

const mapDispatchToProps = {
  getPost,
};

export default connect( null , mapDispatchToProps )(App);