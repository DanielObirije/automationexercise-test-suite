import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class loginPage {
  private readonly loginInputEmail = "[data-qa='login-email']";
  private readonly loginInputPassword = "[data-qa='login-password']";
  private readonly loginButton = "[data-qa='login-button']";

  constructor(private readonly page: Page) {}

  async validateLoginDetails() {
    await expect(this.page.locator(this.loginInputEmail)).toBeVisible();
    await expect(this.page.locator(this.loginInputPassword)).toBeVisible();
    await expect(this.page.locator(this.loginButton)).toBeVisible();
  }

  async validatelogin(email: string, password: string) {
    await this.page.locator(this.loginInputEmail).fill(email);
    await this.page.locator(this.loginInputPassword).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
