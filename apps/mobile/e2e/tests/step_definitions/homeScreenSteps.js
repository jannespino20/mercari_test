const { Given, When, Then } = require("cucumber");
const HomeScreen = require("../pages/HomeScreen");

Given("I create a new note from the home screen", async () => {
  await HomeScreen.tapAddButton();
});
