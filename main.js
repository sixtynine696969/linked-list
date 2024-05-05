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
        return counter;
    }

    head() {
        return this.root;
    }

    tail() {
        let currentNode = this.root;
        while (currentNode) {
            if (!currentNode.nextNode) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
    }

    at(index) {
        let currentNode = this.root;

        // solution 1
        // for (let i = 0; i < this.size(); i++) {
        //     if (i === +index) return currentNode;
        //     currentNode = currentNode.nextNode;
        // }
        
        // solution 2
        let counter = 0;
        while (currentNode instanceof Node) {
            if (counter === +index) return currentNode;
            currentNode = currentNode.nextNode;
            counter++;
        }
    }

    pop() {
        if (!this.root.nextNode) this.root = null;

        let currentNode = this.root;
        while (currentNode) {
            if (!currentNode.nextNode.nextNode) {
                currentNode.nextNode = null;
            }
            currentNode = currentNode.nextNode;
        }
    }

    contains(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value === +value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.root;

        // solution 1
        // for (let i = 0; i < this.size(); i++ ) {
        //     if (currentNode.value === +value) return i;
        //     currentNode = currentNode.nextNode;
        // }
        // return null;
        
        // solution 2
        let counter = 0;
        while (currentNode) {
            if (!currentNode.nextNode) return null
            if (currentNode.value === +value) {
                return counter;
            }
            currentNode = currentNode.nextNode;
            counter++;
        }
    }

    toString() {
        let currentNode = this.root;

        let output = ""

        for (let i = 0; i <= this.size(); i++) {
            if (currentNode instanceof Node) {
                output = output + (`( ${currentNode.value} ) -> `)
                console.log(`( ${currentNode.value} ) -> `)
            } else {
                output = output + (`${currentNode}`);
                break;
            };
            currentNode = currentNode.nextNode;
        }
        return output;
    }
}

let linkedList = new LinkedList()

// linkedList.append(1)
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
// linkedList.prepend(13)
// linkedList.prepend(14)

// linkedList.printValues()

// console.log(linkedList.at(4))

// linkedList.pop();
// linkedList.pop();
// linkedList.pop();
// linkedList.pop();
linkedList.printValues();
console.log(linkedList.find(1))
console.log(linkedList.toString())

