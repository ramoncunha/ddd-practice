import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order Service Unit Test", () => {

    it("should get total of all order", () => {
        const orderItem = new OrderItem("1", "Product1", 100, 1);
        const orderItem2 = new OrderItem("1", "Product1", 300, 1);
        const order = new Order("1", "C1", [orderItem]);
        const order2 = new Order("2", "C2", [orderItem2]);

        const total = OrderService.total([order, order2]);

        expect(total).toBe(400);
    });


})