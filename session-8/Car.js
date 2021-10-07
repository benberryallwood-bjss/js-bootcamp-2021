// Should do one file per class
// Pascal case for class naming:
export default class Car {
  // Can use default argument in constructor
  constructor(make, model, engineSize = 2.0) {
    // Convention to start internal vars with _
    // Doesn't limit access, just convention
    this._make = make;
    this._model = model;
    this._engineSize = engineSize;
  }

  // Wouldn't do this unless you expect to change the property
  setMake(make) {
    this._make = make;
  }

  getMake() {
    return this._make;
  }

  getModel() {
    return this._model;
  }

  getEngineSize() {
    return this._engineSize;
  }
}
