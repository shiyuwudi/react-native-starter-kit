import { createAction } from 'redux-actions';

const PATH = 'GOODS_EDIT_';
export const LOAD = `${PATH}LOAD`;
export const CHANGE = `${PATH}CHANGE`;

export const actionLoad = createAction(LOAD);
export const actionChange = createAction(CHANGE);

const initialState = {
  edit: {

  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD:
      {
        let goods = {};
        if (action.payload.specType) {
          console.log(1111);
        } else {
          let spec = '';
          if (action.payload.spec) {
            spec = JSON.parse(action.payload.spec)['规格'][0];
          }

          let specinfo = '';
          if (action.payload.specinfo) {
            specinfo = JSON.parse(action.payload.specinfo)[0];
          }
          goods = {
            goodsSpec: {
              name: 'goodsSpec',
              value: spec,
            },
            goodsMerchantCode: {
              name: 'goodsMerchantCode',
              value: `${specinfo.goodsMerchantCode}`,
            },
            goodsBarCode: {
              name: 'goodsBarCode',
              value: `${specinfo.goodsBarCode}`,
            },
            goodsReferencePrice: {
              name: 'goodsReferencePrice',
              value: `${specinfo.goodsReferencePrice}`,
            },
            goodsVolume: {
              name: 'goodsVolume',
              value: specinfo.goodsVolume,
            },
            goodsWeight: {
              name: 'goodsWeight',
              value: specinfo.goodsWeight,
            },
            synInventoryType: {
              name: 'synInventoryType',
              value: specinfo.synInventoryType,
            },
          };
        }
        return { ...state,
          edit: Object.assign(goods, {
            goodsName: {
              name: 'goodsName',
              value: action.payload.goodsName,
            },
            artNo: {
              name: 'artNo',
              value: action.payload.artNo,
            },
            specType: {
              name: 'specType',
              value: Boolean(action.payload.specType),
            },
          }),
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
