import { url, form2Form, mFetch } from './utils';


export const orderList = form => mFetch('/erp/orderform_list.htm', form);
