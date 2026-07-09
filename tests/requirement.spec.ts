import { test, expect } from '@support/fixtures';
import env from '@support/env';

  test('Save a specific article from card, verify Saved indicator, view it in My saved news, and open full article', { tag: ["@e2e","@regression","@P0","@save-article-from-card-and-open-from-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage, takeTheNextStepInYourDevelopmentAtUkgPage }) => {
    await test.step('Open — Open Commons QA home', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Assert visible — Featured or Latest section visible', async () => {
      await ukgcommonsPage.expectFeaturedNewsTitleVisible();
    });

    await test.step('Scroll — Scroll article card by title', async () => {
      await ukgcommonsPage.scrollTakeTheNextStepInYourDevIntoView();
    });

    await test.step('Assert visible — Bookmark icon visible on the article card', async () => {
      await ukgcommonsPage.expectSaveIconVisible();
    });

    await test.step('Click — Tap bookmark icon to save', async () => {
      await ukgcommonsPage.clickSaveIcon();
    });

    await test.step('Assert contains — Bookmark shows Saved state on card', async () => {
      await ukgcommonsPage.expectSaveIconContainsText('Saved');
    });

    await test.step('Click — Open profile menu', async () => {
      await ukgcommonsPage.clickUserProfile();
    });

    await test.step('Click — Go to My saved news', async () => {
      await ukgcommonsPage.clickMySavedNews();
    });

    await test.step('Assert visible — Saved news section', async () => {
      await savedNewsPage.expectMySavedNewsVisible();
    });

    await test.step('Assert visible — Saved item with expected title is listed', async () => {
      await savedNewsPage.expectTakeTheNextStepInYourDevLearningAndDevelopmentVisible();
    });

    await test.step('Click — Open the saved news item', async () => {
      await savedNewsPage.clickTakeTheNextStepLink();
    });

    await test.step('Assert visible — Article title on detail page', async () => {
      await takeTheNextStepInYourDevelopmentAtUkgPage.expectLearningAndDevelopmentVisible();
    });

    await test.step('Assert contains — Verify full article title matches', async () => {
      await takeTheNextStepInYourDevelopmentAtUkgPage.expectPageTitle();
    });
  });
