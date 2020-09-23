"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null; // Only property
    }
    // Add Node
    LinkedList.prototype.add = function (data) {
        var node = new Node(data); // Remember "next: null"
        if (!this.head) {
            this.head = node;
            return;
        }
        // Find last node in the chain starting the search at the head
        var tail = this.head;
        while (tail.next) {
            tail = tail.next; // Next Node along the chain
        }
        tail.next = node; // Setting the reference to our new Node
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        // Get Length
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head; // Represents length=1
            // If there is a next node for this.head increment length.  Last node=null will be counted but will not run below.
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    // Return Node At Specific Index
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of bounds"); // Someone tried to access an item at an index out of range
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds"); // Someone tried to access an item at an index out of range
    };
    // Compare
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    // Swap
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        // For simple implementation of swap we will just swap the Node value rather than swapping the actual Node.
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    // Print: void
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next; // Next Node along the chain
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
