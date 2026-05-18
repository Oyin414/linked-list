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
}
