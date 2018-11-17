import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { drawingReducer } from "./drawingReducer";
import { filtersReducer } from "./filtersReducer";
import { parametersReducer } from "./parametersReducer";

export default combineReducers({
  contacts,
  drawing: drawingReducer,
  filters: filtersReducer,
  parameters: parametersReducer,
});