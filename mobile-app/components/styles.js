  'use strict';
  
  let React = require('react-native');
  
  let {
    StyleSheet,
  } = React;
  
  module.exports = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        height: '100%'
    },
    titleText: {
        alignSelf:'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    primaryText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    secondaryText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10
    },
    inputText: {
        height: 40,
        borderColor: '#FFE0B2',
        borderWidth: 1,
        color: '#fff'
    },
    listText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10
    },
    wrap: {
        margin: 20,
    }
}); 