
const { test, expect } = require("@jest/globals");
const romanToInt = require("./romanToInteger.easy");




test("t1", () => {
	expect(romanToInt('MCMXCIV')).toBe(1994);
});

test("t2", () => {
	expect(romanToInt('LVIII')).toBe(58);
});
test("t3", () => {
	expect(romanToInt('III')).toBe(3);
});
