import { createAction } from 'redux-actions';

const PATH = 'GOODS_BRAND_EDIT_';
export const LOAD = `${PATH}LOAD`;
export const CHANGE = `${PATH}CHANGE`;
export const SAVING = `${PATH}SAVING`;

export const actionLoad = createAction(LOAD);
export const actionChange = createAction(CHANGE);
export const actionSaving = createAction(SAVING);

const initialState = {
  edit: {},
  saving: false,
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
    case SAVING:
      {
        return { ...state,
          saving: action.payload,
        };
      }
    default:
      return state;
  }
}
