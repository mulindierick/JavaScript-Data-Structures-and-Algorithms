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
}
