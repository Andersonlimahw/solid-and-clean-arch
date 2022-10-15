import { CustomerMongooseRepositoryAdapter } from '../adapters/orm/mongoose/customer-mongoose-repository-adapter';
import { ADD_CUSTOMER_REPOSITORY } from '../../../domain/models/contracts/add-customer-repository';
import { AddCustomerServiceImpl } from '../../../domain/use-cases/impl/add-customer-service-impl';
import { ADD_CUSTOMER_SERVICE } from '../../../domain/use-cases/add-customer-service';

export const adapters = [
    {
        useClass: CustomerMongooseRepositoryAdapter,
        provide: ADD_CUSTOMER_REPOSITORY
    }
];
        
export const services = [
    {
        useClass: AddCustomerServiceImpl, 
        provide: ADD_CUSTOMER_SERVICE
    }
];