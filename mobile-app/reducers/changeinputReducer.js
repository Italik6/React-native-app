const initialState = {
    text: '',
    expenses: [],
    prices: [],
    open: false,
   };
   
   const changeinputReducer = (state = initialState, action) => {
     switch (action.type) { 
       case 'CHANGE_EXPENSE_INPUT':
         return {...state, text: action.text };
       case 'CHANGE_PRICE_INPUT':
         return {...state, price: action.price };
       case 'CLOSE_EXPENSE_DIALOG':
         return {
                ...state, open: false, text: '', price: '',
                expenses: [...state.expenses, state.text],
                prices: [...state.prices, state.price]
        };
       case 'OPEN_EXPENSE_DIALOG':
         return {...state, open: true};
       default:
         return state;
     }
   };
   
   export default changeinputReducer;