import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { drawingReducer } from "./drawingReducer";

export default combineReducers({
  contacts,
  drawing: drawingReducer
});
