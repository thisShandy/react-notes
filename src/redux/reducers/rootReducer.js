import { combineReducers } from "redux";
import { postReducer } from "./postReducer"
import { tagReducer } from "./tagReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  post: postReducer,
  tag: tagReducer,
  modal: modalReducer,
});