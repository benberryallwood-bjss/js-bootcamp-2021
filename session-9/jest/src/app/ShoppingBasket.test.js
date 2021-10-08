import ShoppingBasket from "./ShoppingBasket";

describe("ShoppingBasket", () => {
  // Declared first so available to all tests in this describe block
  let shoppingBasket;

  // Function run before each test in this describe block
  // "Set up"
  beforeEach(() => {
    shoppingBasket = new ShoppingBasket();
  });

  it("Should initialise with zero items", () => {
    // Create instance
    expect(shoppingBasket.items.length).toBe(0);
  });

  it("Should add item to shopping basket", () => {
    const item = "Apples";
    shoppingBasket.addItem(item);

    expect(shoppingBasket.items.length).toBe(1);
    expect(shoppingBasket.items).toContain(item);
  });

  // Not necessary in this case but can be useful
  // "Tear down"
  afterEach(() => {
    shoppingBasket = null;
  });
});
