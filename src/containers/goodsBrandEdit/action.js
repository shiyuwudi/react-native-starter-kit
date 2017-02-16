import {
  actionChange,
} from './reducer';
import {
  goodsBrandSave,
} from '../../service/goodsBrandService';

export const onFieldsChange = data => (dispatch) => {
  dispatch(actionChange(data));
};

export const fetchSave = data => (dispatch) => {
  goodsBrandSave(data)
  .then((responseJson) => {
    if (responseJson.status === 'BRAND_IS_SAVED') {
      dispatch(dispatchSave(responseJson.data));
    } else {
      message.error('保存失败');
    }
  });
};
