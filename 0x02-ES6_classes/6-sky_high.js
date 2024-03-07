import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = null;
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    } else {
      throw new TypeError('Number of floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
