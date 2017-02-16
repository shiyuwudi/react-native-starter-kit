import React from 'react';
import { View, Alert } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Actions } from 'react-native-router-flux';
import { userLogin } from '../../service/userService';

export const login = (data) => {
  data.isMobile = true;
  return userLogin(data)
    .then((responseJson) => {
      if (parseInt(responseJson.code, 0) === 100) {
        delete responseJson.code;
        const storage = global.storage;
        // 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。
        // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
        storage.save({
          key: 'loginState', // 注意:请不要在key中使用_下划线符号!
          rawData: responseJson,
        });
        Actions.IndexContainer();
      } else {
        Alert.alert('错误',
          '登录失败，请重试', [{
            text: '确定',
            style: 'cancel',
          }], {
            cancelable: false,
          },
        );
      }
    })
    .catch(() => {
      Alert.alert('错误',
          '登录失败，请重试', [{
            text: '确定',
            style: 'cancel',
          }], {
            cancelable: false,
          },
        );
    },
    );
};

const formSubmit = (form) => {
  form.validateFields((err, values) => {
    if (!err) {
      login(values);
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

const Login = ({ form, form: { getFieldProps } }) => (
  <View>
    <InputItem
      {...getFieldProps('username', {
        rules: [{
          required: true, message: '请填写用户名或手机号',
        }],
      })}
      type="phone"
      clear
    >
      用户名
    </InputItem>
    <InputItem
      {...getFieldProps('password', {
        rules: [{
          required: true, message: '请填写密码',
        }],
      })}
      type="password"
      clear
    >
      密码
    </InputItem>
    <WhiteSpace />
    <WingBlank>
      <Button
        type="primary"
        onClick={() => {
          formSubmit(form);
        }}
      >
        登录
      </Button>
      <WhiteSpace />
    </WingBlank>
  </View>
);

Login.propTypes = {
  form: React.PropTypes.object.isRequired,
};

export default createForm({
  onFieldsChange: (props, fields) => {
    props.onFieldsChange(fields);
  },
  mapPropsToFields: props => props.edit,
})(Login);
