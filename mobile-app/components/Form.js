import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from "react-redux";
import SwitchButton from "../components/SwitchButton";
import ActionButton from "../components/Button";
let s = require('../components/styles');

// Redux part
const mapDispatchToProps = dispatch => {
  return {
      changeExpenseInput: (text) => dispatch({type: 'CHANGE_EXPENSE_INPUT', text}),
      changePriceInput: (price) => dispatch({type: 'CHANGE_PRICE_INPUT', price}),
      closeExpenseDialog: () => dispatch({type: 'CLOSE_EXPENSE_DIALOG'}),
  };
};

const mapStateToProps = state => {
  return {
      text: state.changeExpenseInput.text,
      price: state.changePriceInput.price,
  };
};
// End of Redux part

class Form extends React.Component {
  changeValue = (value) => {
    this.setState({
      value:value
    })
  }

  render() {
    let title = "SAVE EXPENSE"

    return (
      <View style={s.container}>
       <Text style={s.titleText}>EXPENSE FORM</Text>
       <View style={s.wrap}>
        <Text style={s.secondaryText}>Who did pay?</Text>
        <SwitchButton />
        <Text style={s.secondaryText}>Name of expense:</Text>
        <TextInput
          style={s.inputText}
          onChangeText={this.props.changeExpenseInput}
          value={this.props.text}
          autoFocus={true}
          maxLength={50}
        />
        <Text style={s.secondaryText}>Cost of expense:</Text>
        <TextInput
          style={s.inputText}
          onChangeText={this.props.changePriceInput}
          value={this.props.price}
          maxLength={5}
          keyboardType='numeric'
        />  
        <ActionButton
          onPress={this.props.closeExpenseDialog}
          title={title}
        />
       </View>
      </View>
    ); 
  }
}

const AddForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default AddForm;