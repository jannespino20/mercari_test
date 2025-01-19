const { Given, When, Then } = require("cucumber");
const HomeScreen = require("../pages/HomeScreen");

Given("I create a new note from the home screen", async () => {
  await HomeScreen.tapAddButton();
});

When("I tap the ... icon from the created note", async () => {
  await HomeScreen.tapMoreOnNotePanel();
});

When("I tap the {string} button", async (optionItem) => {
  await HomeScreen.tapOptionItem(optionItem);
});

When("I enter {string} to the password field", async (password) => {
  await HomeScreen.fillUpPasswordField(password);
});

When(
  "I enter {string} to the confirm password field",
  async (confirmPassword) => {
    await HomeScreen.fillUpConfirmPasswordField(confirmPassword);
  }
);

When("I tap the Lock button", async () => {
  await HomeScreen.tapConfirmLockButton();
});

Then("the note should be displayed correctly in the home screen", async () => {
  await HomeScreen.verifyNoteIsDisplayedCorrectly();
});

Then("the note should be marked as {string}", async (status) => {
  await HomeScreen.verifyNoteIsMarked(status);
});

Then("the note should be protected by password", async () => {
  await HomeScreen.tapCreatedNote();
  await HomeScreen.verifyNoteIsProtectedByPassword();
});
