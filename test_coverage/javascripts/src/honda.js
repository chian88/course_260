var models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
var prices = [16500,    14500,   21000,       15800,  12000,  13100, 16000,  18100,     22500,     19300];

function Honda(model) {
  this.verify(model);
  return this.getPrice();
}

Honda.getPrice = function(model) {
  var index = models.indexOf(model);
  return prices[index];
}

Honda.getModels = function() {
  return models;
}

Honda.prototype = Object.create(Vehicle.prototype);
Honda.prototype.constructor = Honda;

Honda.prototype.verify = function(model) {  
  if (models.indexOf(model) === -1) {
    throw new Error("Model " + model + " does not exist");
    return undefined;
  }
  this.make = "Honda";
  this.model = model;
}

Honda.prototype.getPrice = function() {
  return Honda.getPrice(this.model);
}