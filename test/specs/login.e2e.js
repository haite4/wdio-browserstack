import authPage from "../pageobjects/auth.page.js";
import { faker } from "@faker-js/faker";

describe("Login functionality", () => {
  beforeEach(async () => {
    await authPage.loginBtn.click();
  });

  it("Verify elements visibility on the login page", async () => {
    await expect(authPage.inputEmail).toBeDisplayed();
    await expect(authPage.inputPassword).toBeDisplayed();
    await expect(authPage.loginSubmitBtn.toBeDisplayed());
  });

  it("Should log in successfully with valid email and password", async () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    await authPage.login(email, password);
    const alertTitleText = await authPage.alertTitle.getText();
    const alertMsgText = await authPage.alertMessage.getText();
    await expect(alertTitleText).toBe("Success");
    await expect(alertMsgText).toBe("You are logged in!");
    await authPage.loginClearInput();
  });

  it("Should show error messages for invalid email and password", async () => {
    const invalidEmail = faker.internet.userName() + "@gmail..com";
    const invalidPassword = faker.internet.password({ length: 7 });
    await authPage.login(invalidEmail, invalidPassword);
    const errorEmailText = await authPage.errorEmail.getText();
    const errorPasswordText = await authPage.errorPassword.getText();
    await expect(errorEmailText).toBe("Please enter a valid email address");
    await expect(errorPasswordText).toBe("Please enter at least 8 characters");
  });
});
