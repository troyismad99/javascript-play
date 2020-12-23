
var numbers = [ 2, 4, 2, 5, 1];

var s = 7;

// find smallest sub array where sum is >= 7

var curSum = 0;
var minSize = Infinity;
var start = 0;

for (i=0; i < numbers.length; i++) {
    
    curSum += numbers[i];

    while (curSum >= s) {
        minSize = Math.min(minSize, i - start +1 );
        curSum -= numbers[start];
        start++;
    }
}

console.log(minSize);