import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import type { UserDetails } from "../utils/types";
import { basePage } from "./basePage";

export class signupPage extends basePage {
  private readonly signupInputName = "[data-qa='signup-name']";
  private readonly signupInputePassword = "[data-qa='signup-name']";
  private readonly signupButton = "[data-qa='signup-button']";

  private readonly titleMrRadio = "#id_gender1";
  private readonly titleMrsRadio = "#id_gender2";

  private readonly nameInput = "[data-qa='name']";
  private readonly emailInput = "[data-qa='email']";
  private readonly passwordInput = "[data-qa='password']";

  private readonly daysSelect = "[data-qa='days']";
  private readonly monthsSelect = "[data-qa='months']";
  private readonly yearsSelect = "[data-qa='years']";

  private readonly newsletterCheckbox = "#newsletter";
  private readonly specialOffersCheckbox = "#optin";

  private readonly firstNameInput = "[data-qa='first_name']";
  private readonly lastNameInput = "[data-qa='last_name']";
  private readonly companyInput = "[data-qa='company']";

  private readonly addressInput = "[data-qa='address']";
  private readonly address2Input = "[data-qa='address2']";

  private readonly countrySelect = "[data-qa='country']";

  private readonly stateInput = "[data-qa='state']";
  private readonly cityInput = "[data-qa='city']";
  private readonly zipcodeInput = "[data-qa='zipcode']";

  private readonly mobileNumberInput = "[data-qa='mobile_number']";

  private readonly createAccountButton = "[data-qa='create-account']";

  // private readonly accountCreatedTitle = "[data-qa='account-created']";
  // private readonly continueButton = "[data-qa='continue-button']";

  // constructor(private readonly page: Page) {}
  constructor(page: Page) {
    super(page);
  }

  async validateSignupDetails() {
    await expect(this.page.locator(this.signupInputName)).toBeVisible();
    await expect(this.page.locator(this.signupInputePassword)).toBeVisible();
    await expect(this.page.locator(this.signupButton)).toBeVisible();
  }

  async validateSignup(name: string, email: string) {
    await this.page.locator(this.signupInputName).fill(name);
    await this.page.locator(this.signupInputePassword).fill(email);
    await this.page.locator(this.signupButton).click();
  }

  async validateAccountInformationFormDetails() {
    const elements = [
      this.titleMrRadio,
      this.titleMrsRadio,
      this.nameInput,
      this.emailInput,
      this.passwordInput,
      this.daysSelect,
      this.monthsSelect,
      this.yearsSelect,
      this.newsletterCheckbox,
      this.specialOffersCheckbox,
      this.firstNameInput,
      this.lastNameInput,
      this.companyInput,
      this.addressInput,
      this.address2Input,
      this.countrySelect,
      this.stateInput,
      this.cityInput,
      this.zipcodeInput,
      this.mobileNumberInput,
      this.createAccountButton,
    ];

    for (const selector of elements) {
      await expect(this.page.locator(selector)).toBeVisible();
    }
  }

  async fillAccountInformationForm(user: UserDetails) {
    if (user.title === "mr") {
      await this.page.locator(this.titleMrRadio).check();
    }
    if (user.title === "mrs") {
      await this.page.locator(this.titleMrsRadio).check();
    }

    await expect(this.page.locator(this.nameInput)).toContainText(user.name);
    const email = this.page.locator(this.emailInput);
    await expect(email).toContainText(user.email);
    await expect(email).toBeDisabled();
    await this.page.locator(this.passwordInput).fill(user.password);

    if (user.dob) {
      await this.page.locator(this.daysSelect).selectOption(user.dob.day);
      await this.page.locator(this.monthsSelect).selectOption(user.dob.month);
      await this.page.locator(this.yearsSelect).selectOption(user.dob.year);
    }

    if (user.newsletter) {
      await this.page.locator(this.newsletterCheckbox).check();
    }

    if (user.specialOffers) {
      await this.page.locator(this.specialOffersCheckbox).check();
    }

    await this.page.locator(this.firstNameInput).fill(user.firstName);
    await this.page.locator(this.lastNameInput).fill(user.lastName);

    if (user.company) {
      await this.page.locator(this.companyInput).fill(user.company);
    }
    await this.page.locator(this.addressInput).fill(user.address);

    if (user.address2) {
      await this.page.locator(this.address2Input).fill(user.address2);
    }

    await this.page.locator(this.countrySelect).selectOption(user.country);
    await this.page.locator(this.stateInput).fill(user.state);
    await this.page.locator(this.cityInput).fill(user.city);
    await this.page.locator(this.zipcodeInput).fill(user.zipcode);

    await this.page.locator(this.mobileNumberInput).fill(user.mobileNumber);

    await this.page.locator(this.createAccountButton).click();
    await this.page.waitForURL(/.*account_created/);
  }
}
