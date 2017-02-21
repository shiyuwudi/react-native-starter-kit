import React from 'react';
import { TouchableHighlight, Platform, Alert } from 'react-native';
import Swipeout from 'react-native-swipe-out';

export default class ListItemOperation extends React.Component {

  render() {
    const { onPress, operation } = this.props;

    if (Platform.OS === 'android') {
      return (<TouchableHighlight
        underlayColor={'rgba(100,100,100,0.2)'}
        style={[{ backgroundColor: 'white' }]}
        onPress={onPress}
        onLongPress={() => {
          Alert.alert(
            operation[0].text,
            `确定要${operation[0].text}吗？`, [{
              text: '取消',
              style: 'cancel',
            },
            {
              text: '确定',
              onPress: operation[0].onPress,
            },
            ],
          );
        }}
      >
        {this.props.children}
      </TouchableHighlight>);
    }

    return (<Swipeout
      sensitivity={1}
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={operation}
    >
      <TouchableHighlight
        underlayColor={'rgba(100,100,100,0.2)'}
        style={[{ backgroundColor: 'white' }]}
        onPress={onPress}
      >
        {this.props.children}
      </TouchableHighlight>
    </Swipeout>
    );
  }
}

ListItemOperation.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  operation: React.PropTypes.array.isRequired,
  children: React.PropTypes.any.isRequired,
};
