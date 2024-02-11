class List {
  constructor() {
    this.numbers = [];
    this.size = 0;
  }

  add(el) {
    this.numbers.push(el);
    this.size++;
    this.numbers.sort((a, b) => a - b);
  }

  remove(index) {
    if (index >= 0 && index < this.numbers.length) {
      this.numbers.splice(index, 1);
      this.size--;
    } else {
      throw new Error("Invalid index");
    }
  }

  get(index) {
    if (index >= 0 && index < this.numbers.length) {
      return this.numbers[index];
    } else {
      throw new Error("Invalid index");
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
