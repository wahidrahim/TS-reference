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

      // Should be unreachable
      return false;
    };

    return recursiveContains(this.root);
  }
}

export default BST;
