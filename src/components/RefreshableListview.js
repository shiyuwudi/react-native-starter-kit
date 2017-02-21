import React from 'react';
import { ListView, RefreshControl } from 'react-native';

import Separator from './Separator';
import styles from '../styles/listview';

const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

export default class RefreshableListview extends React.Component {

  render() {
    const { loading, data, onEndReached, onRefresh, renderRow } = this.props;

    const refreshControl = (<RefreshControl
      refreshing={loading}
      onRefresh={onRefresh}
    />);
    return (
      <ListView
        style={styles.list}
        refreshControl={refreshControl}
        renderSeparator={Separator}
        dataSource={dataSource.cloneWithRows(data)}
        renderRow={renderRow}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onEndReached={onEndReached}
        onEndReachedThreshold={10}
        enableEmptySections
      />
    );
  }
}

RefreshableListview.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  data: React.PropTypes.array.isRequired,
  onEndReached: React.PropTypes.func.isRequired,
  onRefresh: React.PropTypes.func.isRequired,
  renderRow: React.PropTypes.func.isRequired,
};
