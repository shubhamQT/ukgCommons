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

export class TakeTheNextStepInYourDevelopmentAtUkgPage {
  private static readonly L = {
    peopleHubSite: { strategy: 'role' as const, value: 'People hub site', role: 'link', actionKind: 'link' as const },
    ukgCommonsTopSites: { strategy: 'role' as const, value: 'UKG Commons top sites', role: 'link', actionKind: 'link' as const },
    ukgCommonsTopSitesButton: { strategy: 'role' as const, value: 'UKG Commons top sites submenu', role: 'button', actionKind: 'button' as const },
    belongingAndImpact: { strategy: 'role' as const, value: 'Belonging and Impact', role: 'link', actionKind: 'link' as const },
    benefits: { strategy: 'role' as const, value: 'Benefits', role: 'link', actionKind: 'link' as const },
    career: { strategy: 'role' as const, value: 'Career', role: 'link', actionKind: 'link' as const },
    employeeExperience: { strategy: 'role' as const, value: 'Employee Experience', role: 'link', actionKind: 'link' as const },
    learningAndDevelopment: { strategy: 'role' as const, value: 'Learning and Development', role: 'link', actionKind: 'link' as const },
    moreNavigationOptions: { strategy: 'role' as const, value: 'More navigation options', role: 'button', actionKind: 'button' as const },
    learningAndDevelopmentHome: { strategy: 'role' as const, value: 'Learning and Development home', role: 'link', actionKind: 'link' as const },
    home: { strategy: 'role' as const, value: 'Home', role: 'link', actionKind: 'link' as const },
    learningPlatforms: { strategy: 'role' as const, value: 'Learning Platforms', role: 'link', actionKind: 'link' as const },
    careerDevelopment: { strategy: 'role' as const, value: 'Career Development', role: 'link', actionKind: 'link' as const },
    careerDevelopmentSubmenu: { strategy: 'role' as const, value: 'Career Development submenu', role: 'button', actionKind: 'button' as const },
    leaderDevelopment: { strategy: 'role' as const, value: 'Leader Development', role: 'link', actionKind: 'link' as const },
    leaderDevelopmentSubmenu: { strategy: 'role' as const, value: 'Leader Development submenu', role: 'button', actionKind: 'button' as const },
    more: { strategy: 'role' as const, value: 'More', role: 'button', actionKind: 'button' as const },
    pageAuthorBylineStacy: { strategy: 'role' as const, value: 'Page author byline. Stacy Cutrono Dir. Learning Program Management. Press Enter to open details for this person. ', role: 'button', actionKind: 'button' as const },
    opensProfileCardFor: { strategy: 'role' as const, value: 'Opens Profile Card for Stacy Cutrono', role: 'button', actionKind: 'button' as const },
    careerDevelopmentFocusYourDevelopmentWhereItMattersMost: { strategy: 'css' as const, value: '#career-development-focus-your-development-where-it-matters-most', role: 'heading', level: 3, actionKind: 'text' as const },
    startWithWhatMatters: { strategy: 'text' as const, value: 'Start with what matters most to you:', actionKind: 'text' as const },
    clarityUnderstandYour: { strategy: 'text' as const, value: 'Clarity – Understand your strengths, gaps, and', actionKind: 'text' as const },
    capabilityBuildSkills: { strategy: 'text' as const, value: 'Capability – Build skills that support your work', actionKind: 'text' as const },
    connectionLearnThrough: { strategy: 'text' as const, value: 'Connection – Learn through experiences, people,', actionKind: 'text' as const },
    takeTheFirstStep: { strategy: 'css' as const, value: '#take-the-first-step', role: 'heading', level: 3, actionKind: 'text' as const },
    exploreTheCareerDevelopment: { strategy: 'text' as const, value: 'Explore the Career Development experience and get', actionKind: 'text' as const },
    careerDevelopmentExperience: { strategy: 'role' as const, value: 'Career Development experience', role: 'link', actionKind: 'link' as const },
    managerAcademyContinueStrengtheningYourLeadershipPractice: { strategy: 'css' as const, value: '#manager-academy-continue-strengthening-your-leadership-practice', role: 'heading', level: 3, actionKind: 'text' as const },
    getStarted: { strategy: 'css' as const, value: '#get-started', role: 'heading', level: 3, actionKind: 'text' as const },
    buildOneCapabilityAt: { strategy: 'text' as const, value: 'Build one capability at a time through short,', actionKind: 'text' as const },
    practiceKeyCapabilitiesUsing: { strategy: 'text' as const, value: 'Practice key capabilities using AI challenges', actionKind: 'text' as const },
    applyWhatYouLearn: { strategy: 'text' as const, value: 'Apply what you learn directly in your day-to-day', actionKind: 'text' as const },
    getStartedTodayWith: { strategy: 'text' as const, value: 'Get started today with a short self-reflection and', actionKind: 'text' as const },
    getStartedToday: { strategy: 'role' as const, value: 'Get started today', role: 'link', actionKind: 'link' as const },
    joinOptionalPeerLearning: { strategy: 'text' as const, value: 'Join optional Peer Learning sessions to connect', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickPeopleHubSite(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite));
  }

  async expectPeopleHubSiteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), timeoutMs, soft);
  }

  async clickUkgCommonsTopSites(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites));
  }

  async expectUkgCommonsTopSitesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), timeoutMs, soft);
  }

  async clickUkgCommonsTopSitesButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton));
  }

  async doubleClickUkgCommonsTopSitesButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton));
  }

  async expectUkgCommonsTopSitesButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), timeoutMs, soft);
  }

  async clickBelongingAndImpact(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact));
  }

  async expectBelongingAndImpactVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), timeoutMs, soft);
  }

  async clickBenefits(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits));
  }

  async expectBenefitsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), timeoutMs, soft);
  }

  async clickCareer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career));
  }

  async expectCareerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), timeoutMs, soft);
  }

  async clickEmployeeExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience));
  }

  async expectEmployeeExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), timeoutMs, soft);
  }

  async clickLearningAndDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment));
  }

  async expectLearningAndDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), timeoutMs, soft);
  }

  async clickMoreNavigationOptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions));
  }

  async doubleClickMoreNavigationOptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions));
  }

  async expectMoreNavigationOptionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), timeoutMs, soft);
  }

  async clickLearningAndDevelopmentHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async expectLearningAndDevelopmentHomeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs, soft);
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs, soft);
  }

  async clickLearningPlatforms(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms));
  }

  async expectLearningPlatformsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), timeoutMs, soft);
  }

  async clickCareerDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment));
  }

  async expectCareerDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), timeoutMs, soft);
  }

  async clickCareerDevelopmentSubmenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu));
  }

  async doubleClickCareerDevelopmentSubmenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu));
  }

  async expectCareerDevelopmentSubmenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), timeoutMs, soft);
  }

  async clickLeaderDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment));
  }

  async expectLeaderDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), timeoutMs, soft);
  }

  async clickLeaderDevelopmentSubmenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu));
  }

  async doubleClickLeaderDevelopmentSubmenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu));
  }

  async expectLeaderDevelopmentSubmenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), timeoutMs, soft);
  }

  async clickMore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more));
  }

  async doubleClickMore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more));
  }

  async expectMoreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), timeoutMs, soft);
  }

  async clickPageAuthorBylineStacy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy));
  }

  async doubleClickPageAuthorBylineStacy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy));
  }

  async expectPageAuthorBylineStacyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), timeoutMs, soft);
  }

  async clickOpensProfileCardFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor));
  }

  async doubleClickOpensProfileCardFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor));
  }

  async expectOpensProfileCardForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), timeoutMs, soft);
  }

  async getInnerTextCareerDevelopmentFocusYourDevelopmentWhereItMattersMost(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost));
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), timeoutMs, soft);
  }

  async getInnerTextStartWithWhatMatters(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters));
  }

  async expectStartWithWhatMattersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), timeoutMs, soft);
  }

  async getInnerTextClarityUnderstandYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour));
  }

  async expectClarityUnderstandYourVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), timeoutMs, soft);
  }

  async getInnerTextCapabilityBuildSkills(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills));
  }

  async expectCapabilityBuildSkillsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), timeoutMs, soft);
  }

  async getInnerTextConnectionLearnThrough(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough));
  }

  async expectConnectionLearnThroughVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), timeoutMs, soft);
  }

  async getInnerTextTakeTheFirstStep(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep));
  }

  async expectTakeTheFirstStepVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), timeoutMs, soft);
  }

  async getInnerTextExploreTheCareerDevelopment(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment));
  }

  async expectExploreTheCareerDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), timeoutMs, soft);
  }

  async clickCareerDevelopmentExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience));
  }

  async expectCareerDevelopmentExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), timeoutMs, soft);
  }

  async getInnerTextManagerAcademyContinueStrengtheningYourLeadershipPractice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice));
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), timeoutMs, soft);
  }

  async getInnerTextGetStarted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted));
  }

  async expectGetStartedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), timeoutMs, soft);
  }

  async getInnerTextBuildOneCapabilityAt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt));
  }

  async expectBuildOneCapabilityAtVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), timeoutMs, soft);
  }

  async getInnerTextPracticeKeyCapabilitiesUsing(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing));
  }

  async expectPracticeKeyCapabilitiesUsingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), timeoutMs, soft);
  }

  async getInnerTextApplyWhatYouLearn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn));
  }

  async expectApplyWhatYouLearnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), timeoutMs, soft);
  }

  async getInnerTextGetStartedTodayWith(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith));
  }

  async expectGetStartedTodayWithVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), timeoutMs, soft);
  }

  async clickGetStartedToday(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday));
  }

  async expectGetStartedTodayVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), timeoutMs, soft);
  }

  async getInnerTextJoinOptionalPeerLearning(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning));
  }

  async expectJoinOptionalPeerLearningVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), timeoutMs, soft);
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
    await expectPageTitle(this.page, 'Take the next step in your development at UKG', timeoutMs);
  }


  async doubleClickPeopleHubSite(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite));
  }

  async longPressPeopleHubSite(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite));
  }

  async expectPeopleHubSiteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), timeoutMs);
  }

  async expectPeopleHubSiteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), expected, timeoutMs);
  }

  async expectPeopleHubSiteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), substring, timeoutMs);
  }

  async expectPeopleHubSiteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), value, timeoutMs);
  }

  async expectPeopleHubSiteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), timeoutMs);
  }

  async expectPeopleHubSiteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), timeoutMs);
  }

  async expectPeopleHubSiteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), timeoutMs);
  }

  async expectPeopleHubSiteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), timeoutMs);
  }

  async expectPeopleHubSiteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), timeoutMs);
  }

  async expectPeopleHubSiteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite), count, timeoutMs);
  }

  async scrollPeopleHubSiteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.peopleHubSite));
  }

  async doubleClickUkgCommonsTopSites(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites));
  }

  async longPressUkgCommonsTopSites(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites));
  }

  async expectUkgCommonsTopSitesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), timeoutMs);
  }

  async expectUkgCommonsTopSitesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), expected, timeoutMs);
  }

  async expectUkgCommonsTopSitesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), substring, timeoutMs);
  }

  async expectUkgCommonsTopSitesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), value, timeoutMs);
  }

  async expectUkgCommonsTopSitesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), timeoutMs);
  }

  async expectUkgCommonsTopSitesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), timeoutMs);
  }

  async expectUkgCommonsTopSitesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), timeoutMs);
  }

  async expectUkgCommonsTopSitesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), timeoutMs);
  }

  async expectUkgCommonsTopSitesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), timeoutMs);
  }

  async expectUkgCommonsTopSitesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites), count, timeoutMs);
  }

  async scrollUkgCommonsTopSitesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSites));
  }

  async longPressUkgCommonsTopSitesButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton));
  }

  async expectUkgCommonsTopSitesButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), expected, timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), substring, timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), value, timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), timeoutMs);
  }

  async expectUkgCommonsTopSitesButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton), count, timeoutMs);
  }

  async scrollUkgCommonsTopSitesButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.ukgCommonsTopSitesButton));
  }

  async doubleClickBelongingAndImpact(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact));
  }

  async longPressBelongingAndImpact(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact));
  }

  async expectBelongingAndImpactHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), timeoutMs);
  }

  async expectBelongingAndImpactText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), expected, timeoutMs);
  }

  async expectBelongingAndImpactContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), substring, timeoutMs);
  }

  async expectBelongingAndImpactValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), value, timeoutMs);
  }

  async expectBelongingAndImpactEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), timeoutMs);
  }

  async expectBelongingAndImpactDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), timeoutMs);
  }

  async expectBelongingAndImpactChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), timeoutMs);
  }

  async expectBelongingAndImpactUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), timeoutMs);
  }

  async expectBelongingAndImpactFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), timeoutMs);
  }

  async expectBelongingAndImpactCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact), count, timeoutMs);
  }

  async scrollBelongingAndImpactIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.belongingAndImpact));
  }

  async doubleClickBenefits(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits));
  }

  async longPressBenefits(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits));
  }

  async expectBenefitsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), timeoutMs);
  }

  async expectBenefitsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), expected, timeoutMs);
  }

  async expectBenefitsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), substring, timeoutMs);
  }

  async expectBenefitsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), value, timeoutMs);
  }

  async expectBenefitsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), timeoutMs);
  }

  async expectBenefitsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), timeoutMs);
  }

  async expectBenefitsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), timeoutMs);
  }

  async expectBenefitsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), timeoutMs);
  }

  async expectBenefitsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), timeoutMs);
  }

  async expectBenefitsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits), count, timeoutMs);
  }

  async scrollBenefitsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.benefits));
  }

  async doubleClickCareer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career));
  }

  async longPressCareer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career));
  }

  async expectCareerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), timeoutMs);
  }

  async expectCareerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), expected, timeoutMs);
  }

  async expectCareerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), substring, timeoutMs);
  }

  async expectCareerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), value, timeoutMs);
  }

  async expectCareerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), timeoutMs);
  }

  async expectCareerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), timeoutMs);
  }

  async expectCareerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), timeoutMs);
  }

  async expectCareerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), timeoutMs);
  }

  async expectCareerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), timeoutMs);
  }

  async expectCareerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career), count, timeoutMs);
  }

  async scrollCareerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.career));
  }

  async doubleClickEmployeeExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience));
  }

  async longPressEmployeeExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience));
  }

  async expectEmployeeExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), timeoutMs);
  }

  async expectEmployeeExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), expected, timeoutMs);
  }

  async expectEmployeeExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), substring, timeoutMs);
  }

  async expectEmployeeExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), value, timeoutMs);
  }

  async expectEmployeeExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), timeoutMs);
  }

  async expectEmployeeExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), timeoutMs);
  }

  async expectEmployeeExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), timeoutMs);
  }

  async expectEmployeeExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), timeoutMs);
  }

  async expectEmployeeExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), timeoutMs);
  }

  async expectEmployeeExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience), count, timeoutMs);
  }

  async scrollEmployeeExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.employeeExperience));
  }

  async doubleClickLearningAndDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment));
  }

  async longPressLearningAndDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment));
  }

  async expectLearningAndDevelopmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), expected, timeoutMs);
  }

  async expectLearningAndDevelopmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), substring, timeoutMs);
  }

  async expectLearningAndDevelopmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), value, timeoutMs);
  }

  async expectLearningAndDevelopmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment), count, timeoutMs);
  }

  async scrollLearningAndDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopment));
  }

  async longPressMoreNavigationOptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions));
  }

  async expectMoreNavigationOptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), timeoutMs);
  }

  async expectMoreNavigationOptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), expected, timeoutMs);
  }

  async expectMoreNavigationOptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), substring, timeoutMs);
  }

  async expectMoreNavigationOptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), value, timeoutMs);
  }

  async expectMoreNavigationOptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), timeoutMs);
  }

  async expectMoreNavigationOptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), timeoutMs);
  }

  async expectMoreNavigationOptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), timeoutMs);
  }

  async expectMoreNavigationOptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), timeoutMs);
  }

  async expectMoreNavigationOptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), timeoutMs);
  }

  async expectMoreNavigationOptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions), count, timeoutMs);
  }

  async scrollMoreNavigationOptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.moreNavigationOptions));
  }

  async doubleClickLearningAndDevelopmentHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async longPressLearningAndDevelopmentHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async expectLearningAndDevelopmentHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), expected, timeoutMs);
  }

  async expectLearningAndDevelopmentHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), substring, timeoutMs);
  }

  async expectLearningAndDevelopmentHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), value, timeoutMs);
  }

  async expectLearningAndDevelopmentHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), count, timeoutMs);
  }

  async scrollLearningAndDevelopmentHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), substring, timeoutMs);
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), count, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async doubleClickLearningPlatforms(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms));
  }

  async longPressLearningPlatforms(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms));
  }

  async expectLearningPlatformsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), timeoutMs);
  }

  async expectLearningPlatformsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), expected, timeoutMs);
  }

  async expectLearningPlatformsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), substring, timeoutMs);
  }

  async expectLearningPlatformsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), value, timeoutMs);
  }

  async expectLearningPlatformsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), timeoutMs);
  }

  async expectLearningPlatformsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), timeoutMs);
  }

  async expectLearningPlatformsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), timeoutMs);
  }

  async expectLearningPlatformsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), timeoutMs);
  }

  async expectLearningPlatformsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), timeoutMs);
  }

  async expectLearningPlatformsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms), count, timeoutMs);
  }

  async scrollLearningPlatformsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningPlatforms));
  }

  async doubleClickCareerDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment));
  }

  async longPressCareerDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment));
  }

  async expectCareerDevelopmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), timeoutMs);
  }

  async expectCareerDevelopmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), expected, timeoutMs);
  }

  async expectCareerDevelopmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), substring, timeoutMs);
  }

  async expectCareerDevelopmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), value, timeoutMs);
  }

  async expectCareerDevelopmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), timeoutMs);
  }

  async expectCareerDevelopmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), timeoutMs);
  }

  async expectCareerDevelopmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), timeoutMs);
  }

  async expectCareerDevelopmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), timeoutMs);
  }

  async expectCareerDevelopmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), timeoutMs);
  }

  async expectCareerDevelopmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment), count, timeoutMs);
  }

  async scrollCareerDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopment));
  }

  async longPressCareerDevelopmentSubmenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu));
  }

  async expectCareerDevelopmentSubmenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), timeoutMs);
  }

  async expectCareerDevelopmentSubmenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), expected, timeoutMs);
  }

  async expectCareerDevelopmentSubmenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), substring, timeoutMs);
  }

  async expectCareerDevelopmentSubmenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), value, timeoutMs);
  }

  async expectCareerDevelopmentSubmenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), timeoutMs);
  }

  async expectCareerDevelopmentSubmenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), timeoutMs);
  }

  async expectCareerDevelopmentSubmenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), timeoutMs);
  }

  async expectCareerDevelopmentSubmenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), timeoutMs);
  }

  async expectCareerDevelopmentSubmenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), timeoutMs);
  }

  async expectCareerDevelopmentSubmenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu), count, timeoutMs);
  }

  async scrollCareerDevelopmentSubmenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentSubmenu));
  }

  async doubleClickLeaderDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment));
  }

  async longPressLeaderDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment));
  }

  async expectLeaderDevelopmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), timeoutMs);
  }

  async expectLeaderDevelopmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), expected, timeoutMs);
  }

  async expectLeaderDevelopmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), substring, timeoutMs);
  }

  async expectLeaderDevelopmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), value, timeoutMs);
  }

  async expectLeaderDevelopmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), timeoutMs);
  }

  async expectLeaderDevelopmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), timeoutMs);
  }

  async expectLeaderDevelopmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), timeoutMs);
  }

  async expectLeaderDevelopmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), timeoutMs);
  }

  async expectLeaderDevelopmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), timeoutMs);
  }

  async expectLeaderDevelopmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment), count, timeoutMs);
  }

  async scrollLeaderDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopment));
  }

  async longPressLeaderDevelopmentSubmenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu));
  }

  async expectLeaderDevelopmentSubmenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), expected, timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), substring, timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), value, timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), timeoutMs);
  }

  async expectLeaderDevelopmentSubmenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu), count, timeoutMs);
  }

  async scrollLeaderDevelopmentSubmenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.leaderDevelopmentSubmenu));
  }

  async longPressMore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more));
  }

  async expectMoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), timeoutMs);
  }

  async expectMoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), expected, timeoutMs);
  }

  async expectMoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), substring, timeoutMs);
  }

  async expectMoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), value, timeoutMs);
  }

  async expectMoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), timeoutMs);
  }

  async expectMoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), timeoutMs);
  }

  async expectMoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), timeoutMs);
  }

  async expectMoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), timeoutMs);
  }

  async expectMoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), timeoutMs);
  }

  async expectMoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more), count, timeoutMs);
  }

  async scrollMoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.more));
  }

  async longPressPageAuthorBylineStacy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy));
  }

  async expectPageAuthorBylineStacyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), timeoutMs);
  }

  async expectPageAuthorBylineStacyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), expected, timeoutMs);
  }

  async expectPageAuthorBylineStacyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), substring, timeoutMs);
  }

  async expectPageAuthorBylineStacyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), value, timeoutMs);
  }

  async expectPageAuthorBylineStacyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), timeoutMs);
  }

  async expectPageAuthorBylineStacyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), timeoutMs);
  }

  async expectPageAuthorBylineStacyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), timeoutMs);
  }

  async expectPageAuthorBylineStacyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), timeoutMs);
  }

  async expectPageAuthorBylineStacyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), timeoutMs);
  }

  async expectPageAuthorBylineStacyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy), count, timeoutMs);
  }

  async scrollPageAuthorBylineStacyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.pageAuthorBylineStacy));
  }

  async longPressOpensProfileCardFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor));
  }

  async expectOpensProfileCardForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), timeoutMs);
  }

  async expectOpensProfileCardForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), expected, timeoutMs);
  }

  async expectOpensProfileCardForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), substring, timeoutMs);
  }

  async expectOpensProfileCardForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), value, timeoutMs);
  }

  async expectOpensProfileCardForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), timeoutMs);
  }

  async expectOpensProfileCardForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), timeoutMs);
  }

  async expectOpensProfileCardForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), timeoutMs);
  }

  async expectOpensProfileCardForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), timeoutMs);
  }

  async expectOpensProfileCardForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), timeoutMs);
  }

  async expectOpensProfileCardForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor), count, timeoutMs);
  }

  async scrollOpensProfileCardForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.opensProfileCardFor));
  }

  async clickCareerDevelopmentFocusYourDevelopmentWhereItMattersMost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost));
  }

  async doubleClickCareerDevelopmentFocusYourDevelopmentWhereItMattersMost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost));
  }

  async longPressCareerDevelopmentFocusYourDevelopmentWhereItMattersMost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost));
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), expected, timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), substring, timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), value, timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), timeoutMs);
  }

  async expectCareerDevelopmentFocusYourDevelopmentWhereItMattersMostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost), count, timeoutMs);
  }

  async scrollCareerDevelopmentFocusYourDevelopmentWhereItMattersMostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentFocusYourDevelopmentWhereItMattersMost));
  }

  async clickStartWithWhatMatters(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters));
  }

  async doubleClickStartWithWhatMatters(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters));
  }

  async longPressStartWithWhatMatters(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters));
  }

  async expectStartWithWhatMattersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), timeoutMs);
  }

  async expectStartWithWhatMattersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), expected, timeoutMs);
  }

  async expectStartWithWhatMattersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), substring, timeoutMs);
  }

  async expectStartWithWhatMattersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), value, timeoutMs);
  }

  async expectStartWithWhatMattersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), timeoutMs);
  }

  async expectStartWithWhatMattersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), timeoutMs);
  }

  async expectStartWithWhatMattersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), timeoutMs);
  }

  async expectStartWithWhatMattersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), timeoutMs);
  }

  async expectStartWithWhatMattersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), timeoutMs);
  }

  async expectStartWithWhatMattersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters), count, timeoutMs);
  }

  async scrollStartWithWhatMattersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.startWithWhatMatters));
  }

  async clickClarityUnderstandYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour));
  }

  async doubleClickClarityUnderstandYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour));
  }

  async longPressClarityUnderstandYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour));
  }

  async expectClarityUnderstandYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), timeoutMs);
  }

  async expectClarityUnderstandYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), expected, timeoutMs);
  }

  async expectClarityUnderstandYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), substring, timeoutMs);
  }

  async expectClarityUnderstandYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), value, timeoutMs);
  }

  async expectClarityUnderstandYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), timeoutMs);
  }

  async expectClarityUnderstandYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), timeoutMs);
  }

  async expectClarityUnderstandYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), timeoutMs);
  }

  async expectClarityUnderstandYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), timeoutMs);
  }

  async expectClarityUnderstandYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), timeoutMs);
  }

  async expectClarityUnderstandYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour), count, timeoutMs);
  }

  async scrollClarityUnderstandYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.clarityUnderstandYour));
  }

  async clickCapabilityBuildSkills(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills));
  }

  async doubleClickCapabilityBuildSkills(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills));
  }

  async longPressCapabilityBuildSkills(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills));
  }

  async expectCapabilityBuildSkillsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), timeoutMs);
  }

  async expectCapabilityBuildSkillsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), expected, timeoutMs);
  }

  async expectCapabilityBuildSkillsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), substring, timeoutMs);
  }

  async expectCapabilityBuildSkillsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), value, timeoutMs);
  }

  async expectCapabilityBuildSkillsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), timeoutMs);
  }

  async expectCapabilityBuildSkillsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), timeoutMs);
  }

  async expectCapabilityBuildSkillsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), timeoutMs);
  }

  async expectCapabilityBuildSkillsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), timeoutMs);
  }

  async expectCapabilityBuildSkillsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), timeoutMs);
  }

  async expectCapabilityBuildSkillsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills), count, timeoutMs);
  }

  async scrollCapabilityBuildSkillsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.capabilityBuildSkills));
  }

  async clickConnectionLearnThrough(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough));
  }

  async doubleClickConnectionLearnThrough(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough));
  }

  async longPressConnectionLearnThrough(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough));
  }

  async expectConnectionLearnThroughHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), timeoutMs);
  }

  async expectConnectionLearnThroughText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), expected, timeoutMs);
  }

  async expectConnectionLearnThroughContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), substring, timeoutMs);
  }

  async expectConnectionLearnThroughValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), value, timeoutMs);
  }

  async expectConnectionLearnThroughEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), timeoutMs);
  }

  async expectConnectionLearnThroughDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), timeoutMs);
  }

  async expectConnectionLearnThroughChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), timeoutMs);
  }

  async expectConnectionLearnThroughUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), timeoutMs);
  }

  async expectConnectionLearnThroughFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), timeoutMs);
  }

  async expectConnectionLearnThroughCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough), count, timeoutMs);
  }

  async scrollConnectionLearnThroughIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.connectionLearnThrough));
  }

  async clickTakeTheFirstStep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep));
  }

  async doubleClickTakeTheFirstStep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep));
  }

  async longPressTakeTheFirstStep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep));
  }

  async expectTakeTheFirstStepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), timeoutMs);
  }

  async expectTakeTheFirstStepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), expected, timeoutMs);
  }

  async expectTakeTheFirstStepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), substring, timeoutMs);
  }

  async expectTakeTheFirstStepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), value, timeoutMs);
  }

  async expectTakeTheFirstStepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), timeoutMs);
  }

  async expectTakeTheFirstStepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), timeoutMs);
  }

  async expectTakeTheFirstStepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), timeoutMs);
  }

  async expectTakeTheFirstStepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), timeoutMs);
  }

  async expectTakeTheFirstStepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), timeoutMs);
  }

  async expectTakeTheFirstStepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep), count, timeoutMs);
  }

  async scrollTakeTheFirstStepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.takeTheFirstStep));
  }

  async clickExploreTheCareerDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment));
  }

  async doubleClickExploreTheCareerDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment));
  }

  async longPressExploreTheCareerDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment));
  }

  async expectExploreTheCareerDevelopmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), timeoutMs);
  }

  async expectExploreTheCareerDevelopmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), expected, timeoutMs);
  }

  async expectExploreTheCareerDevelopmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), substring, timeoutMs);
  }

  async expectExploreTheCareerDevelopmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), value, timeoutMs);
  }

  async expectExploreTheCareerDevelopmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), timeoutMs);
  }

  async expectExploreTheCareerDevelopmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), timeoutMs);
  }

  async expectExploreTheCareerDevelopmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), timeoutMs);
  }

  async expectExploreTheCareerDevelopmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), timeoutMs);
  }

  async expectExploreTheCareerDevelopmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), timeoutMs);
  }

  async expectExploreTheCareerDevelopmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment), count, timeoutMs);
  }

  async scrollExploreTheCareerDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.exploreTheCareerDevelopment));
  }

  async doubleClickCareerDevelopmentExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience));
  }

  async longPressCareerDevelopmentExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience));
  }

  async expectCareerDevelopmentExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), timeoutMs);
  }

  async expectCareerDevelopmentExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), expected, timeoutMs);
  }

  async expectCareerDevelopmentExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), substring, timeoutMs);
  }

  async expectCareerDevelopmentExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), value, timeoutMs);
  }

  async expectCareerDevelopmentExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), timeoutMs);
  }

  async expectCareerDevelopmentExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), timeoutMs);
  }

  async expectCareerDevelopmentExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), timeoutMs);
  }

  async expectCareerDevelopmentExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), timeoutMs);
  }

  async expectCareerDevelopmentExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), timeoutMs);
  }

  async expectCareerDevelopmentExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience), count, timeoutMs);
  }

  async scrollCareerDevelopmentExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.careerDevelopmentExperience));
  }

  async clickManagerAcademyContinueStrengtheningYourLeadershipPractice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice));
  }

  async doubleClickManagerAcademyContinueStrengtheningYourLeadershipPractice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice));
  }

  async longPressManagerAcademyContinueStrengtheningYourLeadershipPractice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice));
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), expected, timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), substring, timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), value, timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), timeoutMs);
  }

  async expectManagerAcademyContinueStrengtheningYourLeadershipPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice), count, timeoutMs);
  }

  async scrollManagerAcademyContinueStrengtheningYourLeadershipPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.managerAcademyContinueStrengtheningYourLeadershipPractice));
  }

  async clickGetStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted));
  }

  async doubleClickGetStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted));
  }

  async longPressGetStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted));
  }

  async expectGetStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), expected, timeoutMs);
  }

  async expectGetStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), substring, timeoutMs);
  }

  async expectGetStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), value, timeoutMs);
  }

  async expectGetStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted), count, timeoutMs);
  }

  async scrollGetStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStarted));
  }

  async clickBuildOneCapabilityAt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt));
  }

  async doubleClickBuildOneCapabilityAt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt));
  }

  async longPressBuildOneCapabilityAt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt));
  }

  async expectBuildOneCapabilityAtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), timeoutMs);
  }

  async expectBuildOneCapabilityAtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), expected, timeoutMs);
  }

  async expectBuildOneCapabilityAtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), substring, timeoutMs);
  }

  async expectBuildOneCapabilityAtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), value, timeoutMs);
  }

  async expectBuildOneCapabilityAtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), timeoutMs);
  }

  async expectBuildOneCapabilityAtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), timeoutMs);
  }

  async expectBuildOneCapabilityAtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), timeoutMs);
  }

  async expectBuildOneCapabilityAtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), timeoutMs);
  }

  async expectBuildOneCapabilityAtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), timeoutMs);
  }

  async expectBuildOneCapabilityAtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt), count, timeoutMs);
  }

  async scrollBuildOneCapabilityAtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.buildOneCapabilityAt));
  }

  async clickPracticeKeyCapabilitiesUsing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing));
  }

  async doubleClickPracticeKeyCapabilitiesUsing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing));
  }

  async longPressPracticeKeyCapabilitiesUsing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing));
  }

  async expectPracticeKeyCapabilitiesUsingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), expected, timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), substring, timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), value, timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), timeoutMs);
  }

  async expectPracticeKeyCapabilitiesUsingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing), count, timeoutMs);
  }

  async scrollPracticeKeyCapabilitiesUsingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.practiceKeyCapabilitiesUsing));
  }

  async clickApplyWhatYouLearn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn));
  }

  async doubleClickApplyWhatYouLearn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn));
  }

  async longPressApplyWhatYouLearn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn));
  }

  async expectApplyWhatYouLearnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), timeoutMs);
  }

  async expectApplyWhatYouLearnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), expected, timeoutMs);
  }

  async expectApplyWhatYouLearnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), substring, timeoutMs);
  }

  async expectApplyWhatYouLearnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), value, timeoutMs);
  }

  async expectApplyWhatYouLearnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), timeoutMs);
  }

  async expectApplyWhatYouLearnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), timeoutMs);
  }

  async expectApplyWhatYouLearnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), timeoutMs);
  }

  async expectApplyWhatYouLearnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), timeoutMs);
  }

  async expectApplyWhatYouLearnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), timeoutMs);
  }

  async expectApplyWhatYouLearnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn), count, timeoutMs);
  }

  async scrollApplyWhatYouLearnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.applyWhatYouLearn));
  }

  async clickGetStartedTodayWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith));
  }

  async doubleClickGetStartedTodayWith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith));
  }

  async longPressGetStartedTodayWith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith));
  }

  async expectGetStartedTodayWithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), timeoutMs);
  }

  async expectGetStartedTodayWithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), expected, timeoutMs);
  }

  async expectGetStartedTodayWithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), substring, timeoutMs);
  }

  async expectGetStartedTodayWithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), value, timeoutMs);
  }

  async expectGetStartedTodayWithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), timeoutMs);
  }

  async expectGetStartedTodayWithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), timeoutMs);
  }

  async expectGetStartedTodayWithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), timeoutMs);
  }

  async expectGetStartedTodayWithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), timeoutMs);
  }

  async expectGetStartedTodayWithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), timeoutMs);
  }

  async expectGetStartedTodayWithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith), count, timeoutMs);
  }

  async scrollGetStartedTodayWithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedTodayWith));
  }

  async doubleClickGetStartedToday(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday));
  }

  async longPressGetStartedToday(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday));
  }

  async expectGetStartedTodayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), timeoutMs);
  }

  async expectGetStartedTodayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), expected, timeoutMs);
  }

  async expectGetStartedTodayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), substring, timeoutMs);
  }

  async expectGetStartedTodayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), value, timeoutMs);
  }

  async expectGetStartedTodayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), timeoutMs);
  }

  async expectGetStartedTodayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), timeoutMs);
  }

  async expectGetStartedTodayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), timeoutMs);
  }

  async expectGetStartedTodayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), timeoutMs);
  }

  async expectGetStartedTodayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), timeoutMs);
  }

  async expectGetStartedTodayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday), count, timeoutMs);
  }

  async scrollGetStartedTodayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.getStartedToday));
  }

  async clickJoinOptionalPeerLearning(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning));
  }

  async doubleClickJoinOptionalPeerLearning(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning));
  }

  async longPressJoinOptionalPeerLearning(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning));
  }

  async expectJoinOptionalPeerLearningHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), timeoutMs);
  }

  async expectJoinOptionalPeerLearningText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), expected, timeoutMs);
  }

  async expectJoinOptionalPeerLearningContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), substring, timeoutMs);
  }

  async expectJoinOptionalPeerLearningValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), value, timeoutMs);
  }

  async expectJoinOptionalPeerLearningEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), timeoutMs);
  }

  async expectJoinOptionalPeerLearningDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), timeoutMs);
  }

  async expectJoinOptionalPeerLearningChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), timeoutMs);
  }

  async expectJoinOptionalPeerLearningUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), timeoutMs);
  }

  async expectJoinOptionalPeerLearningFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), timeoutMs);
  }

  async expectJoinOptionalPeerLearningCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning), count, timeoutMs);
  }

  async scrollJoinOptionalPeerLearningIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.joinOptionalPeerLearning));
  }

}
