class DragPage {
  get draggableImages() {
    return [
      this.topLeftImage,
      this.topCenterImage,
      this.topRightImage,
      this.middleLeftImage,
      this.middleCenterImage,
      this.middleRightImage,
      this.bottomLeftImage,
      this.bottomCenterImage,
      this.bottomRightImage,
    ];
  }

  get droppableAreas() {
    return [
      this.topLeftArea,
      this.topCenterArea,
      this.topRightArea,
      this.middleLeftArea,
      this.middleCenterArea,
      this.middleRightArea,
      this.bottomLeftArea,
      this.bottomCenterArea,
      this.bottomRightArea,
    ];
  }

  get tabForDragging() {
    return $('//android.widget.TextView[@text="󰇛"]');
  }

  get topLeftImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView'
    );
  }

  get topCenterImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView'
    );
  }

  get topRightImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView'
    );
  }

  get middleLeftImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView'
    );
  }

  get middleCenterImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView'
    );
  }

  get middleRightImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView'
    );
  }

  get bottomLeftImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView'
    );
  }

  get bottomCenterImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView'
    );
  }

  get bottomRightImage() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView'
    );
  }

  get topLeftArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup'
    );
  }

  get topCenterArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup'
    );
  }

  get topRightArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup'
    );
  }

  get middleLeftArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup'
    );
  }

  get middleCenterArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup'
    );
  }

  get middleRightArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup'
    );
  }

  get bottomLeftArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup'
    );
  }

  get bottomCenterArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup'
    );
  }

  get bottomRightArea() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup'
    );
  }

  get congragulationsText() {
    return $(`//android.widget.TextView[@text="Congratulations"]`);
  }

  get congragulationSubstring() {
    return $(
      `//android.widget.TextView[@text="You made it, click retry if you want to try it again."]`
    );
  }

  get retryBtn() {
    return $("~button-Retry");
  }

  async clickDragTab() {
    await this.tabForDragging.click();
  }

  async performDragAndDropForAll() {
    let results = [];

    for (let i = 0; i < this.draggableImages.length; i++) {
      const sourceImage = await this.draggableImages[i];
      const targetArea = await this.droppableAreas[i];

      const sourceLocation = await sourceImage.getLocation();
      const targetLocation = await targetArea.getLocation();

      await browser.touchPerform([
        {
          action: "press",
          options: { x: sourceLocation.x + 50, y: sourceLocation.y + 50 },
        },
        {
          action: "wait",
          options: { ms: 500 },
        },
        {
          action: "moveTo",
          options: { x: targetLocation.x + 50, y: targetLocation.y + 50 },
        },
        {
          action: "release",
        },
      ]);
    }

    return results;
  }
}

export default new DragPage();
