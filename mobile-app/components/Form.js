import React from 'react';
import { View, TextInput } from 'react-native';
import { connect } from "react-redux";
import { FormLabel, FormInput, Button } from 'react-native-elements'

// Redux part
const mapDispatchToProps = dispatch => {
  return {
      changeExpenseInput: (text) => dispatch({type: 'CHANGE_EXPENSE_INPUT', text}),
      closeExpenseDialog: () => dispatch({type: 'CLOSE_EXPENSE_DIALOG'})
  };
};

const mapStateToProps = state => {
  return {
      text: state.changeExpenseInput.text
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
        />
        <Button
            onPress={this.props.closeExpenseDialog}
            title="Close modal" >
        </Button>
      </View>
    );
  }
}
const AddForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default AddForm;