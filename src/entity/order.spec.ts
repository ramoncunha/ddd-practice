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
        }).toThrowError("Items are required");
    });

    it("should calculate total", () => {
        const item = new OrderItem("1", "p1", 13000, 2);
        const item2 = new OrderItem("1", "p2", 6000, 2);
        const order = new Order("1", "1", [item]);
        let total = order.total();

        expect(total).toBe(26000);

        const order2 = new Order("1", "1", [item, item2]);
        total = order2.total();

        expect(total).toBe(38000);
    });

    it("should throw error if the item quantity is greater than 0", () => {

        expect(() => {
            const item = new OrderItem("1", "p1", 100, 0);
            const order = new Order("1", "1", [item]);
        }).toThrowError("Items quantity must be greater than 0");
    });
});