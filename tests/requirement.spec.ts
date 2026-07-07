import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save a Featured article, verify in My Saved News, and open full article', { tag: ["@e2e","@regression","@P0","@e2e-save-featured-open-from-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Home Announcements section', async () => {
    await ukgcommonsPage.expectAnnouncementsVisible();
  });

  await test.step('Scroll — Featured section into view', async () => {
    await ukgcommonsPage.scrollFeaturedIntoView();
  });

  await test.step('Click — Tap bookmark on Feature Article 1', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Filled bookmark indicator appears', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickDrakeTiwaryUkgCom();
  });

  await test.step('Click — Navigate to My saved news', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Saved News list visible', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Saved item present in list', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveVisible();
  });

  await test.step('Click — Open a saved item into a new tab', async () => {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      savedNewsPage.clickElement()
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    await expect(newPage).toHaveTitle(/.+/);
  });
});

test('Unsaving from My Saved News removes the item immediately', { tag: ["@e2e","@regression","@P0","@e2e-unsave-from-saved-list-removes-immediately"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Home Announcements section', async () => {
    await ukgcommonsPage.expectAnnouncementsVisible();
  });

  await test.step('Click — Activate Latest Internal News tab', async () => {
    await ukgcommonsPage.clickLatestInternalNews();
  });

  await test.step('Assert visible — Latest Internal News section', async () => {
    await ukgcommonsPage.expectLatestInternalNewsVisible();
  });

  await test.step('Scroll — Latest Internal News into view', async () => {
    await ukgcommonsPage.scrollLatestInternalNewsIntoView();
  });

  await test.step('Click — Save Latest Article 2', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Filled bookmark indicator appears on Latest Article 2', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickDrakeTiwaryUkgCom();
  });

  await test.step('Click — Navigate to My saved news', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Saved News list visible', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Verify Latest Article 2 is listed', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveVisible();
  });

  let beforeCount = 0;
  await test.step('Measure — Count saved items before unsaving', async () => {
    beforeCount = await page.locator('.LatestNewsWidget_shareBtn__63Djr[aria-label="Unsave news"]').count();
    expect(beforeCount).toBeGreaterThan(0);
  });

  await test.step('Click — Unsave Latest Article 2 from Saved list', async () => {
    await savedNewsPage.clickBtnCardNewsUnsave();
  });

  await test.step('Wait — Wait for list to update with one fewer item', async () => {
    await expect(page.locator('.LatestNewsWidget_shareBtn__63Djr[aria-label="Unsave news"]')).toHaveCount(beforeCount - 1);
  });
});

test('Bookmark icon is visible on news cards in Featured and Latest sections', { tag: ["@e2e","@regression","@P1","@e2e-visible-bookmark-icons-featured-latest"] }, async ({ page, ukgcommonsPage }) => {
  await test.step('Open — Open Commons QA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Home Announcements section', async () => {
    await ukgcommonsPage.expectAnnouncementsVisible();
  });

  await test.step('Scroll — Featured section into view', async () => {
    await ukgcommonsPage.scrollFeaturedIntoView();
  });

  await test.step('Assert visible — Bookmark icon is present on a Featured card', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });

  await test.step('Click — Activate Latest Internal News tab', async () => {
    await ukgcommonsPage.clickLatestInternalNews();
  });

  await test.step('Assert visible — Latest Internal News section visible', async () => {
    await ukgcommonsPage.expectLatestInternalNewsVisible();
  });

  await test.step('Scroll — First Latest news card', async () => {
    await ukgcommonsPage.scrollLatestInternalNewsIntoView();
  });

  await test.step('Assert visible — Bookmark icon is present on a Latest card', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });
});
