import React from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { InputItem, List, ActivityIndicator } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Actions } from 'react-native-router-flux';


export class GoodsEdit extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    Actions.refresh({ onRight: this.submit, rightTitle: '保存' });
  }


  submit() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { edit, fetchSave } = this.props;
        if (edit.id) { values.id = edit.id; }
        fetchSave(values);
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
  }

  render() {
    const { form } = this.props;
    const { getFieldProps } = form;
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List>
          <InputItem
            {...getFieldProps('goodsBrandName', {
              rules: [{
                required: true, message: '请填写品牌名称',
              }],
            })}
            clear
          >
        品牌名称
      </InputItem>
        </List>

        <ActivityIndicator
          animating
          toast
          size="large"
          text="正在保存"
        />
      </ScrollView>
    );
  }
}


GoodsEdit.propTypes = {
  form: React.PropTypes.object.isRequired,
  edit: React.PropTypes.object.isRequired,
  fetchSave: React.PropTypes.func.isRequired,
};

export default createForm({
  onFieldsChange: (props, fields) => {
    props.onFieldsChange(fields);
  },
  mapPropsToFields: props => props.edit,
})(GoodsEdit);
