import { test as base, expect } from "@playwright/test";
import { SavedNewsPage } from "../pageobjects/SavedNewsPage";
import { TakeTheNextStepInYourDevelopmentAtUkgPage } from "../pageobjects/TakeTheNextStepInYourDevelopmentAtUkgPage";
import { UkgcommonsPage } from "../pageobjects/UkgcommonsPage";

type AppFixtures = {
  savedNewsPage: SavedNewsPage;
  takeTheNextStepInYourDevelopmentAtUkgPage: TakeTheNextStepInYourDevelopmentAtUkgPage;
  ukgcommonsPage: UkgcommonsPage;
};

export const test = base.extend<AppFixtures>({
  savedNewsPage: async ({ page }, use) => {
    await use(new SavedNewsPage(page));
  },
  takeTheNextStepInYourDevelopmentAtUkgPage: async ({ page }, use) => {
    await use(new TakeTheNextStepInYourDevelopmentAtUkgPage(page));
  },
  ukgcommonsPage: async ({ page }, use) => {
    await use(new UkgcommonsPage(page));
  },
});

export { expect };
