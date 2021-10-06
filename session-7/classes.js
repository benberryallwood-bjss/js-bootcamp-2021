console.log("Classes");

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  set(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const frank = new Person("Frank", 12, "Male");

// Use setter to limit access from outside
// Otherwise vulnerable to injection
frank.set("foo");

console.log(frank.getName());

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

class Lion extends Animal {
  constructor(name, age) {
    super(name); // Use constructor from Animal
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

const leoTheLion = new Lion("Leo", 4);
// leoTheLion has move, getName and getAge
