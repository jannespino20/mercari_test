const { testId } = require("../support/identifiers");
const { tapElement } = require("../support/utils");

class HomeScreen {
  async tapAddButton() {
    await tapElement(element(by.id(testId.homeScreen.create)));
  }
}

module.exports = new HomeScreen();
