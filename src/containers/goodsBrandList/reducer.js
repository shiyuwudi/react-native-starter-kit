import { createAction } from 'redux-actions';

const PATH = 'GOODS_BRAND_';
export const LIST = `${PATH}LIST`;
export const LOADING = `${PATH}LOADING`;

export const actionList = createAction(LIST);
export const actionLoading = createAction(LOADING);

const initialState = {
  data: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST:
      {
        let { data } = state;
        if (action.payload.currentPage > 1) {
          data = data.concat(action.payload.data);
        } else {
          data = action.payload.data;
        }
        return { ...state,
          data,
          currentPage: action.payload.currentPage,
          loading: false,
        };
      }
    case LOADING:
      {
        return { ...state,
          loading: true,
        };
      }
    default:
      return state;
  }
}
