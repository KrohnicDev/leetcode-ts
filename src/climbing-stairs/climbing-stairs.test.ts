import climbStairs from "./climbing-stairs";

test("2 => 2", () => {
  expect(climbStairs(2)).toBe(2);
});

test("3 => 3", () => {
  expect(climbStairs(3)).toBe(3);
});

test("4 => 5", () => {
  expect(climbStairs(4)).toBe(5);
});

test("5 => 8", () => {
  expect(climbStairs(5)).toBe(8);
});
