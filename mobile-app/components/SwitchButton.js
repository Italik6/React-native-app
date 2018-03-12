import React from 'react';
import { Text, View, Switch} from 'react-native';
import { connect } from "react-redux";
let s = require('../components/styles');

// Redux part
const mapDispatchToProps = dispatch => {
    return {
        switchButton: (switchValue, payer) => dispatch({type: 'CHANGE_SWITCH_BUTTON', switchValue, payer}),
    };
  };
  
  const mapStateToProps = state => {
    return {
        switchValue: state.switchButton.switchValue,
        payer: state.switchButton.payer
    };
  };
  // End of Redux part

class SwitchB extends React.Component {

 render() {
    return (
     <View>
       <Text style={s.secondaryText}> {this.props.payer} </Text>
        <Switch
          onValueChange={this.props.switchButton}
          value={this.props.switchValue}
          style={{ marginBottom: 10 }}
        />
     </View>
   );
 }
}

const SwitchButton = connect(mapStateToProps, mapDispatchToProps)(SwitchB);
export default SwitchButton;