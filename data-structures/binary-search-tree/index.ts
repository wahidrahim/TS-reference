class Node {
  value: any;
  left?: Node;
  right?: Node;

  constructor(value: any) {
    this.value = value;
  }
}

class BST {
  root?: Node;

  insert(value: any) {
    const newNode = new Node(value);

    const recursiveInsert = (node: Node, rootNode: Node) => {
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
}

export default BST;
