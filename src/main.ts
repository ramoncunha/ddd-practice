import Customer from "./domain/customer/entity/customer";
import Address from "./domain/customer/value-object/address";
import OrderItem from "./domain/checkout/entity/order_item";
import Order from "./domain/checkout/entity/order";

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