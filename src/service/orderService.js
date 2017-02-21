import { mFetch } from './utils';


export const orderList = form => mFetch('/erp/orderform_list.htm', form);
export const goodsList = form => mFetch('/erp/orderform_goods_list.htm', form);
export const load = form => mFetch('/erp/goods_load.htm', form);
