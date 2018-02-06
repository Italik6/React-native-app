import { combineReducers } from "redux";
import openextenseReducer from "./openextenseReducer";

export default combineReducers({ closeExtenseDialog: openextenseReducer });