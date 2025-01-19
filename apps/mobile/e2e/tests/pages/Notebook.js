const { setGlobalVariable } = require("../support/globalVariables");
const { getGlobalVariable } = require("../support/globalVariables");
const { testId, accessibilityLabel } = require("../support/identifiers");
const { typeToElement, tapElement } = require("../support/utils");

class Notebook {
  async tapNewNotebookButton() {
    await tapElement(element(by.id(testId.notebook.create)));
  }

  async fillOutTitle(text) {
    setGlobalVariable("notebookTitle", text);
    await typeToElement(
      element(by.id(testId.notebook.newNotebookPanel.title)),
      text
    );
  }

  async fillOutDescription(text) {
    await typeToElement(
      element(by.id(testId.notebook.newNotebookPanel.description)),
      text
    );
  }

  async tapAddButton() {
    await tapElement(
      element(
        by.accessibilityLabel(
          accessibilityLabel.notebook.newNotebookPanel.confirm
        )
      )
    );
  }

  async selectAllNotes(numberOfNotes) {
    for (let i = 0; i < numberOfNotes; i++) {
      await tapElement(
        element(by.id(testId.notebook.noteCheckboxes)).atIndex(i)
      );
    }
  }

  async moveNotesButton() {
    await tapElement(
      element(
        by.accessibilityLabel(
          accessibilityLabel.notebook.newNotebookPanel.moveSelectedNotes
        )
      )
    );
  }

  async tapCreatedNotebook() {
    await tapElement(element(by.text(getGlobalVariable("notebookTitle"))));
  }

  async verifyNotesAreAddedToNotebook(numberOfNotes) {
    for (let i = 0; i < numberOfNotes; i++) {
      await expect(
        element(by.text(getGlobalVariable("noteTitles")[i]))
      ).toBeVisible();
    }
  }
}

module.exports = new Notebook();
