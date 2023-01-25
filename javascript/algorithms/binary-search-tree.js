/**
 * Binary Search Trees are a type of Binary Tree that has sorted data.
 * These are  useful for searching or insertion.
 *
 * RULES: For each parent node, every value on the left must be less than the
 * parent, and every value on the right side must be greater than the parent.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.righ = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else {
        throw new Error(`Duplicate value ${value}`);
      }
    }
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // found
        return current;
      }
    }
    return undefined;
  }
}

// test
const tree = new BinarySearchTree();

const input = [1, 3, 2, 10, 16, Math.PI, 0, 100, 999, -1, 6];
input.forEach((x) => tree.insert(x));

const canFindAll = input.every(x => {
  const node = tree.find(x);
  return node?.value === x;
});
console.log('Found test', canFindAll);

const mustNotFindAll = [20, 30, 40].every(x => !tree.find(x));
console.log('Not found test', mustNotFindAll);
