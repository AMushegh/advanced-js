const car = {
  name: "toyota",
  drive() {
    console.log(this.name + " is moving");
  },
};

const a = car.drive.call({ name: "volkswagen" });

const dirveMercedes = car.drive.bind({ name: "mercedes" });

dirveMercedes();
