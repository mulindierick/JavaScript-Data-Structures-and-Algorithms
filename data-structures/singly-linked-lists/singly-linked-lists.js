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
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // this is the only way of connecting the head to the tail. if the .next property is called on the head, it will find when the next propert is a node
      this.tail = newNode; // if we use .next after here the tail will be pointing to itself
    }
    // now we need to increment length everytime
    this.length++;
    return this; // this returns the whole linked list
  }
  // remove node from the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next; // current will always be one step a head of newTail
    }
    this.tail = newTail; // this points to the next node
    this.tail.next = null; // so we need to make sure it point null now
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // remove node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // add node at the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get the value at the given index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head; // by the time counter is equal to index we will be at the node we want
    while (counter !== index) {
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
  // insert a value at a given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
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
  
  reverse(){
    // we first reverse the head 
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev // previous is null
      prev = node // previous is now a node
      node = next // now nopde is what next wwas. we have moved node forward 

    }
  }
}
