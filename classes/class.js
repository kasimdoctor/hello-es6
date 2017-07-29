
class Car {

    constructor(options) {
        this.model = options.model;
    }

    drive() {
        console.log('Driving..');
    }
}

// extending the Car class
class Toyota extends Car {

    constructor(options) {
        // super must be called, not implicit like in Java
        super(options);
        this.color = options.color;
    }

    honk() {
        console.log('Beep');
    }
 }

// const car = new Car({ model: 'Audi' });
// car.drive();
// console.log(car);

const toyota = new Toyota({ color: 'Blue' , model: 'RAV4'});
toyota.honk();
toyota.drive();
console.log(toyota);