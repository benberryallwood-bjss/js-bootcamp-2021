// Shopping Basket
// Should be able to:
//  - Create a shopping basket and have a total of 0
//  - Be able to add an item and have its value added to the total
//  - Be able to add multiple items and accumulate the total of the items
//  - Be able to add the same items multiple times and accumulate the total of items

class ShoppingBasket {
  constructor() {
    this.total = 0;
    this.items = [];
  }

  addItems(...items) {
    // For each argument given
    for (const item of items) {
      // Check if items already has an item with same name
      if (
        this.items.some((thing) => {
          return thing.name === item.name && thing.value === item.value;
        })
      ) {
        // Find the item with same name
        let thing = this.items.find((thing) => {
          return thing.name === item.name;
        });
        // Update quantity of existing item
        thing.quantity += item.quantity;
        // Update total (and make sure 2dp)
        this.total += item.value * item.quantity;
        this.total = parseFloat(this.total.toFixed(2));
      } else {
        // Add new item
        this.items.push(item);
        // Update total (and make sure 2dp)
        this.total += item.value * item.quantity;
        this.total = parseFloat(this.total.toFixed(2));
      }
    }
  }

  getTotal() {
    return this.total;
  }
}

const basket = new ShoppingBasket();
basket.addItems({
  name: "Broccoli",
  value: 0.8,
  quantity: 1,
});
console.log(basket.items);
console.log(basket.getTotal());

basket.addItems({
  name: "Broccoli",
  value: 0.8,
  quantity: 2,
});
console.log(basket.items);
console.log(basket.getTotal());
