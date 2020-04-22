import { Editor } from "./editor.js";

const printState = (editor) => {
  console.log(
    "Editor Text is :",
    editor.getText("textField"),
    "\nEditor Title is",
    editor.getText("title")
  );
};

const editor = new Editor("initial text", "Initial title");

printState(editor);
editor.changeText("Hello");
printState(editor);
editor.changeText("World");
printState(editor);
editor.changeTitle("Hiii");
printState(editor);
editor.undo("textField");
printState(editor);
editor.undo("textField");
printState(editor);
editor.redo("textField");
printState(editor);
