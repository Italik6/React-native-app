import { combineReducers } from "redux";
import changeinputReducer from "./changeinputReducer";
import changeSwitchButton from "./changeSwitchButton";

export default combineReducers({ changeExpenseInput: changeinputReducer, closeExpenseDialog: changeinputReducer, changePriceInput: changeinputReducer, switchButton: changeSwitchButton });