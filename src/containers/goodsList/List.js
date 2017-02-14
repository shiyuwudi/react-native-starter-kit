import React from 'react';
import { View, Text, TouchableHighlight, Image, RefreshControl, Dimensions, StyleSheet } from 'react-native';
import { ListView } from 'antd-mobile';
import { Actions } from 'react-native-router-flux';

import textStyle from '../../style/text';

const { width } = Dimensions.get('window');

const separator = (sectionID, rowID) => (<View
  key={`${sectionID}-${rowID}`}
  style={{
    backgroundColor: '#ddd',
    height: 0.5,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  }}
/>
);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 120,
  },
  img: {
    height: 120,
    width: 120,
  },
  content: {
    width: width - 120,
    padding: 10,
  },
});

export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource: this.dataSource.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        dataSource: this.dataSource.cloneWithRows(nextProps.data),
      });
    }
  }

  render() {
    const { loading, fetchList, currentPage, fetchEdit } = this.props;

    const row = (obj, sectionID, rowID) => (
      <View key={rowID}>
        <TouchableHighlight
          underlayColor={'rgba(100,100,100,0.2)'}
          style={[{ backgroundColor: 'white' }]}
          onPress={() => {
            Actions.GoodsEditContainer({ title: '商品编辑' });
            fetchEdit({ id: obj.gsGoodsId });
          }}
        >
          <View style={styles.row}>
            <Image
              style={styles.img}
              source={obj.imgPath ? { uri: obj.imgPath } : require('../../../images/alipay.png')}
            />
            <View
              style={styles.content}
            >
              <Text
                numberOfLines={2}
                style={textStyle.subHead}
              >{obj.goodsName}</Text>
              <Text
                numberOfLines={2}
                style={[textStyle.help, { marginTop: 4 }]}
              >规格：{obj.goodsSpecProperty.trim()}</Text>
              <Text
                numberOfLines={1}
                style={[textStyle.help, { marginTop: 4 }]}
              >编码：{obj.goodsMerchantCode}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );

    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchList}
          />
        }
        renderSeparator={separator}
        dataSource={this.state.dataSource}
        renderRow={row}
        pageSize={20}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onEndReached={() => fetchList({ currentPage: currentPage + 1 })}
        onEndReachedThreshold={10}
        enableEmptySections
      />
    );
  }
}


List.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  fetchList: React.PropTypes.func.isRequired,
  fetchEdit: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired,
  currentPage: React.PropTypes.number,
};
