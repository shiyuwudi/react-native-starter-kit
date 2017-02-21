import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as action from './action';
import List from './List';

export class Container extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchList();
  }

  componentWillMount() {
    Actions.refresh({ onRight: this.add.bind(this), rightTitle: '新增' });
  }

  add() {
    Actions.GoodsBrandEditContainer({ title: '品牌新增' });
    this.props.fetchAdd();
  }

  render() {
    const { fetchList, fetchEdit, refreshList, fetchDel } = this.props;
    const { data, currentPage, loading } = this.props.goodsBrandState;
    return (
      <View >
        <List
          data={data}
          loading={loading}
          fetchEdit={fetchEdit}
          onEndReached={() => {
            fetchList({ currentPage: currentPage + 1 });
          }}
          onRefresh={() => {
            refreshList();
            fetchList();
          }}
          fetchDel={fetchDel}
        />
      </View>
    );
  }
}

Container.propTypes = {
  goodsBrandState: React.PropTypes.object.isRequired,
  fetchList: React.PropTypes.func.isRequired,
  refreshList: React.PropTypes.func.isRequired,
  fetchEdit: React.PropTypes.func.isRequired,
  fetchAdd: React.PropTypes.func.isRequired,
  fetchDel: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goodsBrandState: state.goodsBrandListReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
