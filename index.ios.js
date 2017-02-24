import React, { Component } from 'react';
import Application from './application/components/Application';
import { AppRegistry } from 'react-native';
console.disableYellowBox = true;

export default class ReactNativeTestProject extends Component {
  render() {
    return (<Application platform="ios"/>);
  }
}

AppRegistry.registerComponent('ReactNativeTestProject', () => ReactNativeTestProject);
