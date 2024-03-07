class Building {
  constructor(sqft) {
    this._sqft = null;
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Square footage must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
