class MenuItem {
  constructor(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
  }
}

const menu = [new MenuItem("cola", 1, "drink")];

class CoffeeShop {
  menu = menu;
}

const myCoffeeShop = new CoffeeShop();
