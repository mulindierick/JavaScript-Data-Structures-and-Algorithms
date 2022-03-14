class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add node to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head; // there is only one node, its therefore the head and the tail at the same time.
    } else {
      this.tail.next = newNode; //point the last node to the newly added node. tail was the last node, now point it to the new node using the next property
      this.tail = newNode; //now make the newly added node the tail
    }
    // now we need to increment length
    this.length++;
    return this; // this returns the whole linked list
  }
  // remove node from the end of the list
  pop() {
    if (!this.head) return undefined; // list is empty
    let current = this.head; // one step
    let newTail = current;
    while (current.next) {
      newTail = current; // new tail will be one step behind
      current = current.next; // current will always be one step a head of newTail
    }
    this.tail = newTail; // points to current, which is one node behind current.next
    this.tail.next = null; // deletes current.next by pointing to null
    this.length--;
    if (this.length === 0) {
      // incase list has only one node and is now at zero
      this.head = null;
      this.tail = null;
    }
    return current; // return the node we have removed
  }
  // remove and return node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head; // assign current head to a var
    this.head = currentHead.next; //make the second node the head
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead; // return the first head
  }
  // add node at the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // there is no head
      this.head = newNode;
      this.tail = this.head;
    } else {
      // there is a head
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get node at the given index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      // by the time counter is equal to index we will be at the node we want
      current = current.next; //keep going forward until we get to the node we want
      counter++;
    }
    return current; // return the node we want
  }
  // replace a value at a given index
  set(index, val) {
    let foundNode = this.get(index); // returns the node we want at the given index then we replace the value of that node
    if (foundNode) {
      foundNode.val = val; // replace the value of the node found
      return true;
    }
    return false;
  }
  // insert a node at a given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val); // !! return bolean instead of values
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  // remove a node from a given index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let nodeToBeRemoved = prevNode.next;
    let nextNode = nodeToBeRemoved.next;
    prevNode.next = nextNode;

    this.length--;
    return nodeToBeRemoved;
  }

  reverse() {
    // we first reverse the head
    let currentNode = this.head;
    this.head = this.tail; // make head the tail
    this.tail = currentNode; // make tail the head

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = currentNode.next; // store the node after the beginning node(tail)
      currentNode.next = prev; // the beginning node points to nothing (tail.next == null)
      prev = currentNode; // make previous the current node (previous is now point to the current node)
      currentNode = next; // and make the next node the current node
    }
  }
}
