const { getGlobalVariable } = require("../support/globalVariables");
const { testId } = require("../support/identifiers");
const {
  tapElement,
  softAssert,
  softAssertTrigger
} = require("../support/utils");

class Navigation {
  async tapMenuButton() {
    await tapElement(element(by.id(testId.navigation.menu)));
  }

  async tapPage(pageName) {
    let pageToTap;

    switch (pageName.toLowerCase()) {
      case "trash":
        pageToTap = testId.navigation.trash;
        break;
      case "notebooks":
        pageToTap = testId.navigation.notebooks;
        break;
      case "monographs":
        pageToTap = testId.navigation.monographs;
        break;
      case "favorites":
        pageToTap = testId.navigation.favorites;
        break;
      case "notes":
        pageToTap = testId.navigation.trash;
        break;
      case "reminders":
        pageToTap = testId.navigation.reminders;
        break;
      case "tags":
        pageToTap = testId.navigation.tags;
        break;
    }

    await tapElement(element(by.id(pageToTap)));
  }

  async softAssertNavigationOptions(navigationOptions) {
    for (let option of navigationOptions) {
      await this.tapPage(option);

      let elementText = await element(by.text(option)).getAttributes();
      await softAssert.store(elementText.text, option);

      // If last, don't click anymore to prevent failure
      if (option !== "Trash") {
        await this.tapMenuButton();
      }
    }
  }

  async verifyNavigationOptions(navigationOptions) {
    await softAssert.trigger();
  }
}

module.exports = new Navigation();
