/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:
Input: digits = [0]
Output: [1]

Constraints:
    1 <= digits.length <= 100
    0 <= digits[i] <= 9
*/

function plusOne(digits) {

    for (i=digits.length-1; i>=0; i--) {

        // if the digit is < 9 we increment and leave
        if (digits[i] < 9) {
            digits[i]++;
            break;
        }
        else {
            // the 9 becomes a 0 and the next value gets incremented
            digits[i] = 0;

            // check if we need to add a one to the start
            if (i==0) {
                digits.unshift(1);
            }
        }
    }
    
    // // check if we need to add a one to the start
    // if (digits[0] == 0) {
    //     digits.unshift(1);
    // }

    return digits;
}

console.log (plusOne([1,2,3]));
console.log (plusOne([4,3,2,1]));
console.log (plusOne([0]));

var WayneGretzky = [9,9];

console.log (plusOne(WayneGretzky));

console.log (plusOne([0,0]));