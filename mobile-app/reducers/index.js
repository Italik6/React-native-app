import { combineReducers } from "redux";
import mainReducer from "./mainReducer";

export default combineReducers({ changeExpenseInput: mainReducer,
                                 closeExpenseDialog: mainReducer, 
                                 changePriceInput: mainReducer, 
                                 switchButton: mainReducer 
                               });