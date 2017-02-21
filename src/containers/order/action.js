import { Actions } from 'react-native-router-flux';
import {
  orderList,
  load,
} from '../../service/orderService';
import {
  actionList,
  actionSearchChange,
  actionLoading,
} from './reducer';

export const fetchList = () => (dispatch) => {
  orderList({})
    .then((responseJson) => {
      dispatch(actionList(responseJson));
    })
    .catch(() => {});
};

export const searchChange = value => actionSearchChange(value);

export const refreshList = () => (dispatch) => {
  dispatch(actionLoading());
};

export const search = value => (dispatch) => {
  orderList({ thirdCode: value })
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};

export const fetchEdit = (para = {}) => (dispatch) => {
  load(para)
    .then((responseJson) => {
      Actions.OrderEditContainer({ title: '订单编辑' });
      dispatch(actionLoad(responseJson.data));
    })
    .catch(() => {});
};
