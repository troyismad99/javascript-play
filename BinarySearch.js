/*
0   1  2  3  4  5  6
[1, 2 ,4, 5, 7, 8 ,10]

What element is 7? -A:4

Can iterate over each element until we find 7 -> O(n) time

Binary search is o(log(n)) time
  -> Everytime we double the number elements, the array is only cut in half one more time

- Pointer at start and pointer at end. 
- Asume that mid point is value and check (3 which is value 5)
- We can eliminate half the list since 5 < 7

*/

function binarySearch(arr, target){
    left = 0;
    right = arr.length;

    while (left <= right) {

        mid = Math.floor( (left + right) / 2 );

        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target ) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }   
    }
    return -1;
}



var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(numbers, 99));
