import { CustomerModel } from "@/domain/models/customer";
import { ADD_CUSTOMER_SERVICE } from "@/domain/use-cases/add-customer-service";
import { Mapping, Adapter, Post, Body } from "@tsclean/core";
import { IAddCustomerService } from '../../../domain/use-cases/add-customer-service';
import { AddCustomerParams } from '../../../domain/models/customer';

@Mapping('api/v1/add-customer')
export class AddCustomerController {

    constructor(
        @Adapter(ADD_CUSTOMER_SERVICE) private readonly addCustomerService : IAddCustomerService
    ) {
    }
    
    // Example function
    @Post()
    async addCustomerController(@Body() data: AddCustomerParams): Promise<CustomerModel> {
        return await this.addCustomerService.addCustomerService(data);
    }
}
