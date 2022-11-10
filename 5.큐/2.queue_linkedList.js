class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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
        if (this.head === null) {
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

    getSize() {
        return this.size;
    }
}

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.deQueue());
queue.enQueue(4);
console.log('size',queue.getSize());
console.log('peek',queue.peek())
console.log(queue.deQueue());
console.log(queue.deQueue());