const add = require("../src/app");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 5 + 7 to equal 12", () => {
  expect(add(5, 7)).toBe(12);
});

test("adds 10 + 15 to equal 25", () => {
  expect(add(10, 15)).toBe(25);
});
