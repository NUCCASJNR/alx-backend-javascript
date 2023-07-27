export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // setter method for code
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // setter method for name
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // getter method for code
  get code() {
    return this._code;
  }

  // getter methof for name
  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
