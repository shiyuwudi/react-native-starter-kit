import React from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions, StyleSheet } from 'react-native';

import textStyle from '../../styles/text';
import RefreshableListview from '../../components/RefreshableListview';

const { width } = Dimensions.get('window');

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

  render() {
    const { loading, fetchEdit, data, onEndReached, onRefresh } = this.props;

    const row = (obj, sectionID, rowID) => (
      <View key={rowID}>
        <TouchableHighlight
          underlayColor={'rgba(100,100,100,0.2)'}
          style={[{ backgroundColor: 'white' }]}
          onPress={() => {
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
      <RefreshableListview
        loading={loading}
        data={data}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderRow={row}
      />
    );
  }
}

List.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  fetchEdit: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired,
  onEndReached: React.PropTypes.func.isRequired,
  onRefresh: React.PropTypes.func.isRequired,
};
