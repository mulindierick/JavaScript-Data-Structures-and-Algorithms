class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = o;
  }
  //add new node
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //remove node from the end
  pop() {
    if (!this.head) return undefined;
    let NodeTobeRemoved = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = NodeTobeRemoved.prev;
      this.tail.next = null;
      NodeTobeRemoved.prev = null;
    }
    this.length--;
    return NodeTobeRemoved;
  }
  //remove node from the beginning
  shift() {
    if (!this.head) return undefined;
    let originalHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = originalHead.next;
      this.head.prev = null;
      originalHead.next = null;
    }

    this.length--;
    return originalHead;
  }
  // add node at the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get node at given index
  get(index) {
    if (index === 0 || index >= this.length) return null;
    let count, currentNode;
    if (index <= this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentHead = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentTail = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }

  // replace value at a given index
  set(index, val) {
    let newNode = this.get(index);
    if (newNode) {
      newNode.val = val;
      return true;
    }
    return false;
  }
  //insert node at given possition
  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }
  //remove node at a given index
  remove(index, val) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let nodeToBeRemoved = this.get(index);
    let prevNode = nodeToBeRemoved.prev;
    let nextNode = nodeToBeRemoved.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeToBeRemoved.prev = null;
    nodeToBeRemoved.next = null;

    this.length--;
    return nodeToBeRemoved;
  }

  reverse() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let counter = 0;
    let prev = null;
    let next;
    while (counter < this.length) {
      next = currentNode.next;
      currentNode.prev = next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
      counter++;
    }
    return this;
  }
}
