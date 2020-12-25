/*
Binary tree - return all root to leaf paths

   1
 /  \
2    3
 \
  5

Answer:
1->2->5
1->3
*/

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

var root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.right = new Node(3);
/*************/

// depth first search
function binaryTreePaths(root){

    var paths = [];

    //is there a root?
    if (!root) {
        //paths.push("-0-");
        return paths;
    }

    DFS(root, root.data, paths);

    return paths;
}

function DFS(node, route, paths){

    // are we at a leaf?
    if(!node.left && !node.right) {
        paths.push(route);
        return;
    }

    if (node.left)  DFS(node.left,  [route, "->", node.left.data].join(''),  paths);
    if (node.right) DFS(node.right, [route, "->", node.right.data].join(''), paths);
    
}

console.log(root);

console.log(binaryTreePaths(root));
