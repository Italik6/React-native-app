import { combineReducers } from "redux";
import openexpenseReducer from "./openexpenseReducer";
import changeinputReducer from "./changeinputReducer";

export default combineReducers({ closeExpenseDialog: openexpenseReducer, changeExpenseInput: changeinputReducer });