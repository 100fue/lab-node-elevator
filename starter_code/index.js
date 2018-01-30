const Elevator = require('./elevator.js');
let elevator = new Elevator();
const Person = require('./person.js');

let person1 = new Person("Paco", 2, 4);
let person2 = new Person("Antonio", 3, 5);
let person3 = new Person("Julio", 6, 10);

elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
elevator.start();
