class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor(node) {
    this.headNode = node;
  }

  append(value) {
    let last = this.headNode;
    while (last.next != null) {
      last = last.next;
    }
    last.next = new node(value);
  }

  prepend(value) {
    let newHead = new node(value)
    newHead.next = this.headNode
    this.headNode = newHead
  }

  size() {
    let temp = this.headNode
    let count = 0
   while (temp != null) {
    temp = temp.next
    ++count
   }
   return count
  }

  head() {
    return this.headNode.value
  }

  tail() {
    let temp = this.headNode
    while(temp.next != null) {
      temp = temp.next
    }
    return temp.value
  }

  at(index) {
    let currentNode = this.headNode
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  pop() {
    let currentNode = this.headNode

    while(currentNode.next.next != null) {
      currentNode = currentNode.next
    }
    currentNode.next = null
  }

  contains(value) {
    let currentNode = this.headNode
    while(currentNode != null) {
      if (currentNode.value == value) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  find(value) {
    let currentNode = this.headNode
    let count = 0
    while(currentNode != null) {
      if (currentNode.value == value) {
        return count
      }
      currentNode = currentNode.next
      count++
    }
    return null
  }

  toString() {
    let currentNode = this.headNode
    let string = ""

    while(currentNode != null) {
      string = string + `(${currentNode.value}) => `
      currentNode = currentNode.next
    }
    string = string + "null"
    return string
  }
}

let myNode = new node("first");

let myList = new linkedList(myNode);

myList.append("second")
myList.append("third")
myList.append("fourth")
myList.append("five")

console.log(myList.toString());
console.log(myList.at(0));

