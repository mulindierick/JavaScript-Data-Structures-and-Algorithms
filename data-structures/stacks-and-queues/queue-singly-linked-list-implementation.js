//use shift and unshift for constant time

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add at the end of queue (push())
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
  //remove from beginning of queue (shift())
  dequeue() {
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
