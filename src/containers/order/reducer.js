import { createAction } from 'redux-actions';

const PATH = 'ORDER_';
export const LIST = `${PATH}LIST`;
export const SEARCH_CHANGE = `${PATH}SEARCH_CHANGE`;
export const SEARCH = `${PATH}SEARCH`;

export const actionList = createAction(LIST);
export const actionSearchChange = createAction(SEARCH_CHANGE);
export const actionSearch = createAction(SEARCH);

const initialState = {
  data: [],
  searchStr: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST:
      {
        return { ...state,
          data: action.payload,
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
    default:
      return state;
  }
}
