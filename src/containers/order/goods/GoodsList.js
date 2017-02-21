/**
 * Created by shiyuwudi on 2017/2/20.
 */

import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
  },
  goodsImage: {
    width: 80,
    height: 80,
  },
  rightContainer: {
    marginLeft: 8,
    marginRight: 8,
  },
  separator: {
    backgroundColor: '#F6F6F6',
    height: 1,
  },
  expand: {
    textAlign: 'center',
    backgroundColor: '#FAFAFA',
  },
});

const Goods = ({ goods }) => (
  <View>

    <View style={styles.container}>

      {
        (() => {
          if (goods.imgPath) {
            return (
              <Image
                defaultSource={require('../../../../images/busi.png')}
                source={{ uri: goods.imgPath }}
                style={styles.goodsImage}
              />
            );
          }
          return (
            <Image style={styles.goodsImage} source={require('../../../../images/busi.png')} />
          );
        })()
      }


      <View style={styles.rightContainer}>

        <Text>
          {goods.goodsName}
        </Text>

        <Text>
          {goods.goodsSpecInfo}
        </Text>

        <Text>
          x{goods.goodsNum}
        </Text>

      </View>


    </View>

    <View style={styles.separator} />

  </View>
);

Goods.propTypes = {
  goods: React.PropTypes.object.isRequired,
};

const Expand = ({ open, onClick, visible }) => visible && (
  <View>
    <TouchableHighlight onPress={onClick}>
      <Text style={styles.expand}>
        {
          open ? '关闭' : '展开'
        }
      </Text>
    </TouchableHighlight>
  </View>
);

Expand.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
  visible: React.PropTypes.bool.isRequired,
};

const GoodsList = ({ allGoods, maxCount, open, onOpenClick }) => {
  const count = allGoods.length;
  const data = (count > maxCount && !open) ? allGoods.slice(0, maxCount) : allGoods;
  return (
    <View>
      {
        data.map(goods => <Goods goods={goods} key={goods.id} />)
      }
      <Expand visible={count > maxCount} open={open} onClick={onOpenClick} />
    </View>
  );
};

GoodsList.propTypes = {
  allGoods: React.PropTypes.array.isRequired,
  maxCount: React.PropTypes.number.isRequired,
  open: React.PropTypes.bool.isRequired,
  onOpenClick: React.PropTypes.func.isRequired,
};

export default GoodsList;
