import { test, type Page, expect } from "../../fixtures/ testFixtures";
import { signupPage } from "../../Pages/signupPage";
import { userDataset } from "../../test-data/userdetails";

test("Register User", async ({ SignupPage, page }) => {
  await page.goto("/");
  await SignupPage.validateHomepage();
  await SignupPage.validateSignuplogin();
  await SignupPage.validateSignupDetails();
  await SignupPage.validateSignup(userDataset.name, userDataset.email);
  await page.waitForURL(/.*signup/);
  await SignupPage.validateAccountInformationFormDetails();
  await SignupPage.fillAccountInformationForm(userDataset);
  await expect(page).toHaveURL(/.*account_created/);
  await SignupPage.verifyAccountCreatedSuccessMessage();
  await expect(page).toHaveURL("/");
  await SignupPage.validateDeleteIcon();
  await SignupPage.verifyAccountDeletedMessage();
  await expect(page).toHaveURL("/");
});
