const initialState = {
    text: '',
    expenses: [],
    prices: [],
    expenses2: [],
    prices2: [],
    open: false,
    switchValue: false,
    payer: "Michal"
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
         return {...state, text: action.text };
       case 'CHANGE_PRICE_INPUT':
         return {...state, price: action.price };
       case 'CLOSE_EXPENSE_DIALOG':
          if (state.payer === "Michal"){
            return {
                  ...state, open: false, text: '', price: '',
                  expenses: [...state.expenses, state.text],
                  prices: [...state.prices, state.price]
            };
          }
          else {
            return {
                  ...state, open: false, text: '', price: '',
                  expenses2: [...state.expenses2, state.text],
                  prices2: [...state.prices2, state.price]
            };
          };
       case 'OPEN_EXPENSE_DIALOG':
         return {...state, open: true};
       default:
         return state;
     }
   };
   
   export default mainReducer;