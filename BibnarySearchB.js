/*

We have a sorted array and a target value to find:


0   1  2  3  4  5  6
[1, 4 ,4, 5, 7, 8 ,10]

target is 4
Find these:
 Left index =
 Right Index =

*/

function binarySearchGroup(arr, target){

    // find these
    leftIndex = -1;
    rightIndex = -1;

    left = 0;
    right = arr.length - 1;

    // find left most
    while (left <= right) {

        mid = Math.floor( (left + right) / 2 );

        if (arr[mid] == target) {
            leftIndex = mid;
            right = mid -1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }   
    }

    left = 0;
    right = arr.length - 1; 

    // find right
    while (left <= right) {

        mid = Math.floor( (left + right) / 2 );

        if (arr[mid] == target) {
            rightIndex = mid;
            left = mid +1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }   
    }

    return [leftIndex, rightIndex];
}



var numbers = [ 1, 2, 3, 4, 4, 4, 4, 8, 9, 10];

console.log(binarySearchGroup(numbers, 47));
