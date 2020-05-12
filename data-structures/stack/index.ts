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
        const prevFirst = this.first;

        this.first = newNode;
        this.first.next = prevFirst;
      } else {
        this.first = newNode;
        this.last = newNode;
      }

      return ++this.size;
    }

    print() {
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
