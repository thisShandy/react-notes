import { GET_POST, ADD_POST, REMOVE_POST, CHANGE_POST, CLOSE_MODAL, OPEN_MODAL, SET_TAGS } from "./type"

export const getPost = payload => {
  return {
    type: GET_POST,
    payload,
  };
}

export const addPost = payload => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const removePost = payload => {
  return {
    type: REMOVE_POST,
    payload,
  };
};

export const changePost = payload => {
  return {
    type: CHANGE_POST,
    payload,
  };
};

export const setTags = payload => {
  return {
    type: SET_TAGS,
    payload,
  };
};

export const openModal = payload => {
  return {
    type: OPEN_MODAL,
    payload,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}