import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { drawingReducer } from "./drawingReducer";
import { filtersReducer } from "./filtersReducer";

export default combineReducers({
  contacts,
  drawing: drawingReducer,
  filters: filtersReducer,
});
