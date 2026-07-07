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
    viewThisPageIn: { strategy: 'text' as const, value: 'View this page in', actionKind: 'text' as const },
    to: { strategy: 'css' as const, value: '[name="to"]', actionKind: 'combobox' as const },
    btnTopSitesMenu: { strategy: 'role' as const, value: 'Top sites', role: 'button', actionKind: 'button' as const },
    btnHeaderMyApps: { strategy: 'role' as const, value: 'Top applications', role: 'button', actionKind: 'button' as const },
    showCollapsedMenu: { strategy: 'role' as const, value: 'show collapsed menu', role: 'button', actionKind: 'button' as const },
    mySavedNews: { strategy: 'css' as const, value: 'h1:has-text("My saved news")', actionKind: 'text' as const },
    ukgHomeQa: { strategy: 'css' as const, value: 'a:has-text("UKG Home QA")', role: 'link', actionKind: 'link' as const },
    btnCardNewsUnsave: { strategy: 'css' as const, value: '.LatestNewsWidget_shareBtn__63Djr[aria-label="Unsave news"]', role: 'button', actionKind: 'button' as const },
    ai: { strategy: 'role' as const, value: 'AI', role: 'link', actionKind: 'link' as const },
    btnCardNewsShare: { strategy: 'role' as const, value: 'Share news', role: 'button', actionKind: 'button' as const },
    gtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', actionKind: 'link' as const },
    ukgNucleusRoi: { strategy: 'role' as const, value: 'UKG | Nucleus ROI Case Study-UKG Pro at XKIG', role: 'link', actionKind: 'link' as const },
    aiHub: { strategy: 'role' as const, value: 'AI Hub', role: 'link', actionKind: 'link' as const },
    newProcessForChatGPT: { strategy: 'role' as const, value: 'New process for ChatGPT access and credit', role: 'link', actionKind: 'link' as const },
    claudeEnterpriseAccessFor: { strategy: 'text' as const, value: 'Claude Enterprise access for non-Product and Engineering teams', actionKind: 'link' as const },
    featured: { strategy: 'text' as const, value: 'Featured', actionKind: 'text' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    drakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', actionKind: 'text' as const },
    takeTheNextStep: { strategy: 'text' as const, value: 'Take the next step in your development at UKG', actionKind: 'text' as const },
    stacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', actionKind: 'text' as const },
    saveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', actionKind: 'button' as const },
    ashleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', actionKind: 'text' as const },
    celebratingTheStrengthOf: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', actionKind: 'text' as const },
    christopherKiklas: { strategy: 'text' as const, value: 'Christopher Kiklas', actionKind: 'text' as const },
    prideMonth2026Together: { strategy: 'text' as const, value: 'Pride Month 2026: Together, with pride and love', actionKind: 'text' as const },
    sequoyaFord: { strategy: 'text' as const, value: 'Sequoya Ford', actionKind: 'text' as const },
    globalImpactInAction: { strategy: 'text' as const, value: 'Global Impact in Action: 4-Week Challenge winners', actionKind: 'text' as const },
    sarahMarks: { strategy: 'text' as const, value: 'Sarah Marks', actionKind: 'text' as const },
    celebratingOneYearOf: { strategy: 'text' as const, value: 'Celebrating one year of Shiftboard at UKG', actionKind: 'text' as const },
    brianBower: { strategy: 'text' as const, value: 'Brian Bower', actionKind: 'text' as const },
    switchToNextNews: { strategy: 'role' as const, value: 'switch to next news', role: 'button', actionKind: 'button' as const },
    latestNews: { strategy: 'text' as const, value: 'Latest news', actionKind: 'text' as const },
    seeAll: { strategy: 'role' as const, value: 'See all', role: 'button', actionKind: 'button' as const },
    commsEmployeeCommunications: { strategy: 'role' as const, value: 'Comms: Employee Communications', role: 'link', actionKind: 'link' as const },
    ukgCommonsMobileApp: { strategy: 'role' as const, value: 'UKG Commons mobile app now available', role: 'link', actionKind: 'link' as const },
    productEngineeringGlobal: { strategy: 'role' as const, value: 'Product & Engineering: Global Security', role: 'link', actionKind: 'link' as const },
    peopleUkgAdapt: { strategy: 'role' as const, value: 'People: UKG Adapt', role: 'link', actionKind: 'link' as const },
    insideUkg: { strategy: 'role' as const, value: 'Inside UKG', role: 'link', actionKind: 'link' as const },
    photoOfTheWeek: { strategy: 'role' as const, value: 'Photo of the Week: Take Your Child to Work Day', role: 'link', actionKind: 'link' as const },
    element: { strategy: 'css' as const, value: '.page_leftSection__gTNvf p a', actionKind: 'link' as const },
    doNotEngageWith: { strategy: 'text' as const, value: 'Do not engage with unsolicited Teams calls or suspicious emails', actionKind: 'link' as const },
    peopleEmployeeExperience: { strategy: 'role' as const, value: 'People: Employee Experience', role: 'link', actionKind: 'link' as const },
    thankYouForParticipating: { strategy: 'role' as const, value: 'Thank you for participating in the GPTW Trust', role: 'link', actionKind: 'link' as const },
    commsAnalystRelations: { strategy: 'role' as const, value: 'Comms: Analyst Relations', role: 'link', actionKind: 'link' as const },
    bigWinFor: { strategy: 'role' as const, value: '🎉 Big Win for UKG!', role: 'link', actionKind: 'link' as const },
    tuneInTodayUkgAd: { strategy: 'role' as const, value: 'Tune-In Today: UKG Ad Spot During the World Cup', role: 'link', actionKind: 'link' as const },
    cx: { strategy: 'role' as const, value: 'CX', role: 'link', actionKind: 'link' as const },
    purposeLeadershipJourney: { strategy: 'text' as const, value: 'Purpose Leadership Journey | Webinar Series Recordings (All 3 Sessions)', actionKind: 'link' as const },
    photoOfTheWeekLink: { strategy: 'role' as const, value: 'Photo of the Week: UKG Huddle in Bengaluru', role: 'link', actionKind: 'link' as const },
    productEngineeringProduct: { strategy: 'role' as const, value: 'Product & Engineering: Product', role: 'link', actionKind: 'link' as const },
    howTheNewExperience: { strategy: 'role' as const, value: 'How the New Experience helps customers operate in', role: 'link', actionKind: 'link' as const },
    thatSAWrapUkgS: { strategy: 'role' as const, value: 'That\'s a wrap: UKG\'s podcast crushes its first', role: 'link', actionKind: 'link' as const },
    whatSNewOnUkg: { strategy: 'text' as const, value: 'What’s new on UKG Commons: Hot jobs, space reservations, and more', actionKind: 'link' as const },
    gtm: { strategy: 'role' as const, value: 'GTM', role: 'link', actionKind: 'link' as const },
    welcomingSeanWdowiakGvp: { strategy: 'role' as const, value: 'Welcoming Sean Wdowiak, GVP Go-to-Market', role: 'link', actionKind: 'link' as const },
    gtmBrandHub: { strategy: 'role' as const, value: 'GTM: Brand hub', role: 'link', actionKind: 'link' as const },
    spotTheFrameConnect: { strategy: 'role' as const, value: 'Spot the frame? Connect with your UKG Brand', role: 'link', actionKind: 'link' as const },
    whatSecuritySeesRansomware: { strategy: 'text' as const, value: 'What Security Sees: Ransomware, recovery and why backups matter', actionKind: 'link' as const },
    element8: { strategy: 'text' as const, value: '12', actionKind: 'text' as const },
    exploreChatGPTCodexIn: { strategy: 'role' as const, value: 'Explore ChatGPT Codex in our new pilot program', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextViewThisPageIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async expectViewThisPageInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs, soft);
  }

  async selectTo(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, SavedNewsPage.L.to), value);
  }

  async expectToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.to), timeoutMs, soft);
  }

  async clickBtnTopSitesMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu));
  }

  async doubleClickBtnTopSitesMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu));
  }

  async expectBtnTopSitesMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), timeoutMs, soft);
  }

  async clickBtnHeaderMyApps(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps));
  }

  async doubleClickBtnHeaderMyApps(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps));
  }

  async expectBtnHeaderMyAppsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), timeoutMs, soft);
  }

  async clickShowCollapsedMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async doubleClickShowCollapsedMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs, soft);
  }

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickUkgHomeQa(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async expectUkgHomeQaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs, soft);
  }

  async clickBtnCardNewsUnsave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave));
  }

  async doubleClickBtnCardNewsUnsave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave));
  }

  async expectBtnCardNewsUnsaveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), timeoutMs, soft);
  }

  async clickAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs, soft);
  }

  async clickBtnCardNewsShare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare));
  }

  async doubleClickBtnCardNewsShare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare));
  }

  async expectBtnCardNewsShareVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), timeoutMs, soft);
  }

  async clickGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async expectGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs, soft);
  }

  async clickUkgNucleusRoi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi));
  }

  async expectUkgNucleusRoiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs, soft);
  }

  async clickAiHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async expectAiHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs, soft);
  }

  async clickNewProcessForChatGPT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT));
  }

  async expectNewProcessForChatGPTVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs, soft);
  }

  async clickClaudeEnterpriseAccessFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor));
  }

  async expectClaudeEnterpriseAccessForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs, soft);
  }

  async getInnerTextFeatured(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async expectFeaturedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs, soft);
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

  async getInnerTextDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async expectDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStep(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs, soft);
  }

  async getInnerTextStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async expectStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs, soft);
  }

  async clickSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async doubleClickSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async expectSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs, soft);
  }

  async getInnerTextAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOf(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs, soft);
  }

  async getInnerTextChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs, soft);
  }

  async getInnerTextPrideMonth2026Together(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async expectPrideMonth2026TogetherVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs, soft);
  }

  async getInnerTextSequoyaFord(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async expectSequoyaFordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs, soft);
  }

  async getInnerTextGlobalImpactInAction(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async expectGlobalImpactInActionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs, soft);
  }

  async getInnerTextSarahMarks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async expectSarahMarksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs, soft);
  }

  async getInnerTextCelebratingOneYearOf(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async expectCelebratingOneYearOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs, soft);
  }

  async getInnerTextBrianBower(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async expectBrianBowerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs, soft);
  }

  async clickSwitchToNextNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async doubleClickSwitchToNextNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async getInnerTextLatestNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async clickSeeAll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async doubleClickSeeAll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async expectSeeAllVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs, soft);
  }

  async clickCommsEmployeeCommunications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async expectCommsEmployeeCommunicationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs, soft);
  }

  async clickUkgCommonsMobileApp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp));
  }

  async expectUkgCommonsMobileAppVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs, soft);
  }

  async clickProductEngineeringGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async expectProductEngineeringGlobalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs, soft);
  }

  async clickPeopleUkgAdapt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async expectPeopleUkgAdaptVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs, soft);
  }

  async clickInsideUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async expectInsideUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs, soft);
  }

  async clickPhotoOfTheWeek(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek));
  }

  async expectPhotoOfTheWeekVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs, soft);
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.element), timeoutMs, soft);
  }

  async clickDoNotEngageWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWith));
  }

  async expectDoNotEngageWithVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs, soft);
  }

  async clickPeopleEmployeeExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience));
  }

  async expectPeopleEmployeeExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs, soft);
  }

  async clickThankYouForParticipating(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating));
  }

  async expectThankYouForParticipatingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs, soft);
  }

  async clickCommsAnalystRelations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations));
  }

  async expectCommsAnalystRelationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs, soft);
  }

  async clickBigWinFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinFor));
  }

  async expectBigWinForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs, soft);
  }

  async clickTuneInTodayUkgAd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd));
  }

  async expectTuneInTodayUkgAdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs, soft);
  }

  async clickCx(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.cx));
  }

  async expectCxVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.cx), timeoutMs, soft);
  }

  async clickPurposeLeadershipJourney(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney));
  }

  async expectPurposeLeadershipJourneyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs, soft);
  }

  async clickProductEngineeringProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct));
  }

  async expectProductEngineeringProductVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), timeoutMs, soft);
  }

  async clickHowTheNewExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.howTheNewExperience));
  }

  async expectHowTheNewExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), timeoutMs, soft);
  }

  async clickThatSAWrapUkgS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS));
  }

  async expectThatSAWrapUkgSVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), timeoutMs, soft);
  }

  async clickWhatSNewOnUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg));
  }

  async expectWhatSNewOnUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), timeoutMs, soft);
  }

  async clickGtm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async expectGtmVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs, soft);
  }

  async clickWelcomingSeanWdowiakGvp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp));
  }

  async expectWelcomingSeanWdowiakGvpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), timeoutMs, soft);
  }

  async clickGtmBrandHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmBrandHub));
  }

  async expectGtmBrandHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), timeoutMs, soft);
  }

  async clickSpotTheFrameConnect(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect));
  }

  async expectSpotTheFrameConnectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), timeoutMs, soft);
  }

  async clickWhatSecuritySeesRansomware(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware));
  }

  async expectWhatSecuritySeesRansomwareVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), timeoutMs, soft);
  }

  async getInnerTextElement8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.element8));
  }

  async expectElement8Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.element8), timeoutMs, soft);
  }

  async clickExploreChatGPTCodexIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn));
  }

  async expectExploreChatGPTCodexInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), timeoutMs, soft);
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


  async clickViewThisPageIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async doubleClickViewThisPageIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async longPressViewThisPageIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async expectViewThisPageInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), expected, timeoutMs);
  }

  async expectViewThisPageInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), substring, timeoutMs);
  }

  async expectViewThisPageInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), value, timeoutMs);
  }

  async expectViewThisPageInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.viewThisPageIn), count, timeoutMs);
  }

  async scrollViewThisPageInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.viewThisPageIn));
  }

  async expectToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.to), expected, timeoutMs);
  }

  async expectToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.to), substring, timeoutMs);
  }

  async expectToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.to), value, timeoutMs);
  }

  async expectToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.to), timeoutMs);
  }

  async expectToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.to), count, timeoutMs);
  }

  async scrollToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.to));
  }

  async longPressBtnTopSitesMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu));
  }

  async expectBtnTopSitesMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), expected, timeoutMs);
  }

  async expectBtnTopSitesMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), substring, timeoutMs);
  }

  async expectBtnTopSitesMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), value, timeoutMs);
  }

  async expectBtnTopSitesMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu), count, timeoutMs);
  }

  async scrollBtnTopSitesMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.btnTopSitesMenu));
  }

  async longPressBtnHeaderMyApps(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps));
  }

  async expectBtnHeaderMyAppsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), expected, timeoutMs);
  }

  async expectBtnHeaderMyAppsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), substring, timeoutMs);
  }

  async expectBtnHeaderMyAppsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), value, timeoutMs);
  }

  async expectBtnHeaderMyAppsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps), count, timeoutMs);
  }

  async scrollBtnHeaderMyAppsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.btnHeaderMyApps));
  }

  async longPressShowCollapsedMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), expected, timeoutMs);
  }

  async expectShowCollapsedMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), substring, timeoutMs);
  }

  async expectShowCollapsedMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), value, timeoutMs);
  }

  async expectShowCollapsedMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), count, timeoutMs);
  }

  async scrollShowCollapsedMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
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

  async doubleClickUkgHomeQa(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async longPressUkgHomeQa(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async expectUkgHomeQaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), expected, timeoutMs);
  }

  async expectUkgHomeQaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), substring, timeoutMs);
  }

  async expectUkgHomeQaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), value, timeoutMs);
  }

  async expectUkgHomeQaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), count, timeoutMs);
  }

  async scrollUkgHomeQaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async longPressBtnCardNewsUnsave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave));
  }

  async expectBtnCardNewsUnsaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), timeoutMs);
  }

  async expectBtnCardNewsUnsaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), expected, timeoutMs);
  }

  async expectBtnCardNewsUnsaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), substring, timeoutMs);
  }

  async expectBtnCardNewsUnsaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), value, timeoutMs);
  }

  async expectBtnCardNewsUnsaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), timeoutMs);
  }

  async expectBtnCardNewsUnsaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), timeoutMs);
  }

  async expectBtnCardNewsUnsaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), timeoutMs);
  }

  async expectBtnCardNewsUnsaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), timeoutMs);
  }

  async expectBtnCardNewsUnsaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), timeoutMs);
  }

  async expectBtnCardNewsUnsaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave), count, timeoutMs);
  }

  async scrollBtnCardNewsUnsaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsUnsave));
  }

  async doubleClickAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async longPressAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ai), expected, timeoutMs);
  }

  async expectAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ai), substring, timeoutMs);
  }

  async expectAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ai), value, timeoutMs);
  }

  async expectAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ai), count, timeoutMs);
  }

  async scrollAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async longPressBtnCardNewsShare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare));
  }

  async expectBtnCardNewsShareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), timeoutMs);
  }

  async expectBtnCardNewsShareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), expected, timeoutMs);
  }

  async expectBtnCardNewsShareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), substring, timeoutMs);
  }

  async expectBtnCardNewsShareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), value, timeoutMs);
  }

  async expectBtnCardNewsShareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), timeoutMs);
  }

  async expectBtnCardNewsShareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), timeoutMs);
  }

  async expectBtnCardNewsShareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), timeoutMs);
  }

  async expectBtnCardNewsShareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), timeoutMs);
  }

  async expectBtnCardNewsShareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), timeoutMs);
  }

  async expectBtnCardNewsShareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare), count, timeoutMs);
  }

  async scrollBtnCardNewsShareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.btnCardNewsShare));
  }

  async doubleClickGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async longPressGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async expectGtmMarketingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.gtmMarketing), expected, timeoutMs);
  }

  async expectGtmMarketingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.gtmMarketing), substring, timeoutMs);
  }

  async expectGtmMarketingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.gtmMarketing), value, timeoutMs);
  }

  async expectGtmMarketingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.gtmMarketing), count, timeoutMs);
  }

  async scrollGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async doubleClickUkgNucleusRoi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi));
  }

  async longPressUkgNucleusRoi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi));
  }

  async expectUkgNucleusRoiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), expected, timeoutMs);
  }

  async expectUkgNucleusRoiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), substring, timeoutMs);
  }

  async expectUkgNucleusRoiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), value, timeoutMs);
  }

  async expectUkgNucleusRoiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), count, timeoutMs);
  }

  async scrollUkgNucleusRoiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi));
  }

  async doubleClickAiHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async longPressAiHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async expectAiHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiHub), expected, timeoutMs);
  }

  async expectAiHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiHub), substring, timeoutMs);
  }

  async expectAiHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiHub), value, timeoutMs);
  }

  async expectAiHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiHub), count, timeoutMs);
  }

  async scrollAiHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async doubleClickNewProcessForChatGPT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT));
  }

  async longPressNewProcessForChatGPT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT));
  }

  async expectNewProcessForChatGPTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), expected, timeoutMs);
  }

  async expectNewProcessForChatGPTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), substring, timeoutMs);
  }

  async expectNewProcessForChatGPTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), value, timeoutMs);
  }

  async expectNewProcessForChatGPTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), count, timeoutMs);
  }

  async scrollNewProcessForChatGPTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT));
  }

  async doubleClickClaudeEnterpriseAccessFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor));
  }

  async longPressClaudeEnterpriseAccessFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor));
  }

  async expectClaudeEnterpriseAccessForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), expected, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), substring, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), value, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), count, timeoutMs);
  }

  async scrollClaudeEnterpriseAccessForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor));
  }

  async clickFeatured(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async doubleClickFeatured(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async longPressFeatured(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
  }

  async expectFeaturedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.featured), expected, timeoutMs);
  }

  async expectFeaturedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.featured), substring, timeoutMs);
  }

  async expectFeaturedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.featured), value, timeoutMs);
  }

  async expectFeaturedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.featured), timeoutMs);
  }

  async expectFeaturedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.featured), count, timeoutMs);
  }

  async scrollFeaturedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.featured));
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

  async clickDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async doubleClickDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async longPressDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async expectDrakeTiwaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.drakeTiwary), expected, timeoutMs);
  }

  async expectDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.drakeTiwary), substring, timeoutMs);
  }

  async expectDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.drakeTiwary), value, timeoutMs);
  }

  async expectDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.drakeTiwary), count, timeoutMs);
  }

  async scrollDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async clickTakeTheNextStep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async doubleClickTakeTheNextStep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async longPressTakeTheNextStep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), expected, timeoutMs);
  }

  async expectTakeTheNextStepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), substring, timeoutMs);
  }

  async expectTakeTheNextStepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), value, timeoutMs);
  }

  async expectTakeTheNextStepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), count, timeoutMs);
  }

  async scrollTakeTheNextStepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async clickStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async doubleClickStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async longPressStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async expectStacyCutronoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.stacyCutrono), expected, timeoutMs);
  }

  async expectStacyCutronoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.stacyCutrono), substring, timeoutMs);
  }

  async expectStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.stacyCutrono), value, timeoutMs);
  }

  async expectStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.stacyCutrono), count, timeoutMs);
  }

  async scrollStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async longPressSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async expectSaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.saveNews), expected, timeoutMs);
  }

  async expectSaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.saveNews), substring, timeoutMs);
  }

  async expectSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.saveNews), value, timeoutMs);
  }

  async expectSaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.saveNews), count, timeoutMs);
  }

  async scrollSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async clickAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async doubleClickAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async longPressAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), expected, timeoutMs);
  }

  async expectAshleyAmersonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), substring, timeoutMs);
  }

  async expectAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), value, timeoutMs);
  }

  async expectAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), count, timeoutMs);
  }

  async scrollAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async clickCelebratingTheStrengthOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async doubleClickCelebratingTheStrengthOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async longPressCelebratingTheStrengthOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async clickChristopherKiklas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async doubleClickChristopherKiklas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async longPressChristopherKiklas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.christopherKiklas), expected, timeoutMs);
  }

  async expectChristopherKiklasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.christopherKiklas), substring, timeoutMs);
  }

  async expectChristopherKiklasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.christopherKiklas), value, timeoutMs);
  }

  async expectChristopherKiklasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.christopherKiklas), count, timeoutMs);
  }

  async scrollChristopherKiklasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async clickPrideMonth2026Together(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async doubleClickPrideMonth2026Together(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async longPressPrideMonth2026Together(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async expectPrideMonth2026TogetherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), expected, timeoutMs);
  }

  async expectPrideMonth2026TogetherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), substring, timeoutMs);
  }

  async expectPrideMonth2026TogetherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), value, timeoutMs);
  }

  async expectPrideMonth2026TogetherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), count, timeoutMs);
  }

  async scrollPrideMonth2026TogetherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async clickSequoyaFord(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async doubleClickSequoyaFord(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async longPressSequoyaFord(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async expectSequoyaFordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.sequoyaFord), expected, timeoutMs);
  }

  async expectSequoyaFordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.sequoyaFord), substring, timeoutMs);
  }

  async expectSequoyaFordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.sequoyaFord), value, timeoutMs);
  }

  async expectSequoyaFordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.sequoyaFord), count, timeoutMs);
  }

  async scrollSequoyaFordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async clickGlobalImpactInAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async doubleClickGlobalImpactInAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async longPressGlobalImpactInAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async expectGlobalImpactInActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), expected, timeoutMs);
  }

  async expectGlobalImpactInActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), substring, timeoutMs);
  }

  async expectGlobalImpactInActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), value, timeoutMs);
  }

  async expectGlobalImpactInActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), count, timeoutMs);
  }

  async scrollGlobalImpactInActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async clickSarahMarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async doubleClickSarahMarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async longPressSarahMarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async expectSarahMarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.sarahMarks), expected, timeoutMs);
  }

  async expectSarahMarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.sarahMarks), substring, timeoutMs);
  }

  async expectSarahMarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.sarahMarks), value, timeoutMs);
  }

  async expectSarahMarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.sarahMarks), count, timeoutMs);
  }

  async scrollSarahMarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async clickCelebratingOneYearOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async doubleClickCelebratingOneYearOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async longPressCelebratingOneYearOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async expectCelebratingOneYearOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), expected, timeoutMs);
  }

  async expectCelebratingOneYearOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), substring, timeoutMs);
  }

  async expectCelebratingOneYearOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), value, timeoutMs);
  }

  async expectCelebratingOneYearOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), count, timeoutMs);
  }

  async scrollCelebratingOneYearOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async clickBrianBower(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async doubleClickBrianBower(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async longPressBrianBower(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async expectBrianBowerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.brianBower), expected, timeoutMs);
  }

  async expectBrianBowerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.brianBower), substring, timeoutMs);
  }

  async expectBrianBowerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.brianBower), value, timeoutMs);
  }

  async expectBrianBowerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.brianBower), count, timeoutMs);
  }

  async scrollBrianBowerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.brianBower));
  }

  async longPressSwitchToNextNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), expected, timeoutMs);
  }

  async expectSwitchToNextNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), substring, timeoutMs);
  }

  async expectSwitchToNextNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToNextNews), value, timeoutMs);
  }

  async expectSwitchToNextNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.switchToNextNews), count, timeoutMs);
  }

  async scrollSwitchToNextNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
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

  async longPressSeeAll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async expectSeeAllHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.seeAll), expected, timeoutMs);
  }

  async expectSeeAllContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.seeAll), substring, timeoutMs);
  }

  async expectSeeAllValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.seeAll), value, timeoutMs);
  }

  async expectSeeAllEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.seeAll), count, timeoutMs);
  }

  async scrollSeeAllIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async doubleClickCommsEmployeeCommunications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async longPressCommsEmployeeCommunications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async expectCommsEmployeeCommunicationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), expected, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), substring, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), value, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), count, timeoutMs);
  }

  async scrollCommsEmployeeCommunicationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async doubleClickUkgCommonsMobileApp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp));
  }

  async longPressUkgCommonsMobileApp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp));
  }

  async expectUkgCommonsMobileAppHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), expected, timeoutMs);
  }

  async expectUkgCommonsMobileAppContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), substring, timeoutMs);
  }

  async expectUkgCommonsMobileAppValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), value, timeoutMs);
  }

  async expectUkgCommonsMobileAppEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), count, timeoutMs);
  }

  async scrollUkgCommonsMobileAppIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp));
  }

  async doubleClickProductEngineeringGlobal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async longPressProductEngineeringGlobal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async expectProductEngineeringGlobalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), expected, timeoutMs);
  }

  async expectProductEngineeringGlobalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), substring, timeoutMs);
  }

  async expectProductEngineeringGlobalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), value, timeoutMs);
  }

  async expectProductEngineeringGlobalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), count, timeoutMs);
  }

  async scrollProductEngineeringGlobalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async doubleClickPeopleUkgAdapt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async longPressPeopleUkgAdapt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async expectPeopleUkgAdaptHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), expected, timeoutMs);
  }

  async expectPeopleUkgAdaptContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), substring, timeoutMs);
  }

  async expectPeopleUkgAdaptValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), value, timeoutMs);
  }

  async expectPeopleUkgAdaptEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), count, timeoutMs);
  }

  async scrollPeopleUkgAdaptIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async doubleClickInsideUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async longPressInsideUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async expectInsideUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.insideUkg), expected, timeoutMs);
  }

  async expectInsideUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.insideUkg), substring, timeoutMs);
  }

  async expectInsideUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.insideUkg), value, timeoutMs);
  }

  async expectInsideUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.insideUkg), count, timeoutMs);
  }

  async scrollInsideUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async doubleClickPhotoOfTheWeek(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek));
  }

  async longPressPhotoOfTheWeek(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek));
  }

  async expectPhotoOfTheWeekHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), value, timeoutMs);
  }

  async expectPhotoOfTheWeekEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek));
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.element));
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.element), substring, timeoutMs);
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.element), count, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.element));
  }

  async doubleClickDoNotEngageWith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWith));
  }

  async longPressDoNotEngageWith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWith));
  }

  async expectDoNotEngageWithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), expected, timeoutMs);
  }

  async expectDoNotEngageWithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), substring, timeoutMs);
  }

  async expectDoNotEngageWithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), value, timeoutMs);
  }

  async expectDoNotEngageWithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), count, timeoutMs);
  }

  async scrollDoNotEngageWithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWith));
  }

  async doubleClickPeopleEmployeeExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience));
  }

  async longPressPeopleEmployeeExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience));
  }

  async expectPeopleEmployeeExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), expected, timeoutMs);
  }

  async expectPeopleEmployeeExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), substring, timeoutMs);
  }

  async expectPeopleEmployeeExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), value, timeoutMs);
  }

  async expectPeopleEmployeeExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), count, timeoutMs);
  }

  async scrollPeopleEmployeeExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience));
  }

  async doubleClickThankYouForParticipating(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating));
  }

  async longPressThankYouForParticipating(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating));
  }

  async expectThankYouForParticipatingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), expected, timeoutMs);
  }

  async expectThankYouForParticipatingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), substring, timeoutMs);
  }

  async expectThankYouForParticipatingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), value, timeoutMs);
  }

  async expectThankYouForParticipatingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), count, timeoutMs);
  }

  async scrollThankYouForParticipatingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating));
  }

  async doubleClickCommsAnalystRelations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations));
  }

  async longPressCommsAnalystRelations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations));
  }

  async expectCommsAnalystRelationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), expected, timeoutMs);
  }

  async expectCommsAnalystRelationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), substring, timeoutMs);
  }

  async expectCommsAnalystRelationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), value, timeoutMs);
  }

  async expectCommsAnalystRelationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), count, timeoutMs);
  }

  async scrollCommsAnalystRelationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations));
  }

  async doubleClickBigWinFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinFor));
  }

  async longPressBigWinFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinFor));
  }

  async expectBigWinForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.bigWinFor), expected, timeoutMs);
  }

  async expectBigWinForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.bigWinFor), substring, timeoutMs);
  }

  async expectBigWinForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.bigWinFor), value, timeoutMs);
  }

  async expectBigWinForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.bigWinFor), count, timeoutMs);
  }

  async scrollBigWinForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinFor));
  }

  async doubleClickTuneInTodayUkgAd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd));
  }

  async longPressTuneInTodayUkgAd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd));
  }

  async expectTuneInTodayUkgAdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), expected, timeoutMs);
  }

  async expectTuneInTodayUkgAdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), substring, timeoutMs);
  }

  async expectTuneInTodayUkgAdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), value, timeoutMs);
  }

  async expectTuneInTodayUkgAdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), count, timeoutMs);
  }

  async scrollTuneInTodayUkgAdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd));
  }

  async doubleClickCx(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.cx));
  }

  async longPressCx(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.cx));
  }

  async expectCxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.cx), timeoutMs);
  }

  async expectCxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.cx), expected, timeoutMs);
  }

  async expectCxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.cx), substring, timeoutMs);
  }

  async expectCxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.cx), value, timeoutMs);
  }

  async expectCxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.cx), timeoutMs);
  }

  async expectCxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.cx), timeoutMs);
  }

  async expectCxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.cx), timeoutMs);
  }

  async expectCxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.cx), timeoutMs);
  }

  async expectCxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.cx), timeoutMs);
  }

  async expectCxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.cx), count, timeoutMs);
  }

  async scrollCxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.cx));
  }

  async doubleClickPurposeLeadershipJourney(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney));
  }

  async longPressPurposeLeadershipJourney(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney));
  }

  async expectPurposeLeadershipJourneyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), expected, timeoutMs);
  }

  async expectPurposeLeadershipJourneyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), substring, timeoutMs);
  }

  async expectPurposeLeadershipJourneyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), value, timeoutMs);
  }

  async expectPurposeLeadershipJourneyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney), count, timeoutMs);
  }

  async scrollPurposeLeadershipJourneyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.purposeLeadershipJourney));
  }

  async doubleClickPhotoOfTheWeekLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async longPressPhotoOfTheWeekLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), value, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async doubleClickProductEngineeringProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct));
  }

  async longPressProductEngineeringProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct));
  }

  async expectProductEngineeringProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), expected, timeoutMs);
  }

  async expectProductEngineeringProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), substring, timeoutMs);
  }

  async expectProductEngineeringProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), value, timeoutMs);
  }

  async expectProductEngineeringProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct), count, timeoutMs);
  }

  async scrollProductEngineeringProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringProduct));
  }

  async doubleClickHowTheNewExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.howTheNewExperience));
  }

  async longPressHowTheNewExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.howTheNewExperience));
  }

  async expectHowTheNewExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), expected, timeoutMs);
  }

  async expectHowTheNewExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), substring, timeoutMs);
  }

  async expectHowTheNewExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), value, timeoutMs);
  }

  async expectHowTheNewExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.howTheNewExperience), count, timeoutMs);
  }

  async scrollHowTheNewExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.howTheNewExperience));
  }

  async doubleClickThatSAWrapUkgS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS));
  }

  async longPressThatSAWrapUkgS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS));
  }

  async expectThatSAWrapUkgSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), expected, timeoutMs);
  }

  async expectThatSAWrapUkgSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), substring, timeoutMs);
  }

  async expectThatSAWrapUkgSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), value, timeoutMs);
  }

  async expectThatSAWrapUkgSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS), count, timeoutMs);
  }

  async scrollThatSAWrapUkgSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.thatSAWrapUkgS));
  }

  async doubleClickWhatSNewOnUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg));
  }

  async longPressWhatSNewOnUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg));
  }

  async expectWhatSNewOnUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), expected, timeoutMs);
  }

  async expectWhatSNewOnUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), substring, timeoutMs);
  }

  async expectWhatSNewOnUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), value, timeoutMs);
  }

  async expectWhatSNewOnUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg), count, timeoutMs);
  }

  async scrollWhatSNewOnUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSNewOnUkg));
  }

  async doubleClickGtm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async longPressGtm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async expectGtmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.gtm), expected, timeoutMs);
  }

  async expectGtmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.gtm), substring, timeoutMs);
  }

  async expectGtmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.gtm), value, timeoutMs);
  }

  async expectGtmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.gtm), timeoutMs);
  }

  async expectGtmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.gtm), count, timeoutMs);
  }

  async scrollGtmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.gtm));
  }

  async doubleClickWelcomingSeanWdowiakGvp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp));
  }

  async longPressWelcomingSeanWdowiakGvp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp));
  }

  async expectWelcomingSeanWdowiakGvpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), expected, timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), substring, timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), value, timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), timeoutMs);
  }

  async expectWelcomingSeanWdowiakGvpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp), count, timeoutMs);
  }

  async scrollWelcomingSeanWdowiakGvpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.welcomingSeanWdowiakGvp));
  }

  async doubleClickGtmBrandHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmBrandHub));
  }

  async longPressGtmBrandHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmBrandHub));
  }

  async expectGtmBrandHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), timeoutMs);
  }

  async expectGtmBrandHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), expected, timeoutMs);
  }

  async expectGtmBrandHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), substring, timeoutMs);
  }

  async expectGtmBrandHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), value, timeoutMs);
  }

  async expectGtmBrandHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), timeoutMs);
  }

  async expectGtmBrandHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), timeoutMs);
  }

  async expectGtmBrandHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), timeoutMs);
  }

  async expectGtmBrandHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), timeoutMs);
  }

  async expectGtmBrandHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), timeoutMs);
  }

  async expectGtmBrandHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.gtmBrandHub), count, timeoutMs);
  }

  async scrollGtmBrandHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmBrandHub));
  }

  async doubleClickSpotTheFrameConnect(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect));
  }

  async longPressSpotTheFrameConnect(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect));
  }

  async expectSpotTheFrameConnectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), timeoutMs);
  }

  async expectSpotTheFrameConnectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), expected, timeoutMs);
  }

  async expectSpotTheFrameConnectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), substring, timeoutMs);
  }

  async expectSpotTheFrameConnectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), value, timeoutMs);
  }

  async expectSpotTheFrameConnectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), timeoutMs);
  }

  async expectSpotTheFrameConnectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), timeoutMs);
  }

  async expectSpotTheFrameConnectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), timeoutMs);
  }

  async expectSpotTheFrameConnectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), timeoutMs);
  }

  async expectSpotTheFrameConnectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), timeoutMs);
  }

  async expectSpotTheFrameConnectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect), count, timeoutMs);
  }

  async scrollSpotTheFrameConnectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.spotTheFrameConnect));
  }

  async doubleClickWhatSecuritySeesRansomware(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware));
  }

  async longPressWhatSecuritySeesRansomware(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware));
  }

  async expectWhatSecuritySeesRansomwareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), expected, timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), substring, timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), value, timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), timeoutMs);
  }

  async expectWhatSecuritySeesRansomwareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware), count, timeoutMs);
  }

  async scrollWhatSecuritySeesRansomwareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesRansomware));
  }

  async clickElement8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.element8));
  }

  async doubleClickElement8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.element8));
  }

  async longPressElement8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.element8));
  }

  async expectElement8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.element8), timeoutMs);
  }

  async expectElement8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.element8), expected, timeoutMs);
  }

  async expectElement8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.element8), substring, timeoutMs);
  }

  async expectElement8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.element8), value, timeoutMs);
  }

  async expectElement8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.element8), timeoutMs);
  }

  async expectElement8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.element8), timeoutMs);
  }

  async expectElement8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.element8), timeoutMs);
  }

  async expectElement8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.element8), timeoutMs);
  }

  async expectElement8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.element8), timeoutMs);
  }

  async expectElement8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.element8), count, timeoutMs);
  }

  async scrollElement8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.element8));
  }

  async doubleClickExploreChatGPTCodexIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn));
  }

  async longPressExploreChatGPTCodexIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn));
  }

  async expectExploreChatGPTCodexInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), timeoutMs);
  }

  async expectExploreChatGPTCodexInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), expected, timeoutMs);
  }

  async expectExploreChatGPTCodexInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), substring, timeoutMs);
  }

  async expectExploreChatGPTCodexInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), value, timeoutMs);
  }

  async expectExploreChatGPTCodexInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), timeoutMs);
  }

  async expectExploreChatGPTCodexInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), timeoutMs);
  }

  async expectExploreChatGPTCodexInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), timeoutMs);
  }

  async expectExploreChatGPTCodexInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), timeoutMs);
  }

  async expectExploreChatGPTCodexInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), timeoutMs);
  }

  async expectExploreChatGPTCodexInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn), count, timeoutMs);
  }

  async scrollExploreChatGPTCodexInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.exploreChatGPTCodexIn));
  }

}
