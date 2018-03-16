import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { colors, fonts, spacers } from '../styles/variables';

class ActionButton extends React.Component {

 render() {
    return (
    <View style={styles.buttonContainer}>
        <Button
          style={styles.addButton}
          onPress={this.props.onPress}
          title={this.props.title}
          color={colors.INIT_COLOR}
          accessibilityLabel="Tap on the button"
        />
    </View>
   );
 }
}

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: colors.ORANGE_COLOR,
      borderRadius: 10,
      padding: spacers.INIT_MARGIN,
      width: '40%',
      margin: '10%',
      shadowColor: colors.ORANGE_COLOR,
      alignSelf:'center',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: spacers.INIT_MARGIN,
      shadowOpacity: 0.25
    }
  });

export default ActionButton;