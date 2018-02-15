import React from 'react';
import { StyleSheet, View, Modal, Text, FlatList, List } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from "react-redux";
import AddForm from "../components/Form";

// Redux part
const mapDispatchToProps = dispatch => {
  return { 
      openExpenseDialog: () => dispatch({type: 'OPEN_EXPENSE_DIALOG'})
  };
};

const mapStateToProps = state => {
  return {
      open: state.closeExpenseDialog.open,
      expenses: state.closeExpenseDialog.expenses
  };
};
// End of Redux part
class Home extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={this.props.openExpenseDialog}
          large
          icon={{name: 'cart-plus', type: 'font-awesome'}}
          title='ADD EXPENSE'
          backgroundColor="#FF5722" />
          <FlatList
            data={this.props.expenses}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text>{item}</Text>}
          />
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
    // flex: 1,
    // justifyContent: 'center',
  },
  modalContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  innerContainer: {
    // alignItems: 'center',
  },
});