/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'antd-mobile';
import { Actions } from 'react-native-router-flux';

const Item = List.Item;

export default class BasicListExample extends React.Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List>
          <Item arrow="horizontal" onClick={() => { Actions.GoodsContainer(); }}>商品管理</Item>
          <Item arrow="horizontal" onClick={() => { Actions.OrderContainer(); }}>订单管理</Item>
          <Item arrow="horizontal" onClick={() => {}}>库存管理</Item>
          <Item arrow="horizontal" onClick={() => {}}>新手向导</Item>
        </List>
      </ScrollView>
    );
  }
}

export const title = 'List';
export const description = 'List Example';
