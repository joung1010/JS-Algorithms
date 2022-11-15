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
    }

    enQueue(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deQueue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value;
    }


}

function solution(priorlities, location) {
    const queue = new Queue();
    for (let i = 0; i < priorlities.length; i++) {
        queue.enQueue([priorlities[i],i]);
    }
    priorlities.sort((a, b) => b - a);
    let count = 0;
    while (true) {
        const currValue = queue.peek();
        if (currValue[0] < priorlities[count]) {
            queue.enQueue(queue.deQueue());
        } else {
            const value = queue.deQueue();
            count++;
            if (location === value[1]) {
                return count;
            }
        }
    }

    return count;
}

console.log(solution([2, 1, 3, 2], 2));