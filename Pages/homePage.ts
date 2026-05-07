import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class homePage {
  private readonly homeLink = "a[href='/']";

  private readonly productsLink = "a[href='/products']";

  private readonly cartLink = "a[href='/view_cart']";

  private readonly logoutLink = "a[href='/logout']";

  private readonly deleteAccountLink = "a[href='/delete_account']";

  private readonly testCasesLink = "a[href='/test_cases']";

  private readonly apiTestingLink = "a[href='/api_list']";

  private readonly videoTutorialsLink =
    "a[href='https://www.youtube.com/c/AutomationExercise']";

  private readonly contactUsLink = "a[href='/contact_us']";

  private readonly loggedInUserText = "li:has(.fa-user)";

  private readonly accountDeletedTitle = "[data-qa='account-deleted']";

  private readonly continueButton = "[data-qa='continue-button']";

  constructor(private readonly page: Page) {}

  async validateNavigation(
    elementLocator: string,
    expectedText: RegExp,
    expectedUrl?: string,
  ) {
    const element = this.page.locator(elementLocator);
    await expect(element).toBeVisible();
    await expect(element).toHaveText(expectedText);
    element.click();
    await this.page.waitForURL(expectedUrl!);
  }

  async validateHomeicon() {
    await this.validateNavigation(this.homeLink, /home/i, "/home/");
  }

  async validateProdcticon() {
    await this.validateNavigation(this.productsLink, /products/i, "/products");
  }

  async validateCarticon() {
    await this.validateNavigation(this.cartLink, /cart/i, "/view_cart");
  }

  async validateLogouticon() {
    await this.validateNavigation(this.logoutLink, /logout/i, "");
  }

  async validateDeleteIcon() {
    await this.validateNavigation(this.deleteAccountLink, /delete account/, "");
  }

  async validateTestcaseIcon() {
    await this.validateNavigation(
      this.testCasesLink,
      /test cases/i,
      "test_cases",
    );
  }

  async validateApiTestIcon() {
    await this.validateNavigation(
      this.apiTestingLink,
      /api testing/i,
      "api_list",
    );
  }

  async validateContactusIcon() {
    await this.validateNavigation(
      this.contactUsLink,
      /contact us/i,
      "contact_us",
    );
  }

  async validateLoggedInIcon() {
    await this.validateNavigation(this.loggedInUserText, /contact us/i);
  }

  async validateVideoIcon() {
    await this.validateNavigation(this.videoTutorialsLink, /video tutorials/i);
  }

  async verifyAccountDeletedMessage() {
    expect(this.page.locator(this.accountDeletedTitle)).toContainText(
      "Account Deleted!",
    );
    this.page.locator(this.continueButton).click();
    await this.page.waitForURL("https://automationexercise.com");
  }
}
