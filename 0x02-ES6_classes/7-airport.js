export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter method for name

  get name() {
    return this._name;
  }

  // Getter method for code

  get code() {
    return this._code;
  }

  // Setter method for name

  set name(value) {
    this._name = value;
  }

  // setter method for code

  set code(value) {
    this._code = value;
  }

  // ToString method
  toString() {
    return `[object ${this._code}]`;
  }
}
