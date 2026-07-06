import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save a Featured News article and verify it appears in My saved news', { tag: ["@functional","@regression","@P0","@save-featured-article-and-view-in-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Wait for home content', async () => {
    await ukgcommonsPage.expectAnnouncementsVisible();
  });

  await test.step('Scroll — Scroll to Featured News section', async () => {
    await ukgcommonsPage.scrollFeaturedIntoView();
  });

  await test.step('Assert visible — Verify specific Featured article card is visible', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Assert visible — Verify bookmark icon is visible on the card', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });

  await test.step('Click — Tap bookmark icon to save Featured article', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Wait for success toast', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Assert contains — Verify success toast message', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyContainsText('News saved successfully!, View saved news under Profile');
  });

  await test.step('Assert visible — Verify filled bookmark icon indicates saved', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });

  await test.step('Click — Open Profile menu', async () => {
    await ukgcommonsPage.clickDrakeTiwaryUkgCom();
  });

  await test.step('Click — Navigate to My saved news from Profile', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Wait for My saved news list', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Verify saved item appears in list', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveVisible();
  });

  await test.step('Click — Cleanup: Unsave the article from saved list', async () => {
    await savedNewsPage.clickBtnCardNewsUnsave();
  });

  await test.step('Assert hidden — Wait for item to be removed from saved list', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveHidden();
  });
});

  test('Unsave from Saved News list removes the item immediately', { tag: ["@functional","@regression","@P0","@unsave-from-saved-list-removes-item-immediately"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
    await test.step('Open — Open Commons QA home', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Assert visible — Wait for home content', async () => {
      await ukgcommonsPage.expectFeaturedVisible();
    });

    await test.step('Scroll — Scroll to Featured News', async () => {
      await ukgcommonsPage.scrollFeaturedIntoView();
    });

    await test.step('Click — Save \'QA Featured Article To Remove\'', async () => {
      await ukgcommonsPage.clickSaveNews();
    });

    await test.step('Click — Open Profile menu', async () => {
      await ukgcommonsPage.clickDrakeTiwaryUkgCom();
    });

    await test.step('Click — Go to My saved news', async () => {
      await ukgcommonsPage.clickMySavedNews();
    });

    await test.step('Assert visible — Wait for Saved News list', async () => {
      await savedNewsPage.expectMySavedNewsVisible();
    });

    await test.step('Assert visible — Verify the saved item is present', async () => {
      await savedNewsPage.expectBtnCardNewsUnsaveVisible();
    });

    await test.step('Click — Tap bookmark to un-save within saved list', async () => {
      await savedNewsPage.clickBtnCardNewsUnsave();
    });

    await test.step('Assert hidden — Confirm item removed immediately from list', async () => {
      await savedNewsPage.expectBtnCardNewsUnsaveHidden();
    });
  });
