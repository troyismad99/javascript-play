/*
 * Divide Two Integers

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero,
 which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:
    Assume we are dealing with an environment that could only store integers 
    within the 32-bit signed integer range: [−231,  231 − 1]. For this problem, 
    assume that your function returns 231 − 1 when the division result overflows.

Example 1:
    Input: dividend = 10, divisor = 3
    Output: 3
    Explanation: 10/3 = truncate(3.33333..) = 3.

Example 2:
    Input: dividend = 7, divisor = -3
    Output: -2
    Explanation: 7/-3 = truncate(-2.33333..) = -2.

Example 3:
    Input: dividend = 0, divisor = 1
    Output: 0

Example 4:
    Input: dividend = 1, divisor = 1
    Output: 1

Constraints:
    -231 <= dividend, divisor <= 231 - 1
    divisor != 0
*/

/*
 * Runtime: 112 ms        Your runtime beats 46.52 % of javascript submissions.
 * Memory Usage: 40.3 MB  Your memory usage beats 50.93 % of javascript submissions.
 */

var divide = function(dividend, divisor) {

/*
 * I'm not a fan of these "Do this operation, but don't use the built in functions" type of problem
 * So I stole the solution from here:
   https://leetcode.com/problems/divide-two-integers/discuss/778597/Javascript-with-explanation-or-80ms-or-21-lines
 */

    // Get the sign for the result. XOR is perfect here
    const negativeSign = divisor > 0 ^ dividend > 0;
    
    // we have the sign so work with poitive values to make things simplier
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    let ret = 0;

    /*
     * Brute force way is to just subtract over and over agin until we have an answer.
     * This method exponentially increases our divisor to "divide" in larger chuncks
     * For 100 /10
     *  Rather than the iterative (100 - 5) 20 times
     *  We get: 
     *   Step 1: value goes 10 -> 20 -> 40 -> 80
     *     (100 - 80) ( this is 16 fives)
     *     new dividend is 20
     *  Step 2: Value goes 10 -> 20
     *     (20 - 20) (this 4 more fives, so we are at 20 now)
     * 
     */
    while (divisor <= dividend) 
    {
        let value = divisor;
        let multiple = 1;

        // build up the biggest chunck we can take this time
        while (value + value <= dividend) 
        {
            value += value;
            multiple += multiple;
        }

        // apply the chuck
        dividend = dividend - value;
        ret += multiple;
    }
    
    // check for our overflow case
    if (ret > ((2**31) - 1)) 
    {
        return negativeSign ? -(2**31) : 2**31 - 1;
    }

    return negativeSign ? -ret : ret;
};

console.log(divide( 10,  3));
console.log(divide(  7, -3));
console.log(divide(  0,  1));
console.log(divide(  1,  1));

console.log(divide(  100,  5));
console.log(divide(  100,  6));