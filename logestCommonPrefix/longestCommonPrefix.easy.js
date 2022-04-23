/**
 //* @param {string[]} strs
 //* @return {string}
 *
 //* @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
//  * 
//  * Example 1 
//  * Output: "fl"
//  * 
//                 *
//                 * Example 2
//                 * Input: strs = ["dog","racecar","car"]
//                 * Output: ""
//                 *
//                 */
// let strs = ["flower", "flow", "flight"];
// let strs = ["dog","racecar","car"];
let strs = ["your","you","youre", 'ylrk'];
const longestCommonPrefix = function (strs) {
    let counter = '';
    let isSame = true;
    for (let i = 0; i < strs.length; i++) {
        let current = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (current != strs[j][i]) {
                isSame = false;
            }
        }
        if (isSame == true) {
            counter += current;
        }
    }
    return counter;
};
console.log(longestCommonPrefix(strs));

module.exports = longestCommonPrefix;
