"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from "./Sorter";
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var Sorter_1 = require("./Sorter");
// Test 1 NumbersCollection now extends Sorter.  We no longer need an instance of Sorter nor can we instantiate it.
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log("Sorted numbers array:", numbersCollection.data);
// // Test 2 CharactersCollection
var characterCollection = new CharactersCollection_1.CharactersCollection("XaZcYbdd");
var sorter2 = new Sorter_1.Sorter(numbersCollection);
sorter2.sort();
console.log("Sorted string:", characterCollection.data);
// // Test 3 LinkedList
var linkedList = new LinkedList_1.LinkedList();
var sorter3 = new Sorter_1.Sorter(linkedList);
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
