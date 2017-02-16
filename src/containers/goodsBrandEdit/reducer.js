import { createAction } from 'redux-actions';

const PATH = 'GOODS_BRAND_EDIT_';
export const LOAD = `${PATH}LOAD`;
export const CHANGE = `${PATH}CHANGE`;

export const actionLoad = createAction(LOAD);
export const actionChange = createAction(CHANGE);

const initialState = {
  edit: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD:
      {
        const { payload } = action;
        return { ...state,
          edit: {
            id: payload.id,
            goodsBrandName: {
              name: 'goodsBrandName',
              value: payload.goodsBrandName,
            },
          },
        };
      }
    case CHANGE:
      {
        return { ...state,
          edit: Object.assign(state.edit, action.payload),
        };
      }
    default:
      return state;
  }
}
