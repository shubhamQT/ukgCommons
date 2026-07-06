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
    ukgHomeQa: { strategy: 'role' as const, value: 'UKG Home QA', role: 'link', actionKind: 'link' as const },
    btnCardNewsUnsave: { strategy: 'role' as const, value: 'Unsave news', role: 'button', actionKind: 'button' as const },
    ai: { strategy: 'role' as const, value: 'AI', role: 'link', actionKind: 'link' as const },
    comment: { strategy: 'altText' as const, value: 'comment', actionKind: 'generic' as const },
    btnCardNewsShare: { strategy: 'role' as const, value: 'Share news', role: 'button', actionKind: 'button' as const },
    ukgNucleusRoi: { strategy: 'altText' as const, value: 'UKG | Nucleus ROI Case Study-UKG Pro at XKIG', actionKind: 'generic' as const },
    gtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', actionKind: 'link' as const },
    ukgNucleusRoiLink: { strategy: 'role' as const, value: 'UKG | Nucleus ROI Case Study-UKG Pro at XKIG', role: 'link', actionKind: 'link' as const },
    newProcessForChatGPT: { strategy: 'altText' as const, value: 'New process for ChatGPT access and credit extensions', actionKind: 'generic' as const },
    aiHub: { strategy: 'role' as const, value: 'AI Hub', role: 'link', actionKind: 'link' as const },
    newProcessForChatGPTLink: { strategy: 'role' as const, value: 'New process for ChatGPT access and credit', role: 'link', actionKind: 'link' as const },
    claudeEnterpriseAccessFor: { strategy: 'altText' as const, value: 'Claude Enterprise access for non-Product and Engineering teams', actionKind: 'generic' as const },
    claudeEnterpriseAccessForLink: { strategy: 'text' as const, value: 'Claude Enterprise access for non-Product and Engineering teams', actionKind: 'link' as const },
    featured: { strategy: 'role' as const, value: 'Featured', role: 'heading', level: 3, actionKind: 'text' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    drakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', actionKind: 'text' as const },
    takeTheNextStep: { strategy: 'altText' as const, value: 'Take the next step in your development at UKG', actionKind: 'generic' as const },
    takeTheNextStep2: { strategy: 'text' as const, value: 'Take the next step in your development at UKG', actionKind: 'text' as const },
    stacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', actionKind: 'text' as const },
    saveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', actionKind: 'button' as const },
    allEmployeeTownHall: { strategy: 'altText' as const, value: 'All-Employee Town Hall - June 2026', actionKind: 'generic' as const },
    ashleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', actionKind: 'text' as const },
    celebratingTheStrengthOf: { strategy: 'altText' as const, value: 'Celebrating the strength of the UKG Ready partner network', actionKind: 'generic' as const },
    celebratingTheStrengthOf2: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', actionKind: 'text' as const },
    christopherKiklas: { strategy: 'text' as const, value: 'Christopher Kiklas', actionKind: 'text' as const },
    prideMonth2026Together: { strategy: 'altText' as const, value: 'Pride Month 2026: Together, with pride and love', actionKind: 'generic' as const },
    prideMonth2026Together2: { strategy: 'text' as const, value: 'Pride Month 2026: Together, with pride and love', actionKind: 'text' as const },
    sequoyaFord: { strategy: 'text' as const, value: 'Sequoya Ford', actionKind: 'text' as const },
    globalImpactInAction: { strategy: 'altText' as const, value: 'Global Impact in Action: 4-Week Challenge winners', actionKind: 'generic' as const },
    globalImpactInAction2: { strategy: 'text' as const, value: 'Global Impact in Action: 4-Week Challenge winners', actionKind: 'text' as const },
    sarahMarks: { strategy: 'text' as const, value: 'Sarah Marks', actionKind: 'text' as const },
    celebratingOneYearOf: { strategy: 'altText' as const, value: 'Celebrating one year of Shiftboard at UKG', actionKind: 'generic' as const },
    celebratingOneYearOf2: { strategy: 'text' as const, value: 'Celebrating one year of Shiftboard at UKG', actionKind: 'text' as const },
    brianBower: { strategy: 'text' as const, value: 'Brian Bower', actionKind: 'text' as const },
    switchToNextNews: { strategy: 'role' as const, value: 'switch to next news', role: 'button', actionKind: 'button' as const },
    latestNews: { strategy: 'role' as const, value: 'Latest news', role: 'heading', level: 3, actionKind: 'text' as const },
    seeAll: { strategy: 'role' as const, value: 'See all', role: 'button', actionKind: 'button' as const },
    globalSecurityManagedVault: { strategy: 'altText' as const, value: 'Global Security managed Vault certificate migration calendar', actionKind: 'generic' as const },
    productEngineeringGlobal: { strategy: 'role' as const, value: 'Product & Engineering: Global Security', role: 'link', actionKind: 'link' as const },
    globalSecurityManagedVaultLink: { strategy: 'role' as const, value: 'Global Security managed Vault certificate', role: 'link', actionKind: 'link' as const },
    baselineImagesRequiredFor: { strategy: 'altText' as const, value: 'Baseline Images required for new deployments starting July 31', actionKind: 'generic' as const },
    ukgRiseEarlyCareer: { strategy: 'altText' as const, value: 'UKG Rise Early Career Month: Build the skills, shape the future', actionKind: 'generic' as const },
    peopleBelongingImpact: { strategy: 'role' as const, value: 'People: Belonging & Impact', role: 'link', actionKind: 'link' as const },
    ukgRiseEarlyCareerLink: { strategy: 'text' as const, value: 'UKG Rise Early Career Month: Build the skills, shape the future', actionKind: 'link' as const },
    employeeResourceGroupErg: { strategy: 'altText' as const, value: 'Employee Resource Group (ERG) monthly newsletter: July 2026', actionKind: 'generic' as const },
    ukgCommonsMobileApp: { strategy: 'altText' as const, value: 'UKG Commons mobile app now available', actionKind: 'generic' as const },
    commsEmployeeCommunications: { strategy: 'role' as const, value: 'Comms: Employee Communications', role: 'link', actionKind: 'link' as const },
    ukgCommonsMobileAppLink: { strategy: 'role' as const, value: 'UKG Commons mobile app now available', role: 'link', actionKind: 'link' as const },
    whatSecuritySeesSometimes: { strategy: 'altText' as const, value: 'What Security Sees: Sometimes thinking like a cybercriminal starts with “update now”', actionKind: 'generic' as const },
    disabilityINJuly2026: { strategy: 'altText' as const, value: 'DisabilityIN July 2026', actionKind: 'generic' as const },
    peopleUkgAdapt: { strategy: 'role' as const, value: 'People: UKG Adapt', role: 'link', actionKind: 'link' as const },
    photoOfTheWeek: { strategy: 'altText' as const, value: 'Photo of the Week: Take Your Child to Work Day', actionKind: 'generic' as const },
    insideUkg: { strategy: 'role' as const, value: 'Inside UKG', role: 'link', actionKind: 'link' as const },
    photoOfTheWeekLink: { strategy: 'role' as const, value: 'Photo of the Week: Take Your Child to Work Day', role: 'link', actionKind: 'link' as const },
    doNotEngageWith: { strategy: 'altText' as const, value: 'Do not engage with unsolicited Teams calls or suspicious emails', actionKind: 'generic' as const },
    doNotEngageWithLink: { strategy: 'text' as const, value: 'Do not engage with unsolicited Teams calls or suspicious emails', actionKind: 'link' as const },
    thankYouForParticipating: { strategy: 'altText' as const, value: 'Thank you for participating in the GPTW Trust Index Survey', actionKind: 'generic' as const },
    peopleEmployeeExperience: { strategy: 'role' as const, value: 'People: Employee Experience', role: 'link', actionKind: 'link' as const },
    thankYouForParticipatingLink: { strategy: 'role' as const, value: 'Thank you for participating in the GPTW Trust', role: 'link', actionKind: 'link' as const },
    bigWinFor: { strategy: 'altText' as const, value: '🎉 Big Win for UKG!', actionKind: 'generic' as const },
    commsAnalystRelations: { strategy: 'role' as const, value: 'Comms: Analyst Relations', role: 'link', actionKind: 'link' as const },
    bigWinForLink: { strategy: 'role' as const, value: '🎉 Big Win for UKG!', role: 'link', actionKind: 'link' as const },
    tuneInTodayUkgAd: { strategy: 'altText' as const, value: 'Tune-In Today: UKG Ad Spot During the World Cup', actionKind: 'generic' as const },
    tuneInTodayUkgAdLink: { strategy: 'role' as const, value: 'Tune-In Today: UKG Ad Spot During the World Cup', role: 'link', actionKind: 'link' as const },
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

  async clickComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async expectCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs, soft);
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

  async clickUkgNucleusRoi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi));
  }

  async expectUkgNucleusRoiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoi), timeoutMs, soft);
  }

  async clickGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async expectGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs, soft);
  }

  async clickUkgNucleusRoiLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink));
  }

  async expectUkgNucleusRoiLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), timeoutMs, soft);
  }

  async clickNewProcessForChatGPT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT));
  }

  async expectNewProcessForChatGPTVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPT), timeoutMs, soft);
  }

  async clickAiHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiHub));
  }

  async expectAiHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiHub), timeoutMs, soft);
  }

  async clickNewProcessForChatGPTLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink));
  }

  async expectNewProcessForChatGPTLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), timeoutMs, soft);
  }

  async clickClaudeEnterpriseAccessFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor));
  }

  async expectClaudeEnterpriseAccessForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessFor), timeoutMs, soft);
  }

  async clickClaudeEnterpriseAccessForLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink));
  }

  async expectClaudeEnterpriseAccessForLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), timeoutMs, soft);
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

  async clickTakeTheNextStep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStep2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs, soft);
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

  async clickAllEmployeeTownHall(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs, soft);
  }

  async getInnerTextAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs, soft);
  }

  async clickCelebratingTheStrengthOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOf2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs, soft);
  }

  async getInnerTextChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs, soft);
  }

  async clickPrideMonth2026Together(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together));
  }

  async expectPrideMonth2026TogetherVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together), timeoutMs, soft);
  }

  async getInnerTextPrideMonth2026Together2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async expectPrideMonth2026Together2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs, soft);
  }

  async getInnerTextSequoyaFord(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord));
  }

  async expectSequoyaFordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.sequoyaFord), timeoutMs, soft);
  }

  async clickGlobalImpactInAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction));
  }

  async expectGlobalImpactInActionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction), timeoutMs, soft);
  }

  async getInnerTextGlobalImpactInAction2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async expectGlobalImpactInAction2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs, soft);
  }

  async getInnerTextSarahMarks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks));
  }

  async expectSarahMarksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.sarahMarks), timeoutMs, soft);
  }

  async clickCelebratingOneYearOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf));
  }

  async expectCelebratingOneYearOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf), timeoutMs, soft);
  }

  async getInnerTextCelebratingOneYearOf2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async expectCelebratingOneYearOf2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs, soft);
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

  async clickGlobalSecurityManagedVault(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
  }

  async expectGlobalSecurityManagedVaultVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs, soft);
  }

  async clickProductEngineeringGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal));
  }

  async expectProductEngineeringGlobalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.productEngineeringGlobal), timeoutMs, soft);
  }

  async clickGlobalSecurityManagedVaultLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async expectGlobalSecurityManagedVaultLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs, soft);
  }

  async clickBaselineImagesRequiredFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async expectBaselineImagesRequiredForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs, soft);
  }

  async clickUkgRiseEarlyCareer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer));
  }

  async expectUkgRiseEarlyCareerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), timeoutMs, soft);
  }

  async clickPeopleBelongingImpact(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async expectPeopleBelongingImpactVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs, soft);
  }

  async clickUkgRiseEarlyCareerLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async expectUkgRiseEarlyCareerLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs, soft);
  }

  async clickEmployeeResourceGroupErg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
  }

  async expectEmployeeResourceGroupErgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs, soft);
  }

  async clickUkgCommonsMobileApp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp));
  }

  async expectUkgCommonsMobileAppVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileApp), timeoutMs, soft);
  }

  async clickCommsEmployeeCommunications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications));
  }

  async expectCommsEmployeeCommunicationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.commsEmployeeCommunications), timeoutMs, soft);
  }

  async clickUkgCommonsMobileAppLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async expectUkgCommonsMobileAppLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs, soft);
  }

  async clickWhatSecuritySeesSometimes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async expectWhatSecuritySeesSometimesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs, soft);
  }

  async clickDisabilityINJuly2026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
  }

  async expectDisabilityINJuly2026Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs, soft);
  }

  async clickPeopleUkgAdapt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt));
  }

  async expectPeopleUkgAdaptVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleUkgAdapt), timeoutMs, soft);
  }

  async clickPhotoOfTheWeek(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek));
  }

  async expectPhotoOfTheWeekVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeek), timeoutMs, soft);
  }

  async clickInsideUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.insideUkg));
  }

  async expectInsideUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.insideUkg), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs, soft);
  }

  async clickDoNotEngageWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWith));
  }

  async expectDoNotEngageWithVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWith), timeoutMs, soft);
  }

  async clickDoNotEngageWithLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
  }

  async expectDoNotEngageWithLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs, soft);
  }

  async clickThankYouForParticipating(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating));
  }

  async expectThankYouForParticipatingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipating), timeoutMs, soft);
  }

  async clickPeopleEmployeeExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience));
  }

  async expectPeopleEmployeeExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.peopleEmployeeExperience), timeoutMs, soft);
  }

  async clickThankYouForParticipatingLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink));
  }

  async expectThankYouForParticipatingLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), timeoutMs, soft);
  }

  async clickBigWinFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinFor));
  }

  async expectBigWinForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.bigWinFor), timeoutMs, soft);
  }

  async clickCommsAnalystRelations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations));
  }

  async expectCommsAnalystRelationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.commsAnalystRelations), timeoutMs, soft);
  }

  async clickBigWinForLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinForLink));
  }

  async expectBigWinForLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.bigWinForLink), timeoutMs, soft);
  }

  async clickTuneInTodayUkgAd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd));
  }

  async expectTuneInTodayUkgAdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAd), timeoutMs, soft);
  }

  async clickTuneInTodayUkgAdLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

  async expectTuneInTodayUkgAdLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs, soft);
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

  async doubleClickComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async longPressComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async expectCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.comment), expected, timeoutMs);
  }

  async expectCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.comment), substring, timeoutMs);
  }

  async expectCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.comment), value, timeoutMs);
  }

  async expectCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.comment), count, timeoutMs);
  }

  async scrollCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
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

  async doubleClickUkgNucleusRoiLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink));
  }

  async longPressUkgNucleusRoiLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink));
  }

  async expectUkgNucleusRoiLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), expected, timeoutMs);
  }

  async expectUkgNucleusRoiLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), substring, timeoutMs);
  }

  async expectUkgNucleusRoiLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), value, timeoutMs);
  }

  async expectUkgNucleusRoiLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink), count, timeoutMs);
  }

  async scrollUkgNucleusRoiLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgNucleusRoiLink));
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

  async doubleClickNewProcessForChatGPTLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink));
  }

  async longPressNewProcessForChatGPTLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink));
  }

  async expectNewProcessForChatGPTLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), expected, timeoutMs);
  }

  async expectNewProcessForChatGPTLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), substring, timeoutMs);
  }

  async expectNewProcessForChatGPTLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), value, timeoutMs);
  }

  async expectNewProcessForChatGPTLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink), count, timeoutMs);
  }

  async scrollNewProcessForChatGPTLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.newProcessForChatGPTLink));
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

  async doubleClickClaudeEnterpriseAccessForLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink));
  }

  async longPressClaudeEnterpriseAccessForLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink));
  }

  async expectClaudeEnterpriseAccessForLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), expected, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), substring, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), value, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink), count, timeoutMs);
  }

  async scrollClaudeEnterpriseAccessForLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.claudeEnterpriseAccessForLink));
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

  async clickTakeTheNextStep2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async doubleClickTakeTheNextStep2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async longPressTakeTheNextStep2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), expected, timeoutMs);
  }

  async expectTakeTheNextStep2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), substring, timeoutMs);
  }

  async expectTakeTheNextStep2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), value, timeoutMs);
  }

  async expectTakeTheNextStep2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), count, timeoutMs);
  }

  async scrollTakeTheNextStep2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
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

  async doubleClickAllEmployeeTownHall(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async longPressAllEmployeeTownHall(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), value, timeoutMs);
  }

  async expectAllEmployeeTownHallEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
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

  async clickCelebratingTheStrengthOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async doubleClickCelebratingTheStrengthOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async longPressCelebratingTheStrengthOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
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

  async clickPrideMonth2026Together2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async doubleClickPrideMonth2026Together2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async longPressPrideMonth2026Together2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
  }

  async expectPrideMonth2026Together2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), expected, timeoutMs);
  }

  async expectPrideMonth2026Together2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), substring, timeoutMs);
  }

  async expectPrideMonth2026Together2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), value, timeoutMs);
  }

  async expectPrideMonth2026Together2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2), count, timeoutMs);
  }

  async scrollPrideMonth2026Together2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026Together2));
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

  async clickGlobalImpactInAction2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async doubleClickGlobalImpactInAction2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async longPressGlobalImpactInAction2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
  }

  async expectGlobalImpactInAction2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), expected, timeoutMs);
  }

  async expectGlobalImpactInAction2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), substring, timeoutMs);
  }

  async expectGlobalImpactInAction2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), value, timeoutMs);
  }

  async expectGlobalImpactInAction2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2), count, timeoutMs);
  }

  async scrollGlobalImpactInAction2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction2));
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

  async clickCelebratingOneYearOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async doubleClickCelebratingOneYearOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async longPressCelebratingOneYearOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
  }

  async expectCelebratingOneYearOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), expected, timeoutMs);
  }

  async expectCelebratingOneYearOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), substring, timeoutMs);
  }

  async expectCelebratingOneYearOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), value, timeoutMs);
  }

  async expectCelebratingOneYearOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2), count, timeoutMs);
  }

  async scrollCelebratingOneYearOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOf2));
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

  async doubleClickGlobalSecurityManagedVault(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
  }

  async longPressGlobalSecurityManagedVault(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
  }

  async expectGlobalSecurityManagedVaultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), expected, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), substring, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), value, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault), count, timeoutMs);
  }

  async scrollGlobalSecurityManagedVaultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVault));
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

  async doubleClickGlobalSecurityManagedVaultLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async longPressGlobalSecurityManagedVaultLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async expectGlobalSecurityManagedVaultLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), expected, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), substring, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), value, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink), count, timeoutMs);
  }

  async scrollGlobalSecurityManagedVaultLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalSecurityManagedVaultLink));
  }

  async doubleClickBaselineImagesRequiredFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async longPressBaselineImagesRequiredFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async expectBaselineImagesRequiredForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), expected, timeoutMs);
  }

  async expectBaselineImagesRequiredForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), substring, timeoutMs);
  }

  async expectBaselineImagesRequiredForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), value, timeoutMs);
  }

  async expectBaselineImagesRequiredForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor), count, timeoutMs);
  }

  async scrollBaselineImagesRequiredForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.baselineImagesRequiredFor));
  }

  async doubleClickUkgRiseEarlyCareer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer));
  }

  async longPressUkgRiseEarlyCareer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer));
  }

  async expectUkgRiseEarlyCareerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), expected, timeoutMs);
  }

  async expectUkgRiseEarlyCareerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), substring, timeoutMs);
  }

  async expectUkgRiseEarlyCareerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), value, timeoutMs);
  }

  async expectUkgRiseEarlyCareerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer), count, timeoutMs);
  }

  async scrollUkgRiseEarlyCareerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareer));
  }

  async doubleClickPeopleBelongingImpact(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async longPressPeopleBelongingImpact(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async expectPeopleBelongingImpactHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), expected, timeoutMs);
  }

  async expectPeopleBelongingImpactContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), substring, timeoutMs);
  }

  async expectPeopleBelongingImpactValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), value, timeoutMs);
  }

  async expectPeopleBelongingImpactEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact), count, timeoutMs);
  }

  async scrollPeopleBelongingImpactIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.peopleBelongingImpact));
  }

  async doubleClickUkgRiseEarlyCareerLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async longPressUkgRiseEarlyCareerLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async expectUkgRiseEarlyCareerLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), expected, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), substring, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), value, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink), count, timeoutMs);
  }

  async scrollUkgRiseEarlyCareerLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgRiseEarlyCareerLink));
  }

  async doubleClickEmployeeResourceGroupErg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
  }

  async longPressEmployeeResourceGroupErg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
  }

  async expectEmployeeResourceGroupErgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), expected, timeoutMs);
  }

  async expectEmployeeResourceGroupErgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), substring, timeoutMs);
  }

  async expectEmployeeResourceGroupErgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), value, timeoutMs);
  }

  async expectEmployeeResourceGroupErgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg), count, timeoutMs);
  }

  async scrollEmployeeResourceGroupErgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.employeeResourceGroupErg));
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

  async doubleClickUkgCommonsMobileAppLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async longPressUkgCommonsMobileAppLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async expectUkgCommonsMobileAppLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), expected, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), substring, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), value, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink), count, timeoutMs);
  }

  async scrollUkgCommonsMobileAppLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgCommonsMobileAppLink));
  }

  async doubleClickWhatSecuritySeesSometimes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async longPressWhatSecuritySeesSometimes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async expectWhatSecuritySeesSometimesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), expected, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), substring, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), value, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes), count, timeoutMs);
  }

  async scrollWhatSecuritySeesSometimesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesSometimes));
  }

  async doubleClickDisabilityINJuly2026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
  }

  async longPressDisabilityINJuly2026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
  }

  async expectDisabilityINJuly2026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), expected, timeoutMs);
  }

  async expectDisabilityINJuly2026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), substring, timeoutMs);
  }

  async expectDisabilityINJuly2026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), value, timeoutMs);
  }

  async expectDisabilityINJuly2026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026), count, timeoutMs);
  }

  async scrollDisabilityINJuly2026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.disabilityINJuly2026));
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

  async doubleClickDoNotEngageWithLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
  }

  async longPressDoNotEngageWithLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
  }

  async expectDoNotEngageWithLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), expected, timeoutMs);
  }

  async expectDoNotEngageWithLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), substring, timeoutMs);
  }

  async expectDoNotEngageWithLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), value, timeoutMs);
  }

  async expectDoNotEngageWithLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink), count, timeoutMs);
  }

  async scrollDoNotEngageWithLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.doNotEngageWithLink));
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

  async doubleClickThankYouForParticipatingLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink));
  }

  async longPressThankYouForParticipatingLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink));
  }

  async expectThankYouForParticipatingLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), expected, timeoutMs);
  }

  async expectThankYouForParticipatingLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), substring, timeoutMs);
  }

  async expectThankYouForParticipatingLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), value, timeoutMs);
  }

  async expectThankYouForParticipatingLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink), count, timeoutMs);
  }

  async scrollThankYouForParticipatingLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.thankYouForParticipatingLink));
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

  async doubleClickBigWinForLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinForLink));
  }

  async longPressBigWinForLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinForLink));
  }

  async expectBigWinForLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.bigWinForLink), expected, timeoutMs);
  }

  async expectBigWinForLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.bigWinForLink), substring, timeoutMs);
  }

  async expectBigWinForLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.bigWinForLink), value, timeoutMs);
  }

  async expectBigWinForLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.bigWinForLink), count, timeoutMs);
  }

  async scrollBigWinForLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.bigWinForLink));
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

  async doubleClickTuneInTodayUkgAdLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

  async longPressTuneInTodayUkgAdLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

  async expectTuneInTodayUkgAdLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), expected, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), substring, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), value, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), count, timeoutMs);
  }

  async scrollTuneInTodayUkgAdLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

}
