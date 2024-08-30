import swipePage from "../pageobjects/swipe.page.js";

describe("Swipe functionality", () => {
  it("Should swipe down and see 'You found me'", async () => {
    await swipePage.clickSwipeBtn();
    await swipePage.swipeDownToTheEnd();
    const youFoundMeText = await swipePage.hiddenText.getText();
    await expect(youFoundMeText).toBe("You found me!!!");
  });
});
