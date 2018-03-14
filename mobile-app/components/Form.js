import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from "react-redux";
import SwitchButton from "../components/SwitchButton";
import ActionButton from "../components/Button";
import s from "../components/styles";
import t from 'tcomb-form-native';

// Redux part
const mapDispatchToProps = dispatch => {
  return {
      changeExpenseInput: (value) => dispatch({type: 'CHANGE_EXPENSE_INPUT', value}),
      submitExpenseDialog: (value) => dispatch({type: 'SUBMIT_EXPENSE_DIALOG', value}),
  };
};

const mapStateToProps = state => {
  return {
      text: state.changeExpenseInput.text,
      price: state.changePriceInput.price,
      value: state.changeExpenseInput.value,
      _form: state.submitExpenseDialog._form,
  };
};
// End of Redux part
// Validation
const Form = t.form.Form;

const Expense = t.struct({
  expense: t.String,
  cost: t.Number
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
  }
}

const options = {
  fields: {
    expense: {
      error: 'This field is required'
    },
    cost: {
      error: 'This field is required'
    }
  },
  stylesheet: formStyles,
};


class FormE extends React.Component {

  handleClick = () => {
    const value = this._form.getValue();
    if (value) {
      this.props.submitExpenseDialog();
    } 
  }

  render() {
    let title = "SAVE EXPENSE"

    return (
      <View style={s.container}>
       <Text style={s.titleText}>EXPENSE FORM</Text>
       <View style={s.wrap}>
        <Text style={s.secondaryText}>Who did pay?</Text>
        <SwitchButton />

       </View>
        <Form 
          type={Expense}
          ref={c => this._form = c}
          options={options} 
          value={this.props.value}
          onChange={this.props.changeExpenseInput}
        />
        <ActionButton
          onPress={this.handleClick}
          title={title}
        />
      </View>
    ); 
  }
}

const AddForm = connect(mapStateToProps, mapDispatchToProps)(FormE);
export default AddForm;