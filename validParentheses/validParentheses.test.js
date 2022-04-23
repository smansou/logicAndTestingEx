
const isValid = require('./validParentheses.easy');

test('test1', ()=>{
    expect(isValid("()[}")).toBe(false)
});

test('test1', ()=>{
    expect(isValid("()[]")).toBe(true)
});
