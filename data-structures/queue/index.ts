namespace QueueDataStructure {
  class Node {
    next: Node | null;

    constructor(public value: any) {
      this.next = null;
    }
  }

  export class Queue {
    first: Node | null;
    last: Node | null;
    size: number;

    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    enqueue(value: any) {
      const newNode = new Node(value);

      if (this.last) {
        this.last.next = newNode;
        this.last = newNode;
      } else {
        this.first = newNode;
        this.last = newNode;
      }

      return ++this.size;
    }

    dequeue() {
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
      let printString = '';

      while (currentNode) {
        printString += `${currentNode.value} `;
        currentNode = currentNode.next;
      }

      return printString;
    }
  }
}

export default QueueDataStructure.Queue;
