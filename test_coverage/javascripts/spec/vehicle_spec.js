describe("testing vehicle constructor", function() {
  beforeEach(function() {
    this.vehicle = new Vehicle({ make: "Proton", model: "Saga" });
  });

  it("sets the make and model properties when an object is passed in", function() {
    expect(this.vehicle.make).toBeDefined();
    expect(this.vehicle.model).toBeDefined();
  });

  it("returns a concatenated string with make and model", function() {
    expect(this.vehicle.toString()).toBe("Proton Saga");
    this.vehicle = new Vehicle({ make: "Honda", model: "Civic" });
    expect(this.vehicle.toString()).toBe("Honda Civic");
  });

  it("returns a message when the horn is honked", function() {
    expect(this.vehicle.honkHorn).toMatch(/beep/);
  })
})