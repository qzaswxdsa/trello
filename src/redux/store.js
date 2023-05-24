import { combineReducers, createStore } from "redux";
import * as Reducers from "./reducers";

export const rootReducer = () =>
  combineReducers({
    ...Reducers,
  });

const store = createStore(rootReducer());

export default store;
