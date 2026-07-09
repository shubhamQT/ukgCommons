import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class SavedNewsPage {
  private static readonly L = {
    mySavedNews: { strategy: 'role' as const, value: 'My saved news', role: 'button', actionKind: 'button' as const },
    takeTheNextStepInYourDevLearningAndDevelopment: { strategy: 'role' as const, value: 'Learning and Development', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    takeTheNextStepInYourDevUnsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepLink: { strategy: 'role' as const, value: 'Take the next step in your development at UKG', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    takeTheNextStepInYourDevComment: { strategy: 'altText' as const, value: 'comment', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'generic' as const },
    takeTheNextStepInYourDevShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepInYourDevUkgHomeQa: { strategy: 'role' as const, value: 'UKG Home QA', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    takeTheNextStepInYourDevAi: { strategy: 'role' as const, value: 'AI', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    aiMedia: { strategy: 'css' as const, value: '[class*="FeaturedNews_desktopCardMedia"]', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'generic' as const },
    aiDrakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    takeTheNextStepInYourDevStacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'text' as const },
    allEmployeeTownHallJune: { strategy: 'altText' as const, value: 'All-Employee Town Hall - June 2026', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'generic' as const },
    allEmployeeTownHallJuneAshleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'text' as const },
    allEmployeeTownHallJuneSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'button' as const },
    celebratingTheStrengthOfTh: { strategy: 'altText' as const, value: 'Celebrating the strength of the UKG Ready partner network', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'generic' as const },
    celebratingTheStrengthOfTitle: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'text' as const },
    celebratingTheStrengthOfThChristopherKiklas: { strategy: 'text' as const, value: 'Christopher Kiklas', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'text' as const },
    latestNews: { strategy: 'role' as const, value: 'Latest news', role: 'heading', level: 3, actionKind: 'text' as const },
    noNews: { strategy: 'altText' as const, value: 'no-news', actionKind: 'generic' as const },
    noSavedNews: { strategy: 'text' as const, value: 'No saved news', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async doubleClickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async clickTakeTheNextStepLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDevComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async expectTakeTheNextStepInYourDevCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async doubleClickTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async expectTakeTheNextStepInYourDevShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDevUkgHomeQa(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDevAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async expectTakeTheNextStepInYourDevAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs, soft);
  }

  async clickSwitchToPreviousNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async doubleClickSwitchToPreviousNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async clickAiMedia(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async expectAiMediaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs, soft);
  }

  async getInnerTextAiDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStepInYourDevStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs, soft);
  }

  async clickAllEmployeeTownHallJune(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs, soft);
  }

  async getInnerTextAllEmployeeTownHallJuneAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs, soft);
  }

  async clickAllEmployeeTownHallJuneSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async doubleClickAllEmployeeTownHallJuneSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async expectAllEmployeeTownHallJuneSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs, soft);
  }

  async clickCelebratingTheStrengthOfTh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOfTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOfThChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs, soft);
  }

  async getInnerTextLatestNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'UKG Commons', timeoutMs);
  }

  async clickNoNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs, soft);
  }

  async getInnerTextNoSavedNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs, soft);
  }


  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.mySavedNews), expected, timeoutMs);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.mySavedNews), substring, timeoutMs);
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.mySavedNews), count, timeoutMs);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async longPressTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevLearningAndDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async longPressTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async doubleClickTakeTheNextStepLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async longPressTakeTheNextStepLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), expected, timeoutMs);
  }

  async expectTakeTheNextStepLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), substring, timeoutMs);
  }

  async expectTakeTheNextStepLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), value, timeoutMs);
  }

  async expectTakeTheNextStepLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), count, timeoutMs);
  }

  async scrollTakeTheNextStepLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async doubleClickTakeTheNextStepInYourDevComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async longPressTakeTheNextStepInYourDevComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async expectTakeTheNextStepInYourDevCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async longPressTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async expectTakeTheNextStepInYourDevShareNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async doubleClickTakeTheNextStepInYourDevUkgHomeQa(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async longPressTakeTheNextStepInYourDevUkgHomeQa(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevUkgHomeQaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async doubleClickTakeTheNextStepInYourDevAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async longPressTakeTheNextStepInYourDevAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async expectTakeTheNextStepInYourDevAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async longPressSwitchToPreviousNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), expected, timeoutMs);
  }

  async expectSwitchToPreviousNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), substring, timeoutMs);
  }

  async expectSwitchToPreviousNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), value, timeoutMs);
  }

  async expectSwitchToPreviousNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), count, timeoutMs);
  }

  async scrollSwitchToPreviousNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async doubleClickAiMedia(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async longPressAiMedia(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async expectAiMediaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiMedia), expected, timeoutMs);
  }

  async expectAiMediaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiMedia), substring, timeoutMs);
  }

  async expectAiMediaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiMedia), value, timeoutMs);
  }

  async expectAiMediaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiMedia), count, timeoutMs);
  }

  async scrollAiMediaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async clickAiDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async doubleClickAiDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async longPressAiDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), expected, timeoutMs);
  }

  async expectAiDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), substring, timeoutMs);
  }

  async expectAiDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), value, timeoutMs);
  }

  async expectAiDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), count, timeoutMs);
  }

  async scrollAiDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async clickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async doubleClickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async longPressTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async doubleClickAllEmployeeTownHallJune(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async longPressAllEmployeeTownHallJune(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallJuneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async clickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async doubleClickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async longPressAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallJuneAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async longPressAllEmployeeTownHallJuneSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async expectAllEmployeeTownHallJuneSaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallJuneSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async doubleClickCelebratingTheStrengthOfTh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async longPressCelebratingTheStrengthOfTh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfThIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async clickCelebratingTheStrengthOfTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async doubleClickCelebratingTheStrengthOfTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async longPressCelebratingTheStrengthOfTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async clickCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async doubleClickCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async longPressCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfThChristopherKiklasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async clickLatestNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async doubleClickLatestNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async longPressLatestNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.latestNews), expected, timeoutMs);
  }

  async expectLatestNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.latestNews), substring, timeoutMs);
  }

  async expectLatestNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.latestNews), value, timeoutMs);
  }

  async expectLatestNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.latestNews), count, timeoutMs);
  }

  async scrollLatestNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async doubleClickNoNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async longPressNoNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noNews), expected, timeoutMs);
  }

  async expectNoNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noNews), substring, timeoutMs);
  }

  async expectNoNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noNews), value, timeoutMs);
  }

  async expectNoNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noNews), count, timeoutMs);
  }

  async scrollNoNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async clickNoSavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async doubleClickNoSavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async longPressNoSavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noSavedNews), expected, timeoutMs);
  }

  async expectNoSavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noSavedNews), substring, timeoutMs);
  }

  async expectNoSavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noSavedNews), value, timeoutMs);
  }

  async expectNoSavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noSavedNews), count, timeoutMs);
  }

  async scrollNoSavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

}
