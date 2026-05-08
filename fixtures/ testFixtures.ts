import { loginPage } from "../Pages/loginPage";
import { signupPage } from "../Pages/signupPage";
import { expect, test as base, type Page } from "@playwright/test";

type fixture = {
  LoginPage: loginPage;
  SignupPage: signupPage;
};

export const test = base.extend<fixture>({
  LoginPage: async ({ page }, use) => {
    await use(new loginPage(page));
  },
  SignupPage: async ({ page }, use) => {
    await use(new signupPage(page));
  },
});

export { expect };
export type { Page };
