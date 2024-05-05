class Node {
    constructor(value, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    append(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let currentNode = this.root;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new Node(value);
        }
    }

    prepend(value) {
        this.root = new Node(value, this.root);
    }

    size() {
        let currentNode = this.root;
        let counter = 0;
        while (currentNode instanceof Node) {
            currentNode = currentNode.nextNode;
            counter++;
        }
        return counter
    }

    printValues() {
        let currentNode = this.root
        while (currentNode) {
            console.log(currentNode.value)
            currentNode = currentNode.nextNode;
        }
        console.log(currentNode)
    }


}

let linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
// linkedList.append(3)
// linkedList.append(4)
// linkedList.append(5)
// linkedList.append(6)
// linkedList.append(7)
// linkedList.append(8)
// linkedList.append(9)
// linkedList.append(10)
// linkedList.append(11)
// linkedList.append(12)
linkedList.prepend(13)
linkedList.prepend(14)

linkedList.printValues()

console.log(linkedList.size())

