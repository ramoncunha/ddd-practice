import Customer from "./domain/entity/customer";
import Address from "./domain/entity/address";
import OrderItem from "./domain/entity/order_item";
import Order from "./domain/entity/order";

// Customer Aggregate
let customer = new Customer("1", "Ramon");
const address = new Address("Rua das Flores", 123, "São Paulo", "SP");
customer.Address = address;
customer.activate();

// Association by ID

// Order Aggregate
const item1 = new OrderItem("1", "Product 1", "1", 10, 1);
const item2 = new OrderItem("1", "Product 2", "1", 10, 1);
// OrderItem e Order - association by entity
const order = new Order("1", "1", [item1, item2]);