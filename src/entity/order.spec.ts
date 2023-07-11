import Order from "./order";
import OrderItem from "./order_item";

describe("Order Unit Test", () => {
    
        
    it("should throw error when id is empty", () => {

        expect(() => {
            new Order("", "123", []);
        }).toThrowError("Id is required");
    });

    it("should throw error when customerId is empty", () => {

        expect(() => {
            new Order("123", "", []);
        }).toThrowError("CustomerId is required");
    });

    it("should throw error when items is empty", () => {

        expect(() => {
            new Order("123", "123", []);
        }).toThrowError("Items quantity must be greater than 0");
    });

    it("should calculate total", () => {
        const item = new OrderItem("1", "MacBook Pro", 13000);
        const item2 = new OrderItem("1", "MacBook Air", 6000);
        const order = new Order("1", "1", [item]);
        let total = order.total();

        expect(total).toBe(13000);

        const order2 = new Order("1", "1", [item, item2]);
        total = order2.total();

        expect(total).toBe(19000);
    });
});