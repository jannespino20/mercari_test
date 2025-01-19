const { Given, When, Then } = require("cucumber");
const Notebook = require("../pages/Notebook.js");

Given("I hello world", async () => {
  await HomeScreen.tapMoreOnNotePanel();
});

When("I tap the add new note button", async () => {
  await Notebook.tapNewNotebookButton();
});

When("I fill out the title with {string}", async (text) => {
  await Notebook.fillOutTitle(text);
});

When("I fill out the description with {string}", async (text) => {
  await Notebook.fillOutDescription(text);
});

When("I tap the Add button", async () => {
  await Notebook.tapAddButton();
});

When("I select all {int} notes", async (numberOfNotes) => {
  await Notebook.selectAllNotes(numberOfNotes);
});

When("I tap Move selected notes button", async () => {
  await Notebook.moveNotesButton();
});

When("I tap the created notebook", async () => {
  await Notebook.tapCreatedNotebook();
});

Then(
  "all {int} notes are added to the created notebook",
  async (numberOfNotes) => {
    await Notebook.verifyNotesAreAddedToNotebook(numberOfNotes);
  }
);
