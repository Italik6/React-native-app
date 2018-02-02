import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Home from '../mobile-app/components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Ireneusz Ciara!</Text>
        <Home />
        <Button
          raised
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});