import { Actions } from 'react-native-router-flux';

import {
  goodsList,
  goodsEdit,
} from '../../service/goodsService';
import {
  actionList,
  actionSearchChange,
  actionLoading,
} from './reducer';
import {
  actionLoad,
} from '../goodsEdit/reducer';

export const fetchList = (para = {}) => (dispatch) => {
  goodsList(para)
    .then((responseJson) => {
      dispatch(actionList(responseJson));
    })
    .catch(() => {});
};

export const refreshList = () => (dispatch) => {
  dispatch(actionLoading());
};

export const searchChange = value => actionSearchChange(value);

export const search = value => (dispatch) => {
  goodsList({ goodsName: value })
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};

export const fetchEdit = (para = {}) => (dispatch) => {
  goodsEdit(para)
    .then((responseJson) => {
      Actions.GoodsEditContainer({ title: '商品编辑' });
      dispatch(actionLoad(responseJson.data));
    })
    .catch(() => {});
};
