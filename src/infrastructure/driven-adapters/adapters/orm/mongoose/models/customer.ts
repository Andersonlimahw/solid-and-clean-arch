import { CustomerModel } from '@/domain/models/customer';
import { model, Schema } from "mongoose";

const schema = new Schema<CustomerModel>({
    id: { type: String },
    name: { type: String, required: true }, 
    email: { type: String, required: true }
});

export const CustomerModelSchema = model<CustomerModel>('customers', schema);
