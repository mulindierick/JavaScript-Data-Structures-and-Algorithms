//use shift and unshift for constant time

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add at the beginning of a stack
  unshift(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  //remove from the beginning of stack
  shift() {
    if (!this.first) return null;
    let nodeToBeRemoved = this.first;
    this.first = nodeToBeRemoved.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return nodeToBeRemoved.value;
  }
}
