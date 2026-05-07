import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class signupPage {
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

  constructor(private readonly page: Page) {}

  async validateSignupDetails() {
    await expect(this.page.locator(this.signupInputName)).toBeVisible();
    await expect(this.page.locator(this.signupInputePassword)).toBeVisible();
    await expect(this.page.locator(this.signupButton)).toBeVisible();
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


  async validateSignup(email: string, password: string) {
    
  }
}
