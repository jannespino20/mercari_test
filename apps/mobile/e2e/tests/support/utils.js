const { device } = require("detox");

const globalTimeout = 30000;

class Utils {
  // Custom tap that waits for element visibility first
  async tapElement(element) {
    await waitFor(element).toBeVisible().withTimeout(globalTimeout);
    await element.tap();
  }
}

module.exports = new Utils();
