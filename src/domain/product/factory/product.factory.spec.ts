import ProductFactory from "./product.factory";

describe("Product factory unit test", () => {

  it("should create a product type normal", () => {
    const product = ProductFactory.create("A", "Product A", 1);

    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product A");
    expect(product.price).toBe(1);
    expect(product.constructor.name).toBe("Product");
  });

  it("should create a product type Custom", () => {
    const product = ProductFactory.create("Custom", "Product Custom", 1);

    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product Custom");
    expect(product.price).toBe(2);
    expect(product.constructor.name).toBe("ProductCustom");
  });

  it("should throw an error when product type is not supported ", () => {
    expect(() => ProductFactory.create("c", "Product C", 1)).toThrowError(
      "Product type not unsupported"
    );
  });

})