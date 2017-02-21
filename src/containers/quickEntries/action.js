import {
  actionChange,
} from './reducer';

export const onFieldsChange = data => (dispatch) => {
  dispatch(actionChange(data));
};
