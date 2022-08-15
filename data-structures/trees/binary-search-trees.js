// a type of binary trees
// each node can have a max of 2 children
// they are sorted or are kept in order
// node larger than parent go the right
// node smaller than parent go to the left

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentRoot = this.root;
      while (true) {
        // value is repeated/duplicate
        if (val === currentRoot.val) return undefined;
        if (val < currentRoot.val) {
          if (currentRoot.left === null) {
            currentRoot.left = newNode;
            return this;
          } else {
            currentRoot = currentRoot.left;
          }
        } else if (val > currentRoot.val) {
          if (currentRoot.right === null) {
            currentRoot.right = newNode;
            return this;
          } else {
            currentRoot = currentRoot.right;
          }
        }
      }
    }
  }
  find(val) {
    if (this.root === null) return undefined;
    let currentRoot = this.root;
    let found = false;
    while (currentRoot && !found) {
      if (val < currentRoot.val) {
        currentRoot = currentRoot.left;
      } else if (val > currentRoot.val) {
        currentRoot = currentRoot.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentRoot;
  }
  // Breadth first search
  BFS() {
    let currNode = this.root;
    let data = [];
    let queue = [];
    queue.push(currNode);
    while (queue.length) {
      currNode = queue.shift();
      data.push(currNode);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    return data;
  }
  //deepth first search pre-order
  // start from the root, traverse the left, then the right
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  // DFS - PostOder
  // start from the bottom of the left, then right, and the root last
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(this.root);
    return data;
  }
  // DFS - PostOder
  // start from the bottom of the left, the the root, and the right side last
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
