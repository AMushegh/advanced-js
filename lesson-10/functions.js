var name = "Anna";

const person = {
  name: "Mushegh",
  showName() {
    console.log(this.name);
  },
};

var showNameV2 = person.showName;
person.showName();
showNameV2();

const person2 = {
  name: "Goqor",
};

person2.showNameggggg = person.showName;

person2.showNameggggg();
