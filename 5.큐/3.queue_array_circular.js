class Queue {
    constructor(maxSize) {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.maxSize = maxSize;
    }

    enQueue(value) {
        if (this.isFull()) {
            console.log('Queue is Full.');
            return;
        }
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize;
        this.size++;
    }

    deQueue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size--;
        return value;
    }

    isFull() {
        return this.size === this.maxSize;
    }

    peek() {
        return this.queue[this.front];
    }

}

const queue = new Queue(4);
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log('size',queue.size);
console.log('peek',queue.peek());
queue.enQueue(6);
queue.enQueue(7);
console.log('isFull',queue.isFull());