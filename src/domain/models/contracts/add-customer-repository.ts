
import { CustomerModel , AddCustomerParams} from '@/domain/models/customer';
export const ADD_CUSTOMER_REPOSITORY = "ADD_CUSTOMER_REPOSITORY";

export interface IAddCustomerRepository {
    addCustomerRepository: (data :  AddCustomerParams) => Promise<CustomerModel>;
}