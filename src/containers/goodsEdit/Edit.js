import React from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem, Switch, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Actions } from 'react-native-router-flux';


const formSubmit = (form) => {
  form.validateFields((err, values) => {
    if (!err) {
      // GoodsEdit(values);
      return;
    }
    const keys = Object.keys(err);
    Alert.alert('',
      `${err[keys[0]].errors[0].message}`, [{
        text: '确定',
        style: 'cancel',
      }], {
        cancelable: false,
      },
    );
  });
};

const GoodsEdit = ({ form, form: { getFieldProps } }) => (
  <ScrollView
    style={{ flex: 1, backgroundColor: '#f5f5f9' }}
    automaticallyAdjustContentInsets={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
  >

    <List>
      <InputItem
        {...getFieldProps('goodsName', {
          rules: [{
            required: true, message: '请填写商品名称',
          }],
        })}
        clear
      >
        商品名称
      </InputItem>
      <InputItem
        {...getFieldProps('artNo', {
          rules: [{
            required: true, message: '请填写货号',
          }],
        })}
        clear
      >
        货号
      </InputItem>
    </List>
    <WhiteSpace />
    <List>
      <List.Item
        extra={<Switch
          {...getFieldProps('specType', {
            valuePropName: 'checked',
          })}
        />}
      >多规格</List.Item>
      <InputItem
        {...getFieldProps('goodsSpec', {
          rules: [{
            required: true, message: '请填写规格',
          }],
        })}
        clear
      >
        规格
      </InputItem>
      <InputItem
        {...getFieldProps('goodsMerchantCode', {
          rules: [{
            required: true, message: '请填写商家编码',
          }],
        })}
        clear
      >
        商家编码
      </InputItem>
      <InputItem
        {...getFieldProps('goodsBarCode', {
          rules: [{
            required: true, message: '请填写条形码',
          }],
        })}
        clear
      >
        条形码
      </InputItem>
      <InputItem
        {...getFieldProps('goodsReferencePrice', {
          rules: [{
            required: true, message: '请填写参考价格',
          }],
        })}
        clear
      >
        参考价格
      </InputItem>
    </List>
  </ScrollView>
);

GoodsEdit.propTypes = {
  form: React.PropTypes.object.isRequired,
};

export default createForm({
  onFieldsChange: (props, fields) => {
    props.onFieldsChange(fields);
  },
  mapPropsToFields: props => props.edit,
})(GoodsEdit);
