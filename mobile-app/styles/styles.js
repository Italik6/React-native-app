  'use strict';
  import { colors, fonts, spacers } from '../styles/variables';
  
  let React = require('react-native');
  let { StyleSheet } = React;
  
  module.exports = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND_COLOR,
        height: '100%'
    },
    titleText: {
        alignSelf:'center',
        color: colors.INIT_COLOR,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: spacers.INIT_MARGIN
    },
    primaryText: {
        color: colors.INIT_COLOR,
        fontSize: fonts.BIG_FONT_SIZE,
        fontWeight: 'bold',
        margin: spacers.INIT_MARGIN
    },
    secondaryText: {
        color: colors.INIT_COLOR,
        fontSize: fonts.INIT_FONT_SIZE,
        marginTop: spacers.INIT_MARGIN,
        marginBottom: spacers.INIT_MARGIN
    },
    listText: {
        color: colors.INIT_COLOR,
        fontSize: fonts.INIT_FONT_SIZE,
        marginTop: spacers.SMALL_MARGIN,
        marginBottom: spacers.SMALL_MARGIN,
        marginLeft: spacers.INIT_MARGIN
    },
    wrap: {
        margin: spacers.INIT_MARGIN,
    },
    errorText: {
        color: colors.ERROR_COLOR,
        fontSize: fonts.SMALL_FONT_SIZE
    },
    cancelLink: {
        color: colors.ORANGE_COLOR,
        alignSelf:'center'
    }
}); 