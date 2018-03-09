const initialState = {
    switchValue: false,
    payer: "Michal"
   };
   
   const changeSwitchButton = (state = initialState, action) => {
     switch (action.type) { 
       case 'CHANGE_SWITCH_BUTTON':
        if (state.switchValue == true)
        {
          return { switchValue: false, payer: "Michal" };
        }
        else {
          return { switchValue: true, payer: "Wiktor" };
        }
       default:
         return state;
     }
   };
   
   export default changeSwitchButton;