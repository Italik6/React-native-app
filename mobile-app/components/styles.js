  'use strict';
  
  let React = require('react-native');
  
  let {
    StyleSheet,
  } = React;
  
  let INIT_COLOR = "#fff";
  let ERROR_COLOR = "#E53935";
  let BACKGROUND_COLOR = "#212121";
  let ORANGE_COLOR = "#FF9800";
  let INIT_FONT_SIZE = 16; 
  let SMALL_FONT_SIZE = 14; 
  let BIG_FONT_SIZE = 20;
  let INIT_MARGIN = 10;
  let SMALL_MARGIN = 5;
  let title = "SAVE EXPENSE";

  module.exports = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
        height: '100%'
    },
    titleText: {
        alignSelf:'center',
        color: INIT_COLOR,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: INIT_MARGIN
    },
    primaryText: {
        color: INIT_COLOR,
        fontSize: BIG_FONT_SIZE,
        fontWeight: 'bold',
        margin: INIT_MARGIN
    },
    secondaryText: {
        color: INIT_COLOR,
        fontSize: INIT_FONT_SIZE,
        marginTop: INIT_MARGIN,
        marginBottom: INIT_MARGIN
    },
    listText: {
        color: INIT_COLOR,
        fontSize: INIT_FONT_SIZE,
        marginTop: SMALL_MARGIN,
        marginBottom: SMALL_MARGIN,
        marginLeft: INIT_MARGIN
    },
    wrap: {
        margin: INIT_MARGIN,
    },
    errorText: {
        color: ERROR_COLOR,
        fontSize: SMALL_FONT_SIZE
    },
    cancelLink: {
        color: ORANGE_COLOR,
        alignSelf:'center'
    }
}); 