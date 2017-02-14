import {
  goodsList,
} from '../../service/goodsService';
import {
  actionList,
  actionSearchChange,
  actionLoading,
} from './reducer';

export const fetchList = (para = {}) => (dispatch) => {
  dispatch(actionLoading());
  goodsList(para)
    .then((responseJson) => {
      dispatch(actionList(responseJson));
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
