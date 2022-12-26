class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(node) {
        this.root = node;
    }

    preOrder(currentNode) {// 전위 순회
        console.log(currentNode.value);
        if(currentNode.left) this.preOrder(currentNode.left);
        if(currentNode.right) this.preOrder(currentNode.right);
    }

    inOrder(currentNode) { // 중위 순회
        if(currentNode.left) this.inOrder(currentNode.left);
        console.log(currentNode.value);
        if(currentNode.right) this.inOrder(currentNode.right);
    }
    postorder(currentNode) { // 후위 순회
        if (currentNode.left) this.postorder(currentNode.left);
        if (currentNode.right) this.postorder(currentNode.right);
        console.log(currentNode.value);
    }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.preorder(tree.root);
tree.inorder(tree.root);
tree.postorder(tree.root);
