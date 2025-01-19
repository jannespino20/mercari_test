const { Given, When, Then } = require("cucumber");
const Note = require("../pages/Note");
const HomeScreen = require("../pages/HomeScreen");
const Device = require("../pages/Device");
const { setGlobalVariable } = require("../support/globalVariables");

Given("I have {int} notes", { timeout: 20000 }, async (numberOfNotes) => {
  let noteTitles = [];

  for (let i = 1; i <= numberOfNotes; i++) {
    let noteTitle = "Note #" + i;

    await HomeScreen.tapAddButton();
    await Note.typeInTextField(noteTitle);
    await Device.clickOnBackButton();
    await HomeScreen.verifyNoteIsDisplayedCorrectly();
    noteTitles.push(noteTitle);
  }

  setGlobalVariable("noteTitles", noteTitles);
});

When("I type {string} in the text field", async (text) => {
  await Note.typeInTextField(text);
});
