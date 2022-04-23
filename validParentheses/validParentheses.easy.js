/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
    const par = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    for (let i = 0; i<s.length; i++){
        if (s[i] != par[s[i+1]]){
            return false;
        } else {i++;}
    }
    return true;
};
console.log(isValid("()[}"));

module.exports = isValid;
