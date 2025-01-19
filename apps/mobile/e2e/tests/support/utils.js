const { device } = require("detox");
const { setGlobalVariable } = require("./globalVariables");
const { getGlobalVariable } = require("./globalVariables");

const globalTimeout = 30000;

class Utils {
  async saveAndCloseNote() {
    await device.pressBack();
    await device.pressBack();
  }

  // Custom tap that waits for element visibility first
  async tapElement(element) {
    await waitFor(element).toBeVisible().withTimeout(globalTimeout);
    await element.tap();
  }

  // Custom tap that waits for element visibility first
  async typeToElement(element, text) {
    await waitFor(element).toBeVisible().withTimeout(globalTimeout);
    await element.typeText(text, true);
  }

  async sleep(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  softAssert = {
    // Store the assertion results
    async store(actualValue, expectedValue) {
      let bool = false;

      if (actualValue === expectedValue) {
        bool = true;
      }

      // Get the existing results from the global variable, or initialize an empty array if undefined
      const results = (await getGlobalVariable("softAssertResults")) || [];

      // Add the new assertion result to the array
      results.push([
        "Actual Value: " + actualValue + " | Expected Value: " + expectedValue,
        bool
      ]);

      // Set the updated results back into the global variable
      setGlobalVariable("softAssertResults", results);
    },

    // Trigger to evaluate the results and fail the test if necessary
    async trigger() {
      const softAssertResults = await getGlobalVariable("softAssertResults");

      // Arrays to collect passed and failed assertions
      let passedAssertions = [];
      let failedAssertions = [];

      for (let result of softAssertResults) {
        const actualValue = result[0]; // "Actual Value: ... | Expected Value: ..."
        const isAsserted = result[1]; // true or false

        if (isAsserted) {
          passedAssertions.push(result[0]);
          console.log(`Soft assert passed: ${actualValue}`);
        } else {
          failedAssertions.push(result[0]);
        }
      }

      // If there are any failed assertions, throw an error with the failure messages
      if (failedAssertions.length > 0) {
        const failureMessages = failedAssertions.join("\n");
        console.log("Soft assertions failed: " + failureMessages);
        throw new Error("Soft assertions failed:\n" + failureMessages);
      } else {
        console.log("All soft assertions passed.");
      }
    }
  };
}

module.exports = new Utils();
