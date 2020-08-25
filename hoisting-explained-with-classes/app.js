
//this will not work, because classes are not hoisted to the top
// const cx5 = new Car(4, 'V6', 'grey');
// console.log(cx5);
// console.log(cx5.carStats());

//this will work because functions are hoisted to the top
sayHi();

class Car {

    constructor(doors, engine, color) {

        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {

        return `This car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.color} color!`;
    }
}

const cx5 = new Car(4, 'V6', 'grey');
console.log(cx5);
console.log(cx5.carStats());

//but hoisting work for functions
function sayHi() {
    return console.log('Hello this function can be called anywhere!');
}

sayHi();