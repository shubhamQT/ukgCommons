import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save a Featured news article, verify in My saved news, open detail, then unsave from Saved list', { tag: ["@e2e","@regression","@P0","@save-featured-to-saved-open-detail-unsave-in-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage, takeTheNextStepInYourDevelopmentAtUkgPage }) => {
  await test.step("Before — Featured article 'Automation Featured Article 1' is visible on Home and is not saved for the test user", async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Open — Open Commons Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured News section', async () => {
    await ukgcommonsPage.expectFeaturedNewsTitleVisible();
  });

  await test.step('Assert count greater than — Featured news cards present', async () => {
    await ukgcommonsPage.expectFeaturedNewsTitleCount(1);
  });

  await test.step("Click — Bookmark icon on 'Automation Featured Article 1' card", async () => {
    await ukgcommonsPage.clickSaveIcon();
  });

  await test.step('Assert contains — Saved indicator on the same Featured card', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step("Click — Select 'My saved news' from profile menu", async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Saved News list', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step("Assert visible — Saved item 'Automation Featured Article 1' present in list", async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevLearningAndDevelopmentVisible();
  });

  await test.step('Click — Open the saved item to article detail', async () => {
    await savedNewsPage.clickTakeTheNextStepLink();
  });

  await test.step('Assert visible — Article detail title', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectHomeVisible();
  });

  await test.step('Assert contains — Verify article detail shows correct title', async () => {
    const title = await takeTheNextStepInYourDevelopmentAtUkgPage.getPageTitle();
    await expect(title).toContain('Automation Featured Article 1');
  });

  await test.step('Navigate back — Return to Saved News list', async () => {
    await page.goBack();
  });

  await test.step('Assert visible — Saved News list visible again', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Click — Unsave the item from Saved list', async () => {
    await savedNewsPage.clickTakeTheNextStepInYourDevUnsaveNews();
  });

  await test.step('Assert hidden — Item removed from Saved list immediately', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevUnsaveNewsHidden();
  });
});
