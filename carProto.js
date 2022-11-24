/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

//Car constructor
class Car {
    constructor(model) {
      this.model = model;
      this.currentSpeed = 0;
    }

    accelerate() {
        this.currentSpeed++;
    }

    brake() {
      this.currentSpeed--;
    }
  
    toString() { 
      return `It's a ${this.model}, driving at ${this.currentSpeed} units of speed.`
    }
}

const myFirstCar = new Car('Tercel')
myFirstCar.accelerate()
myFirstCar.accelerate()
myFirstCar.break()
console.log(myFirstCar.toString())

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
