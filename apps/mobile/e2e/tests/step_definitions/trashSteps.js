const { Given, When, Then } = require("cucumber");
const Trash = require("../pages/Trash");

Then("the note I made should be in trash", async () => {
  await Trash.verifyNoteInTrash();
});

Then("it should be deleted when I empty the trash", async () => {
  await Trash.tapEmptyTrash();
  await Trash.clearTrash();
  await Trash.verifyTrashIsEmpty();
});
