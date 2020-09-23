// import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

// Test 1 NumbersCollection now extends Sorter.  We no longer need an instance of Sorter nor can we instantiate it.
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log("Sorted numbers array:", numbersCollection.data);

// // Test 2 CharactersCollection
const characterCollection = new CharactersCollection("XaZcYbdd");
const sorter2 = new Sorter(numbersCollection);
sorter2.sort();
console.log("Sorted string:", characterCollection.data);

// // Test 3 LinkedList
const linkedList = new LinkedList();
const sorter3 = new Sorter(linkedList);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
sorter3.sort();
console.log("Sorted linkedlist:");
linkedList.print();

/* 
  // 4 Ref only - Sorting LinkedList prior to refactoring Sorter.ts as abstract.
  // const linkedList = new LinkedList();
  // linkedList.add(500);
  // linkedList.add(-10);
  // linkedList.add(-3);
  // linkedList.add(4);

  // const sorter = new Sorter(linkedList);
  // sorter.sort();
  // linkedList.print();
*/
