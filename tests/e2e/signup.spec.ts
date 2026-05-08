import { test, type Page, expect } from "../../fixtures/ testFixtures";
import { signupPage } from "../../Pages/signupPage";

test("Users should be able to login and access the appointment page", async ({
  SignupPage,
  page,
}) => {
  await page.goto("https://automationexercise.com");
  await SignupPage.create();
});
