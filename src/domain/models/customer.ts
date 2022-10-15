export type CustomerModel = {
    id: string,
    name: string,
    email: string
}

export type AddCustomerParams = Omit<CustomerModel, 'id'>
