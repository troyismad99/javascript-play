/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], 
       l2 = [9,9,9,9]
Output:     [8,9,9,9,0,0,0,1]

Constraints:
    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.
*/

class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

var list1 = new Node(2);
list1.next = new Node(4);
list1.next.next = new Node(3);

var list2 = new Node(5);
list2.next = new Node(6);
list2.next.next = new Node(4);

function addTwoLists(l1, l2) {

    var sum = 0;
    var carry = 0;

    var sumNode = new Node(0);
    var startNode = sumNode;

    while( l1 || l2 || carry) {
        sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        sumNode.val = sum;

        if ( l1 || l2 || carry) {
            sumNode.next = new Node(0);
            sumNode = sumNode.next;
        }

    }

    return startNode;
}

console.log(list1);
console.log(list2);

console.log(addTwoLists(list1,list2));