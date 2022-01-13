import { GET_POST, ADD_POST, REMOVE_POST, CHANGE_POST } from "../type"

const initialState = [];

export const postReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_POST:
      return action.payload;
    case ADD_POST:
      localStorage.setItem("posts", JSON.stringify([ ...state, action.payload ]));
      return [ ...state, action.payload ];
    case REMOVE_POST:
      localStorage.setItem("posts", JSON.stringify([ ...state.filter(el => el.id !== action.payload) ]));
      return [ ...state.filter(el => el.id !== action.payload) ];
    case CHANGE_POST:
      localStorage.setItem("posts", JSON.stringify([ ...state.filter(el => el.id !== action.payload.id), action.payload ]));
      return [ ...state.filter(el => el.id !== action.payload.id), action.payload ];
    default:
      return state;
  };
};