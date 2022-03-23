import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
const store = createStore(RootReducer, applyMiddleware(logger, thunk));
export default store;
