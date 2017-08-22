import React, { Component } from 'react';
import { Constants } from 'expo';
import { View, StyleSheet } from 'react-native';

import Index from './app/index';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Index />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  }
});
