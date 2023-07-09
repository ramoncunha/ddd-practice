import Customer from "./entity/customer";
import Address from "./entity/address";
import OrderItem from "./entity/order_item";
import Order from "./entity/order";


// Customer Aggregate
let customer = new Customer("1", "Ramon");
const address = new Address("Rua das Flores", "123", "São Paulo", "SP");
customer.Address = address;
customer.activate();

// Association by ID

// Order Aggregate
const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("1", "Item 1", 10);
// OrderItem e Order - association by entity
const order = new Order("1", "1", [item1, item2]);