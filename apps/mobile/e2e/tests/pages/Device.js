const { saveAndCloseNote } = require("../support/utils");

class Device {
  async clickOnBackButton() {
    await saveAndCloseNote();
  }
}

module.exports = new Device();
