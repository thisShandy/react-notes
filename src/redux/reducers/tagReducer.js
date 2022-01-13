import { SET_TAGS } from "../type";

const initialState = [];

export const tagReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_TAGS:
      return [ ...action.payload ];
    default:
      return state;
  };
};