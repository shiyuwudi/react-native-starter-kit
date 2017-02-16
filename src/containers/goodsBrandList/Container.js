import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
} from 'react-native';

import * as action from './action';
import List from './List';

export class Container extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchList();
  }

  render() {
    const { fetchList, fetchEdit, refreshList } = this.props;
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
};

const mapStateToProps = state => ({
  goodsBrandState: state.goodsBrandListReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
