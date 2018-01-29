const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator1 = new Elevator();
let person1 = new Person("Paco", 2, 4);
let person2 = new Person("Antonio", 3, 5);
let person3 = new Person("Julio", 6, 10);

elevator1.start();
elevator1.call(person1);
elevator1.call(person2);
elevator1.call(person3);
