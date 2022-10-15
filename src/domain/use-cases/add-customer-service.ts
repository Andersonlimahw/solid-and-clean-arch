import { AddCustomerParams, CustomerModel } from '../models/customer';
export const ADD_CUSTOMER_SERVICE = 'ADD_CUSTOMER_SERVICE';

export interface IAddCustomerService {
    addCustomerService: (data : AddCustomerParams) => Promise<CustomerModel>;
}