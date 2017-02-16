import {
  goodsList,
} from '../../../service/orderService';
import {
  actionList,
  actionSearchChange,
  actionSearch,
} from './reducer';

export const fetchList = (par = {}) => (dispatch) => {
  goodsList(par)
    .then((responseJson) => {
      dispatch(actionList({
        data: responseJson,
        id: par.orderId,
      }));
    })
    .catch(() => {});
};

export const searchChange = value => actionSearchChange(value);


export const search = value => (dispatch) => {
  goodsList({ goodsName: value })
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};
