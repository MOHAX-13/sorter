class Sorter {
  constructor() {
    // your implementation
    this.arr=[];
    this.sorted = (a,b) => a-b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var sElem = [];
    indices.sort((a,b) => a-b);
    for (var i = 0; i < indices.length; i++){
      sElem.push(this.arr[indices[i]]);
    } 
    sElem.sort(this.sorted);
    for (var i = 0; i < indices.length; i++){
      this.arr[indices[i]] = sElem[i];
    }
    return this.arr;
  }

  setComparator(compareFunction) {
    // your implementation
    this.sorted=compareFunction;
  }
}

module.exports = Sorter;