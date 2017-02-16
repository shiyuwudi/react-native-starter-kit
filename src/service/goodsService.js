import { mFetch } from './utils';

export const goodsList = form => mFetch('/erp/goods_list.htm', form);
export const goodsEdit = form => mFetch('/erp/goods_load.htm', form);
