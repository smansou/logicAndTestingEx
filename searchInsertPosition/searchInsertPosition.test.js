

const searchInsert = require("./searchInsertPosition.easy");

test("test1", ()=>{
expect(searchInsert([1,3,5,6], 5)).toBe(2)
});
test("test2", ()=>{
expect(searchInsert([1,3,5,6], 7)).toBe(4)
});
test("test3", ()=>{
expect(searchInsert([1,3,5,6], 2)).toBe(1)
});