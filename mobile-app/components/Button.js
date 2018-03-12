import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

class ActionButton extends React.Component {

 render() {
    return (
    <View style={styles.buttonContainer}>
        <Button
            style={styles.addButton}
            onPress={this.props.onPress}
            title={this.props.title}
            color="#fff"
            accessibilityLabel="ADD EXPENSE"
        />
    </View>
   );
 }
}

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#FF9800',
      borderRadius: 10,
      padding: 10,
      width: "50%",
      marginTop: '10%',
      marginBottom: '10%',
      shadowColor: '#FF9800',
      alignSelf:'center',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25
    }
  });

export default ActionButton;