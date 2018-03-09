import React from 'react';
import { StyleSheet, Text, View, Switch, Alert} from 'react-native';
import { connect } from "react-redux";

// Redux part
const mapDispatchToProps = dispatch => {
    return {
        switchButton: (SwitchOnValueHolder) => dispatch({type: 'CHANGE_SWITCH_BUTTON', SwitchOnValueHolder}),
    };
  };
  
  const mapStateToProps = state => {
    return {
        SwitchOnValueHolder: state.switchButton.SwitchOnValueHolder,
    };
  };
  // End of Redux part

class SwitchB extends React.Component {

 render() {
    return (
     <View>
       <Text style={{fontSize: 18}}> Switch </Text>
        <Switch
          onValueChange={this.props.switchButton}
          value={this.props.SwitchOnValueHolder} />
     </View>
   );
 }
}

const SwitchButton = connect(mapStateToProps, mapDispatchToProps)(SwitchB);
export default SwitchButton;