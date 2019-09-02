describe("A function", function() {

  it("Should return 8", function() {
    expect(calculator_instance.add(5, 3)).toBe(8);
  });
  it("Should return 8", function() {
    expect(calculator_instance.set_slot(1)).toBe(8);
  });
  it("Should return 8", function() {
    expect(calculator_instance.get_slot(1)).toBe(8);
  });
  it("Should return 8", function() {
    expect(calculator_instance.last()).toBe(8);
  });
  it("Should return 11", function() {
    expect(calculator_instance.add("LAST", 3)).toBe(11);
  });
  it("Should return 10", function() {
    expect(calculator_instance.add(5, 3, 2)).toBe(10);
  });
  it("Should return 10", function() {
    expect(calculator_instance.set_slot(2)).toBe(10);
  });
  it("Should return 10", function() {
    expect(calculator_instance.last()).toBe(10);
  });
  it("Should return 60", function() {
    expect(calculator_instance.multiply(30, 2)).toBe(60);
  });
  it("Should return 120", function() {
    expect(calculator_instance.multiply("LAST", 2)).toBe(120);
  });
  it("Should return 300", function() {
    expect(calculator_instance.multiply(30, 2, 5)).toBe(300);
  });
  it("Should return 300", function() {
    expect(calculator_instance.last()).toBe(300);
  });
  it("Should return 8", function() {
    expect(calculator_instance.get_slot(1)).toBe(8);
  });
  it("Should return 18", function() {
    expect(calculator_instance.add("SLOT_1", 10)).toBe(18);
  });
  // it("Should return 30", function() {
  //   expect(calculator_instance.add("SLOT_2", 3)).toBe(30);
  // });

  // it("Should return 50", function() {
  //   expect(add(10, 25, 10, 5)).toBe(50);
  //  });
  //
  // it("Should return 100", function() {
  //   expect(add(10, 25, 10, 5, 50)).toBe(100);
  // });
});
