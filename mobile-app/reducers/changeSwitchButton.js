const initialState = {
    SwitchOnValueHolder: false,
   };
   
   const changeSwitchButton = (state = initialState, action) => {
     switch (action.type) { 
       case 'CHANGE_SWITCH_BUTTON':
        if(state.SwitchOnValueHolder == true)
        {
            //Perform any task here which you want to execute on Switch ON event.
            console.log("jest ok");
            return { SwitchOnValueHolder: false };
        }
        else{
            //Perform any task here which you want to execute on Switch OFF event.
            console.log("nie jest ok");
            return { SwitchOnValueHolder: true };
        }
       default:
         return state;
     }
   };
   
   export default changeSwitchButton;