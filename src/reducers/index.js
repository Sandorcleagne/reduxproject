import { todoReducer } from "./reducer.js";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todoReducer,
});

export default rootReducers;
