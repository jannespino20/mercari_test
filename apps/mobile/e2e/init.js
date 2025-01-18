require("@babel/register")({
  ignore: [/node_modules/],
  extensions: [".js", ".jsx", ".ts", ".tsx", ".feature"]
});

const detox = require("detox/internals");

const { BeforeAll, AfterAll, Before } = require("cucumber");

// Initialize Detox before all scenarios
BeforeAll({ timeout: 120 * 1000 }, async () => {
  await detox.init();
});

// Restart and reset the app state before each scenario
Before({ timeout: 120 * 1000 }, async () => {
  // Terminate the app to clear its state
  await device.launchApp({ newInstance: true, delete: true }); // Deletes app data
});

// Clean up Detox after all scenarios
AfterAll(async () => {
  await detox.cleanup();
});
