import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save an article from Featured News and verify it appears in My Saved News', { tag: ["@functional","@regression","@P0","@save_article_from_featured_news"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open the Commons QA homepage', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Scroll — Scroll to Featured News section', async () => {
    await ukgcommonsPage.scrollFeaturedIntoView();
  });

  await test.step('Assert visible — Verify bookmark icon is visible on a Featured News article card', async () => {
    await expect(ukgcommonsPage.getInnerTextFeatured()).not.toBeNull();
  });

  await test.step('Click — Tap the bookmark icon on the first Featured News article', async () => {
    await ukgcommonsPage.clickSaveIcon();
  });

  await test.step('Assert visible — Verify the bookmark icon changes to filled (saved) state', async () => {
    await expect(ukgcommonsPage.getInnerTextNewsSavedSuccessfully()).not.toBeNull();
  });

  await test.step('Assert contains — Verify toast message ' +
    '\'News saved successfully!, View saved news under Profile\' appears', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyContainsText('News saved successfully!, View saved news under Profile');
  });

  await test.step('Click — Tap on Profile icon', async () => {
    await ukgcommonsPage.clickProfileIcon();
  });

  await test.step('Click — Tap on \'My saved news\' link under Profile', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Verify redirection to My Saved News page', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert contains — Verify the saved article appears in My Saved News list', async () => {
    await expect(savedNewsPage.getInnerTextFeatured()).not.toBeNull();
  });
});
