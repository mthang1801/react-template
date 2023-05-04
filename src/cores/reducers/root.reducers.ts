import { combineReducers } from "redux";
import { IRootReducers } from "../interfaces/root.interfaces";
import accountReducer from "./accout.reducer";
import channelReducer from './channel.reducer';
import globalReducer from "./global.reducer";

const rootReducers = combineReducers<IRootReducers>({
  globalReducer,
  accountReducer,
  channelReducer
});

export default rootReducers;
