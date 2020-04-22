export const mementoBase = {
  undo: function () {
    this.text = this.history.pop().getContent();
  },
  redo: function () {
    this.text = this.history.redo().getContent();
  },
};
