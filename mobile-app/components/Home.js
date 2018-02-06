import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from "react-redux";

// Redux part
const mapDispatchToProps = dispatch => {
  return {
      closeExtenseDialog: () => dispatch({type: 'CLOSE_EXTENSE_DIALOG'}),
      openExtenseDialog: () => dispatch({type: 'OPEN_EXTENSE_DIALOG'})
  };
};

const mapStateToProps = state => {
  return {
      open: state.closeExtenseDialog.open
  };
};
class Home extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={this.props.openExtenseDialog}
          large
          icon={{name: 'cart-plus', type: 'font-awesome'}}
          title='ADD EXPENSE'
          backgroundColor="#FF5722" />
          <Modal
            visible={this.props.open}
            animationType={'slide'}
            onRequestClose={this.props.closeExtenseDialog} >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={this.props.closeExtenseDialog}
                    title="Close modal" >
                </Button>
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
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});