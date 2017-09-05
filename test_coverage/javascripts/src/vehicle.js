function Vehicle(option) {
  this.make = option.make;
  this.model = option.model;
}

Vehicle.prototype.toString = function() {
  return this.make + " " + this.model;
}

Vehicle.prototype.honkHorn = function() {
  return "Beep beep!";
}