const { Given, When, Then } = require("cucumber");
const Navigation = require("../pages/Navigation");

Given("I am in the {string} page", async (pageName) => {
  await Navigation.tapMenuButton();
  await Navigation.tapPage(pageName);
});

Given(
  /^I (?:have the navigation panel opened|tap the menu button)$/,
  async () => {
    await Navigation.tapMenuButton();
  }
);

When("I access each navigation option", async (dataTable) => {
  // Extract the first column of the table
  const navigationOptions = dataTable.raw().map((row) => row[0]);

  await Navigation.softAssertNavigationOptions(navigationOptions);
});

When("I tap {string} page", async (pageName) => {
  await Navigation.tapPage(pageName);
});

Then("all pages should open successfully", async () => {
  await Navigation.verifyNavigationOptions();
});
