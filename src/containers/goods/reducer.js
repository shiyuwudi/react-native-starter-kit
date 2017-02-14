import { createAction } from 'redux-actions';

const PATH = 'GOODS_';
export const LIST = `${PATH}LIST`;
export const SEARCH_CHANGE = `${PATH}SEARCH_CHANGE`;
export const SEARCH = `${PATH}SEARCH`;
export const LOADING = `${PATH}LOADING`;

export const actionList = createAction(LIST);
export const actionSearchChange = createAction(SEARCH_CHANGE);
export const actionSearch = createAction(SEARCH);
export const actionLoading = createAction(LOADING);

const initialState = {
  data: [],
  searchStr: '',
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
    case SEARCH_CHANGE:
      {
        return { ...state,
          searchStr: action.payload,
        };
      }
    case SEARCH:
      {
        return { ...state,

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
