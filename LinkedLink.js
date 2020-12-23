/* Cycle detection

 Does a linked list cycle back on itself
Example:
                    ____
                   |    |
                   \/   |
    1 -> 2 -> 3 -> 4 -> 5

5 cycles back to 4
*/

class Node {
    constructor(data) {
        this.element = data;
        this.next = null;
    }
}

var listHead = new Node(1);

listHead.next = new Node(2);
listHead.next.next = new Node(3);
listHead.next.next.next = new Node(4);
listHead.next.next.next.next = new Node(5);

// console.log(listHead.next.next);

function bruteForceCycleDetection(listHead) {

    currentNode = listHead;
    visited = new Set();

    while (currentNode) {
        if (visited.has(currentNode)) {
            return true;
        }

        visited.add(currentNode);
        currentNode = currentNode.next;        
    }

    return false;
}

function fastSlowPointerCycleDetection(head){

    var slow = head;
    var fast = head;

    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }

    return false;

}


// make 5 point to 4
listHead.next.next.next.next.next = listHead.next.next.next.next;


if (bruteForceCycleDetection(listHead)) {
    console.log("Found cycle.")
}
else {
    console.log("No cycle boss!")
}


if (fastSlowPointerCycleDetection(listHead)) {
    console.log("Found cycle.")
}
else {
    console.log("No cycle boss!")
}

/* happy number problem 

- given a positive integer
- replace the number with the sum of the square of its digits
- return true if it eventually equals 1; of false if it goes for infinity
Examples:
19 ->
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² +0² +0² = 1
*true*

18->
1² +8² = 65
6² +5² = 61
6² +1² = 37
3² +7² = 58
....
1² +6² = 37
*false*
*/


function squareDigits(seedNumber) {

    var result = 0;
    var num = seedNumber;

    while (num > 0) {
        onesDigit = num % 10;
        result = result + (onesDigit ** 2);
        num = (num - onesDigit) / 10;
    }
    return result;
}

function isHappyNumber(checkNumber) {
    slow = checkNumber;
    fast = squareDigits(checkNumber);

    while ((fast != 1) && (slow != fast)) {
        slow = squareDigits(slow);
        fast = squareDigits(squareDigits(fast));
    }

    return fast == 1;
}

console.log(isHappyNumber(18));