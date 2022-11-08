class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    find(value) { // 값을 찾을때 까지 다음요소로 넘어간다.
        let currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    append(newValue) {
        const newNode = new Node(newValue);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insert(node, newValue) {
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(value) {
        let prevNode = this.head;
        if (prevNode.value === value) {
            if (!prevNode.next) { // 첫번째 노드가 마지막 노드일때
                this.head = null;
                this.tail = null;
            }
            this.head = prevNode.next;
            return;
        }
        while (prevNode.next.value !== value) { // 삭제노드의 이전 노드 찾기
            prevNode = prevNode.next;
        }
        if (prevNode.next) {
            prevNode.next = prevNode.next.next;
            if (!prevNode.next) { // 삭제할 노드의 다음 노드가 마지막 노드일때
                this.tail = prevNode;
            }
        }
    }

    disply() {
        let currNode = this.head;
        let displayString = '[';
        while (currNode !== null) {
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayString = displayString.substr(0, displayString.length - 2);
        displayString += ']';
        console.log(displayString);
    }

}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.disply();
console.log(linkedList.find(4));
linkedList.remove(3);
linkedList.disply();
linkedList.remove(1);
linkedList.disply();
console.log(linkedList);
linkedList.insert(linkedList.find(2), 8);
linkedList.disply();
console.log(linkedList);