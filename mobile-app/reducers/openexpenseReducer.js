const initialState = {
    open: false
   };
   
   const openexpenseReducer = (state = initialState, action) => {
     switch (action.type) { 
       case 'CLOSE_EXPENSE_DIALOG':
         return {...state, open: false};
       case 'OPEN_EXPENSE_DIALOG':
         return {...state, open: true};
       default:
         return state;
     }
   };
   
   export default openexpenseReducer;