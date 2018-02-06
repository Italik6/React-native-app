const initialState = {
    open: false
   };
   
   const openextenseReducer = (state = initialState, action) => {
     switch (action.type) { 
       case 'CLOSE_EXTENSE_DIALOG':
         return {...state, open: false};
       case 'OPEN_EXTENSE_DIALOG':
         return {...state, open: true};
       default:
         return state;
     }
   };
   
   export default openextenseReducer;