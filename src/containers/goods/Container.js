import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
} from 'react-native';
import { SearchBar } from 'antd-mobile';

import * as action from './action';
import List from './List';

export class Container extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchList();
  }

  onChange(value) {
    this.setState({ value });
  }
  clear() {
    this.setState({ value: '' });
  }
  render() {
    const { searchChange, search } = this.props;
    const { data, searchStr } = this.props.userState;
    return (
      <View >
        <SearchBar
          value={searchStr}
          placeholder="输入商品名称／编码"
          keyboardType="web-search"
          onChange={value => searchChange(value)}
          onCancel={() => searchChange('')}
          onSubmit={value => search(value)}
          showCancelButton={searchStr && searchStr.length > 0}
        />
        <List data={data} />
      </View>
    );
  }
}

Container.propTypes = {
  userState: React.PropTypes.object.isRequired,
  fetchList: React.PropTypes.func.isRequired,
  searchChange: React.PropTypes.func.isRequired,
  search: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userState: state.goodsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
