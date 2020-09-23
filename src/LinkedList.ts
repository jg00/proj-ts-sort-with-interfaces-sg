class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null; // Only property

  // Add Node
  add(data: number): void {
    const node = new Node(data); // Remember "next: null"

    if (!this.head) {
      this.head = node;
      return;
    }

    // Find last node in the chain starting the search at the head
    let tail = this.head;
    while (tail.next) {
      tail = tail.next; // Next Node along the chain
    }

    tail.next = node; // Setting the reference to our new Node
  }

  // Get Length
  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head; // Represents length=1
    // If there is a next node for this.head increment length.  Last node=null will be counted but will not run below.
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  // Return Node At Specific Index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds"); // Someone tried to access an item at an index out of range
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds"); // Someone tried to access an item at an index out of range
  }

  // Compare
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // Swap
  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error("List is empty");
    }

    // For simple implementation of swap we will just swap the Node value rather than swapping the actual Node.
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    let leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  // Print: void
  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next; // Next Node along the chain
    }
  }
}
