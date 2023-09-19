const add = require("./add");

test("adds 1 + 2 to equal 3", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
