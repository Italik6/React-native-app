import React from 'react';
import { StyleSheet, View, Modal, Text, FlatList } from 'react-native';
import { connect } from "react-redux";
import AddForm from "../components/Form";
import ActionButton from "../components/Button";

// Redux part
const mapDispatchToProps = dispatch => {
  return { 
      openExpenseDialog: () => dispatch({type: 'OPEN_EXPENSE_DIALOG'})
  };
};

const mapStateToProps = state => {
  return {
      open: state.closeExpenseDialog.open,
      expenses: state.closeExpenseDialog.expenses,
      prices: state.closeExpenseDialog.prices,
      expenses2: state.closeExpenseDialog.expenses2,
      prices2: state.closeExpenseDialog.prices2,
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
      <View>
          <ActionButton 
            onPress={this.props.openExpenseDialog}
            title={title}
          />
          {/* Paymaster 1 */}
          <Text>{paymaster}:</Text>
          <FlatList
            data={this.props.expenses}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text>{item}</Text>}
          />
          <FlatList
            data={this.props.prices}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text>{item}</Text>}
          />
          {/* Paymaster 2 */}
          <Text>{paymaster2}:</Text>
          <FlatList
            data={this.props.expenses2}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text>{item}</Text>}
          />
          <FlatList
            data={this.props.prices2}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text>{item}</Text>}
          />
          {/* Result */}
          <Text>Summary: {summaryExpenses}</Text>
          <Text>Balance of {paymaster}: {balancePayer}</Text>
          <Text>Balance of {paymaster2}: {balancePayer2}</Text>
          <Modal
            visible={this.props.open}
            animationType={'slide'}
            onRequestClose={this.props.closeExpenseDialog} >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <AddForm />
              </View>
            </View>
          </Modal>
      </View>
    );
  }
}

const HomeMain = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeMain;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // flex: 1,
  },
  modalContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  innerContainer: {
    // alignItems: 'center',
  },
  flatList: {

  },
  flatList2: {
    // alignSelf: 'flex-start',  
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});