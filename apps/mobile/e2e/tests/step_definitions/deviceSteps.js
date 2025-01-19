const { Given, When, Then } = require("cucumber");
const Device = require("../pages/Device");

When("I go back to the home screen from the note editor", async () => {
  await Device.clickOnBackButton();
});
