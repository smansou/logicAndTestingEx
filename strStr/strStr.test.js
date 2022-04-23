
const strStr = require("./strStr.easy");

test('test1', ()=>{
    expect(strStr('aaaa', 'bba')).toBe(-1);
});
test('test2', ()=>{
    expect(strStr('hello', 'll')).toBe(2);
});
