import React from 'react';
import { View, Modal, Text, FlatList } from 'react-native';
import { connect } from "react-redux";
import AddForm from "../components/Form";
import ActionButton from "../components/Button";
import s from "../styles/styles";

// Redux part
const mapDispatchToProps = dispatch => {
  return { 
      openExpenseDialog: () => dispatch({type: 'OPEN_EXPENSE_DIALOG'})
  };
};

const mapStateToProps = state => {
  return {
      open: state.submitExpenseDialog.open,
      expenses: state.submitExpenseDialog.expenses,
      prices: state.submitExpenseDialog.prices,
      expenses2: state.submitExpenseDialog.expenses2,
      prices2: state.submitExpenseDialog.prices2,
      payer: state.switchButton.payer
  };
};

// End of Redux part
class Home extends React.Component {
  render() {
    let title = "ADD EXPENSE"
    let paymaster = "Michal";
    let paymaster2 = "Wiktor";
    // Addition of prices
    let convertStrings = this.props.prices.map(Number);
    let addPrices = convertStrings.reduce(add, 0);
      function add(a, b){
        return a + b;
      }

    let convertStrings2 = this.props.prices2.map(Number);
    let addPrices2 = convertStrings2.reduce(add, 0);
      function add(a, b){
        return a + b;
      }
    // Counting financal balance
    let summaryExpenses = addPrices + addPrices2;
    let balancePayer = (summaryExpenses/2) - addPrices;
    let balancePayer2 = (summaryExpenses/2) - addPrices2;

    return (
      <View style={s.container}>
          <ActionButton 
            onPress={this.props.openExpenseDialog}
            title={title}
          />
          {/* Paymaster 1 */}
          <Text style={s.primaryText}>{paymaster}:</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <FlatList
            data={this.props.expenses}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text style={s.listText}>{item}</Text>}
          />
          <FlatList
            data={this.props.prices}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text style={s.listText}>{item}</Text>}
          />
          </View>
          {/* Paymaster 2 */}
          <Text style={s.primaryText}>{paymaster2}:</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <FlatList
            data={this.props.expenses2}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text style={s.listText}>{item}</Text>}
          />
          <FlatList
            data={this.props.prices2}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text style={s.listText}>{item}</Text>}
          />
          </View>
          {/* Result */}
          <Text style={s.primaryText}>Summary: {summaryExpenses}</Text>
          <Text style={s.primaryText}>Balance of {paymaster}: {balancePayer}</Text>
          <Text style={s.primaryText}>Balance of {paymaster2}: {balancePayer2}</Text>
          <Modal
            visible={this.props.open}
            animationType={'slide'}
            onRequestClose={this.props.submitExpenseDialog} >
             <AddForm />
          </Modal>
      </View>
    );
  }
}

const HomeMain = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeMain;