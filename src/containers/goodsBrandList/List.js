import React from 'react';
import { View, Text, RefreshControl, StyleSheet } from 'react-native';
import { ListView } from 'antd-mobile';

import ListItemOperation from '../../components/ListItemOperation';

import Separator from '../../components/Separator';
import Arrow from '../../components/Arrow';
import textStyle from '../../styles/text';

const styles = StyleSheet.create({
  list: {
    minHeight: 400,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    padding: 15,
  },
});

const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

export default class List extends React.Component {

  render() {
    const { loading, fetchEdit, onEndReached, onRefresh, fetchDel, data } = this.props;

    const row = (obj, sectionID, rowID) => (
      <View key={rowID}>
        <ListItemOperation
          onPress={() => {
            fetchEdit({ id: obj.id });
          }}
          operation={[
            {
              text: '删除',
              onPress: () => { fetchDel({ ids: obj.id }); },
              backgroundColor: '#F4333C',
            },
          ]}
        >
          <View style={styles.row}>
            <Text
              numberOfLines={1}
              style={textStyle.subHead}
            >{obj.goodsBrandName}</Text>
            <Arrow />
          </View>
        </ListItemOperation>
      </View>
    );
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
        renderRow={row}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onEndReached={onEndReached}
        onEndReachedThreshold={10}
        enableEmptySections
      />
    );
  }
}

List.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  onEndReached: React.PropTypes.func.isRequired,
  onRefresh: React.PropTypes.func.isRequired,
  fetchEdit: React.PropTypes.func.isRequired,
  fetchDel: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired,
};
