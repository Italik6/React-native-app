const initialState = {
    text: '',
    expenses: []
   };
   
   const changeinputReducer = (state = initialState, action) => {
     switch (action.type) { 
       case 'CHANGE_EXPENSE_INPUT':
         return {...state, text: action.text };
       case 'CLOSE_EXPENSE_DIALOG':
       return {
        ...state, 
        expenses: [...state.expenses, state.text]
      };
       default:
         return state;
     }
   };
   
   export default changeinputReducer;