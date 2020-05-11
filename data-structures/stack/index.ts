namespace StackDataStructure {
  class Node {
    value = null;
    next = null;

    constructor(value: any) {
      this.value = value;
    }
  }

  export class Stack {
    first = null;
    last = null;
    size = 0;

    push(value: any) {
      const newNode = new Node(value);
    }
  }
}

export default StackDataStructure.Stack;
