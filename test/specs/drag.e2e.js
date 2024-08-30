import dragPage from "../pageobjects/drag.page.js";

describe("Drag and drop testing", () => {
  it("Should drag and drop image", async () => {
    await dragPage.clickDragTab();
    await dragPage.performDragAndDropForAll();
    const congragulationsText = await dragPage.congragulationsText.getText();
    const congragulationsSubStr =
      await dragPage.congragulationSubstring.getText();
    await expect(congragulationsText).toBe("Congratulations");
    await expect(congragulationsSubStr).toBe(
      "You made it, click retry if you want to try it again."
    );
    await expect(dragPage.retryBtn).toBeDisplayed();
  });
});
