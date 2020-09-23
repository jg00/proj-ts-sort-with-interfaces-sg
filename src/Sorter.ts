export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

/* 1 Ref only - Prior to applying inheritance
  export interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
  }

  export class Sorter {
    constructor(public collection: Sortable) {}

    sort(): void {
      const { length } = this.collection;

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection.compare(j, j + 1)) {
            this.collection.swap(j, j + 1);
          }
        }
      }
    }
  }
*/

/*
  2 Note on inner loop exclude the last item sorted in the previous iteration
  for (let j = 0; j < length - i - 1; j++) {
  
  The 'i' in length - i - 1 accounts for the fact that after a full iteration the rightmost element will be in the correct location therefore we do not need to re-sort again.
*/
