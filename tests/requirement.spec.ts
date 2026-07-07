import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save a Featured article, verify in My Saved News, and open full article', { tag: ["@e2e","@regression","@P0","@e2e-save-featured-open-from-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured News section', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Scroll — Featured card for fixture: Feature Article 1', async () => {
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

  await test.step('Assert visible — Saved item present: Feature Article 1', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveVisible();
  });

  await test.step('Click — Open saved item to full article', async () => {
    await savedNewsPage.clickSaveNews();
  });

  await test.step('Assert visible — Article detail title visible', async () => {
    await savedNewsPage.expectElementVisible();
  });

  await test.step('Assert contains — Detail page shows expected article title', async () => {
    await savedNewsPage.expectElementContainsText('Feature Article 1');
  });
});


test('Unsaving from My Saved News removes the item immediately', { tag: ["@e2e","@regression","@P0","@e2e-unsave-from-saved-list-removes-immediately"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA Home', async () => {
    await page.goto('https://commons-qa.util.ukg.com/');
  });

  await test.step('Assert visible — Latest News section', async () => {
    await ukgcommonsPage.expectLatestInternalNewsVisible();
  });

  await test.step('Scroll — Latest card for fixture: Latest Article 2', async () => {
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

  await test.step('Click — Unsave Latest Article 2 from Saved list', async () => {
    await savedNewsPage.clickBtnCardNewsUnsave();
  });

  await test.step('Wait — Wait for list to update', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveHidden();
  });

  await test.step('Assert count — Latest Article 2 removed from Saved list', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveCount(0);
  });
});


test('Bookmark icon is visible on news cards in Featured and Latest sections', { tag: ["@e2e","@regression","@P1","@e2e-visible-bookmark-icons-featured-latest"] }, async ({ page, ukgcommonsPage }) => {
  await test.step('Open — Open Commons QA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured News section visible', async () => {
    await ukgcommonsPage.expectFeaturedSectionVisible();
  });

  await test.step('Assert count greater than — Featured has at least 1 news card', async () => {
    await ukgcommonsPage.expectFeaturedNewsCardsCountGreaterThan(0);
  });

  await test.step('Scroll — First Featured news card', async () => {
    await ukgcommonsPage.scrollFirstFeaturedCardIntoView();
  });

  await test.step('Assert visible — Bookmark icon is present on first Featured card', async () => {
    await ukgcommonsPage.expectFirstFeaturedBookmarkVisible();
  });

  await test.step('Assert visible — Latest News section visible', async () => {
    await ukgcommonsPage.expectLatestSectionVisible();
  });

  await test.step('Assert count greater than — Latest has at least 1 news card', async () => {
    await ukgcommonsPage.expectLatestNewsCardsCountGreaterThan(0);
  });

  await test.step('Scroll — First Latest news card', async () => {
    await ukgcommonsPage.scrollFirstLatestCardIntoView();
  });

  await test.step('Assert visible — Bookmark icon is present on first Latest card', async () => {
    await ukgcommonsPage.expectFirstLatestBookmarkVisible();
  });
});
