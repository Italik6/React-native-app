const initialState = {
    text: '',
    expenses: [],
    open: false
   };
   
   const changeinputReducer = (state = initialState, action) => {
     switch (action.type) { 
       case 'CHANGE_EXPENSE_INPUT':
         return {...state, text: action.text };
       case 'CLOSE_EXPENSE_DIALOG':
         return {
                ...state, open: false, text: '',
                expenses: [...state.expenses, state.text]
        };
       case 'OPEN_EXPENSE_DIALOG':
        return {...state, open: true};
       default:
         return state;
     }
   };
   
   export default changeinputReducer;