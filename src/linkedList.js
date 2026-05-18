import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value, null);
      return;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value, null);
  }

  toString() {
    let list = "";
    if (this.headNode === null) {
      return list;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      list += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return (list += `( ${currentNode.value} ) -> ( null )`);
  }

  head() {
    if (this.headNode === null) {
      return undefined;
    }
    let currentNode = this.headNode;
    let name = currentNode.value;
    return name;
  }

  tail() {
    if (this.headNode === null) {
      return undefined;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }

  prepend(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value, null);
      return;
    }
    let currentNode = this.headNode;
    this.headNode = new Node(value, null);
    return (this.headNode.nextNode = currentNode);
  }

  pop() {
    if (this.headNode === null) {
      return undefined;
    }
    let currentNode = this.headNode;
    if (currentNode.nextNode === null) {
      this.headNode = null;
    } else {
      this.headNode = currentNode.nextNode;
    }
    return currentNode.value;
  }

  contains(value) {
    if (this.headNode === null) {
      return false;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null && currentNode.value !== value) {
      currentNode = currentNode.nextNode;
    }
    if (currentNode.value !== value) {
      return false;
    }
    return true;
  }

  at(index) {
    let item;
    let number = 0;
    if (this.headNode === null) {
      return undefined;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null && number < index) {
      currentNode = currentNode.nextNode;
      number += 1;
    }
    if (index > number) {
      return undefined;
    }
    return (item = currentNode.value);
  }

  findIndex(value) {
    let index = 0;
    if (this.headNode === null) {
      return -1;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null && currentNode.value !== value) {
      currentNode = currentNode.nextNode;
      index += 1;
    }
    if (currentNode.value !== value) {
      return -1;
    }
    return index;
  }

  size() {
    let number = 0;
    if (this.headNode === null) {
      return number;
    }
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      number += 1;
      currentNode = currentNode.nextNode;
    }
    return (number += 1);
  }
}
