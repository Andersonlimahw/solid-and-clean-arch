import {Adapter, Service} from "@tsclean/core";
import {IAddCustomerService} from "@/domain/use-cases/add-customer-service";
import { AddCustomerParams, CustomerModel } from "@/domain/models/customer";
import { ADD_CUSTOMER_REPOSITORY, IAddCustomerRepository } from '../../models/contracts/add-customer-repository';

@Service()
export class AddCustomerServiceImpl implements IAddCustomerService {
    constructor(
        @Adapter(ADD_CUSTOMER_REPOSITORY) 
        private readonly addCustomerRepository :  IAddCustomerRepository
    ) { }

    async addCustomerService(data: AddCustomerParams): Promise<CustomerModel> {
        return await this.addCustomerRepository.addCustomerRepository(data);
    };
}