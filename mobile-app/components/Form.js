import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from "react-redux";
import SwitchButton from "../components/SwitchButton";
import ActionButton from "../components/Button";
import s from "../styles/styles";
import t from 'tcomb-form-native';
import { colors, fonts, spacers } from '../styles/variables';

// Redux part
const mapDispatchToProps = dispatch => {
  return {
      changeExpenseInputs: (value) => dispatch({type: 'CHANGE_EXPENSE_INPUTS', value}),
      submitExpenseDialog: (value) => dispatch({type: 'SUBMIT_EXPENSE_DIALOG', value}),
      cancelExpenseDialog: () => dispatch({type: 'CANCEL_EXPENSE_DIALOG'})
  };
};

const mapStateToProps = state => {
  return {
      value: state.changeExpenseInputs.value,
  };
};
// End of Redux part
// Validation section
const Form = t.form.Form;

const Expense = t.struct({
  expense: t.String,
  cost: t.Number
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: colors.INIT_COLOR,
      fontSize: fonts.INIT_FONT_SIZE,
      marginBottom: spacers.INIT_MARGIN,
      marginLeft: spacers.INIT_MARGIN,
    },
    error: {
      color: colors.ERROR_COLOR,
      fontSize: fonts.INIT_FONT_SIZE,
      marginBottom: spacers.INIT_MARGIN,
      marginLeft: spacers.INIT_MARGIN,
    }
  },
  textbox: {
    normal: {
      color: colors.INIT_COLOR,
      fontSize: fonts.SMALL_FONT_SIZE,
      height: 36,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: colors.INIT_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      width: '95%',
      alignSelf:'center',
    },
    error: {
      color: colors.INIT_COLOR,
      fontSize: fonts.SMALL_FONT_SIZE,
      height: 36,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: colors.ERROR_COLOR,
      borderWidth: 1,
      marginBottom: spacers.SMALL_MARGIN,
      width: '100%',
      alignSelf:'center',
    }
  }
}

const options = {
  fields: {
    expense: {
      error: <Text style={s.errorText}>This field is required</Text>,
      autoFocus: true
    },
    cost: {
      error: <Text style={s.errorText}>This field is required and it can only contain numbers</Text>
    }
  },
  stylesheet: formStyles
};

class FormE extends React.Component {
  handleClick = () => {
    const value = this._form.getValue();
    if (value) {
      this.props.submitExpenseDialog();
    } 
  }
// End of validation section
  render() {
    let title = "SAVE EXPENSE";
    return (
      <View style={s.container}>
       <Text style={s.titleText}>EXPENSE FORM</Text>
       <View style={s.wrap}>
        <SwitchButton />
       </View>
       <Form 
        type={Expense}
        ref={c => this._form = c}
        options={options} 
        value={this.props.value}
        onChange={this.props.changeExpenseInputs}
       />
       <ActionButton
        onPress={this.handleClick}
        title={title}
       />
       <Text onPress={this.props.cancelExpenseDialog} style={s.cancelLink}>CANCEL</Text>
      </View>
    ); 
  }
}

const AddForm = connect(mapStateToProps, mapDispatchToProps)(FormE);
export default AddForm;