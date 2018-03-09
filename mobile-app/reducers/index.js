import { combineReducers } from "redux";
import changeInputReducer from "./changeInputReducer";
import changeSwitchButton from "./changeSwitchButton";

export default combineReducers({ changeExpenseInput: changeInputReducer, closeExpenseDialog: changeInputReducer, changePriceInput: changeInputReducer, switchButton: changeSwitchButton });