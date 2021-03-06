namespace StackDataStructure {
  class Node {
    value: any;
    next: Node | null;

    constructor(value: any) {
      this.value = value;
      this.next = null;
    }
  }

  export class Stack {
    first: Node | null;
    last: Node | null;
    size: number;

    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(value: any) {
      const newNode = new Node(value);

      if (this.first) {
        newNode.next = this.first;
        this.first = newNode;
      } else {
        this.first = newNode;
        this.last = newNode;
      }

      return ++this.size;
    }

    pop() {
      if (!this.first) {
        return null;
      }

      const prevFirst = this.first;

      if (this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
      }

      --this.size;
      return prevFirst.value;
    }

    print() {
      if (!this.size) {
        return null;
      }

      let currentNode = this.first;
      let stringPrint = '\n';

      while (currentNode) {
        stringPrint += `${currentNode.value}\n`;
        currentNode = currentNode.next;
      }

      return stringPrint;
    }
  }
}

export default StackDataStructure.Stack;
