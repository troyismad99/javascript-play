/* Traverse

1. LNR (LEFT, NODE, RIGHT) (pre-order traversal)
    - go left until no more left
    - process node
    - go right

2. NLR (NODE, LEFT, RIGHT) (In order traversal)
    - process node
    - go left 
    - go right

3. LRN (LEFT, RIGHT, NODE) (Post order traversal)
    - go left 
    - go right
    - process node

*/

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

var root = new Node(5);

root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.left.left.right = new Node(6);

root.right = new Node(7);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.right.right.left = new Node(8);

/*
       5
    /     \
   2       7
  / \     / \
 1   3   4   5
  \         /
   6       8
*/

function LNR (n) {
    if (n.left) {
        LNR (n.left);
    }

    console.log(n.data);

    if(n.right) {
        LNR(n.right);
    }
}


function NLR (n) {
    
    console.log(n.data);

    if (n.left) {
        NLR (n.left);
    }
    if(n.right) {
        NLR(n.right);
    }
}


function LRN (n) {
    if (n.left) {
        LRN (n.left);
    }
    if(n.right) {
        LRN(n.right);
    }

    console.log(n.data);
}

//LNR(root);
//NLR(root);
LRN(root);
console.log(root);