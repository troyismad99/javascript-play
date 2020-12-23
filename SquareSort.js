

var numbers = [ -7, -4, -3, 1, 2, 3, 5, 12, 15];

// square and sort result
var output = [];

// brute force, square each then sort -> O(n log n)

// two pointer

// start right at first positive value
right = 0;

while (right < numbers.length && numbers[right] < 0) {
    right++;
}
left = right -1;

console.log(numbers);
//console.log(left, right);

while ( left >= 0 && right < numbers.length) {

    leftSQ = numbers[left]**2;
    rghtSQ = numbers[right]**2;

    if (leftSQ < rghtSQ) {
        output.push(leftSQ);
        left --;
    }
    else {
        output.push(rghtSQ);
        right++;
    }
}

// we reached one of the bounds
console.log(left, right);
if (left >= 0) {
    for(i=left; i>=0; i--){
        output.push(numbers[i]**2);
    }
}
else {
    for(i=right; i< numbers.length; i++){
        output.push(numbers[i]**2);
    }
}

console.log(output);



