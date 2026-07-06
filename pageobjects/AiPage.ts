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

export class AiPage {
  private static readonly L = {
    skipToMainContent: { strategy: 'role' as const, value: 'Skip to main content', role: 'link', actionKind: 'link' as const },
    appLauncher: { strategy: 'role' as const, value: 'App launcher', role: 'button', actionKind: 'button' as const },
    ukg: { strategy: 'role' as const, value: 'UKG', role: 'link', actionKind: 'link' as const },
    goToSharePoint: { strategy: 'role' as const, value: 'Go to SharePoint', role: 'link', actionKind: 'link' as const },
    mssxsbInput: { strategy: 'placeholder' as const, value: 'Search', actionKind: 'textbox' as const },
    nextStepsToImprove: { strategy: 'role' as const, value: 'Next steps to improve your site', role: 'button', actionKind: 'button' as const },
    provideFeedbackToMicrosoft: { strategy: 'role' as const, value: 'Provide feedback to Microsoft', role: 'button', actionKind: 'button' as const },
    settings: { strategy: 'role' as const, value: 'Settings', role: 'button', actionKind: 'button' as const },
    help: { strategy: 'role' as const, value: 'Help', role: 'button', actionKind: 'button' as const },
    accountManagerForDrake: { strategy: 'role' as const, value: 'Account manager for Drake Tiwary', role: 'button', actionKind: 'button' as const },
    discoverPressEnterTo: { strategy: 'role' as const, value: 'Discover, press Enter to navigate to page, or Alt plus Down Arrow to open flyout', role: 'button', actionKind: 'button' as const },
    publishPressEnterTo: { strategy: 'role' as const, value: 'Publish, press Enter to navigate to page, or Alt plus Down Arrow to open flyout', role: 'button', actionKind: 'button' as const },
    buildPressEnterTo: { strategy: 'role' as const, value: 'Build, press Enter to navigate to page, or Alt plus Down Arrow to open flyout', role: 'button', actionKind: 'button' as const },
    oneDrivePressEnterTo: { strategy: 'role' as const, value: 'OneDrive, press Enter to navigate to page', role: 'button', actionKind: 'button' as const },
    ukgHomeQaHub: { strategy: 'role' as const, value: 'UKG Home QA hub site', role: 'link', actionKind: 'link' as const },
    ukgCommons: { strategy: 'role' as const, value: 'UKG Commons', role: 'link', actionKind: 'link' as const },
    ukgCommonsSubmenu: { strategy: 'role' as const, value: 'UKG Commons submenu', role: 'button', actionKind: 'button' as const },
    edit: { strategy: 'role' as const, value: 'Edit', role: 'button', actionKind: 'button' as const },
    moreInfo: { strategy: 'role' as const, value: 'More info.', role: 'link', actionKind: 'link' as const },
    ukgHomeQaHome: { strategy: 'role' as const, value: 'UKG Home QA home', role: 'link', actionKind: 'link' as const },
    ukgHomeQa: { strategy: 'role' as const, value: 'UKG Home QA', role: 'link', actionKind: 'link' as const },
    announcementsQa: { strategy: 'role' as const, value: 'announcementsQa', role: 'link', actionKind: 'link' as const },
    jobs: { strategy: 'role' as const, value: 'jobs', role: 'link', actionKind: 'link' as const },
    career: { strategy: 'role' as const, value: 'career', role: 'link', actionKind: 'link' as const },
    editSiteNavigation: { strategy: 'role' as const, value: 'Edit site navigation', role: 'button', actionKind: 'button' as const },
    addToFavorites: { strategy: 'role' as const, value: 'Add to favorites', role: 'button', actionKind: 'button' as const },
    siteAccess: { strategy: 'role' as const, value: ' Site access', role: 'button', actionKind: 'button' as const },
    new: { strategy: 'role' as const, value: ' New ', role: 'button', actionKind: 'button' as const },
    promote: { strategy: 'role' as const, value: ' Promote', role: 'button', actionKind: 'button' as const },
    pageDetails: { strategy: 'role' as const, value: ' Page details', role: 'button', actionKind: 'button' as const },
    preview: { strategy: 'role' as const, value: 'Preview', role: 'button', actionKind: 'button' as const },
    immersiveReader: { strategy: 'role' as const, value: ' Immersive reader', role: 'button', actionKind: 'button' as const },
    analytics: { strategy: 'role' as const, value: ' Analytics', role: 'button', actionKind: 'button' as const },
    posted: { strategy: 'role' as const, value: 'Posted', role: 'button', actionKind: 'button' as const },
    share: { strategy: 'role' as const, value: 'Share', role: 'button', actionKind: 'button' as const },
    editPage: { strategy: 'role' as const, value: 'Edit Page', role: 'button', actionKind: 'button' as const },
    hideHeaderAndNavigation: { strategy: 'role' as const, value: 'Hide header and navigation', role: 'button', actionKind: 'button' as const },
    training: { strategy: 'css' as const, value: '#training', role: 'heading', level: 2, actionKind: 'text' as const },
    aiEssentialsForEnterprise: { strategy: 'css' as const, value: '#ai-essentials-for-enterprise', role: 'heading', level: 2, actionKind: 'text' as const },
    video: { strategy: 'text' as const, value: 'Video', actionKind: 'text' as const },
    displayVideosFromOneDrive: { strategy: 'text' as const, value: 'Display videos from OneDrive or SharePoint. Select', actionKind: 'text' as const },
    selectVideo: { strategy: 'role' as const, value: 'Select video', role: 'button', actionKind: 'button' as const },
    additionalTrainings: { strategy: 'css' as const, value: '#additional-trainings', role: 'heading', level: 3, actionKind: 'text' as const },
    languageSwitcher: { strategy: 'role' as const, value: 'Language Switcher', role: 'combobox', actionKind: 'generic' as const },
    languageSelectedEnglish: { strategy: 'role' as const, value: 'Language selected: English', role: 'combobox', actionKind: 'generic' as const },
    english: { strategy: 'role' as const, value: 'English', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSkipToMainContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.skipToMainContent));
  }

  async expectSkipToMainContentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.skipToMainContent), timeoutMs, soft);
  }

  async clickAppLauncher(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.appLauncher));
  }

  async doubleClickAppLauncher(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.appLauncher));
  }

  async expectAppLauncherVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.appLauncher), timeoutMs, soft);
  }

  async clickUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.ukg));
  }

  async expectUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.ukg), timeoutMs, soft);
  }

  async clickGoToSharePoint(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.goToSharePoint));
  }

  async expectGoToSharePointVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.goToSharePoint), timeoutMs, soft);
  }

  async fillMssxsbInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AiPage.L.mssxsbInput), value);
  }

  async clearMssxsbInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AiPage.L.mssxsbInput));
  }

  async getMssxsbInputValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AiPage.L.mssxsbInput));
  }

  async expectMssxsbInputVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.mssxsbInput), timeoutMs, soft);
  }

  async clickNextStepsToImprove(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.nextStepsToImprove));
  }

  async doubleClickNextStepsToImprove(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.nextStepsToImprove));
  }

  async expectNextStepsToImproveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.nextStepsToImprove), timeoutMs, soft);
  }

  async clickProvideFeedbackToMicrosoft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft));
  }

  async doubleClickProvideFeedbackToMicrosoft(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft));
  }

  async expectProvideFeedbackToMicrosoftVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), timeoutMs, soft);
  }

  async clickSettings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.settings));
  }

  async doubleClickSettings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.settings));
  }

  async expectSettingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.settings), timeoutMs, soft);
  }

  async clickHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.help));
  }

  async doubleClickHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.help));
  }

  async expectHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.help), timeoutMs, soft);
  }

  async clickAccountManagerForDrake(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.accountManagerForDrake));
  }

  async doubleClickAccountManagerForDrake(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.accountManagerForDrake));
  }

  async expectAccountManagerForDrakeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.accountManagerForDrake), timeoutMs, soft);
  }

  async clickDiscoverPressEnterTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.discoverPressEnterTo));
  }

  async doubleClickDiscoverPressEnterTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.discoverPressEnterTo));
  }

  async expectDiscoverPressEnterToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.discoverPressEnterTo), timeoutMs, soft);
  }

  async clickPublishPressEnterTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.publishPressEnterTo));
  }

  async doubleClickPublishPressEnterTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.publishPressEnterTo));
  }

  async expectPublishPressEnterToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.publishPressEnterTo), timeoutMs, soft);
  }

  async clickBuildPressEnterTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.buildPressEnterTo));
  }

  async doubleClickBuildPressEnterTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.buildPressEnterTo));
  }

  async expectBuildPressEnterToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.buildPressEnterTo), timeoutMs, soft);
  }

  async clickOneDrivePressEnterTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.oneDrivePressEnterTo));
  }

  async doubleClickOneDrivePressEnterTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.oneDrivePressEnterTo));
  }

  async expectOneDrivePressEnterToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), timeoutMs, soft);
  }

  async clickUkgHomeQaHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHub));
  }

  async expectUkgHomeQaHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.ukgHomeQaHub), timeoutMs, soft);
  }

  async clickUkgCommons(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.ukgCommons));
  }

  async expectUkgCommonsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.ukgCommons), timeoutMs, soft);
  }

  async clickUkgCommonsSubmenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.ukgCommonsSubmenu));
  }

  async doubleClickUkgCommonsSubmenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.ukgCommonsSubmenu));
  }

  async expectUkgCommonsSubmenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), timeoutMs, soft);
  }

  async clickEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.edit));
  }

  async doubleClickEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.edit));
  }

  async expectEditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.edit), timeoutMs, soft);
  }

  async clickMoreInfo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.moreInfo));
  }

  async expectMoreInfoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.moreInfo), timeoutMs, soft);
  }

  async clickUkgHomeQaHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHome));
  }

  async expectUkgHomeQaHomeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.ukgHomeQaHome), timeoutMs, soft);
  }

  async clickUkgHomeQa(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQa));
  }

  async expectUkgHomeQaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.ukgHomeQa), timeoutMs, soft);
  }

  async clickAnnouncementsQa(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.announcementsQa));
  }

  async expectAnnouncementsQaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.announcementsQa), timeoutMs, soft);
  }

  async clickJobs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.jobs));
  }

  async expectJobsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.jobs), timeoutMs, soft);
  }

  async clickCareer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.career));
  }

  async expectCareerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.career), timeoutMs, soft);
  }

  async clickEditSiteNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.editSiteNavigation));
  }

  async doubleClickEditSiteNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.editSiteNavigation));
  }

  async expectEditSiteNavigationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.editSiteNavigation), timeoutMs, soft);
  }

  async clickAddToFavorites(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.addToFavorites));
  }

  async doubleClickAddToFavorites(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.addToFavorites));
  }

  async expectAddToFavoritesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.addToFavorites), timeoutMs, soft);
  }

  async clickSiteAccess(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.siteAccess));
  }

  async doubleClickSiteAccess(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.siteAccess));
  }

  async expectSiteAccessVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.siteAccess), timeoutMs, soft);
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.new));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.new), timeoutMs, soft);
  }

  async clickPromote(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.promote));
  }

  async doubleClickPromote(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.promote));
  }

  async expectPromoteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.promote), timeoutMs, soft);
  }

  async clickPageDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.pageDetails));
  }

  async doubleClickPageDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.pageDetails));
  }

  async expectPageDetailsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.pageDetails), timeoutMs, soft);
  }

  async clickPreview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.preview));
  }

  async doubleClickPreview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.preview));
  }

  async expectPreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.preview), timeoutMs, soft);
  }

  async clickImmersiveReader(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.immersiveReader));
  }

  async doubleClickImmersiveReader(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.immersiveReader));
  }

  async expectImmersiveReaderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.immersiveReader), timeoutMs, soft);
  }

  async clickAnalytics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.analytics));
  }

  async doubleClickAnalytics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.analytics));
  }

  async expectAnalyticsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.analytics), timeoutMs, soft);
  }

  async clickPosted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.posted));
  }

  async doubleClickPosted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.posted));
  }

  async expectPostedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.posted), timeoutMs, soft);
  }

  async clickShare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.share));
  }

  async doubleClickShare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.share));
  }

  async expectShareVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.share), timeoutMs, soft);
  }

  async clickEditPage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.editPage));
  }

  async doubleClickEditPage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.editPage));
  }

  async expectEditPageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.editPage), timeoutMs, soft);
  }

  async clickHideHeaderAndNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.hideHeaderAndNavigation));
  }

  async doubleClickHideHeaderAndNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.hideHeaderAndNavigation));
  }

  async expectHideHeaderAndNavigationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), timeoutMs, soft);
  }

  async getInnerTextTraining(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AiPage.L.training));
  }

  async expectTrainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.training), timeoutMs, soft);
  }

  async getInnerTextAiEssentialsForEnterprise(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise));
  }

  async expectAiEssentialsForEnterpriseVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), timeoutMs, soft);
  }

  async getInnerTextVideo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AiPage.L.video));
  }

  async expectVideoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.video), timeoutMs, soft);
  }

  async getInnerTextDisplayVideosFromOneDrive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AiPage.L.displayVideosFromOneDrive));
  }

  async expectDisplayVideosFromOneDriveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), timeoutMs, soft);
  }

  async clickSelectVideo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.selectVideo));
  }

  async doubleClickSelectVideo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.selectVideo));
  }

  async expectSelectVideoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.selectVideo), timeoutMs, soft);
  }

  async getInnerTextAdditionalTrainings(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AiPage.L.additionalTrainings));
  }

  async expectAdditionalTrainingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.additionalTrainings), timeoutMs, soft);
  }

  async clickLanguageSwitcher(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.languageSwitcher));
  }

  async expectLanguageSwitcherVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.languageSwitcher), timeoutMs, soft);
  }

  async clickLanguageSelectedEnglish(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.languageSelectedEnglish));
  }

  async expectLanguageSelectedEnglishVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.languageSelectedEnglish), timeoutMs, soft);
  }

  async clickEnglish(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.english));
  }

  async expectEnglishVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AiPage.L.english), timeoutMs, soft);
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
    await expectPageTitle(this.page, 'AI', timeoutMs);
  }


  async doubleClickSkipToMainContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.skipToMainContent));
  }

  async longPressSkipToMainContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.skipToMainContent));
  }

  async expectSkipToMainContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.skipToMainContent), expected, timeoutMs);
  }

  async expectSkipToMainContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.skipToMainContent), substring, timeoutMs);
  }

  async expectSkipToMainContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.skipToMainContent), value, timeoutMs);
  }

  async expectSkipToMainContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.skipToMainContent), count, timeoutMs);
  }

  async scrollSkipToMainContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.skipToMainContent));
  }

  async longPressAppLauncher(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.appLauncher));
  }

  async expectAppLauncherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.appLauncher), expected, timeoutMs);
  }

  async expectAppLauncherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.appLauncher), substring, timeoutMs);
  }

  async expectAppLauncherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.appLauncher), value, timeoutMs);
  }

  async expectAppLauncherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.appLauncher), count, timeoutMs);
  }

  async scrollAppLauncherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.appLauncher));
  }

  async doubleClickUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.ukg));
  }

  async longPressUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.ukg));
  }

  async expectUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.ukg), timeoutMs);
  }

  async expectUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.ukg), expected, timeoutMs);
  }

  async expectUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.ukg), substring, timeoutMs);
  }

  async expectUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.ukg), value, timeoutMs);
  }

  async expectUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.ukg), timeoutMs);
  }

  async expectUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.ukg), timeoutMs);
  }

  async expectUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.ukg), timeoutMs);
  }

  async expectUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.ukg), timeoutMs);
  }

  async expectUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.ukg), timeoutMs);
  }

  async expectUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.ukg), count, timeoutMs);
  }

  async scrollUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.ukg));
  }

  async doubleClickGoToSharePoint(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.goToSharePoint));
  }

  async longPressGoToSharePoint(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.goToSharePoint));
  }

  async expectGoToSharePointHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.goToSharePoint), timeoutMs);
  }

  async expectGoToSharePointText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.goToSharePoint), expected, timeoutMs);
  }

  async expectGoToSharePointContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.goToSharePoint), substring, timeoutMs);
  }

  async expectGoToSharePointValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.goToSharePoint), value, timeoutMs);
  }

  async expectGoToSharePointEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.goToSharePoint), timeoutMs);
  }

  async expectGoToSharePointDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.goToSharePoint), timeoutMs);
  }

  async expectGoToSharePointChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.goToSharePoint), timeoutMs);
  }

  async expectGoToSharePointUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.goToSharePoint), timeoutMs);
  }

  async expectGoToSharePointFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.goToSharePoint), timeoutMs);
  }

  async expectGoToSharePointCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.goToSharePoint), count, timeoutMs);
  }

  async scrollGoToSharePointIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.goToSharePoint));
  }

  async typeTextMssxsbInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AiPage.L.mssxsbInput), value);
  }

  async expectMssxsbInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.mssxsbInput), timeoutMs);
  }

  async expectMssxsbInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.mssxsbInput), expected, timeoutMs);
  }

  async expectMssxsbInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.mssxsbInput), substring, timeoutMs);
  }

  async expectMssxsbInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.mssxsbInput), value, timeoutMs);
  }

  async expectMssxsbInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.mssxsbInput), timeoutMs);
  }

  async expectMssxsbInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.mssxsbInput), timeoutMs);
  }

  async expectMssxsbInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.mssxsbInput), timeoutMs);
  }

  async expectMssxsbInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.mssxsbInput), timeoutMs);
  }

  async expectMssxsbInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.mssxsbInput), timeoutMs);
  }

  async expectMssxsbInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.mssxsbInput), count, timeoutMs);
  }

  async scrollMssxsbInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.mssxsbInput));
  }

  async longPressNextStepsToImprove(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.nextStepsToImprove));
  }

  async expectNextStepsToImproveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.nextStepsToImprove), timeoutMs);
  }

  async expectNextStepsToImproveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.nextStepsToImprove), expected, timeoutMs);
  }

  async expectNextStepsToImproveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.nextStepsToImprove), substring, timeoutMs);
  }

  async expectNextStepsToImproveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.nextStepsToImprove), value, timeoutMs);
  }

  async expectNextStepsToImproveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.nextStepsToImprove), timeoutMs);
  }

  async expectNextStepsToImproveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.nextStepsToImprove), timeoutMs);
  }

  async expectNextStepsToImproveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.nextStepsToImprove), timeoutMs);
  }

  async expectNextStepsToImproveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.nextStepsToImprove), timeoutMs);
  }

  async expectNextStepsToImproveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.nextStepsToImprove), timeoutMs);
  }

  async expectNextStepsToImproveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.nextStepsToImprove), count, timeoutMs);
  }

  async scrollNextStepsToImproveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.nextStepsToImprove));
  }

  async longPressProvideFeedbackToMicrosoft(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft));
  }

  async expectProvideFeedbackToMicrosoftHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), expected, timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), substring, timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), value, timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), timeoutMs);
  }

  async expectProvideFeedbackToMicrosoftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft), count, timeoutMs);
  }

  async scrollProvideFeedbackToMicrosoftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.provideFeedbackToMicrosoft));
  }

  async longPressSettings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.settings));
  }

  async expectSettingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.settings), timeoutMs);
  }

  async expectSettingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.settings), expected, timeoutMs);
  }

  async expectSettingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.settings), substring, timeoutMs);
  }

  async expectSettingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.settings), value, timeoutMs);
  }

  async expectSettingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.settings), timeoutMs);
  }

  async expectSettingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.settings), timeoutMs);
  }

  async expectSettingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.settings), timeoutMs);
  }

  async expectSettingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.settings), timeoutMs);
  }

  async expectSettingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.settings), timeoutMs);
  }

  async expectSettingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.settings), count, timeoutMs);
  }

  async scrollSettingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.settings));
  }

  async longPressHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.help));
  }

  async expectHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.help), timeoutMs);
  }

  async expectHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.help), expected, timeoutMs);
  }

  async expectHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.help), substring, timeoutMs);
  }

  async expectHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.help), value, timeoutMs);
  }

  async expectHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.help), timeoutMs);
  }

  async expectHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.help), timeoutMs);
  }

  async expectHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.help), timeoutMs);
  }

  async expectHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.help), timeoutMs);
  }

  async expectHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.help), timeoutMs);
  }

  async expectHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.help), count, timeoutMs);
  }

  async scrollHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.help));
  }

  async longPressAccountManagerForDrake(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.accountManagerForDrake));
  }

  async expectAccountManagerForDrakeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.accountManagerForDrake), timeoutMs);
  }

  async expectAccountManagerForDrakeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.accountManagerForDrake), expected, timeoutMs);
  }

  async expectAccountManagerForDrakeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.accountManagerForDrake), substring, timeoutMs);
  }

  async expectAccountManagerForDrakeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.accountManagerForDrake), value, timeoutMs);
  }

  async expectAccountManagerForDrakeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.accountManagerForDrake), timeoutMs);
  }

  async expectAccountManagerForDrakeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.accountManagerForDrake), timeoutMs);
  }

  async expectAccountManagerForDrakeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.accountManagerForDrake), timeoutMs);
  }

  async expectAccountManagerForDrakeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.accountManagerForDrake), timeoutMs);
  }

  async expectAccountManagerForDrakeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.accountManagerForDrake), timeoutMs);
  }

  async expectAccountManagerForDrakeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.accountManagerForDrake), count, timeoutMs);
  }

  async scrollAccountManagerForDrakeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.accountManagerForDrake));
  }

  async longPressDiscoverPressEnterTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.discoverPressEnterTo));
  }

  async expectDiscoverPressEnterToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.discoverPressEnterTo), timeoutMs);
  }

  async expectDiscoverPressEnterToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.discoverPressEnterTo), expected, timeoutMs);
  }

  async expectDiscoverPressEnterToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.discoverPressEnterTo), substring, timeoutMs);
  }

  async expectDiscoverPressEnterToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.discoverPressEnterTo), value, timeoutMs);
  }

  async expectDiscoverPressEnterToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.discoverPressEnterTo), timeoutMs);
  }

  async expectDiscoverPressEnterToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.discoverPressEnterTo), timeoutMs);
  }

  async expectDiscoverPressEnterToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.discoverPressEnterTo), timeoutMs);
  }

  async expectDiscoverPressEnterToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.discoverPressEnterTo), timeoutMs);
  }

  async expectDiscoverPressEnterToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.discoverPressEnterTo), timeoutMs);
  }

  async expectDiscoverPressEnterToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.discoverPressEnterTo), count, timeoutMs);
  }

  async scrollDiscoverPressEnterToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.discoverPressEnterTo));
  }

  async longPressPublishPressEnterTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.publishPressEnterTo));
  }

  async expectPublishPressEnterToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.publishPressEnterTo), timeoutMs);
  }

  async expectPublishPressEnterToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.publishPressEnterTo), expected, timeoutMs);
  }

  async expectPublishPressEnterToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.publishPressEnterTo), substring, timeoutMs);
  }

  async expectPublishPressEnterToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.publishPressEnterTo), value, timeoutMs);
  }

  async expectPublishPressEnterToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.publishPressEnterTo), timeoutMs);
  }

  async expectPublishPressEnterToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.publishPressEnterTo), timeoutMs);
  }

  async expectPublishPressEnterToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.publishPressEnterTo), timeoutMs);
  }

  async expectPublishPressEnterToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.publishPressEnterTo), timeoutMs);
  }

  async expectPublishPressEnterToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.publishPressEnterTo), timeoutMs);
  }

  async expectPublishPressEnterToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.publishPressEnterTo), count, timeoutMs);
  }

  async scrollPublishPressEnterToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.publishPressEnterTo));
  }

  async longPressBuildPressEnterTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.buildPressEnterTo));
  }

  async expectBuildPressEnterToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.buildPressEnterTo), timeoutMs);
  }

  async expectBuildPressEnterToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.buildPressEnterTo), expected, timeoutMs);
  }

  async expectBuildPressEnterToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.buildPressEnterTo), substring, timeoutMs);
  }

  async expectBuildPressEnterToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.buildPressEnterTo), value, timeoutMs);
  }

  async expectBuildPressEnterToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.buildPressEnterTo), timeoutMs);
  }

  async expectBuildPressEnterToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.buildPressEnterTo), timeoutMs);
  }

  async expectBuildPressEnterToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.buildPressEnterTo), timeoutMs);
  }

  async expectBuildPressEnterToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.buildPressEnterTo), timeoutMs);
  }

  async expectBuildPressEnterToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.buildPressEnterTo), timeoutMs);
  }

  async expectBuildPressEnterToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.buildPressEnterTo), count, timeoutMs);
  }

  async scrollBuildPressEnterToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.buildPressEnterTo));
  }

  async longPressOneDrivePressEnterTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.oneDrivePressEnterTo));
  }

  async expectOneDrivePressEnterToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), timeoutMs);
  }

  async expectOneDrivePressEnterToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), expected, timeoutMs);
  }

  async expectOneDrivePressEnterToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), substring, timeoutMs);
  }

  async expectOneDrivePressEnterToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), value, timeoutMs);
  }

  async expectOneDrivePressEnterToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), timeoutMs);
  }

  async expectOneDrivePressEnterToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), timeoutMs);
  }

  async expectOneDrivePressEnterToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), timeoutMs);
  }

  async expectOneDrivePressEnterToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), timeoutMs);
  }

  async expectOneDrivePressEnterToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), timeoutMs);
  }

  async expectOneDrivePressEnterToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.oneDrivePressEnterTo), count, timeoutMs);
  }

  async scrollOneDrivePressEnterToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.oneDrivePressEnterTo));
  }

  async doubleClickUkgHomeQaHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHub));
  }

  async longPressUkgHomeQaHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHub));
  }

  async expectUkgHomeQaHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.ukgHomeQaHub), timeoutMs);
  }

  async expectUkgHomeQaHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.ukgHomeQaHub), expected, timeoutMs);
  }

  async expectUkgHomeQaHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.ukgHomeQaHub), substring, timeoutMs);
  }

  async expectUkgHomeQaHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.ukgHomeQaHub), value, timeoutMs);
  }

  async expectUkgHomeQaHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.ukgHomeQaHub), timeoutMs);
  }

  async expectUkgHomeQaHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.ukgHomeQaHub), timeoutMs);
  }

  async expectUkgHomeQaHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.ukgHomeQaHub), timeoutMs);
  }

  async expectUkgHomeQaHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.ukgHomeQaHub), timeoutMs);
  }

  async expectUkgHomeQaHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.ukgHomeQaHub), timeoutMs);
  }

  async expectUkgHomeQaHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.ukgHomeQaHub), count, timeoutMs);
  }

  async scrollUkgHomeQaHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHub));
  }

  async doubleClickUkgCommons(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.ukgCommons));
  }

  async longPressUkgCommons(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.ukgCommons));
  }

  async expectUkgCommonsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.ukgCommons), timeoutMs);
  }

  async expectUkgCommonsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.ukgCommons), expected, timeoutMs);
  }

  async expectUkgCommonsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.ukgCommons), substring, timeoutMs);
  }

  async expectUkgCommonsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.ukgCommons), value, timeoutMs);
  }

  async expectUkgCommonsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.ukgCommons), timeoutMs);
  }

  async expectUkgCommonsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.ukgCommons), timeoutMs);
  }

  async expectUkgCommonsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.ukgCommons), timeoutMs);
  }

  async expectUkgCommonsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.ukgCommons), timeoutMs);
  }

  async expectUkgCommonsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.ukgCommons), timeoutMs);
  }

  async expectUkgCommonsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.ukgCommons), count, timeoutMs);
  }

  async scrollUkgCommonsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.ukgCommons));
  }

  async longPressUkgCommonsSubmenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.ukgCommonsSubmenu));
  }

  async expectUkgCommonsSubmenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), timeoutMs);
  }

  async expectUkgCommonsSubmenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), expected, timeoutMs);
  }

  async expectUkgCommonsSubmenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), substring, timeoutMs);
  }

  async expectUkgCommonsSubmenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), value, timeoutMs);
  }

  async expectUkgCommonsSubmenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), timeoutMs);
  }

  async expectUkgCommonsSubmenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), timeoutMs);
  }

  async expectUkgCommonsSubmenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), timeoutMs);
  }

  async expectUkgCommonsSubmenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), timeoutMs);
  }

  async expectUkgCommonsSubmenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), timeoutMs);
  }

  async expectUkgCommonsSubmenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.ukgCommonsSubmenu), count, timeoutMs);
  }

  async scrollUkgCommonsSubmenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.ukgCommonsSubmenu));
  }

  async longPressEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.edit));
  }

  async expectEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.edit), timeoutMs);
  }

  async expectEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.edit), expected, timeoutMs);
  }

  async expectEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.edit), substring, timeoutMs);
  }

  async expectEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.edit), value, timeoutMs);
  }

  async expectEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.edit), timeoutMs);
  }

  async expectEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.edit), timeoutMs);
  }

  async expectEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.edit), timeoutMs);
  }

  async expectEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.edit), timeoutMs);
  }

  async expectEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.edit), timeoutMs);
  }

  async expectEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.edit), count, timeoutMs);
  }

  async scrollEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.edit));
  }

  async doubleClickMoreInfo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.moreInfo));
  }

  async longPressMoreInfo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.moreInfo));
  }

  async expectMoreInfoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.moreInfo), timeoutMs);
  }

  async expectMoreInfoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.moreInfo), expected, timeoutMs);
  }

  async expectMoreInfoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.moreInfo), substring, timeoutMs);
  }

  async expectMoreInfoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.moreInfo), value, timeoutMs);
  }

  async expectMoreInfoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.moreInfo), timeoutMs);
  }

  async expectMoreInfoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.moreInfo), timeoutMs);
  }

  async expectMoreInfoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.moreInfo), timeoutMs);
  }

  async expectMoreInfoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.moreInfo), timeoutMs);
  }

  async expectMoreInfoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.moreInfo), timeoutMs);
  }

  async expectMoreInfoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.moreInfo), count, timeoutMs);
  }

  async scrollMoreInfoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.moreInfo));
  }

  async doubleClickUkgHomeQaHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHome));
  }

  async longPressUkgHomeQaHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHome));
  }

  async expectUkgHomeQaHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.ukgHomeQaHome), timeoutMs);
  }

  async expectUkgHomeQaHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.ukgHomeQaHome), expected, timeoutMs);
  }

  async expectUkgHomeQaHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.ukgHomeQaHome), substring, timeoutMs);
  }

  async expectUkgHomeQaHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.ukgHomeQaHome), value, timeoutMs);
  }

  async expectUkgHomeQaHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.ukgHomeQaHome), timeoutMs);
  }

  async expectUkgHomeQaHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.ukgHomeQaHome), timeoutMs);
  }

  async expectUkgHomeQaHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.ukgHomeQaHome), timeoutMs);
  }

  async expectUkgHomeQaHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.ukgHomeQaHome), timeoutMs);
  }

  async expectUkgHomeQaHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.ukgHomeQaHome), timeoutMs);
  }

  async expectUkgHomeQaHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.ukgHomeQaHome), count, timeoutMs);
  }

  async scrollUkgHomeQaHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQaHome));
  }

  async doubleClickUkgHomeQa(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQa));
  }

  async longPressUkgHomeQa(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQa));
  }

  async expectUkgHomeQaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.ukgHomeQa), expected, timeoutMs);
  }

  async expectUkgHomeQaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.ukgHomeQa), substring, timeoutMs);
  }

  async expectUkgHomeQaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.ukgHomeQa), value, timeoutMs);
  }

  async expectUkgHomeQaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.ukgHomeQa), count, timeoutMs);
  }

  async scrollUkgHomeQaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.ukgHomeQa));
  }

  async doubleClickAnnouncementsQa(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.announcementsQa));
  }

  async longPressAnnouncementsQa(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.announcementsQa));
  }

  async expectAnnouncementsQaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.announcementsQa), timeoutMs);
  }

  async expectAnnouncementsQaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.announcementsQa), expected, timeoutMs);
  }

  async expectAnnouncementsQaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.announcementsQa), substring, timeoutMs);
  }

  async expectAnnouncementsQaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.announcementsQa), value, timeoutMs);
  }

  async expectAnnouncementsQaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.announcementsQa), timeoutMs);
  }

  async expectAnnouncementsQaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.announcementsQa), timeoutMs);
  }

  async expectAnnouncementsQaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.announcementsQa), timeoutMs);
  }

  async expectAnnouncementsQaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.announcementsQa), timeoutMs);
  }

  async expectAnnouncementsQaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.announcementsQa), timeoutMs);
  }

  async expectAnnouncementsQaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.announcementsQa), count, timeoutMs);
  }

  async scrollAnnouncementsQaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.announcementsQa));
  }

  async doubleClickJobs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.jobs));
  }

  async longPressJobs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.jobs));
  }

  async expectJobsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.jobs), timeoutMs);
  }

  async expectJobsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.jobs), expected, timeoutMs);
  }

  async expectJobsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.jobs), substring, timeoutMs);
  }

  async expectJobsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.jobs), value, timeoutMs);
  }

  async expectJobsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.jobs), timeoutMs);
  }

  async expectJobsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.jobs), timeoutMs);
  }

  async expectJobsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.jobs), timeoutMs);
  }

  async expectJobsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.jobs), timeoutMs);
  }

  async expectJobsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.jobs), timeoutMs);
  }

  async expectJobsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.jobs), count, timeoutMs);
  }

  async scrollJobsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.jobs));
  }

  async doubleClickCareer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.career));
  }

  async longPressCareer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.career));
  }

  async expectCareerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.career), timeoutMs);
  }

  async expectCareerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.career), expected, timeoutMs);
  }

  async expectCareerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.career), substring, timeoutMs);
  }

  async expectCareerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.career), value, timeoutMs);
  }

  async expectCareerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.career), timeoutMs);
  }

  async expectCareerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.career), timeoutMs);
  }

  async expectCareerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.career), timeoutMs);
  }

  async expectCareerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.career), timeoutMs);
  }

  async expectCareerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.career), timeoutMs);
  }

  async expectCareerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.career), count, timeoutMs);
  }

  async scrollCareerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.career));
  }

  async longPressEditSiteNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.editSiteNavigation));
  }

  async expectEditSiteNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.editSiteNavigation), timeoutMs);
  }

  async expectEditSiteNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.editSiteNavigation), expected, timeoutMs);
  }

  async expectEditSiteNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.editSiteNavigation), substring, timeoutMs);
  }

  async expectEditSiteNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.editSiteNavigation), value, timeoutMs);
  }

  async expectEditSiteNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.editSiteNavigation), timeoutMs);
  }

  async expectEditSiteNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.editSiteNavigation), timeoutMs);
  }

  async expectEditSiteNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.editSiteNavigation), timeoutMs);
  }

  async expectEditSiteNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.editSiteNavigation), timeoutMs);
  }

  async expectEditSiteNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.editSiteNavigation), timeoutMs);
  }

  async expectEditSiteNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.editSiteNavigation), count, timeoutMs);
  }

  async scrollEditSiteNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.editSiteNavigation));
  }

  async longPressAddToFavorites(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.addToFavorites));
  }

  async expectAddToFavoritesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.addToFavorites), timeoutMs);
  }

  async expectAddToFavoritesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.addToFavorites), expected, timeoutMs);
  }

  async expectAddToFavoritesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.addToFavorites), substring, timeoutMs);
  }

  async expectAddToFavoritesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.addToFavorites), value, timeoutMs);
  }

  async expectAddToFavoritesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.addToFavorites), timeoutMs);
  }

  async expectAddToFavoritesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.addToFavorites), timeoutMs);
  }

  async expectAddToFavoritesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.addToFavorites), timeoutMs);
  }

  async expectAddToFavoritesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.addToFavorites), timeoutMs);
  }

  async expectAddToFavoritesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.addToFavorites), timeoutMs);
  }

  async expectAddToFavoritesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.addToFavorites), count, timeoutMs);
  }

  async scrollAddToFavoritesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.addToFavorites));
  }

  async longPressSiteAccess(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.siteAccess));
  }

  async expectSiteAccessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.siteAccess), timeoutMs);
  }

  async expectSiteAccessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.siteAccess), expected, timeoutMs);
  }

  async expectSiteAccessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.siteAccess), substring, timeoutMs);
  }

  async expectSiteAccessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.siteAccess), value, timeoutMs);
  }

  async expectSiteAccessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.siteAccess), timeoutMs);
  }

  async expectSiteAccessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.siteAccess), timeoutMs);
  }

  async expectSiteAccessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.siteAccess), timeoutMs);
  }

  async expectSiteAccessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.siteAccess), timeoutMs);
  }

  async expectSiteAccessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.siteAccess), timeoutMs);
  }

  async expectSiteAccessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.siteAccess), count, timeoutMs);
  }

  async scrollSiteAccessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.siteAccess));
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.new));
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.new), substring, timeoutMs);
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.new), value, timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.new), timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.new), count, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.new));
  }

  async longPressPromote(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.promote));
  }

  async expectPromoteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.promote), timeoutMs);
  }

  async expectPromoteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.promote), expected, timeoutMs);
  }

  async expectPromoteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.promote), substring, timeoutMs);
  }

  async expectPromoteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.promote), value, timeoutMs);
  }

  async expectPromoteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.promote), timeoutMs);
  }

  async expectPromoteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.promote), timeoutMs);
  }

  async expectPromoteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.promote), timeoutMs);
  }

  async expectPromoteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.promote), timeoutMs);
  }

  async expectPromoteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.promote), timeoutMs);
  }

  async expectPromoteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.promote), count, timeoutMs);
  }

  async scrollPromoteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.promote));
  }

  async longPressPageDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.pageDetails));
  }

  async expectPageDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.pageDetails), timeoutMs);
  }

  async expectPageDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.pageDetails), expected, timeoutMs);
  }

  async expectPageDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.pageDetails), substring, timeoutMs);
  }

  async expectPageDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.pageDetails), value, timeoutMs);
  }

  async expectPageDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.pageDetails), timeoutMs);
  }

  async expectPageDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.pageDetails), timeoutMs);
  }

  async expectPageDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.pageDetails), timeoutMs);
  }

  async expectPageDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.pageDetails), timeoutMs);
  }

  async expectPageDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.pageDetails), timeoutMs);
  }

  async expectPageDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.pageDetails), count, timeoutMs);
  }

  async scrollPageDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.pageDetails));
  }

  async longPressPreview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.preview));
  }

  async expectPreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.preview), timeoutMs);
  }

  async expectPreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.preview), expected, timeoutMs);
  }

  async expectPreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.preview), substring, timeoutMs);
  }

  async expectPreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.preview), value, timeoutMs);
  }

  async expectPreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.preview), timeoutMs);
  }

  async expectPreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.preview), timeoutMs);
  }

  async expectPreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.preview), timeoutMs);
  }

  async expectPreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.preview), timeoutMs);
  }

  async expectPreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.preview), timeoutMs);
  }

  async expectPreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.preview), count, timeoutMs);
  }

  async scrollPreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.preview));
  }

  async longPressImmersiveReader(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.immersiveReader));
  }

  async expectImmersiveReaderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.immersiveReader), timeoutMs);
  }

  async expectImmersiveReaderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.immersiveReader), expected, timeoutMs);
  }

  async expectImmersiveReaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.immersiveReader), substring, timeoutMs);
  }

  async expectImmersiveReaderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.immersiveReader), value, timeoutMs);
  }

  async expectImmersiveReaderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.immersiveReader), timeoutMs);
  }

  async expectImmersiveReaderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.immersiveReader), timeoutMs);
  }

  async expectImmersiveReaderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.immersiveReader), timeoutMs);
  }

  async expectImmersiveReaderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.immersiveReader), timeoutMs);
  }

  async expectImmersiveReaderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.immersiveReader), timeoutMs);
  }

  async expectImmersiveReaderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.immersiveReader), count, timeoutMs);
  }

  async scrollImmersiveReaderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.immersiveReader));
  }

  async longPressAnalytics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.analytics));
  }

  async expectAnalyticsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.analytics), timeoutMs);
  }

  async expectAnalyticsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.analytics), expected, timeoutMs);
  }

  async expectAnalyticsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.analytics), substring, timeoutMs);
  }

  async expectAnalyticsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.analytics), value, timeoutMs);
  }

  async expectAnalyticsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.analytics), timeoutMs);
  }

  async expectAnalyticsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.analytics), timeoutMs);
  }

  async expectAnalyticsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.analytics), timeoutMs);
  }

  async expectAnalyticsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.analytics), timeoutMs);
  }

  async expectAnalyticsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.analytics), timeoutMs);
  }

  async expectAnalyticsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.analytics), count, timeoutMs);
  }

  async scrollAnalyticsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.analytics));
  }

  async longPressPosted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.posted));
  }

  async expectPostedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.posted), timeoutMs);
  }

  async expectPostedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.posted), expected, timeoutMs);
  }

  async expectPostedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.posted), substring, timeoutMs);
  }

  async expectPostedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.posted), value, timeoutMs);
  }

  async expectPostedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.posted), timeoutMs);
  }

  async expectPostedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.posted), timeoutMs);
  }

  async expectPostedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.posted), timeoutMs);
  }

  async expectPostedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.posted), timeoutMs);
  }

  async expectPostedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.posted), timeoutMs);
  }

  async expectPostedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.posted), count, timeoutMs);
  }

  async scrollPostedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.posted));
  }

  async longPressShare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.share));
  }

  async expectShareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.share), timeoutMs);
  }

  async expectShareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.share), expected, timeoutMs);
  }

  async expectShareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.share), substring, timeoutMs);
  }

  async expectShareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.share), value, timeoutMs);
  }

  async expectShareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.share), timeoutMs);
  }

  async expectShareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.share), timeoutMs);
  }

  async expectShareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.share), timeoutMs);
  }

  async expectShareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.share), timeoutMs);
  }

  async expectShareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.share), timeoutMs);
  }

  async expectShareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.share), count, timeoutMs);
  }

  async scrollShareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.share));
  }

  async longPressEditPage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.editPage));
  }

  async expectEditPageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.editPage), timeoutMs);
  }

  async expectEditPageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.editPage), expected, timeoutMs);
  }

  async expectEditPageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.editPage), substring, timeoutMs);
  }

  async expectEditPageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.editPage), value, timeoutMs);
  }

  async expectEditPageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.editPage), timeoutMs);
  }

  async expectEditPageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.editPage), timeoutMs);
  }

  async expectEditPageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.editPage), timeoutMs);
  }

  async expectEditPageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.editPage), timeoutMs);
  }

  async expectEditPageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.editPage), timeoutMs);
  }

  async expectEditPageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.editPage), count, timeoutMs);
  }

  async scrollEditPageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.editPage));
  }

  async longPressHideHeaderAndNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.hideHeaderAndNavigation));
  }

  async expectHideHeaderAndNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), timeoutMs);
  }

  async expectHideHeaderAndNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), expected, timeoutMs);
  }

  async expectHideHeaderAndNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), substring, timeoutMs);
  }

  async expectHideHeaderAndNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), value, timeoutMs);
  }

  async expectHideHeaderAndNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), timeoutMs);
  }

  async expectHideHeaderAndNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), timeoutMs);
  }

  async expectHideHeaderAndNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), timeoutMs);
  }

  async expectHideHeaderAndNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), timeoutMs);
  }

  async expectHideHeaderAndNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), timeoutMs);
  }

  async expectHideHeaderAndNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.hideHeaderAndNavigation), count, timeoutMs);
  }

  async scrollHideHeaderAndNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.hideHeaderAndNavigation));
  }

  async clickTraining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.training));
  }

  async doubleClickTraining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.training));
  }

  async longPressTraining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.training));
  }

  async expectTrainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.training), timeoutMs);
  }

  async expectTrainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.training), expected, timeoutMs);
  }

  async expectTrainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.training), substring, timeoutMs);
  }

  async expectTrainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.training), value, timeoutMs);
  }

  async expectTrainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.training), timeoutMs);
  }

  async expectTrainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.training), timeoutMs);
  }

  async expectTrainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.training), timeoutMs);
  }

  async expectTrainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.training), timeoutMs);
  }

  async expectTrainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.training), timeoutMs);
  }

  async expectTrainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.training), count, timeoutMs);
  }

  async scrollTrainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.training));
  }

  async clickAiEssentialsForEnterprise(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise));
  }

  async doubleClickAiEssentialsForEnterprise(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise));
  }

  async longPressAiEssentialsForEnterprise(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise));
  }

  async expectAiEssentialsForEnterpriseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), timeoutMs);
  }

  async expectAiEssentialsForEnterpriseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), expected, timeoutMs);
  }

  async expectAiEssentialsForEnterpriseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), substring, timeoutMs);
  }

  async expectAiEssentialsForEnterpriseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), value, timeoutMs);
  }

  async expectAiEssentialsForEnterpriseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), timeoutMs);
  }

  async expectAiEssentialsForEnterpriseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), timeoutMs);
  }

  async expectAiEssentialsForEnterpriseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), timeoutMs);
  }

  async expectAiEssentialsForEnterpriseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), timeoutMs);
  }

  async expectAiEssentialsForEnterpriseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), timeoutMs);
  }

  async expectAiEssentialsForEnterpriseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise), count, timeoutMs);
  }

  async scrollAiEssentialsForEnterpriseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.aiEssentialsForEnterprise));
  }

  async clickVideo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.video));
  }

  async doubleClickVideo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.video));
  }

  async longPressVideo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.video));
  }

  async expectVideoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.video), timeoutMs);
  }

  async expectVideoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.video), expected, timeoutMs);
  }

  async expectVideoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.video), substring, timeoutMs);
  }

  async expectVideoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.video), value, timeoutMs);
  }

  async expectVideoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.video), timeoutMs);
  }

  async expectVideoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.video), timeoutMs);
  }

  async expectVideoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.video), timeoutMs);
  }

  async expectVideoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.video), timeoutMs);
  }

  async expectVideoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.video), timeoutMs);
  }

  async expectVideoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.video), count, timeoutMs);
  }

  async scrollVideoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.video));
  }

  async clickDisplayVideosFromOneDrive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.displayVideosFromOneDrive));
  }

  async doubleClickDisplayVideosFromOneDrive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.displayVideosFromOneDrive));
  }

  async longPressDisplayVideosFromOneDrive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.displayVideosFromOneDrive));
  }

  async expectDisplayVideosFromOneDriveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), timeoutMs);
  }

  async expectDisplayVideosFromOneDriveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), expected, timeoutMs);
  }

  async expectDisplayVideosFromOneDriveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), substring, timeoutMs);
  }

  async expectDisplayVideosFromOneDriveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), value, timeoutMs);
  }

  async expectDisplayVideosFromOneDriveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), timeoutMs);
  }

  async expectDisplayVideosFromOneDriveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), timeoutMs);
  }

  async expectDisplayVideosFromOneDriveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), timeoutMs);
  }

  async expectDisplayVideosFromOneDriveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), timeoutMs);
  }

  async expectDisplayVideosFromOneDriveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), timeoutMs);
  }

  async expectDisplayVideosFromOneDriveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.displayVideosFromOneDrive), count, timeoutMs);
  }

  async scrollDisplayVideosFromOneDriveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.displayVideosFromOneDrive));
  }

  async longPressSelectVideo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.selectVideo));
  }

  async expectSelectVideoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.selectVideo), timeoutMs);
  }

  async expectSelectVideoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.selectVideo), expected, timeoutMs);
  }

  async expectSelectVideoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.selectVideo), substring, timeoutMs);
  }

  async expectSelectVideoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.selectVideo), value, timeoutMs);
  }

  async expectSelectVideoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.selectVideo), timeoutMs);
  }

  async expectSelectVideoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.selectVideo), timeoutMs);
  }

  async expectSelectVideoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.selectVideo), timeoutMs);
  }

  async expectSelectVideoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.selectVideo), timeoutMs);
  }

  async expectSelectVideoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.selectVideo), timeoutMs);
  }

  async expectSelectVideoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.selectVideo), count, timeoutMs);
  }

  async scrollSelectVideoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.selectVideo));
  }

  async clickAdditionalTrainings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AiPage.L.additionalTrainings));
  }

  async doubleClickAdditionalTrainings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.additionalTrainings));
  }

  async longPressAdditionalTrainings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.additionalTrainings));
  }

  async expectAdditionalTrainingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.additionalTrainings), timeoutMs);
  }

  async expectAdditionalTrainingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.additionalTrainings), expected, timeoutMs);
  }

  async expectAdditionalTrainingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.additionalTrainings), substring, timeoutMs);
  }

  async expectAdditionalTrainingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.additionalTrainings), value, timeoutMs);
  }

  async expectAdditionalTrainingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.additionalTrainings), timeoutMs);
  }

  async expectAdditionalTrainingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.additionalTrainings), timeoutMs);
  }

  async expectAdditionalTrainingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.additionalTrainings), timeoutMs);
  }

  async expectAdditionalTrainingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.additionalTrainings), timeoutMs);
  }

  async expectAdditionalTrainingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.additionalTrainings), timeoutMs);
  }

  async expectAdditionalTrainingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.additionalTrainings), count, timeoutMs);
  }

  async scrollAdditionalTrainingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.additionalTrainings));
  }

  async doubleClickLanguageSwitcher(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.languageSwitcher));
  }

  async longPressLanguageSwitcher(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.languageSwitcher));
  }

  async expectLanguageSwitcherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.languageSwitcher), timeoutMs);
  }

  async expectLanguageSwitcherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.languageSwitcher), expected, timeoutMs);
  }

  async expectLanguageSwitcherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.languageSwitcher), substring, timeoutMs);
  }

  async expectLanguageSwitcherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.languageSwitcher), value, timeoutMs);
  }

  async expectLanguageSwitcherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.languageSwitcher), timeoutMs);
  }

  async expectLanguageSwitcherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.languageSwitcher), timeoutMs);
  }

  async expectLanguageSwitcherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.languageSwitcher), timeoutMs);
  }

  async expectLanguageSwitcherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.languageSwitcher), timeoutMs);
  }

  async expectLanguageSwitcherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.languageSwitcher), timeoutMs);
  }

  async expectLanguageSwitcherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.languageSwitcher), count, timeoutMs);
  }

  async scrollLanguageSwitcherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.languageSwitcher));
  }

  async doubleClickLanguageSelectedEnglish(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.languageSelectedEnglish));
  }

  async longPressLanguageSelectedEnglish(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.languageSelectedEnglish));
  }

  async expectLanguageSelectedEnglishHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.languageSelectedEnglish), timeoutMs);
  }

  async expectLanguageSelectedEnglishText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.languageSelectedEnglish), expected, timeoutMs);
  }

  async expectLanguageSelectedEnglishContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.languageSelectedEnglish), substring, timeoutMs);
  }

  async expectLanguageSelectedEnglishValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.languageSelectedEnglish), value, timeoutMs);
  }

  async expectLanguageSelectedEnglishEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.languageSelectedEnglish), timeoutMs);
  }

  async expectLanguageSelectedEnglishDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.languageSelectedEnglish), timeoutMs);
  }

  async expectLanguageSelectedEnglishChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.languageSelectedEnglish), timeoutMs);
  }

  async expectLanguageSelectedEnglishUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.languageSelectedEnglish), timeoutMs);
  }

  async expectLanguageSelectedEnglishFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.languageSelectedEnglish), timeoutMs);
  }

  async expectLanguageSelectedEnglishCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.languageSelectedEnglish), count, timeoutMs);
  }

  async scrollLanguageSelectedEnglishIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.languageSelectedEnglish));
  }

  async doubleClickEnglish(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AiPage.L.english));
  }

  async longPressEnglish(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AiPage.L.english));
  }

  async expectEnglishHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AiPage.L.english), timeoutMs);
  }

  async expectEnglishText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AiPage.L.english), expected, timeoutMs);
  }

  async expectEnglishContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AiPage.L.english), substring, timeoutMs);
  }

  async expectEnglishValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AiPage.L.english), value, timeoutMs);
  }

  async expectEnglishEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AiPage.L.english), timeoutMs);
  }

  async expectEnglishDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AiPage.L.english), timeoutMs);
  }

  async expectEnglishChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AiPage.L.english), timeoutMs);
  }

  async expectEnglishUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AiPage.L.english), timeoutMs);
  }

  async expectEnglishFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AiPage.L.english), timeoutMs);
  }

  async expectEnglishCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AiPage.L.english), count, timeoutMs);
  }

  async scrollEnglishIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AiPage.L.english));
  }

}
