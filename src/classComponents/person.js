class Person {
  //Konstruktor
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setFullName(string) {
    //setzt sowohl den Vornamen als auch den Nachnamen
    const name = string.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }

  me() {
    return this;
  }
}

function hi(string) {
  console.log(string);
}
//Alle properties undefined
const p1 = new Person('Jack');
//
const p2 = new Person('Bud', 'Spencer', 90);
p2.setFirstName('Buddy');
p2.firstName = 'Terence';

const j = 'Luigi Bertone';
p2.setFullName(j);

function me() {
  return this;
}

class Fussballer extends Person {
  constructor(firstName, lastName, age, verein) {
    //Super-Konstruktor Parent Klassen
    super(firstName, lastName, age);
    this.verein = verein;
  }

  getFullName() {
    return super.getFullName() + ' ' + this.verein;
  }
}

const f1 = new Fussballer('Christiano', 'Rovello', 34, 'Benfica');

console.log(f1.getFullName());
