import { combineReducers } from "redux";
import changeinputReducer from "./changeinputReducer";

export default combineReducers({ changeExpenseInput: changeinputReducer, closeExpenseDialog: changeinputReducer, changePriceInput: changeinputReducer, });