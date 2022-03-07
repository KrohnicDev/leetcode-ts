import deleteAndEarn from "./delete-and-earn";

describe("example test cases", () => {
  test("example 1", () => {
    expect(deleteAndEarn([3, 4, 2])).toBe(6);
  });

  test("example 2", () => {
    expect(deleteAndEarn([2, 2, 3, 3, 3, 4])).toBe(9);
  });
});

describe("custom test cases", () => {
  it("returns only positive number", () => {
    const nums = [0, 1];
    const expected = 1;
    const actual = deleteAndEarn(nums);
    expect(actual).toBe(expected);
  });

  it("returns higher of two consecutive numbers", () => {
    const nums = [1, 2];
    const expected = 2;
    const actual = deleteAndEarn(nums);
    expect(actual).toBe(expected);
  });

  it("return sum when two numbers are not consecutive", () => {
    const nums = [1, 3];
    const expected = 4;
    const actual = deleteAndEarn(nums);
    expect(actual).toBe(expected);
  });

  it("returns sum when all the numbers are the same", () => {
    const nums = [3, 3, 3];
    const expected = 9;
    const actual = deleteAndEarn(nums);
    expect(actual).toBe(expected);
  });
});

describe("test cases from failed submits", () => {
  test("first", () => {
    const nums = [8, 3, 4, 7, 6, 6, 9, 2, 5, 8, 2, 4, 9, 5, 9, 1, 5, 7, 1, 4];
    const expected = 61;
    const actual = deleteAndEarn(nums);
    expect(actual).toBe(expected);
  });

  test("second", () => {
    const nums = [
      12, 32, 93, 17, 100, 72, 40, 71, 37, 92, 58, 34, 29, 78, 11, 84, 77, 90,
      92, 35, 12, 5, 27, 92, 91, 23, 65, 91, 85, 14, 42, 28, 80, 85, 38, 71, 62,
      82, 66, 3, 33, 33, 55, 60, 48, 78, 63, 11, 20, 51, 78, 42, 37, 21, 100,
      13, 60, 57, 91, 53, 49, 15, 45, 19, 51, 2, 96, 22, 32, 2, 46, 62, 58, 11,
      29, 6, 74, 38, 70, 97, 4, 22, 76, 19, 1, 90, 63, 55, 64, 44, 90, 51, 36,
      16, 65, 95, 64, 59, 53, 93,
    ];
    const timeBefore = new Date();
    deleteAndEarn(nums);
    const timeAfter = new Date();
    const diff = timeAfter.getTime() - timeBefore.getTime();
    expect(diff).toBeLessThan(5_000);
  });
});
