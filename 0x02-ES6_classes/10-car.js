export default class Car {
    constructor(brand, motor, color) {
        this.brandbrand = brand;
        this.motormotor = motor;
        this.color = color;
    }

    // Getter method for brand
    get brand() {
        return this._brand;
    }

    // Getter method for motor
    get motor() {
        return this._motor;
    }

    // Getter method for brand
    get color() {
        return this._color;
    }

    // Setter method for brand
    set brand(value) {
        this._brand = value;
    }

    // Setter method for motor
    set motor(value) {
        this._motor = value;
    }

    // Setter method for color
    set color(value) {
        this._color = value;
    }

    cloneCar(motor, color, brand) {
        return new Car(motor, color, brand)
    }
}