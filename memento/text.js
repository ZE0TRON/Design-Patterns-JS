import { History } from "./history.js";
import { State } from "./state.js";
import { mementoBase } from "./mementoBase.js";
class Text {
  constructor(text) {
    this.text = text;
    this.history = new History();
    this.history.push(new State(this.text));
  }

  changeText(text) {
    this.text = text;
    this.history.push(new State(this.text));
  }
}
Object.assign(Text.prototype, mementoBase);
export { Text };
