class AuthPage {
  get loginBtn() {
    return $("~Login");
  }

  get inputEmail() {
    return $("~input-email");
  }

  get inputPassword() {
    return $("~input-password");
  }

  get loginSubmitBtn() {
    return $("~button-LOGIN");
  }

  get alertTitle() {
    return $(`//android.widget.TextView[@resource-id="android:id/alertTitle"]`);
  }

  get alertMessage() {
    return $(`//android.widget.TextView[@resource-id="android:id/message"]`);
  }

  get errorEmail() {
    return $(
      `//android.widget.TextView[@text="Please enter a valid email address"]`
    );
  }

  get errorPassword() {
    return $(
      `//android.widget.TextView[@text="Please enter at least 8 characters"]`
    );
  }

  get alertOkBtn() {
    return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.loginSubmitBtn.click();
  }

  async loginClearInput() {
    await this.alertOkBtn.click();
    await this.inputEmail.clearValue();
    await this.inputPassword.clearValue();
    await this.loginSubmitBtn.clearValue();
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }
}

export default new AuthPage();
