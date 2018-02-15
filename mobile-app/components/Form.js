import React from 'react';
import { View, TextInput } from 'react-native';
import { connect } from "react-redux";
import { FormLabel, FormInput, Button } from 'react-native-elements'

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
  render() {
    return (
      <View>
         <FormLabel>Expense</FormLabel>
         <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.props.changeExpenseInput}
            value={this.props.text}
            autoFocus={true}
            maxLength={50}
         />
         <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.props.changePriceInput}
            value={this.props.price}
            maxLength={5}
            keyboardType='numeric'
         />  
        <Button
            onPress={this.props.closeExpenseDialog}
            title="Save the expense" >
        </Button>
      </View>
    );
  }
}
const AddForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default AddForm;