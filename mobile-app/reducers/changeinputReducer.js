const initialState = {
    text: ''
   };
   
   const changeinputReducer = (state = initialState, action) => {
     switch (action.type) { 
       case 'CHANGE_EXPENSE_INPUT':
         return {...state, text: action.text };
       default:
         return state;
     }
   };
   
   export default changeinputReducer;