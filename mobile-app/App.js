import React from 'react';
import HomeMain from '../mobile-app/components/Home'; 
import { Provider } from 'react-redux';
import store from "../mobile-app/stores/index";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
          <HomeMain />
      </Provider>
    );
  } 
}
