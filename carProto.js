/**
 * Car class
 * @constructor
 * @param {String} model
 */
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
      return `It's a ${this.model}, driving at ${this.currentSpeed} unit(s) of speed.`
    }
}

// Create an instance, accelerate twice, brake once, and console log the instance.toString()
const myFirstCar = new Car('Tercel')
myFirstCar.accelerate()
myFirstCar.accelerate()
myFirstCar.brake()
console.log(myFirstCar.toString())

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
// Electric car constructor
class ElectricCar extends Car {
    constructor(model) {
        super(model)
        this.motor = 'electric'
    }

    accelerate() {
        super.accelerate()
        super.accelerate()
    }

    toString() {
        console.log(`An electric ${this.model} is driving at ${this.currentSpeed} unit(s) of speed.`)
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const teslaCar =  new ElectricCar('Tesla')
teslaCar.accelerate()
teslaCar.toString()