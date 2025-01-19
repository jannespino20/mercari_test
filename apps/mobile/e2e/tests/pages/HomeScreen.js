const {
  setGlobalVariable,
  getGlobalVariable
} = require("../support/globalVariables");
const { testId, classes } = require("../support/identifiers");
const { tapElement, typeToElement } = require("../support/utils");

class HomeScreen {
  async tapAddButton() {
    await tapElement(element(by.id(testId.homeScreen.create)));
  }

  async verifyNoteIsDisplayedCorrectly() {
    await expect(
      element(by.text(getGlobalVariable("noteContent")))
    ).toBeVisible();
  }

  async tapCreatedNote() {
    await tapElement(element(by.id("note-item-0")));
  }

  async tapMoreOnNotePanel() {
    await tapElement(
      element(by.id(testId.homeScreen.notePanel.seeOptions)).atIndex(0)
    );
  }

  async tapOptionItem(optionitem) {
    let optionToTap;

    switch (optionitem.toLowerCase()) {
      case "move to trash":
        optionToTap = testId.homeScreen.notePanel.options.trash;
        break;
      case "favorite":
        optionToTap = testId.homeScreen.notePanel.options.favorite;
        break;
      case "pin":
        optionToTap = testId.homeScreen.notePanel.options.pin;
        break;
      case "lock":
        optionToTap = testId.homeScreen.notePanel.options.lock;
        break;
    }

    await tapElement(element(by.id(optionToTap)).atIndex(0));
  }

  async verifyNoteIsMarked(status) {
    let expectedStatus;

    switch (status.toLowerCase()) {
      case "favorite":
        expectedStatus = testId.homeScreen.notePanel.status.favorite;
        break;
      case "pinned":
        expectedStatus = testId.homeScreen.notePanel.status.pin;
        break;
      case "locked":
        expectedStatus = testId.homeScreen.notePanel.status.lock;
        break;
    }

    await expect(element(by.id(expectedStatus))).toBeVisible();
  }

  async fillUpPasswordField(password) {
    await setGlobalVariable("notePassword", password);

    await typeToElement(
      element(by.id(testId.homeScreen.lockModal.password)),
      password
    );
  }

  async fillUpConfirmPasswordField(confirmPassword) {
    await typeToElement(
      element(by.id(testId.homeScreen.lockModal.confirmPassword)),
      confirmPassword
    );
  }

  async tapConfirmLockButton() {
    await tapElement(element(by.id(testId.homeScreen.lockModal.confirm)));
  }

  async verifyNoteIsProtectedByPassword() {
    await expect(element(by.type(classes.note.editorTextField))).toExist();
  }
}

module.exports = new HomeScreen();
