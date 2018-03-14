const initialState = {
    expenses: [],
    prices: [],
    expenses2: [],
    prices2: [],
    open: false,
    switchValue: false,
    payer: "Michal",
    value: {}
   };
   
   const mainReducer = (state = initialState, action) => {
     switch (action.type) { 
       case 'CHANGE_SWITCH_BUTTON':
          if (state.switchValue == true)
          {
            return { ...state, switchValue: false, payer: "Michal" };
          }
          else {
            return { ...state, switchValue: true, payer: "Wiktor" };
          }
       case 'CHANGE_EXPENSE_INPUT':
            return {...state, value: action.value };
       case 'SUBMIT_EXPENSE_DIALOG':
          if (state.payer === "Michal"){
            return {
                  ...state, open: false, value: {},
                  expenses: [...state.expenses, state.value.expense],
                  prices: [...state.prices, state.value.cost]
            };
          }
          else {
            return {
                  ...state, open: false, value: {},
                  expenses2: [...state.expenses2, state.value.expense],
                  prices2: [...state.prices2, state.value.cost]
            };
          };
       case 'OPEN_EXPENSE_DIALOG':
         return {...state, open: true};
       default:
         return state;
     }
   };
   
   export default mainReducer;