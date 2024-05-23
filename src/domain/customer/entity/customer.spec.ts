import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer Unit Test", () => {
    
    it("should throw error when id is empty", () => {

        expect(() => {
            new Customer("","John");
        }).toThrowError("Id is required");
    });
        
    it("should throw error when name is empty", () => {

        expect(() => {
            new Customer("1","");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        // Arrange
        const customer = new Customer("1","John");
        // Act
        customer.changeName("Jane");
        // Assert
        expect(customer.name).toBe("Jane");
    });

    it("should activate customer", () => {
        const customer = new Customer("1","Customer 1");
        const address = new Address("Street 1", 212, "123456", "City 1");
        customer.Address = address;
        customer.activate();

        expect(customer.isActive()).toBe(true)
    });

    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("1","Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });

    it("should deactivate customer", () => {
        const customer = new Customer("1","Customer 1");
        customer.deactivate();

        expect(customer.isActive()).toBe(false)
    });

    it("should add reward points", () => {
        const customer = new Customer("1","Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    
    });
});