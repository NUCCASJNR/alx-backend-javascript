export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // getter function of sqft
  get sqft() {
    return this._sqft;
  }
}
