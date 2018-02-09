import { combineReducers } from "redux";
import openextenseReducer from "./openextenseReducer";
import changeinputReducer from "./changeinputReducer";

export default combineReducers({ closeExtenseDialog: openextenseReducer, changeExpenseInput: changeinputReducer });