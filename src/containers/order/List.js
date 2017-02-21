/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, RefreshControl } from 'react-native';
import { ListView } from 'antd-mobile';
import GoodsList from './goods/GoodsListContainer';

const styles = StyleSheet.create({
  titleLeft: {
    padding: 2,
  },
  titleRight: {
    padding: 2,
    width: 12,
    height: 12,
    alignSelf: 'center',
  },
  titleContainer: {
    marginBottom: 8,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    marginTop: 8,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  money: {
    color: 'red',
  },
});

const status = {
  0: '待审核',
  5: '已审核',
  10: '等待分配',
  15: '已分配',
  25: '拣货完成',
  30: '待发货',
  35: '发货完成',
  40: '已取消',
  45: '转单',
};

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

const getSource = (value) => {
  let src = require('../../../images/op_memo/op_memo_0.png');
  switch (value) {
    case '1':
      src = require('../../../images/op_memo/op_memo_1.png');
      break;
    case '2':
      src = require('../../../images/op_memo/op_memo_2.png');
      break;
    case '3':
      src = require('../../../images/op_memo/op_memo_3.png');
      break;
    case '4':
      src = require('../../../images/op_memo/op_memo_4.png');
      break;
    case '5':
      src = require('../../../images/op_memo/op_memo_5.png');
      break;
    default:
      break;
  }
  return src;
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const loadingTxt = this.state.isLoading ? '加载中...' : '加载完毕';
    const { loading, fetchList, currentPage, fetchEdit } = this.props;
    const separator = (sectionID, rowID) => (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderStyle: 'solid',
          borderTopWidth: 1,
          borderTopColor: '#ECECED',
          borderBottomWidth: 1,
          borderBottomColor: '#ECECED',
        }}
      />
    );
    const row = (obj, sectionID, rowID = () => {}) => (
      <View key={rowID}>
        <TouchableHighlight
          underlayColor={'rgba(100,100,100,0.2)'}
          style={[{ padding: 8, backgroundColor: 'white' }]}
          onPress={() => {
            fetchEdit({ id: obj.gsGoodsId });
          }}
        >
          <View>

            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.titleLeft}>内部单号：{`${obj.code}（${status[obj.status] || '默认'}）`}</Text>
              </View>
              <Image style={styles.titleRight} source={getSource(obj.sellerFlag)} />
            </View>

            <View>
              <GoodsList orderId={obj.id} />
            </View>

            <View style={styles.footer}>
              <Text>收货人：{obj.name}</Text>
              <Text style={styles.money}>￥{obj.totalPrice}</Text>

            </View>

          </View>
        </TouchableHighlight>
      </View>
    );
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.data || [])}
        renderFooter={() => <Text style={{ padding: 30, textAlign: 'center' }}> {loadingTxt} </Text>}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onEndReached={() => fetchList({ currentPage: currentPage + 1 })}
        onEndReachedThreshold={10}
        enableEmptySections
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchList}
          />
        }
      />
    );
  }
}

List.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  fetchList: React.PropTypes.func.isRequired,
  currentPage: React.PropTypes.number.isRequired,
  fetchEdit: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired,
};

export const title = 'ListView Row';
export const description = 'ListView Row example';
export default List;
