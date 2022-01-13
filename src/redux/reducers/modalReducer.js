import { OPEN_MODAL, CLOSE_MODAL } from "../type";

const initialState = {
  active: false,
  post: {},
};

export const modalReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        active: true,
        post: action.payload,
      };
    case CLOSE_MODAL:
      return {
        active: false,
        post: {},
      };
    default:
      return state;
  };
};