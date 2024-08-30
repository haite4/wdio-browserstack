import swipePage from "../pageobjects/swipe.page.js";

describe("Swipe functionality", () => {
  it("Should display 'You found me!!!' after swiping down", async () => {
    await swipePage.clickSwipeBtn();
    await swipePage.swipeDownToTheEnd();
    const youFoundMeText = await swipePage.hiddenText.getText();
    await expect(youFoundMeText).toBe("You found me!!!");
  });
});
