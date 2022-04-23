

function palindromeNumber(x){
    

    let str = x.toString();
    let isPalindrome = true;
    let n = str.length;

    for (let i = 1; i <= n; i++) {
        if (str[i-1] !== str[n-i]){
            isPalindrome = false;
        }
    }
    return isPalindrome;
}
console.log(palindromeNumber(121));







module.exports = palindromeNumber;
