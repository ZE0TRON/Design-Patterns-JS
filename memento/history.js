const _states = Symbol();
const _index = Symbol();
export class History {
  constructor() {
    this[_states] = new Array();
    this[_index] = -1;
  }
  push(state) {
    this[_states].splice(this[_index] + 1, this[_states].length - this[_index]);
    this[_states].push(state);
    this[_index] += 1;
  }
  pop() {
    if (this[_index] <= 0) {
      throw new Error("Nothing to undo");
    }
    this[_index] -= 1;

    return this[_states][this[_index]];
  }
  redo() {
    if (this[_index] >= this[_states].length - 1) {
      throw new Error("Nothing to redo");
    }
    this[_index] += 1;
    return this[_states][this[_index]];
  }
  // printHistory() {
  //   console.log("History : ");
  //   for (let i = 0; i < this[_index]; i++) {
  //     console.log(this[_states][i].getContent());
  //   }
  // }
}
