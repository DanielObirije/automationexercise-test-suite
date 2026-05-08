import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { basePage } from "./basePage";

export class homePage extends basePage {
  constructor(page: Page) {
    super(page);
  }
}
