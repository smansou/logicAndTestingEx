
const twoSum = require("./twoSum.easy");

test("test1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toBe("[0,1]")
});


test('test2', () => {
    expect(twoSum([3, 3], 6)).toBe('[0,1]')
});