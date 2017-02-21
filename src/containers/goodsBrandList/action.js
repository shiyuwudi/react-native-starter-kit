import { Actions } from 'react-native-router-flux';

import {
  goodsBrandList,
  goodsBrandLoad,
  goodsBrandDel,
} from '../../service/goodsBrandService';
import {
  actionList,
  actionLoading,
} from './reducer';
import {
  actionLoad,
} from '../goodsBrandEdit/reducer';

export const fetchList = (para = {}) => (dispatch) => {
  goodsBrandList(para)
    .then((responseJson) => {
      dispatch(actionList(responseJson));
    })
    .catch(() => {});
};

export const refreshList = () => actionLoading();

export const fetchEdit = (para = {}) => (dispatch) => {
  goodsBrandLoad(para)
    .then((responseJson) => {
      Actions.GoodsBrandEditContainer({ title: '品牌编辑' });
      dispatch(actionLoad(responseJson.data));
    })
    .catch(() => {});
};

export const fetchAdd = () => actionLoad({});

export const fetchDel = (para = {}) => (dispatch) => {
  if (para.ids) {
    goodsBrandDel(para)
  .then((responseJson) => {
    dispatch(actionList(responseJson));
  })
    .catch(() => {});
  }
};
