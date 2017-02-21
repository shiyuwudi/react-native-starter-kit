import { Actions } from 'react-native-router-flux';
import { Toast } from 'antd-mobile';
import {
  actionChange,
  actionSaving,
} from './reducer';
import {
  goodsBrandSave,
  goodsBrandList,
} from '../../service/goodsBrandService';
import {
  actionList,
} from '../goodsBrandList/reducer.js';

export const onFieldsChange = data => (dispatch) => {
  dispatch(actionChange(data));
};

export const fetchSave = data => (dispatch) => {
  dispatch(actionSaving(true));
  goodsBrandSave(data)
    .then((responseJson) => {
      dispatch(actionSaving(false));
      if (responseJson.status === 'BRAND_IS_SAVED') {
        Toast.success('保存成功', 1);
        Actions.pop();
        goodsBrandList({})
        .then((response) => {
          dispatch(actionList(response));
        });
      } else {
        Toast.fail('保存失败', 1);
      }
    })
    .catch(() => {
      Toast.offline('网络连接失败', 1);
      dispatch(actionSaving(false));
    });
};
