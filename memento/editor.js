import { Title } from "./title.js";
import { TextField } from "./textField.js";
const _textField = Symbol();
const _title = Symbol();

const pubToPriv = {
  textField: _textField,
  title: _title,
};

export class Editor {
  constructor(text, title) {
    this[_textField] = new TextField(text);
    this[_title] = new Title(title);
  }
  // Used the approach of keeping history for each component
  changeText = (text) => this[_textField].changeText(text);
  changeTitle = (text) => this[_title].changeText(text);
  /**
   * Undos the last operation on the given field
   *
   * @param {*} field  The field need's to be undone
   * @memberof Editor
   */
  undo(field) {
    if (typeof pubToPriv[field] === "undefined") {
      throw new Error("Editor has no such field");
    }
    this[pubToPriv[field]].undo();
  }
  /**
   * Redos the  last undone operation on the field
   *
   * @param {*} field The field need's to be redone
   * @memberof Editor
   */
  redo(field) {
    if (typeof pubToPriv[field] === "undefined") {
      throw new Error("Editor has no such field");
    }
    this[pubToPriv[field]].redo();
  }
  getText(field) {
    if (typeof pubToPriv[field] === "undefined") {
      throw new Error("Editor has no such field");
    }
    return this[pubToPriv[field]].text;
  }
}
