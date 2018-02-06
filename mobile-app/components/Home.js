import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  
  addExpense = () => {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.addExpense}
          large
          icon={{name: 'cart-plus', type: 'font-awesome'}}
          title='ADD EXPENSE'
          backgroundColor="#FF5722" />
          <Modal
            visible={this.state.modalVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()} >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal" >
                </Button>
              </View>
            </View>
          </Modal>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

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