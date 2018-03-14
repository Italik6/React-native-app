import { combineReducers } from "redux";
import mainReducer from "./mainReducer";

export default combineReducers({ changeExpenseInputs: mainReducer,
                                 submitExpenseDialog: mainReducer, 
                                 cancelExpenseDialog: mainReducer,
                                 switchButton: mainReducer 
                               });