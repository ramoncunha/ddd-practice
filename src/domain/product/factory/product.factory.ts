import Product from "../entity/product";
import ProductCustom from "../entity/product-custom";
import ProductInterface from "../entity/product.interface";
import { v4 as uuid } from "uuid";

export default class ProductFactory {

  public static create(type: string, name: string, price: number): ProductInterface {
    switch (type) {
      case "A":
        return new Product(uuid(), name, price);
      case "Custom":
        return new ProductCustom(uuid(), name, price);
      default:
        throw new Error("Product type incorrect");
    }
  }
}