class SwipePage {
  get hiddenText() {
    return $(`//android.widget.TextView[@text="You found me!!!"]`);
  }

  get swipeBtn() {
    return $("~Swipe");
  }

  async clickSwipeBtn() {
    await this.swipeBtn.click();
  }

  async swipeDown() {
    const {width ,height } = await browser.getWindowRect();
    const startX = Math.floor(width * 0.5);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.2);

    await browser.touchPerform([
      {
        action: "press",
        options: { x: startX, y: startY },
      },
      {
        action: "wait",
        options: { ms: 500 },
      },
      {
        action: "moveTo",
        options: { x: startX, y: endY },
      },
      {
        action: "release",
      },
    ]);
  }

  async swipeDownToTheEnd() {
    let isAtTop = false;

    while (!isAtTop) {
      try {
        await this.swipeDown();
        isAtTop = await this.hiddenText.isDisplayed();
      } catch (err) {
        console.log("Still scrolling to the top...");
      }
    }
  }
}

export default new SwipePage();
