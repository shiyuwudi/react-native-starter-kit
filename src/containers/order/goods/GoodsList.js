/**
 * Created by shiyuwudi on 2017/2/14.
 */

import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
  },
  goodsImage:{
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

const Goods = ({goods}) => (
  <View>

    <View style={styles.container}>

      {
        goods.imgPath ? (
            <Image
              defaultSource={require('../../../../images/busi.png')}
              source={{uri: goods.imgPath}}
              style={styles.goodsImage}
            />
          ) : (
            <Image style={styles.goodsImage} source={require('../../../../images/busi.png')}/>
          )
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

const Expand = ({open, onClick, visible}) => visible && (
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

const GoodsList = ({allGoods, maxCount, open, onOpenClick}) => {
  const count = allGoods.length;
  const data = (count > maxCount && !open) ? allGoods.slice(0, maxCount) : allGoods;
  return (
    <View>
      {
        data.map((goods, i) => <Goods goods={goods} key={i}/>)
      }
      <Expand visible={count > maxCount} open={open} onClick={onOpenClick}/>
    </View>
  );
};

class GoodsListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount(){
    this.props.fetchList({orderId: this.props.orderId});
  }
  render(){
    return (
      <GoodsList
        allGoods={this.props.data}
        maxCount={1}
        open={this.state.open}
        onOpenClick={()=>this.setState({open: !this.state.open})}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({ data: state.orderGoodsReducer[props.orderId] || [] });
const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GoodsListContainer);