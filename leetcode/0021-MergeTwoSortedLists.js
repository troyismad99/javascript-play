/*
Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the 
first two lists.

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both l1 and l2 are sorted in non-decreasing order.
*/


class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

var list1 = new ListNode(1); 
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

var list2 = new ListNode(1); 
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

function mergeTwoLists(l1, l2) {

    var sortedList = new ListNode(); // dummy start node
    var currentNode = sortedList;

    // only compare while we have items in both lists ...
    // re-use the existing nodes
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            currentNode = currentNode.next;
            l1 = l1.next;
        }
        else {
            currentNode.next = l2;
            currentNode = currentNode.next;
            l2 = l2.next;
        }
    }

    // one of these will still have elements
    if (l1) currentNode.next = l1;
    if (l2) currentNode.next = l2;

    // return after the dummy node
    return sortedList.next;
}


var list1 = new ListNode(1); 
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

var list2 = new ListNode(1); 
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(mergeTwoLists(list1, list2));


var list3 = new ListNode();
var list4 = new ListNode();
console.log(mergeTwoLists(list3, list4));


var list5 = new ListNode();
var list6 = new ListNode(0);
console.log(mergeTwoLists(list5, list6));

/*
Runtime: 88 ms, faster than 81.47% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 40.8 MB, less than 13.80% of JavaScript online submissions for Merge Two Sorted Lists.
*/