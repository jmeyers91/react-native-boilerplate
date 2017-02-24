import React, { Component } from 'react';
import Application from './application/components/Application';
import { AppRegistry } from 'react-native';

export default class ReactNativeTestProject extends Component {
  render() {
    return (<Application platform="android"/>);
  }
}

AppRegistry.registerComponent('ReactNativeTestProject', () => ReactNativeTestProject);
