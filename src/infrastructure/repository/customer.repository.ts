import Customer from "../../domain/entity/customer";
import CustomerRepositoryInterface from "../../domain/repositories/customer-repository.interface";

export default class CustomerRespository implements CustomerRepositoryInterface {
    create(entity: Customer): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(entity: Customer): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Customer[]> {
        throw new Error("Method not implemented.");
    }

}