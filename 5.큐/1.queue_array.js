class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enQueue(value) {
        this.queue[this.rear++] = value;
    }

    deQueue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }

    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.deQueue()); // 1
queue.enQueue(4);
console.log('size',queue.size()); // 3
console.log('pick',queue.peek());
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log(queue);