const { getGlobalVariable } = require("../support/globalVariables");
const { testId } = require("../support/identifiers");
const { tapElement } = require("../support/utils");

class Note {
  async verifyNoteInTrash() {
    await expect(
      element(by.text(getGlobalVariable("noteContent")))
    ).toBeVisible();
  }

  async tapEmptyTrash() {
    await tapElement(element(by.id(testId.trash.emptyTrash)));
  }

  async clearTrash() {
    await tapElement(element(by.id(testId.modal.confirm)));
  }

  async verifyTrashIsEmpty() {
    await expect(
      element(by.text(getGlobalVariable("noteContent")))
    ).not.toExist();
  }
}

module.exports = new Note();
