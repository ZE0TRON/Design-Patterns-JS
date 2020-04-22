const _content = Symbol();
export class State {
  constructor(content) {
    this[_content] = content;
  }
  getContent() {
    return this[_content];
  }
}
