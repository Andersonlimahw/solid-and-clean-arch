import {AddCustomerParams, CustomerModel} from "@/domain/models/customer";
import {CustomerModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/customer";

export class CustomerMongooseRepositoryAdapter {
    async addCustomerRepository(data: AddCustomerParams): Promise<CustomerModel> {
        return await CustomerModelSchema.create(data);
    }
}
