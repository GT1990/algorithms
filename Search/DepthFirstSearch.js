class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  printTree() {
    function traverse(node) {
      const tree = { value: node.value };
      tree.left = node.left === null ? null : traverse(node.left);
      tree.right = node.right === null ? null : traverse(node.right);
      return tree;
    }
    console.log(JSON.stringify(traverse(this.root)));
  }

  insert(value) {
    function traverseTreeRecursivly(num, root, newNode) {
      // console.log("NUM: ", num);
      // console.log("ROOT: ", root);
      // console.log("newNode: ", newNode);

      let currentNode = root;
      if (num < currentNode.value) {
        // go left
        if (currentNode.left !== null) {
          // another node found
          // recurrsion until find null
          traverseTreeRecursivly(num, currentNode.left, newNode);
        } else {
          currentNode.left = newNode;
        }
      } else {
        // go right
        if (currentNode.right) {
          // another node found
          // recurrsion until find null
          traverseTreeRecursivly(num, currentNode.right, newNode);
        } else {
          currentNode.right = newNode;
        }
      }
      return;
    } // end traverseTreeRecursivly
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      traverseTreeRecursivly(value, this.root, newNode);
    }
  }
  lookup(value) {
    if (!this.root) {
      console.log("The Tree is EMPTY!");
    } else {
      function traverse(node) {
        if (value === node.value) {
          console.log(`${value} exists in Tree`);
        } else if (value < node.value) {
          // go left
          if (node.left) {
            traverse(node.left);
          } else {
            console.log(`${value} does NOT exist in Tree.`);
          }
        } else {
          // go right
          if (node.right) {
            traverse(node.right);
          } else {
            console.log(`${value} does NOT exist in Tree.`);
          }
        }
      }
      traverse(this.root);
    }
  }
  remove(value) {}

  inOrderDepthFirstSearch(node, list = []) {
    if (node.left) {
      this.inOrderDepthFirstSearch(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.inOrderDepthFirstSearch(node.right, list);
    }
    return list;
  }
  preOrderDepthFirstSearch(node, list = []) {
    list.push(node.value);
    if (node.left) {
      this.preOrderDepthFirstSearch(node.left, list);
    }
    if (node.right) {
      this.preOrderDepthFirstSearch(node.right, list);
    }
    return list;
  }
  postOrderDepthFirstSearch(node, list = []) {
    if (node.left) {
      this.postOrderDepthFirstSearch(node.left, list);
    }
    if (node.right) {
      this.postOrderDepthFirstSearch(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
// myTree.printTree();
console.log("INORDER: ", myTree.inOrderDepthFirstSearch(myTree.root));
// console.log("PREORDER: ", myTree.preOrderDepthFirstSearch(myTree.root));
// console.log("POSTORDER: ", myTree.postOrderDepthFirstSearch(myTree.root));
