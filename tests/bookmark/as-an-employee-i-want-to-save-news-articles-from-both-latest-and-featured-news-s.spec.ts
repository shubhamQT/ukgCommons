import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save article from Featured, verify toast, saved icon, appears in My Saved News and opens full article', { tag: ["@functional","@regression","@P0","@save-from-featured-and-open-article"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA homepage', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('SSO — Continue with SSO if prompted', async () => {
    try { await page.getByRole('button', { name: /Continue with SSO/i }).click({ timeout: 5000 }); } catch {}
    try { await page.getByRole('link', { name: /Continue with SSO/i }).click({ timeout: 5000 }); } catch {}
  });
  
  await test.step('Assert visible — Announcements section', async () => {
    await ukgcommonsPage.expectAnnouncementsVisible();
  });

  await test.step('Scroll — Scroll to Save action in news card', async () => {
    await ukgcommonsPage.scrollSaveNewsIntoView();
  });

  await test.step('Click — Tap bookmark icon on Featured article', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Toast visible after saving', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Assert contains — Toast text confirms save', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyContainsText('News saved successfully');
  });

  await test.step('Assert visible — Featured article shows filled bookmark state', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickDrake();
  });

  await test.step('Click — Navigate to My saved news', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — My Saved News page loaded', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Saved item for featured-001 visible at top (reverse-chronological likely)', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveVisible();
  });

  await test.step('Click — Open the saved item to full article', async () => {
    await savedNewsPage.clickHowTheNewExperience();
  });

  await test.step('Assert visible — Full article content (SharePoint) visible', async () => {
    await ukgcommonsPage.expectSharePointVisible();
  });
});

test('Unsaving from My Saved News removes the item immediately from the list and updates card state', { tag: ["@functional","@regression","@P0","@unsave-from-saved-list-removes-immediately"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA homepage', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('SSO — Continue with SSO if prompted', async () => {
    try { await page.getByRole('button', { name: /Continue with SSO/i }).click({ timeout: 5000 }); } catch {}
    try { await page.getByRole('link', { name: /Continue with SSO/i }).click({ timeout: 5000 }); } catch {}
  });

  await test.step('Assert visible — Announcements section visible', async () => {
    await ukgcommonsPage.expectAnnouncementsVisible();
  });

  await test.step('Click — Save featured-001 (ensure present in Saved)', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickDrake();
  });

  await test.step('Click — Go to My Saved News', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Saved item visible', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveVisible();
  });

  await test.step('Click — Unsave the item from Saved list', async () => {
    await savedNewsPage.clickBtnCardNewsUnsave();
  });

  await test.step('Assert hidden — Item removed immediately from the Saved list', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveHidden();
  });

  await test.step('Open — Return to homepage', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Announcements section visible', async () => {
    await ukgcommonsPage.expectAnnouncementsVisible();
  });

  await test.step('Assert visible — Featured article card shows unfilled bookmark state', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });
});
