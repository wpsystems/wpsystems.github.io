export default async function () {
  // Trigger a resize so that Blockly knows that the backpack is gone
  window.dispatchEvent(new Event("resize"));
}
