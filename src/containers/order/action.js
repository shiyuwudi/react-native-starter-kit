import {
  orderList,
} from '../../service/orderService';
import {
  actionList,
  actionSearchChange,
  actionSearch,
} from './reducer';

export const fetchList = () => (dispatch) => {
  orderList({})
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};

export const searchChange = value => actionSearchChange(value);


export const search = value => (dispatch) => {
  orderList({ thirdCode: value })
    .then((responseJson) => {
      dispatch(actionList(responseJson.data));
    })
    .catch(() => {});
};
