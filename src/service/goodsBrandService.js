import { mFetch } from './utils';

export const goodsBrandList = form => mFetch('/erp/brand_list.htm', form);
export const goodsBrandLoad = form => mFetch('/erp/brand_load.htm', form);
export const goodsBrandDel = form => mFetch('/erp/brand_del.htm', form);
export const goodsBrandSave = form => mFetch('/erp/brand_save.htm', form);
