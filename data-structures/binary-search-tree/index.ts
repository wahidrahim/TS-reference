class Node {
  value: number;
  left?: Node;
  right?: Node;

  constructor(value: number) {
    this.value = value;
  }
}

class BST {
  root?: Node;

  insert(value: number) {
    const newNode = new Node(value);

    const recursiveInsert = (node: Node, rootNode?: Node) => {
      if (!rootNode) {
        return node;
      }

      if (node.value < rootNode.value) {
        rootNode.left = recursiveInsert(node, rootNode.left);
      } else if (node.value > rootNode.value) {
        rootNode.right = recursiveInsert(node, rootNode.right);
      }

      return rootNode;
    };

    this.root = recursiveInsert(newNode, this.root);

    return this;
  }

  contains(value: number) {
    const recursiveContains = (rootNode?: Node): boolean => {
      if (!rootNode) {
        return false;
      } else if (value === rootNode.value) {
        return true;
      } else if (value < rootNode.value) {
        return recursiveContains(rootNode.left);
      } else if (value > rootNode.value) {
        return recursiveContains(rootNode.right);
      }

      return false;
    };

    return recursiveContains(this.root);
  }

  toArrayInOrder() {
    const recursivePrint = (node?: Node): number[] => {
      if (!node) {
        return [];
      }

      return [
        ...recursivePrint(node.left),
        node.value,
        ...recursivePrint(node.right),
      ];
    };

    return recursivePrint(this.root);
  }

  print() {
    const recursivePrint = (node?: Node): string => {
      if (!node) {
        return '';
      }

      return `${recursivePrint(node.left)}${node.value}, ${recursivePrint(node.right)}`
    }

    return recursivePrint(this.root);
  }

  /**
   * Get array in a breadth-first order
   */
  toBFArray() {
    if (!this.root) {
      return [];
    }

    const array = [];
    const queue: Node[] = [];

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift()

      // array.push(node.value);
    }
  }
}

export default BST;
