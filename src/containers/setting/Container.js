import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import List from './List';

export class Container extends React.Component {


  render() {
    return (
      <List />
    );
  }
}


export default (Container);
