const { setGlobalVariable } = require("../support/globalVariables");
const { classes } = require("../support/identifiers");
const { typeToElement } = require("../support/utils");

class Note {
  async typeInTextField(text) {
    await setGlobalVariable("noteContent", text);
    await typeToElement(element(by.type(classes.note.editorTextField)), text);
  }
}

module.exports = new Note();
