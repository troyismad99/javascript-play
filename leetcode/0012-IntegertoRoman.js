/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 
 - 2 is written as II in Roman numeral, just two one's added together. 
 - 12 is written as XII, which is simply X + II. 
 - 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example 1:
Input: num = 3
Output: "III"

Example 2:
Input: num = 4
Output: "IV"

Example 3:
Input: num = 9
Output: "IX"

Example 4:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 5:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
    1 <= num <= 3999
*/

function intToRoman(num) {

    const romanMap = { 
        'M': 1000,
        'CM': 900,
        'D':  500,
        'CD': 400,
        'C':  100,
        'XC':  90,
        'L':   50,
        'XL':  40,
        'X':   10,
        'IX':   9,
        'V':    5,
        'IV':   4,
        'I':    1 
    };
    
    var romanString = '';
    
    // foreach our way throught the map
    Object.entries(romanMap).forEach(([romanDigit, romanValue]) => {

        // add the appropriate number of roman digits to the result
        romanString += romanDigit.repeat(Math.floor(num / romanValue));

        // num is now the remainder...
        num %= romanValue;
    });
    
    return romanString;
}

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(10));
console.log(intToRoman(58));
console.log(intToRoman(1994));

var WayneGretzky = 99;
console.log(intToRoman(WayneGretzky));

/*
Runtime: 160 ms, faster than 73.06% of JavaScript online submissions for Integer to Roman.
Memory Usage: 47.7 MB, less than 12.03% of JavaScript online submissions for Integer to Roman.
*/