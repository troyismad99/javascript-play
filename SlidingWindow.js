
var numbers = [ 12, 3, 4, 1, 5, 0, 2 -5];

var k = 3;

// find largest sum in array for k contiguous numbers

// 1. two for loops
// - slow O(n*K)
// O(n) to iterate over array + O(K) to compute the sums

// 2. Sliding Window O(n) time
// - Moves start and finish pointeres and adjusts the sum

var maxSum = 0;
var curSum = 0;

var start = 0;

// first window
for (i = 0; i < k; i++){
    maxSum += numbers[i];
}

// advance window and add new (i) remove first (i-k)
curSum = maxSum;
for ( i = k; i < numbers.length; i++) {
    curSum += numbers[i] - numbers[i - k];
    maxSum = Math.max(maxSum, curSum);
}

console.log(maxSum);