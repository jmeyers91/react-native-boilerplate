import './globals';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Application from './components/Application';
import config from "./config";

function noop() {};

export default (platform) => {
  console.disableYellowBox = true;
  class Entry extends Component {
    render() {
      return (<Application platform={platform}/>);
    }
  }

  AppRegistry.registerComponent('ReactNativeTestProject', () => Entry);
};
