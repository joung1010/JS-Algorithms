class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enQueue(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    deQueue() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek() {
        return this.head.value;
    }
}


class Tree {
    constructor(node) {
        this.root = node;
    }

    display() {
        const queue = new Queue();
        queue.enQueue(this.root);
        while (queue.size) {
            const currNode = queue.deQueue();
            console.log(currNode.value);
            if(currNode.left) queue.enQueue(currNode.left);
            if(currNode.right) queue.enQueue(currNode.right);
        }
    }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.display();