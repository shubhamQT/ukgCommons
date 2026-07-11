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

export class UkgcommonsPage {
  private static readonly L = {
    viewThisPageIn: { strategy: 'text' as const, value: 'View this page in', actionKind: 'text' as const },
    to: { strategy: 'css' as const, value: '[name="to"]', actionKind: 'combobox' as const },
    headerLogoCXuk: { strategy: 'css' as const, value: '[class*="Header_logo"]', actionKind: 'link' as const },
    topSitesTitle: { strategy: 'role' as const, value: 'Top sites', role: 'button', actionKind: 'button' as const },
    myAppsTitle: { strategy: 'css' as const, value: '#basic-button', actionKind: 'button' as const },
    showCollapsedMenu: { strategy: 'role' as const, value: 'show collapsed menu', role: 'button', actionKind: 'button' as const },
    userProfile: { strategy: 'css' as const, value: '[class*=Header_headerTopRight]', actionKind: 'generic' as const },
    headerBg: { strategy: 'altText' as const, value: 'header-bg', actionKind: 'generic' as const },
    hiJagadeeshWhatAre: { strategy: 'role' as const, value: 'Hi Jagadeesh, what are you looking for?', role: 'heading', level: 2, actionKind: 'text' as const },
    sharePoint: { strategy: 'role' as const, value: 'SharePoint', role: 'button', actionKind: 'button' as const },
    searchNewsSitesOr: { strategy: 'placeholder' as const, value: 'Search news, sites, or events ', actionKind: 'textbox' as const },
    searchIcon: { strategy: 'altText' as const, value: 'search_icon', actionKind: 'generic' as const },
    popularSearches: { strategy: 'role' as const, value: 'Popular searches', role: 'heading', level: 6, actionKind: 'text' as const },
    brandHub: { strategy: 'role' as const, value: 'brand hub', role: 'button', actionKind: 'button' as const },
    holidayCalendar: { strategy: 'role' as const, value: 'holiday calendar', role: 'button', actionKind: 'button' as const },
    celebrateU: { strategy: 'role' as const, value: 'celebrate u', role: 'button', actionKind: 'button' as const },
    newHireCenter: { strategy: 'role' as const, value: 'new hire center', role: 'button', actionKind: 'button' as const },
    announcements: { strategy: 'css' as const, value: '[class*="Announcement_announcementSection"]', actionKind: 'generic' as const },
    announcements2: { strategy: 'role' as const, value: 'Announcements', role: 'heading', level: 3, actionKind: 'text' as const },
    prevSwitchToOtherAnnouncement: { strategy: 'css' as const, value: 'button.slick-prev[aria-label="switch to other announcement"]', actionKind: 'button' as const },
    reviewDetailsHowTo: { strategy: 'text' as const, value: 'Review details, how to resolve missing bookmarks', actionKind: 'text' as const },
    getKeyUpdatesFrom: { strategy: 'text' as const, value: 'Get key updates from leadership and the answers to', actionKind: 'text' as const },
    learnMore: { strategy: 'role' as const, value: 'Learn more', role: 'link', actionKind: 'link' as const },
    nextSwitchToOtherAnnouncement: { strategy: 'css' as const, value: 'button.slick-next[aria-label="switch to other announcement"]', actionKind: 'button' as const },
    featuredNewsTitle: { strategy: 'text' as const, value: 'Featured', actionKind: 'generic' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    aiMedia: { strategy: 'css' as const, value: '[class*="FeaturedNews_desktopCardMedia"]', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'generic' as const },
    aiTitle: { strategy: 'text' as const, value: 'AI', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    aiDrakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    aiShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    aiSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepInYourDev: { strategy: 'altText' as const, value: 'Take the next step in your development at UKG', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'generic' as const },
    takeTheNextStepInYourDevStacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'text' as const },
    allEmployeeTownHallJune: { strategy: 'altText' as const, value: 'All-Employee Town Hall - June 2026', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'generic' as const },
    allEmployeeTownHallJuneAshleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'text' as const },
    celebratingTheStrengthOfTh: { strategy: 'altText' as const, value: 'Celebrating the strength of the UKG Ready partner network', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'generic' as const },
    celebratingTheStrengthOfTitle: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'text' as const },
    celebratingTheStrengthOfThChristopherKiklas: { strategy: 'text' as const, value: 'Christopher Kiklas', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'text' as const },
    prideMonth2026TogetherWi: { strategy: 'altText' as const, value: 'Pride Month 2026: Together, with pride and love', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Pride Month 2026: Together, with pride and love', scopeIndex: 0, actionKind: 'generic' as const },
    prideMonth2026TogetherWiSequoyaFord: { strategy: 'text' as const, value: 'Sequoya Ford', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Pride Month 2026: Together, with pride and love', scopeIndex: 0, actionKind: 'text' as const },
    globalImpactInAction4Wee: { strategy: 'altText' as const, value: 'Global Impact in Action: 4-Week Challenge winners', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Global Impact in Action: 4-Week Challenge winners', scopeIndex: 0, actionKind: 'generic' as const },
    globalImpactInAction4WeeSarahMarks: { strategy: 'text' as const, value: 'Sarah Marks', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Global Impact in Action: 4-Week Challenge winners', scopeIndex: 0, actionKind: 'text' as const },
    celebratingOneYearOfShiftb: { strategy: 'altText' as const, value: 'Celebrating one year of Shiftboard at UKG', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating one year of Shiftboard at UKG', scopeIndex: 0, actionKind: 'generic' as const },
    celebratingOneYearOfShiftbBrianBower: { strategy: 'text' as const, value: 'Brian Bower', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating one year of Shiftboard at UKG', scopeIndex: 0, actionKind: 'text' as const },
    switchToNextNews: { strategy: 'role' as const, value: 'switch to next news', role: 'button', actionKind: 'button' as const },
    latestNewsTitle: { strategy: 'role' as const, value: 'Latest internal news', role: 'button', actionKind: 'button' as const },
    socialCircleTitle: { strategy: 'role' as const, value: 'UKG and industry news', role: 'button', actionKind: 'button' as const },
    catchUpOnThe: { strategy: 'role' as const, value: 'Catch up on the latest happenings across teams, divisions, and UKG locations.', role: 'img', actionKind: 'generic' as const },
    seeAllInternalNews: { strategy: 'role' as const, value: 'See all internal news', role: 'button', actionKind: 'button' as const },
    buildNewsletterJuly: { strategy: 'altText' as const, value: 'Build Newsletter - July 2026', actionKind: 'generic' as const },
    peopleUkgBuild: { strategy: 'role' as const, value: 'People: UKG Build', role: 'link', actionKind: 'link' as const },
    comment: { strategy: 'altText' as const, value: 'comment', actionKind: 'generic' as const },
    policyGovernanceAtUkgBuil: { strategy: 'altText' as const, value: 'Policy governance at UKG: Building trust through strong governance', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Policy governance at UKG: Building trust through strong governance', scopeIndex: 0, actionKind: 'generic' as const },
    policyGovernanceAtUkgBuilLegalRiskCompliance: { strategy: 'role' as const, value: 'Legal: Risk & Compliance', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Policy governance at UKG: Building trust through strong governance', scopeIndex: 0, actionKind: 'link' as const },
    policyGovernanceAtUkgLink: { strategy: 'css' as const, value: '[class*="LatestNewsWidget_newsTitle"]', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Policy governance at UKG: Building trust through strong governance', scopeIndex: 0, actionKind: 'link' as const },
    photoOfTheWeekLowellOffiInsideUkg: { strategy: 'role' as const, value: 'Inside UKG', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Photo of the Week: Lowell office spotlight', scopeIndex: 1, actionKind: 'link' as const },
    photoOfTheWeekLink: { strategy: 'role' as const, value: 'Photo of the Week: Lowell office spotlight', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Photo of the Week: Lowell office spotlight', scopeIndex: 1, actionKind: 'link' as const },
    agencyUAgentAThonMovesIntAiHub: { strategy: 'role' as const, value: 'AI Hub', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'AgencyU Agent-a-thon moves into judging', scopeIndex: 2, actionKind: 'link' as const },
    agencyUAgentAThonMovesIntoLink: { strategy: 'role' as const, value: 'AgencyU Agent-a-thon moves into judging', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'AgencyU Agent-a-thon moves into judging', scopeIndex: 2, actionKind: 'link' as const },
    newForresterTotalEconomicI: { strategy: 'altText' as const, value: 'New Forrester Total Economic Impact™ (TEI) study is live!', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'New Forrester Total Economic Impact™ (TEI) study is live!', scopeIndex: 3, actionKind: 'generic' as const },
    newForresterTotalEconomicIGtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'New Forrester Total Economic Impact™ (TEI) study is live!', scopeIndex: 3, actionKind: 'link' as const },
    newForresterTotalEconomicLink: { strategy: 'role' as const, value: 'New Forrester Total Economic Impact™ (TEI) study', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'New Forrester Total Economic Impact™ (TEI) study is live!', scopeIndex: 3, actionKind: 'link' as const },
    july2026HealthAwarenessSp: { strategy: 'altText' as const, value: 'July 2026 health awareness: Spotlight on wellness initiatives', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'July 2026 health awareness: Spotlight on wellness initiatives', scopeIndex: 4, actionKind: 'generic' as const },
    july2026HealthAwarenessSpPeopleUkgCares: { strategy: 'role' as const, value: 'People: UKG Cares', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'July 2026 health awareness: Spotlight on wellness initiatives', scopeIndex: 4, actionKind: 'link' as const },
    employeeResourceGroupErg: { strategy: 'altText' as const, value: 'Employee Resource Group (ERG) monthly newsletter: July 2026', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Employee Resource Group (ERG) monthly newsletter: July 2026', scopeIndex: 5, actionKind: 'generic' as const },
    employeeResourceGroupErgPeopleBelongingImpact: { strategy: 'role' as const, value: 'People: Belonging & Impact', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Employee Resource Group (ERG) monthly newsletter: July 2026', scopeIndex: 5, actionKind: 'link' as const },
    ukgRiseEarlyCareerMonthB: { strategy: 'altText' as const, value: 'UKG Rise Early Career Month: Build the skills, shape the future', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'UKG Rise Early Career Month: Build the skills, shape the future', scopeIndex: 6, actionKind: 'generic' as const },
    globalSecurityManagedVault: { strategy: 'altText' as const, value: 'Global Security managed Vault certificate migration calendar', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Global Security managed Vault certificate migration calendar', scopeIndex: 7, actionKind: 'generic' as const },
    globalSecurityManagedVaultProductEngineeringGlobal: { strategy: 'role' as const, value: 'Product & Engineering: Global Security', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Global Security managed Vault certificate migration calendar', scopeIndex: 7, actionKind: 'link' as const },
    globalSecurityManagedVaultLink: { strategy: 'role' as const, value: 'Global Security managed Vault certificate', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Global Security managed Vault certificate migration calendar', scopeIndex: 7, actionKind: 'link' as const },
    baselineImagesRequiredForN: { strategy: 'altText' as const, value: 'Baseline Images required for new deployments starting July 31', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Baseline Images required for new deployments starting July 31', scopeIndex: 8, actionKind: 'generic' as const },
    ukgNucleusRoiLink: { strategy: 'role' as const, value: 'UKG | Nucleus ROI Case Study-UKG Pro at XKIG', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'UKG | Nucleus ROI Case Study-UKG Pro at XKIG', scopeIndex: 9, actionKind: 'link' as const },
    ukgCommonsMobileAppNowAvaCommsEmployeeCommunications: { strategy: 'role' as const, value: 'Comms: Employee Communications', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'UKG Commons mobile app now available', scopeIndex: 10, actionKind: 'link' as const },
    ukgCommonsMobileAppLink: { strategy: 'role' as const, value: 'UKG Commons mobile app now available', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'UKG Commons mobile app now available', scopeIndex: 10, actionKind: 'link' as const },
    whatSecuritySeesSometimes: { strategy: 'altText' as const, value: 'What Security Sees: Sometimes thinking like a cybercriminal starts with “update now”', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'What Security Sees: Sometimes thinking like a cybercriminal starts with “update now”', scopeIndex: 11, actionKind: 'generic' as const },
    disabilityINJuly2026: { strategy: 'altText' as const, value: 'DisabilityIN July 2026', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'DisabilityIN July 2026', scopeIndex: 12, actionKind: 'generic' as const },
    disabilityINJuly2026PeopleUkgAdapt: { strategy: 'role' as const, value: 'People: UKG Adapt', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'DisabilityIN July 2026', scopeIndex: 12, actionKind: 'link' as const },
    photoOfTheWeekPhotoOfTheWeekTakeYourC: { strategy: 'role' as const, value: 'Photo of the Week: Take Your Child to Work Day', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Photo of the Week: Take Your Child to Work Day', scopeIndex: 13, actionKind: 'link' as const },
    doNotEngageWithUnsolicited: { strategy: 'altText' as const, value: 'Do not engage with unsolicited Teams calls or suspicious emails', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Do not engage with unsolicited Teams calls or suspicious emails', scopeIndex: 14, actionKind: 'generic' as const },
    thankYouForParticipatingIn: { strategy: 'altText' as const, value: 'Thank you for participating in the GPTW Trust Index Survey', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Thank you for participating in the GPTW Trust Index Survey', scopeIndex: 15, actionKind: 'generic' as const },
    thankYouForParticipatingInPeopleEmployeeExperience: { strategy: 'role' as const, value: 'People: Employee Experience', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Thank you for participating in the GPTW Trust Index Survey', scopeIndex: 15, actionKind: 'link' as const },
    thankYouForParticipatingLink: { strategy: 'role' as const, value: 'Thank you for participating in the GPTW Trust', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Thank you for participating in the GPTW Trust Index Survey', scopeIndex: 15, actionKind: 'link' as const },
    bigWinForUkgCommsAnalystRelations: { strategy: 'role' as const, value: 'Comms: Analyst Relations', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: '🎉 Big Win for UKG!', scopeIndex: 16, actionKind: 'link' as const },
    bigWinForLink: { strategy: 'role' as const, value: '🎉 Big Win for UKG!', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: '🎉 Big Win for UKG!', scopeIndex: 16, actionKind: 'link' as const },
    tuneInTodayUkgAdLink: { strategy: 'role' as const, value: 'Tune-In Today: UKG Ad Spot During the World Cup', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Tune-In Today: UKG Ad Spot During the World Cup', scopeIndex: 17, actionKind: 'link' as const },
    claudeEnterpriseAccessForN: { strategy: 'altText' as const, value: 'Claude Enterprise access for non-Product and Engineering teams', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Claude Enterprise access for non-Product and Engineering teams', scopeIndex: 18, actionKind: 'generic' as const },
    upcomingEvents: { strategy: 'css' as const, value: '[class*="EventsCalendarWidget_eventsColumn"]', actionKind: 'generic' as const },
    upcomingEventsTitle: { strategy: 'text' as const, value: 'Upcoming events', actionKind: 'generic' as const },
    seeAll: { strategy: 'role' as const, value: 'See all', role: 'button', actionKind: 'button' as const },
    categoryAll: { strategy: 'text' as const, value: 'Category: All', actionKind: 'generic' as const },
    categoryAll2: { strategy: 'css' as const, value: '[class*="UpcomingEvents_selectedCategory"]', actionKind: 'generic' as const },
    stretchRelaxVirtualGrouPeopleBenefits: { strategy: 'css' as const, value: '[class*="UpcomingEvents_categoryLabel"]', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Stretch & Relax - Virtual Group Fitness', scopeIndex: 0, actionKind: 'generic' as const },
    peopleBenefitsLink: { strategy: 'role' as const, value: 'People: Benefits', role: 'link', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Stretch & Relax - Virtual Group Fitness', scopeIndex: 0, actionKind: 'link' as const },
    stretchRelaxVirtualGrou: { strategy: 'css' as const, value: '[class*="UpcomingEvents_eventTitle"]', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Stretch & Relax - Virtual Group Fitness', scopeIndex: 0, actionKind: 'generic' as const },
    stretchRelaxVirtualGrouLocation: { strategy: 'altText' as const, value: 'location', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Stretch & Relax - Virtual Group Fitness', scopeIndex: 0, actionKind: 'generic' as const },
    stretchRelaxVirtualGrouVirtual: { strategy: 'text' as const, value: 'Virtual', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Stretch & Relax - Virtual Group Fitness', scopeIndex: 0, actionKind: 'text' as const },
    stretchRelaxVirtualGrouAddToCalendar: { strategy: 'role' as const, value: 'Add to calendar', role: 'button', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Stretch & Relax - Virtual Group Fitness', scopeIndex: 0, actionKind: 'button' as const },
    peopleUkgUnidosLink: { strategy: 'role' as const, value: 'People: UKG Unidos', role: 'link', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'UKG Unidos: World Cup Quarterfinal Virtual Watch Party', scopeIndex: 2, actionKind: 'link' as const },
    peopleUkgNestLink: { strategy: 'role' as const, value: 'People: UKG Nest', role: 'link', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'NEST and ADAPT We Rock the Spectrum Volunteer Event in Westford, MA', scopeIndex: 11, actionKind: 'link' as const },
    nestAndAdaptWeRockTheSpeLybertyWayWestford: { strategy: 'text' as const, value: '7 Lyberty Way, Westford MA 01886', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'NEST and ADAPT We Rock the Spectrum Volunteer Event in Westford, MA', scopeIndex: 11, actionKind: 'text' as const },
    peopleUkgRiseLink: { strategy: 'role' as const, value: 'People: UKG Rise', role: 'link', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'UKG Rise Virtual Speed Networking', scopeIndex: 13, actionKind: 'link' as const },
    ukgRiseVirtualSpeedNetworkVirtualZoomMeeting: { strategy: 'text' as const, value: 'Virtual - Zoom Meeting', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'UKG Rise Virtual Speed Networking', scopeIndex: 13, actionKind: 'text' as const },
    peopleUkgPrideLink: { strategy: 'role' as const, value: 'People: UKG Pride', role: 'link', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Out & Equal Presents: Signal Through the Noise', scopeIndex: 17, actionKind: 'link' as const },
    outEqualPresentsSignalTVirtualZoom: { strategy: 'text' as const, value: 'Virtual - Zoom', scope: '[class*="UpcomingEvents_eventCard"]', scopeText: 'Out & Equal Presents: Signal Through the Noise', scopeIndex: 17, actionKind: 'text' as const },
    upcomingMeetings: { strategy: 'css' as const, value: '[class*="EventsCalendarWidget_calendarColumn"]', actionKind: 'generic' as const },
    myCalendar: { strategy: 'role' as const, value: 'My calendar', role: 'heading', level: 3, actionKind: 'text' as const },
    noUpcomingMeetings: { strategy: 'text' as const, value: 'No upcoming meetings', actionKind: 'text' as const },
    latestNewsTitleRequestsOverview: { strategy: 'text' as const, value: 'Requests overview', actionKind: 'generic' as const },
    myRequests0: { strategy: 'role' as const, value: 'My requests (0)', role: 'button', actionKind: 'button' as const },
    approvals: { strategy: 'role' as const, value: 'Approvals', role: 'button', actionKind: 'button' as const },
    viewAndTrackYour: { strategy: 'role' as const, value: 'View and track your requests here.', role: 'img', actionKind: 'generic' as const },
    youHaveNoActive: { strategy: 'text' as const, value: 'You have no active requests at the moment.', actionKind: 'text' as const },
    assignedTrainingTitle: { strategy: 'text' as const, value: 'Assigned training', actionKind: 'generic' as const },
    viewYourRequiredAssigned: { strategy: 'role' as const, value: 'View your required, assigned, and in-progress training in Talent Central—your personalized learning hub for required training, role-based learning, skill development, and AI-powered course recommendations.', role: 'img', actionKind: 'generic' as const },
    noAssignedTrainingAt: { strategy: 'text' as const, value: 'No assigned training at this time.', actionKind: 'text' as const },
    exploreAvailableTrainingOpportunities: { strategy: 'text' as const, value: 'Explore available training opportunities.', actionKind: 'text' as const },
    goToTalentCentral: { strategy: 'role' as const, value: 'Go to Talent Central', role: 'link', actionKind: 'link' as const },
    quickActions: { strategy: 'role' as const, value: 'Quick actions', role: 'heading', level: 3, actionKind: 'text' as const },
    getTechnicalSupport: { strategy: 'role' as const, value: 'Get technical support', role: 'link', actionKind: 'link' as const },
    getTechnicalSupport2: { strategy: 'title' as const, value: 'Get technical support', actionKind: 'generic' as const },
    viewHolidayCalendar: { strategy: 'role' as const, value: 'View holiday calendar', role: 'link', actionKind: 'link' as const },
    viewHolidayCalendar2: { strategy: 'title' as const, value: 'View holiday calendar', actionKind: 'generic' as const },
    viewPolicies: { strategy: 'role' as const, value: 'View policies', role: 'link', actionKind: 'link' as const },
    viewPolicies2: { strategy: 'title' as const, value: 'View policies', actionKind: 'generic' as const },
    manageExpenses: { strategy: 'role' as const, value: 'Manage expenses', role: 'link', actionKind: 'link' as const },
    manageExpenses2: { strategy: 'title' as const, value: 'Manage expenses', actionKind: 'generic' as const },
    microsoftTodoTitle: { strategy: 'text' as const, value: 'Tasks', actionKind: 'generic' as const },
    viewAndManageYour: { strategy: 'role' as const, value: 'View and manage your Microsoft To Do tasks here.', role: 'img', actionKind: 'generic' as const },
    goToMicrosoftTo: { strategy: 'role' as const, value: 'Go to Microsoft To Do', role: 'link', actionKind: 'link' as const },
    selectTodoList: { strategy: 'role' as const, value: 'Select Todo List', role: 'combobox', actionKind: 'generic' as const },
    tasks: { strategy: 'css' as const, value: '[class*="MicrosoftToDo_selectedCategory"]', actionKind: 'generic' as const },
    chevronDown: { strategy: 'altText' as const, value: 'chevron-down', actionKind: 'generic' as const },
    addATask: { strategy: 'placeholder' as const, value: 'Add a task', actionKind: 'textbox' as const },
    hotJobs: { strategy: 'css' as const, value: '[class*="HotJobs_hotJobs"]', actionKind: 'generic' as const },
    hotJobsTitle: { strategy: 'text' as const, value: 'Hot jobs', actionKind: 'generic' as const },
    hotJobsAreFeatured: { strategy: 'role' as const, value: 'Hot Jobs are featured roles that are in high demand across the organization and often require specialized or business-critical skills. These positions are highlighted to increase visibility and attract qualified talent to priority hiring and internal mobility opportunities.', role: 'img', actionKind: 'generic' as const },
    productManagerHcm: { strategy: 'role' as const, value: 'Product Manager - HCM Solutions', role: 'button', actionKind: 'button' as const },
    productManagerHcmProductManagerHcmSolution: { strategy: 'css' as const, value: '[class*="HotJobs_jobTitle"]', actionKind: 'generic' as const },
    productManagement: { strategy: 'css' as const, value: '[class*="HotJobs_jobMetaItem"]', actionKind: 'generic' as const },
    productManagement2: { strategy: 'css' as const, value: '[class*="HotJobs_jobMetaText"]', actionKind: 'generic' as const },
    londonUkDublinLondonUkDublinIreland: { strategy: 'css' as const, value: '[class*="HotJobs_jobLocationText"]', actionKind: 'generic' as const },
    remotePostedAMonth: { strategy: 'css' as const, value: '[class*="HotJobs_jobFooter"]', actionKind: 'generic' as const },
    remote2: { strategy: 'css' as const, value: '[class*="HotJobs_jobLocationTypeText"]', actionKind: 'generic' as const },
    postedAMonthAgo: { strategy: 'css' as const, value: '[class*="HotJobs_postedDate"]', actionKind: 'generic' as const },
    qaAutomationLead: { strategy: 'role' as const, value: 'QA Automation Lead', role: 'button', actionKind: 'button' as const },
    seniorSoftwareEngineerDriving: { strategy: 'role' as const, value: 'Senior Software Engineer Driving Enterprise Application Development Across Global Teams', role: 'button', actionKind: 'button' as const },
    seniorSoftwareEngineer: { strategy: 'role' as const, value: 'Senior Software Engineer', role: 'button', actionKind: 'button' as const },
    cloudInfrastructureEngineer: { strategy: 'role' as const, value: 'Cloud Infrastructure Engineer', role: 'button', actionKind: 'button' as const },
    customerSuccessManager: { strategy: 'role' as const, value: 'Customer Success Manager', role: 'button', actionKind: 'button' as const },
    uxUiDesignerChecking: { strategy: 'role' as const, value: 'UX/UI Designer : Checking duplicate', role: 'button', actionKind: 'button' as const },
    seniorPrincipalSoftwareEngineerArchitect: { strategy: 'role' as const, value: 'Senior Principal Software Engineer/Architect', role: 'button', actionKind: 'button' as const },
    spaceReservationsTitle: { strategy: 'text' as const, value: 'My space reservations', actionKind: 'generic' as const },
    viewYourUpcomingSpace: { strategy: 'role' as const, value: 'View your upcoming space reservations or book a new one. Click the menu to update details.', role: 'img', actionKind: 'generic' as const },
    noReservations: { strategy: 'altText' as const, value: 'no reservations', actionKind: 'generic' as const },
    noReservationsFound: { strategy: 'text' as const, value: 'No reservations found', actionKind: 'text' as const },
    youDonTHaveAny: { strategy: 'text' as const, value: 'You don\'t have any upcoming space reservations.', actionKind: 'text' as const },
    bookASpaceReservation: { strategy: 'role' as const, value: 'Book a space reservation', role: 'link', actionKind: 'link' as const },
    taviChat: { strategy: 'css' as const, value: '#webchat', actionKind: 'generic' as const },
    englishUnitedStates: { strategy: 'css' as const, value: '#language-switcher-button', actionKind: 'button' as const },
    chat: { strategy: 'testId' as const, value: 'chat-link', frame: 'iframe#mw4web_iframe', actionKind: 'button' as const },
    aiUnsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    checked: { strategy: 'altText' as const, value: 'checked', actionKind: 'generic' as const },
    newsSavedSuccessfully: { strategy: 'text' as const, value: 'News saved successfully!', actionKind: 'text' as const },
    viewSavedNewsUnder: { strategy: 'role' as const, value: 'View saved news under your profile.', role: 'link', actionKind: 'link' as const },
    jm: { strategy: 'css' as const, value: '[class*="Header_menuProfilePic"]', actionKind: 'generic' as const },
    viewAccount: { strategy: 'css' as const, value: '[class*="Header_viewAccount"]', actionKind: 'generic' as const },
    saveIcon: { strategy: 'altText' as const, value: 'save-icon', actionKind: 'generic' as const },
    mySavedNews: { strategy: 'css' as const, value: '[class*="Header_menuProfileTtitle"]', actionKind: 'generic' as const },
    gridIcon: { strategy: 'altText' as const, value: 'grid-icon', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextViewThisPageIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn));
  }

  async expectViewThisPageInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), timeoutMs, soft);
  }

  async selectTo(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, UkgcommonsPage.L.to), value);
  }

  async expectToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.to), timeoutMs, soft);
  }

  async clickHeaderLogoCXuk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk));
  }

  async expectHeaderLogoCXukVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), timeoutMs, soft);
  }

  async clickTopSitesTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.topSitesTitle));
  }

  async doubleClickTopSitesTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.topSitesTitle));
  }

  async expectTopSitesTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), timeoutMs, soft);
  }

  async clickMyAppsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myAppsTitle));
  }

  async doubleClickMyAppsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myAppsTitle));
  }

  async expectMyAppsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), timeoutMs, soft);
  }

  async clickShowCollapsedMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu));
  }

  async doubleClickShowCollapsedMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), timeoutMs, soft);
  }

  async clickUserProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async expectUserProfileVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs, soft);
  }

  async clickHeaderBg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerBg));
  }

  async expectHeaderBgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs, soft);
  }

  async getInnerTextHiJagadeeshWhatAre(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre));
  }

  async expectHiJagadeeshWhatAreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), timeoutMs, soft);
  }

  async clickSharePoint(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.sharePoint));
  }

  async doubleClickSharePoint(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.sharePoint));
  }

  async expectSharePointVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.sharePoint), timeoutMs, soft);
  }

  async fillSearchNewsSitesOr(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), value);
  }

  async clearSearchNewsSitesOr(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr));
  }

  async getSearchNewsSitesOrValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr));
  }

  async expectSearchNewsSitesOrVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs, soft);
  }

  async clickSearchIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async expectSearchIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs, soft);
  }

  async getInnerTextPopularSearches(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.popularSearches));
  }

  async expectPopularSearchesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.popularSearches), timeoutMs, soft);
  }

  async clickBrandHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.brandHub));
  }

  async doubleClickBrandHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.brandHub));
  }

  async expectBrandHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.brandHub), timeoutMs, soft);
  }

  async clickHolidayCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.holidayCalendar));
  }

  async doubleClickHolidayCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.holidayCalendar));
  }

  async expectHolidayCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), timeoutMs, soft);
  }

  async clickCelebrateU(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebrateU));
  }

  async doubleClickCelebrateU(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebrateU));
  }

  async expectCelebrateUVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebrateU), timeoutMs, soft);
  }

  async clickNewHireCenter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newHireCenter));
  }

  async doubleClickNewHireCenter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newHireCenter));
  }

  async expectNewHireCenterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newHireCenter), timeoutMs, soft);
  }

  async clickAnnouncements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async expectAnnouncementsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs, soft);
  }

  async getInnerTextAnnouncements2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements2));
  }

  async expectAnnouncements2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.announcements2), timeoutMs, soft);
  }

  async clickPrevSwitchToOtherAnnouncement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async doubleClickPrevSwitchToOtherAnnouncement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async expectPrevSwitchToOtherAnnouncementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async getInnerTextReviewDetailsHowTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo));
  }

  async expectReviewDetailsHowToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), timeoutMs, soft);
  }

  async getInnerTextGetKeyUpdatesFrom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom));
  }

  async expectGetKeyUpdatesFromVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), timeoutMs, soft);
  }

  async clickLearnMore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.learnMore));
  }

  async expectLearnMoreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.learnMore), timeoutMs, soft);
  }

  async clickNextSwitchToOtherAnnouncement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async doubleClickNextSwitchToOtherAnnouncement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async expectNextSwitchToOtherAnnouncementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async clickFeaturedNewsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async clickSwitchToPreviousNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async doubleClickSwitchToPreviousNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async clickAiMedia(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async expectAiMediaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs, soft);
  }

  async getInnerTextAiTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async expectAiTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs, soft);
  }

  async getInnerTextAiDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs, soft);
  }

  async clickAiShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async doubleClickAiShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async expectAiShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs, soft);
  }

  async clickAiSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async doubleClickAiSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async expectAiSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDev(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async expectTakeTheNextStepInYourDevVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStepInYourDevStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs, soft);
  }

  async clickAllEmployeeTownHallJune(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs, soft);
  }

  async getInnerTextAllEmployeeTownHallJuneAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs, soft);
  }

  async clickCelebratingTheStrengthOfTh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOfTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOfThChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs, soft);
  }

  async clickPrideMonth2026TogetherWi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi));
  }

  async expectPrideMonth2026TogetherWiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), timeoutMs, soft);
  }

  async getInnerTextPrideMonth2026TogetherWiSequoyaFord(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async expectPrideMonth2026TogetherWiSequoyaFordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs, soft);
  }

  async clickGlobalImpactInAction4Wee(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee));
  }

  async expectGlobalImpactInAction4WeeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), timeoutMs, soft);
  }

  async getInnerTextGlobalImpactInAction4WeeSarahMarks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async expectGlobalImpactInAction4WeeSarahMarksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs, soft);
  }

  async clickCelebratingOneYearOfShiftb(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb));
  }

  async expectCelebratingOneYearOfShiftbVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), timeoutMs, soft);
  }

  async getInnerTextCelebratingOneYearOfShiftbBrianBower(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async expectCelebratingOneYearOfShiftbBrianBowerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs, soft);
  }

  async clickSwitchToNextNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async doubleClickSwitchToNextNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async clickLatestNewsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async doubleClickLatestNewsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async expectLatestNewsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs, soft);
  }

  async clickSocialCircleTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle));
  }

  async doubleClickSocialCircleTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle));
  }

  async expectSocialCircleTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), timeoutMs, soft);
  }

  async clickCatchUpOnThe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe));
  }

  async expectCatchUpOnTheVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), timeoutMs, soft);
  }

  async clickSeeAllInternalNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews));
  }

  async doubleClickSeeAllInternalNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews));
  }

  async expectSeeAllInternalNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), timeoutMs, soft);
  }

  async clickBuildNewsletterJuly(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly));
  }

  async expectBuildNewsletterJulyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), timeoutMs, soft);
  }

  async clickPeopleUkgBuild(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild));
  }

  async expectPeopleUkgBuildVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), timeoutMs, soft);
  }

  async clickComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.comment));
  }

  async expectCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs, soft);
  }

  async clickPolicyGovernanceAtUkgBuil(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil));
  }

  async expectPolicyGovernanceAtUkgBuilVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), timeoutMs, soft);
  }

  async clickPolicyGovernanceAtUkgBuilLegalRiskCompliance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs, soft);
  }

  async clickPolicyGovernanceAtUkgLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink));
  }

  async expectPolicyGovernanceAtUkgLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLowellOffiInsideUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs, soft);
  }

  async clickAgencyUAgentAThonMovesIntAiHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async expectAgencyUAgentAThonMovesIntAiHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs, soft);
  }

  async clickAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async expectAgencyUAgentAThonMovesIntoLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs, soft);
  }

  async clickNewForresterTotalEconomicI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI));
  }

  async expectNewForresterTotalEconomicIVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), timeoutMs, soft);
  }

  async clickNewForresterTotalEconomicIGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing));
  }

  async expectNewForresterTotalEconomicIGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), timeoutMs, soft);
  }

  async clickNewForresterTotalEconomicLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink));
  }

  async expectNewForresterTotalEconomicLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), timeoutMs, soft);
  }

  async clickJuly2026HealthAwarenessSp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp));
  }

  async expectJuly2026HealthAwarenessSpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), timeoutMs, soft);
  }

  async clickJuly2026HealthAwarenessSpPeopleUkgCares(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs, soft);
  }

  async clickEmployeeResourceGroupErg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg));
  }

  async expectEmployeeResourceGroupErgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs, soft);
  }

  async clickEmployeeResourceGroupErgPeopleBelongingImpact(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact));
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), timeoutMs, soft);
  }

  async clickUkgRiseEarlyCareerMonthB(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB));
  }

  async expectUkgRiseEarlyCareerMonthBVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), timeoutMs, soft);
  }

  async clickGlobalSecurityManagedVault(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault));
  }

  async expectGlobalSecurityManagedVaultVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs, soft);
  }

  async clickGlobalSecurityManagedVaultProductEngineeringGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal));
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), timeoutMs, soft);
  }

  async clickGlobalSecurityManagedVaultLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink));
  }

  async expectGlobalSecurityManagedVaultLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs, soft);
  }

  async clickBaselineImagesRequiredForN(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN));
  }

  async expectBaselineImagesRequiredForNVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), timeoutMs, soft);
  }

  async clickUkgNucleusRoiLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink));
  }

  async expectUkgNucleusRoiLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs, soft);
  }

  async clickUkgCommonsMobileAppNowAvaCommsEmployeeCommunications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications));
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), timeoutMs, soft);
  }

  async clickUkgCommonsMobileAppLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink));
  }

  async expectUkgCommonsMobileAppLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), timeoutMs, soft);
  }

  async clickWhatSecuritySeesSometimes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes));
  }

  async expectWhatSecuritySeesSometimesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), timeoutMs, soft);
  }

  async clickDisabilityINJuly2026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026));
  }

  async expectDisabilityINJuly2026Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), timeoutMs, soft);
  }

  async clickDisabilityINJuly2026PeopleUkgAdapt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt));
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekPhotoOfTheWeekTakeYourC(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs, soft);
  }

  async clickDoNotEngageWithUnsolicited(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited));
  }

  async expectDoNotEngageWithUnsolicitedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), timeoutMs, soft);
  }

  async clickThankYouForParticipatingIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn));
  }

  async expectThankYouForParticipatingInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), timeoutMs, soft);
  }

  async clickThankYouForParticipatingInPeopleEmployeeExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience));
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), timeoutMs, soft);
  }

  async clickThankYouForParticipatingLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink));
  }

  async expectThankYouForParticipatingLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs, soft);
  }

  async clickBigWinForUkgCommsAnalystRelations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations));
  }

  async expectBigWinForUkgCommsAnalystRelationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), timeoutMs, soft);
  }

  async clickBigWinForLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForLink));
  }

  async expectBigWinForLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs, soft);
  }

  async clickTuneInTodayUkgAdLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink));
  }

  async expectTuneInTodayUkgAdLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs, soft);
  }

  async clickClaudeEnterpriseAccessForN(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN));
  }

  async expectClaudeEnterpriseAccessForNVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), timeoutMs, soft);
  }

  async clickUpcomingEvents(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents));
  }

  async expectUpcomingEventsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs, soft);
  }

  async clickUpcomingEventsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle));
  }

  async expectUpcomingEventsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), timeoutMs, soft);
  }

  async clickSeeAll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAll));
  }

  async doubleClickSeeAll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAll));
  }

  async expectSeeAllVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.seeAll), timeoutMs, soft);
  }

  async clickCategoryAll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll));
  }

  async expectCategoryAllVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll), timeoutMs, soft);
  }

  async clickCategoryAll2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll2));
  }

  async expectCategoryAll2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll2), timeoutMs, soft);
  }

  async clickStretchRelaxVirtualGrouPeopleBenefits(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits));
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), timeoutMs, soft);
  }

  async clickPeopleBenefitsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink));
  }

  async expectPeopleBenefitsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), timeoutMs, soft);
  }

  async clickStretchRelaxVirtualGrou(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou));
  }

  async expectStretchRelaxVirtualGrouVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), timeoutMs, soft);
  }

  async clickStretchRelaxVirtualGrouLocation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation));
  }

  async expectStretchRelaxVirtualGrouLocationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), timeoutMs, soft);
  }

  async getInnerTextStretchRelaxVirtualGrouVirtual(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual));
  }

  async expectStretchRelaxVirtualGrouVirtualVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), timeoutMs, soft);
  }

  async clickStretchRelaxVirtualGrouAddToCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar));
  }

  async doubleClickStretchRelaxVirtualGrouAddToCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar));
  }

  async expectStretchRelaxVirtualGrouAddToCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), timeoutMs, soft);
  }

  async clickPeopleUkgUnidosLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink));
  }

  async expectPeopleUkgUnidosLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), timeoutMs, soft);
  }

  async clickPeopleUkgNestLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink));
  }

  async expectPeopleUkgNestLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), timeoutMs, soft);
  }

  async getInnerTextNestAndAdaptWeRockTheSpeLybertyWayWestford(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford));
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), timeoutMs, soft);
  }

  async clickPeopleUkgRiseLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink));
  }

  async expectPeopleUkgRiseLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), timeoutMs, soft);
  }

  async getInnerTextUkgRiseVirtualSpeedNetworkVirtualZoomMeeting(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting));
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), timeoutMs, soft);
  }

  async clickPeopleUkgPrideLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink));
  }

  async expectPeopleUkgPrideLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), timeoutMs, soft);
  }

  async getInnerTextOutEqualPresentsSignalTVirtualZoom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom));
  }

  async expectOutEqualPresentsSignalTVirtualZoomVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), timeoutMs, soft);
  }

  async clickUpcomingMeetings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings));
  }

  async expectUpcomingMeetingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), timeoutMs, soft);
  }

  async getInnerTextMyCalendar(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar));
  }

  async expectMyCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs, soft);
  }

  async getInnerTextNoUpcomingMeetings(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings));
  }

  async expectNoUpcomingMeetingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), timeoutMs, soft);
  }

  async clickLatestNewsTitleRequestsOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async expectLatestNewsTitleRequestsOverviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs, soft);
  }

  async clickMyRequests0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async doubleClickMyRequests0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async expectMyRequests0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs, soft);
  }

  async clickApprovals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.approvals));
  }

  async doubleClickApprovals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.approvals));
  }

  async expectApprovalsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.approvals), timeoutMs, soft);
  }

  async clickViewAndTrackYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour));
  }

  async expectViewAndTrackYourVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), timeoutMs, soft);
  }

  async getInnerTextYouHaveNoActive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive));
  }

  async expectYouHaveNoActiveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), timeoutMs, soft);
  }

  async clickAssignedTrainingTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async expectAssignedTrainingTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs, soft);
  }

  async clickViewYourRequiredAssigned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned));
  }

  async expectViewYourRequiredAssignedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), timeoutMs, soft);
  }

  async getInnerTextNoAssignedTrainingAt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt));
  }

  async expectNoAssignedTrainingAtVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), timeoutMs, soft);
  }

  async getInnerTextExploreAvailableTrainingOpportunities(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities));
  }

  async expectExploreAvailableTrainingOpportunitiesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), timeoutMs, soft);
  }

  async clickGoToTalentCentral(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral));
  }

  async expectGoToTalentCentralVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), timeoutMs, soft);
  }

  async getInnerTextQuickActions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.quickActions));
  }

  async expectQuickActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.quickActions), timeoutMs, soft);
  }

  async clickGetTechnicalSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport));
  }

  async expectGetTechnicalSupportVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), timeoutMs, soft);
  }

  async clickGetTechnicalSupport2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2));
  }

  async expectGetTechnicalSupport2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), timeoutMs, soft);
  }

  async clickViewHolidayCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar));
  }

  async expectViewHolidayCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs, soft);
  }

  async clickViewHolidayCalendar2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2));
  }

  async expectViewHolidayCalendar2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), timeoutMs, soft);
  }

  async clickViewPolicies(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies));
  }

  async expectViewPoliciesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs, soft);
  }

  async clickViewPolicies2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies2));
  }

  async expectViewPolicies2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), timeoutMs, soft);
  }

  async clickManageExpenses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses));
  }

  async expectManageExpensesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs, soft);
  }

  async clickManageExpenses2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses2));
  }

  async expectManageExpenses2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), timeoutMs, soft);
  }

  async clickMicrosoftTodoTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle));
  }

  async expectMicrosoftTodoTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), timeoutMs, soft);
  }

  async clickViewAndManageYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour));
  }

  async expectViewAndManageYourVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), timeoutMs, soft);
  }

  async clickGoToMicrosoftTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo));
  }

  async expectGoToMicrosoftToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), timeoutMs, soft);
  }

  async clickSelectTodoList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.selectTodoList));
  }

  async expectSelectTodoListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.selectTodoList), timeoutMs, soft);
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs, soft);
  }

  async clickChevronDown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.chevronDown));
  }

  async expectChevronDownVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs, soft);
  }

  async fillAddATask(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask), value);
  }

  async clearAddATask(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask));
  }

  async getAddATaskValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask));
  }

  async expectAddATaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs, soft);
  }

  async clickHotJobs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async expectHotJobsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs, soft);
  }

  async clickHotJobsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async expectHotJobsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs, soft);
  }

  async clickHotJobsAreFeatured(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
  }

  async expectHotJobsAreFeaturedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs, soft);
  }

  async clickProductManagerHcm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcm));
  }

  async doubleClickProductManagerHcm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcm));
  }

  async expectProductManagerHcmVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), timeoutMs, soft);
  }

  async clickProductManagerHcmProductManagerHcmSolution(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution));
  }

  async expectProductManagerHcmProductManagerHcmSolutionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), timeoutMs, soft);
  }

  async clickProductManagement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement));
  }

  async expectProductManagementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.productManagement), timeoutMs, soft);
  }

  async clickProductManagement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement2));
  }

  async expectProductManagement2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.productManagement2), timeoutMs, soft);
  }

  async clickLondonUkDublinLondonUkDublinIreland(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland));
  }

  async expectLondonUkDublinLondonUkDublinIrelandVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), timeoutMs, soft);
  }

  async clickRemotePostedAMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth));
  }

  async expectRemotePostedAMonthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), timeoutMs, soft);
  }

  async clickRemote2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.remote2));
  }

  async expectRemote2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.remote2), timeoutMs, soft);
  }

  async clickPostedAMonthAgo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo));
  }

  async expectPostedAMonthAgoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), timeoutMs, soft);
  }

  async clickQaAutomationLead(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead));
  }

  async doubleClickQaAutomationLead(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead));
  }

  async expectQaAutomationLeadVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), timeoutMs, soft);
  }

  async clickSeniorSoftwareEngineerDriving(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving));
  }

  async doubleClickSeniorSoftwareEngineerDriving(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving));
  }

  async expectSeniorSoftwareEngineerDrivingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), timeoutMs, soft);
  }

  async clickSeniorSoftwareEngineer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer));
  }

  async doubleClickSeniorSoftwareEngineer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer));
  }

  async expectSeniorSoftwareEngineerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), timeoutMs, soft);
  }

  async clickCloudInfrastructureEngineer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer));
  }

  async doubleClickCloudInfrastructureEngineer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer));
  }

  async expectCloudInfrastructureEngineerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), timeoutMs, soft);
  }

  async clickCustomerSuccessManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager));
  }

  async doubleClickCustomerSuccessManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager));
  }

  async expectCustomerSuccessManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), timeoutMs, soft);
  }

  async clickUxUiDesignerChecking(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking));
  }

  async doubleClickUxUiDesignerChecking(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking));
  }

  async expectUxUiDesignerCheckingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), timeoutMs, soft);
  }

  async clickSeniorPrincipalSoftwareEngineerArchitect(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect));
  }

  async doubleClickSeniorPrincipalSoftwareEngineerArchitect(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect));
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), timeoutMs, soft);
  }

  async clickSpaceReservationsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle));
  }

  async expectSpaceReservationsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), timeoutMs, soft);
  }

  async clickViewYourUpcomingSpace(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace));
  }

  async expectViewYourUpcomingSpaceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), timeoutMs, soft);
  }

  async clickNoReservations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservations));
  }

  async expectNoReservationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.noReservations), timeoutMs, soft);
  }

  async getInnerTextNoReservationsFound(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservationsFound));
  }

  async expectNoReservationsFoundVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), timeoutMs, soft);
  }

  async getInnerTextYouDonTHaveAny(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny));
  }

  async expectYouDonTHaveAnyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), timeoutMs, soft);
  }

  async clickBookASpaceReservation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation));
  }

  async expectBookASpaceReservationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), timeoutMs, soft);
  }

  async clickTaviChat(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.taviChat));
  }

  async expectTaviChatVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.taviChat), timeoutMs, soft);
  }

  async clickEnglishUnitedStates(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates));
  }

  async doubleClickEnglishUnitedStates(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates));
  }

  async expectEnglishUnitedStatesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), timeoutMs, soft);
  }

  async clickChat(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.chat));
  }

  async doubleClickChat(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.chat));
  }

  async expectChatVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.chat), timeoutMs, soft);
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

  async clickAiUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async doubleClickAiUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async expectAiUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async clickChecked(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.checked));
  }

  async expectCheckedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.checked), timeoutMs, soft);
  }

  async getInnerTextNewsSavedSuccessfully(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async expectNewsSavedSuccessfullyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs, soft);
  }

  async clickViewSavedNewsUnder(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async expectViewSavedNewsUnderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs, soft);
  }

  async clickJm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.jm));
  }

  async expectJmVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.jm), timeoutMs, soft);
  }

  async clickViewAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async expectViewAccountVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs, soft);
  }

  async clickSaveIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveIcon));
  }

  async expectSaveIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.saveIcon), timeoutMs, soft);
  }

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickGridIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.gridIcon));
  }

  async expectGridIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs, soft);
  }


  async clickViewThisPageIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn));
  }

  async doubleClickViewThisPageIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn));
  }

  async longPressViewThisPageIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn));
  }

  async expectViewThisPageInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), expected, timeoutMs);
  }

  async expectViewThisPageInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), substring, timeoutMs);
  }

  async expectViewThisPageInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), value, timeoutMs);
  }

  async expectViewThisPageInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), timeoutMs);
  }

  async expectViewThisPageInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn), count, timeoutMs);
  }

  async scrollViewThisPageInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewThisPageIn));
  }

  async expectToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.to), timeoutMs);
  }

  async expectToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.to), expected, timeoutMs);
  }

  async expectToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.to), substring, timeoutMs);
  }

  async expectToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.to), value, timeoutMs);
  }

  async expectToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.to), timeoutMs);
  }

  async expectToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.to), timeoutMs);
  }

  async expectToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.to), timeoutMs);
  }

  async expectToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.to), timeoutMs);
  }

  async expectToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.to), timeoutMs);
  }

  async expectToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.to), count, timeoutMs);
  }

  async scrollToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.to));
  }

  async doubleClickHeaderLogoCXuk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk));
  }

  async longPressHeaderLogoCXuk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk));
  }

  async expectHeaderLogoCXukHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), timeoutMs);
  }

  async expectHeaderLogoCXukText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), expected, timeoutMs);
  }

  async expectHeaderLogoCXukContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), substring, timeoutMs);
  }

  async expectHeaderLogoCXukValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), value, timeoutMs);
  }

  async expectHeaderLogoCXukEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), timeoutMs);
  }

  async expectHeaderLogoCXukDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), timeoutMs);
  }

  async expectHeaderLogoCXukChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), timeoutMs);
  }

  async expectHeaderLogoCXukUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), timeoutMs);
  }

  async expectHeaderLogoCXukFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), timeoutMs);
  }

  async expectHeaderLogoCXukCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk), count, timeoutMs);
  }

  async scrollHeaderLogoCXukIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerLogoCXuk));
  }

  async longPressTopSitesTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.topSitesTitle));
  }

  async expectTopSitesTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), expected, timeoutMs);
  }

  async expectTopSitesTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), substring, timeoutMs);
  }

  async expectTopSitesTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), value, timeoutMs);
  }

  async expectTopSitesTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), timeoutMs);
  }

  async expectTopSitesTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.topSitesTitle), count, timeoutMs);
  }

  async scrollTopSitesTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.topSitesTitle));
  }

  async longPressMyAppsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.myAppsTitle));
  }

  async expectMyAppsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), expected, timeoutMs);
  }

  async expectMyAppsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), substring, timeoutMs);
  }

  async expectMyAppsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), value, timeoutMs);
  }

  async expectMyAppsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), timeoutMs);
  }

  async expectMyAppsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.myAppsTitle), count, timeoutMs);
  }

  async scrollMyAppsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.myAppsTitle));
  }

  async longPressShowCollapsedMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), expected, timeoutMs);
  }

  async expectShowCollapsedMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), substring, timeoutMs);
  }

  async expectShowCollapsedMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), value, timeoutMs);
  }

  async expectShowCollapsedMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu), count, timeoutMs);
  }

  async scrollShowCollapsedMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.showCollapsedMenu));
  }

  async doubleClickUserProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async longPressUserProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async expectUserProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.userProfile), expected, timeoutMs);
  }

  async expectUserProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.userProfile), substring, timeoutMs);
  }

  async expectUserProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.userProfile), value, timeoutMs);
  }

  async expectUserProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.userProfile), count, timeoutMs);
  }

  async scrollUserProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async doubleClickHeaderBg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerBg));
  }

  async longPressHeaderBg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerBg));
  }

  async expectHeaderBgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs);
  }

  async expectHeaderBgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.headerBg), expected, timeoutMs);
  }

  async expectHeaderBgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.headerBg), substring, timeoutMs);
  }

  async expectHeaderBgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.headerBg), value, timeoutMs);
  }

  async expectHeaderBgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs);
  }

  async expectHeaderBgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs);
  }

  async expectHeaderBgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs);
  }

  async expectHeaderBgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs);
  }

  async expectHeaderBgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs);
  }

  async expectHeaderBgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.headerBg), count, timeoutMs);
  }

  async scrollHeaderBgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerBg));
  }

  async clickHiJagadeeshWhatAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre));
  }

  async doubleClickHiJagadeeshWhatAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre));
  }

  async longPressHiJagadeeshWhatAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre));
  }

  async expectHiJagadeeshWhatAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), timeoutMs);
  }

  async expectHiJagadeeshWhatAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), expected, timeoutMs);
  }

  async expectHiJagadeeshWhatAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), substring, timeoutMs);
  }

  async expectHiJagadeeshWhatAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), value, timeoutMs);
  }

  async expectHiJagadeeshWhatAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), timeoutMs);
  }

  async expectHiJagadeeshWhatAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), timeoutMs);
  }

  async expectHiJagadeeshWhatAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), timeoutMs);
  }

  async expectHiJagadeeshWhatAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), timeoutMs);
  }

  async expectHiJagadeeshWhatAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), timeoutMs);
  }

  async expectHiJagadeeshWhatAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre), count, timeoutMs);
  }

  async scrollHiJagadeeshWhatAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiJagadeeshWhatAre));
  }

  async longPressSharePoint(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.sharePoint));
  }

  async expectSharePointHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.sharePoint), timeoutMs);
  }

  async expectSharePointText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.sharePoint), expected, timeoutMs);
  }

  async expectSharePointContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.sharePoint), substring, timeoutMs);
  }

  async expectSharePointValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.sharePoint), value, timeoutMs);
  }

  async expectSharePointEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.sharePoint), timeoutMs);
  }

  async expectSharePointDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.sharePoint), timeoutMs);
  }

  async expectSharePointChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.sharePoint), timeoutMs);
  }

  async expectSharePointUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.sharePoint), timeoutMs);
  }

  async expectSharePointFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.sharePoint), timeoutMs);
  }

  async expectSharePointCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.sharePoint), count, timeoutMs);
  }

  async scrollSharePointIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.sharePoint));
  }

  async typeTextSearchNewsSitesOr(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), value);
  }

  async expectSearchNewsSitesOrHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), expected, timeoutMs);
  }

  async expectSearchNewsSitesOrContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), substring, timeoutMs);
  }

  async expectSearchNewsSitesOrValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), value, timeoutMs);
  }

  async expectSearchNewsSitesOrEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), count, timeoutMs);
  }

  async scrollSearchNewsSitesOrIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr));
  }

  async doubleClickSearchIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async longPressSearchIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async expectSearchIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.searchIcon), expected, timeoutMs);
  }

  async expectSearchIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.searchIcon), substring, timeoutMs);
  }

  async expectSearchIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.searchIcon), value, timeoutMs);
  }

  async expectSearchIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.searchIcon), count, timeoutMs);
  }

  async scrollSearchIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async clickPopularSearches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.popularSearches));
  }

  async doubleClickPopularSearches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.popularSearches));
  }

  async longPressPopularSearches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.popularSearches));
  }

  async expectPopularSearchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.popularSearches), expected, timeoutMs);
  }

  async expectPopularSearchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.popularSearches), substring, timeoutMs);
  }

  async expectPopularSearchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.popularSearches), value, timeoutMs);
  }

  async expectPopularSearchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.popularSearches), timeoutMs);
  }

  async expectPopularSearchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.popularSearches), count, timeoutMs);
  }

  async scrollPopularSearchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.popularSearches));
  }

  async longPressBrandHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.brandHub));
  }

  async expectBrandHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.brandHub), timeoutMs);
  }

  async expectBrandHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.brandHub), expected, timeoutMs);
  }

  async expectBrandHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.brandHub), substring, timeoutMs);
  }

  async expectBrandHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.brandHub), value, timeoutMs);
  }

  async expectBrandHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.brandHub), timeoutMs);
  }

  async expectBrandHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.brandHub), timeoutMs);
  }

  async expectBrandHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.brandHub), timeoutMs);
  }

  async expectBrandHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.brandHub), timeoutMs);
  }

  async expectBrandHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.brandHub), timeoutMs);
  }

  async expectBrandHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.brandHub), count, timeoutMs);
  }

  async scrollBrandHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.brandHub));
  }

  async longPressHolidayCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.holidayCalendar));
  }

  async expectHolidayCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), expected, timeoutMs);
  }

  async expectHolidayCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), substring, timeoutMs);
  }

  async expectHolidayCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), value, timeoutMs);
  }

  async expectHolidayCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), timeoutMs);
  }

  async expectHolidayCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.holidayCalendar), count, timeoutMs);
  }

  async scrollHolidayCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.holidayCalendar));
  }

  async longPressCelebrateU(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebrateU));
  }

  async expectCelebrateUHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebrateU), expected, timeoutMs);
  }

  async expectCelebrateUContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebrateU), substring, timeoutMs);
  }

  async expectCelebrateUValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebrateU), value, timeoutMs);
  }

  async expectCelebrateUEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebrateU), timeoutMs);
  }

  async expectCelebrateUCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebrateU), count, timeoutMs);
  }

  async scrollCelebrateUIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebrateU));
  }

  async longPressNewHireCenter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newHireCenter));
  }

  async expectNewHireCenterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newHireCenter), expected, timeoutMs);
  }

  async expectNewHireCenterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newHireCenter), substring, timeoutMs);
  }

  async expectNewHireCenterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newHireCenter), value, timeoutMs);
  }

  async expectNewHireCenterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newHireCenter), timeoutMs);
  }

  async expectNewHireCenterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newHireCenter), count, timeoutMs);
  }

  async scrollNewHireCenterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newHireCenter));
  }

  async doubleClickAnnouncements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async longPressAnnouncements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async expectAnnouncementsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.announcements), expected, timeoutMs);
  }

  async expectAnnouncementsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.announcements), substring, timeoutMs);
  }

  async expectAnnouncementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.announcements), value, timeoutMs);
  }

  async expectAnnouncementsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.announcements), count, timeoutMs);
  }

  async scrollAnnouncementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async clickAnnouncements2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements2));
  }

  async doubleClickAnnouncements2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements2));
  }

  async longPressAnnouncements2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements2));
  }

  async expectAnnouncements2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.announcements2), timeoutMs);
  }

  async expectAnnouncements2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.announcements2), expected, timeoutMs);
  }

  async expectAnnouncements2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.announcements2), substring, timeoutMs);
  }

  async expectAnnouncements2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.announcements2), value, timeoutMs);
  }

  async expectAnnouncements2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.announcements2), timeoutMs);
  }

  async expectAnnouncements2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.announcements2), timeoutMs);
  }

  async expectAnnouncements2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.announcements2), timeoutMs);
  }

  async expectAnnouncements2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.announcements2), timeoutMs);
  }

  async expectAnnouncements2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.announcements2), timeoutMs);
  }

  async expectAnnouncements2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.announcements2), count, timeoutMs);
  }

  async scrollAnnouncements2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements2));
  }

  async longPressPrevSwitchToOtherAnnouncement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async expectPrevSwitchToOtherAnnouncementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), expected, timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), substring, timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), value, timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), count, timeoutMs);
  }

  async scrollPrevSwitchToOtherAnnouncementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async clickReviewDetailsHowTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo));
  }

  async doubleClickReviewDetailsHowTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo));
  }

  async longPressReviewDetailsHowTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo));
  }

  async expectReviewDetailsHowToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), timeoutMs);
  }

  async expectReviewDetailsHowToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), expected, timeoutMs);
  }

  async expectReviewDetailsHowToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), substring, timeoutMs);
  }

  async expectReviewDetailsHowToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), value, timeoutMs);
  }

  async expectReviewDetailsHowToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), timeoutMs);
  }

  async expectReviewDetailsHowToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), timeoutMs);
  }

  async expectReviewDetailsHowToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), timeoutMs);
  }

  async expectReviewDetailsHowToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), timeoutMs);
  }

  async expectReviewDetailsHowToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), timeoutMs);
  }

  async expectReviewDetailsHowToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo), count, timeoutMs);
  }

  async scrollReviewDetailsHowToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.reviewDetailsHowTo));
  }

  async clickGetKeyUpdatesFrom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom));
  }

  async doubleClickGetKeyUpdatesFrom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom));
  }

  async longPressGetKeyUpdatesFrom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom));
  }

  async expectGetKeyUpdatesFromHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), timeoutMs);
  }

  async expectGetKeyUpdatesFromText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), expected, timeoutMs);
  }

  async expectGetKeyUpdatesFromContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), substring, timeoutMs);
  }

  async expectGetKeyUpdatesFromValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), value, timeoutMs);
  }

  async expectGetKeyUpdatesFromEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), timeoutMs);
  }

  async expectGetKeyUpdatesFromDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), timeoutMs);
  }

  async expectGetKeyUpdatesFromChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), timeoutMs);
  }

  async expectGetKeyUpdatesFromUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), timeoutMs);
  }

  async expectGetKeyUpdatesFromFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), timeoutMs);
  }

  async expectGetKeyUpdatesFromCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom), count, timeoutMs);
  }

  async scrollGetKeyUpdatesFromIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.getKeyUpdatesFrom));
  }

  async doubleClickLearnMore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.learnMore));
  }

  async longPressLearnMore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.learnMore));
  }

  async expectLearnMoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.learnMore), timeoutMs);
  }

  async expectLearnMoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.learnMore), expected, timeoutMs);
  }

  async expectLearnMoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.learnMore), substring, timeoutMs);
  }

  async expectLearnMoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.learnMore), value, timeoutMs);
  }

  async expectLearnMoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.learnMore), timeoutMs);
  }

  async expectLearnMoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.learnMore), timeoutMs);
  }

  async expectLearnMoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.learnMore), timeoutMs);
  }

  async expectLearnMoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.learnMore), timeoutMs);
  }

  async expectLearnMoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.learnMore), timeoutMs);
  }

  async expectLearnMoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.learnMore), count, timeoutMs);
  }

  async scrollLearnMoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.learnMore));
  }

  async longPressNextSwitchToOtherAnnouncement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async expectNextSwitchToOtherAnnouncementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), expected, timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), substring, timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), value, timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), count, timeoutMs);
  }

  async scrollNextSwitchToOtherAnnouncementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async doubleClickFeaturedNewsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async longPressFeaturedNewsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), expected, timeoutMs);
  }

  async expectFeaturedNewsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), substring, timeoutMs);
  }

  async expectFeaturedNewsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), value, timeoutMs);
  }

  async expectFeaturedNewsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), count, timeoutMs);
  }

  async scrollFeaturedNewsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async longPressSwitchToPreviousNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), expected, timeoutMs);
  }

  async expectSwitchToPreviousNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), substring, timeoutMs);
  }

  async expectSwitchToPreviousNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), value, timeoutMs);
  }

  async expectSwitchToPreviousNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), count, timeoutMs);
  }

  async scrollSwitchToPreviousNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async doubleClickAiMedia(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async longPressAiMedia(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async expectAiMediaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiMedia), expected, timeoutMs);
  }

  async expectAiMediaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiMedia), substring, timeoutMs);
  }

  async expectAiMediaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiMedia), value, timeoutMs);
  }

  async expectAiMediaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiMedia), count, timeoutMs);
  }

  async scrollAiMediaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async clickAiTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async doubleClickAiTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async longPressAiTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async expectAiTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiTitle), expected, timeoutMs);
  }

  async expectAiTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiTitle), substring, timeoutMs);
  }

  async expectAiTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiTitle), value, timeoutMs);
  }

  async expectAiTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiTitle), count, timeoutMs);
  }

  async scrollAiTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async clickAiDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async doubleClickAiDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async longPressAiDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), expected, timeoutMs);
  }

  async expectAiDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), substring, timeoutMs);
  }

  async expectAiDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), value, timeoutMs);
  }

  async expectAiDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), count, timeoutMs);
  }

  async scrollAiDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async longPressAiShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async expectAiShareNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiShareNews), expected, timeoutMs);
  }

  async expectAiShareNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiShareNews), substring, timeoutMs);
  }

  async expectAiShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiShareNews), value, timeoutMs);
  }

  async expectAiShareNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiShareNews), count, timeoutMs);
  }

  async scrollAiShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async longPressAiSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async expectAiSaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), expected, timeoutMs);
  }

  async expectAiSaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), substring, timeoutMs);
  }

  async expectAiSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), value, timeoutMs);
  }

  async expectAiSaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), count, timeoutMs);
  }

  async scrollAiSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async doubleClickTakeTheNextStepInYourDev(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async longPressTakeTheNextStepInYourDev(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async expectTakeTheNextStepInYourDevHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async clickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async doubleClickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async longPressTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async doubleClickAllEmployeeTownHallJune(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async longPressAllEmployeeTownHallJune(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallJuneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async clickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async doubleClickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async longPressAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallJuneAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async doubleClickCelebratingTheStrengthOfTh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async longPressCelebratingTheStrengthOfTh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfThIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async clickCelebratingTheStrengthOfTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async doubleClickCelebratingTheStrengthOfTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async longPressCelebratingTheStrengthOfTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async clickCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async doubleClickCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async longPressCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfThChristopherKiklasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async doubleClickPrideMonth2026TogetherWi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi));
  }

  async longPressPrideMonth2026TogetherWi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi));
  }

  async expectPrideMonth2026TogetherWiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), expected, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), substring, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), value, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi), count, timeoutMs);
  }

  async scrollPrideMonth2026TogetherWiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWi));
  }

  async clickPrideMonth2026TogetherWiSequoyaFord(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async doubleClickPrideMonth2026TogetherWiSequoyaFord(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async longPressPrideMonth2026TogetherWiSequoyaFord(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async expectPrideMonth2026TogetherWiSequoyaFordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), expected, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), substring, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), value, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord), count, timeoutMs);
  }

  async scrollPrideMonth2026TogetherWiSequoyaFordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async doubleClickGlobalImpactInAction4Wee(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee));
  }

  async longPressGlobalImpactInAction4Wee(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee));
  }

  async expectGlobalImpactInAction4WeeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), expected, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), substring, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), value, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee), count, timeoutMs);
  }

  async scrollGlobalImpactInAction4WeeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4Wee));
  }

  async clickGlobalImpactInAction4WeeSarahMarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async doubleClickGlobalImpactInAction4WeeSarahMarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async longPressGlobalImpactInAction4WeeSarahMarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async expectGlobalImpactInAction4WeeSarahMarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), expected, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), substring, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), value, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks), count, timeoutMs);
  }

  async scrollGlobalImpactInAction4WeeSarahMarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async doubleClickCelebratingOneYearOfShiftb(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb));
  }

  async longPressCelebratingOneYearOfShiftb(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb));
  }

  async expectCelebratingOneYearOfShiftbHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), expected, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), substring, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), value, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb), count, timeoutMs);
  }

  async scrollCelebratingOneYearOfShiftbIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftb));
  }

  async clickCelebratingOneYearOfShiftbBrianBower(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async doubleClickCelebratingOneYearOfShiftbBrianBower(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async longPressCelebratingOneYearOfShiftbBrianBower(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async expectCelebratingOneYearOfShiftbBrianBowerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), expected, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), substring, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), value, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower), count, timeoutMs);
  }

  async scrollCelebratingOneYearOfShiftbBrianBowerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async longPressSwitchToNextNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), expected, timeoutMs);
  }

  async expectSwitchToNextNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), substring, timeoutMs);
  }

  async expectSwitchToNextNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), value, timeoutMs);
  }

  async expectSwitchToNextNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), count, timeoutMs);
  }

  async scrollSwitchToNextNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async longPressLatestNewsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async expectLatestNewsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), expected, timeoutMs);
  }

  async expectLatestNewsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), substring, timeoutMs);
  }

  async expectLatestNewsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), value, timeoutMs);
  }

  async expectLatestNewsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), count, timeoutMs);
  }

  async scrollLatestNewsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async longPressSocialCircleTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle));
  }

  async expectSocialCircleTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), timeoutMs);
  }

  async expectSocialCircleTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), expected, timeoutMs);
  }

  async expectSocialCircleTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), substring, timeoutMs);
  }

  async expectSocialCircleTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), value, timeoutMs);
  }

  async expectSocialCircleTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), timeoutMs);
  }

  async expectSocialCircleTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), timeoutMs);
  }

  async expectSocialCircleTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), timeoutMs);
  }

  async expectSocialCircleTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), timeoutMs);
  }

  async expectSocialCircleTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), timeoutMs);
  }

  async expectSocialCircleTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle), count, timeoutMs);
  }

  async scrollSocialCircleTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.socialCircleTitle));
  }

  async doubleClickCatchUpOnThe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe));
  }

  async longPressCatchUpOnThe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe));
  }

  async expectCatchUpOnTheHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), timeoutMs);
  }

  async expectCatchUpOnTheText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), expected, timeoutMs);
  }

  async expectCatchUpOnTheContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), substring, timeoutMs);
  }

  async expectCatchUpOnTheValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), value, timeoutMs);
  }

  async expectCatchUpOnTheEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), timeoutMs);
  }

  async expectCatchUpOnTheDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), timeoutMs);
  }

  async expectCatchUpOnTheChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), timeoutMs);
  }

  async expectCatchUpOnTheUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), timeoutMs);
  }

  async expectCatchUpOnTheFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), timeoutMs);
  }

  async expectCatchUpOnTheCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe), count, timeoutMs);
  }

  async scrollCatchUpOnTheIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.catchUpOnThe));
  }

  async longPressSeeAllInternalNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews));
  }

  async expectSeeAllInternalNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), timeoutMs);
  }

  async expectSeeAllInternalNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), expected, timeoutMs);
  }

  async expectSeeAllInternalNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), substring, timeoutMs);
  }

  async expectSeeAllInternalNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), value, timeoutMs);
  }

  async expectSeeAllInternalNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), timeoutMs);
  }

  async expectSeeAllInternalNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), timeoutMs);
  }

  async expectSeeAllInternalNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), timeoutMs);
  }

  async expectSeeAllInternalNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), timeoutMs);
  }

  async expectSeeAllInternalNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), timeoutMs);
  }

  async expectSeeAllInternalNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews), count, timeoutMs);
  }

  async scrollSeeAllInternalNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAllInternalNews));
  }

  async doubleClickBuildNewsletterJuly(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly));
  }

  async longPressBuildNewsletterJuly(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly));
  }

  async expectBuildNewsletterJulyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), expected, timeoutMs);
  }

  async expectBuildNewsletterJulyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), substring, timeoutMs);
  }

  async expectBuildNewsletterJulyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), value, timeoutMs);
  }

  async expectBuildNewsletterJulyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), timeoutMs);
  }

  async expectBuildNewsletterJulyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly), count, timeoutMs);
  }

  async scrollBuildNewsletterJulyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.buildNewsletterJuly));
  }

  async doubleClickPeopleUkgBuild(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild));
  }

  async longPressPeopleUkgBuild(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild));
  }

  async expectPeopleUkgBuildHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), expected, timeoutMs);
  }

  async expectPeopleUkgBuildContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), substring, timeoutMs);
  }

  async expectPeopleUkgBuildValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), value, timeoutMs);
  }

  async expectPeopleUkgBuildEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), timeoutMs);
  }

  async expectPeopleUkgBuildCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild), count, timeoutMs);
  }

  async scrollPeopleUkgBuildIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgBuild));
  }

  async doubleClickComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.comment));
  }

  async longPressComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.comment));
  }

  async expectCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs);
  }

  async expectCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.comment), expected, timeoutMs);
  }

  async expectCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.comment), substring, timeoutMs);
  }

  async expectCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.comment), value, timeoutMs);
  }

  async expectCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs);
  }

  async expectCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs);
  }

  async expectCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs);
  }

  async expectCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs);
  }

  async expectCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs);
  }

  async expectCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.comment), count, timeoutMs);
  }

  async scrollCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.comment));
  }

  async doubleClickPolicyGovernanceAtUkgBuil(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil));
  }

  async longPressPolicyGovernanceAtUkgBuil(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil));
  }

  async expectPolicyGovernanceAtUkgBuilHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), expected, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), substring, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), value, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil), count, timeoutMs);
  }

  async scrollPolicyGovernanceAtUkgBuilIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuil));
  }

  async doubleClickPolicyGovernanceAtUkgBuilLegalRiskCompliance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async longPressPolicyGovernanceAtUkgBuilLegalRiskCompliance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), expected, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), substring, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), value, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), count, timeoutMs);
  }

  async scrollPolicyGovernanceAtUkgBuilLegalRiskComplianceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async doubleClickPolicyGovernanceAtUkgLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink));
  }

  async longPressPolicyGovernanceAtUkgLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink));
  }

  async expectPolicyGovernanceAtUkgLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), expected, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), substring, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), value, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink), count, timeoutMs);
  }

  async scrollPolicyGovernanceAtUkgLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.policyGovernanceAtUkgLink));
  }

  async doubleClickPhotoOfTheWeekLowellOffiInsideUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async longPressPhotoOfTheWeekLowellOffiInsideUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), value, timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekLowellOffiInsideUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async doubleClickPhotoOfTheWeekLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink));
  }

  async longPressPhotoOfTheWeekLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), value, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink));
  }

  async doubleClickAgencyUAgentAThonMovesIntAiHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async longPressAgencyUAgentAThonMovesIntAiHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async expectAgencyUAgentAThonMovesIntAiHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), expected, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), substring, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), value, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub), count, timeoutMs);
  }

  async scrollAgencyUAgentAThonMovesIntAiHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async doubleClickAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async longPressAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async expectAgencyUAgentAThonMovesIntoLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), expected, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), substring, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), value, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink), count, timeoutMs);
  }

  async scrollAgencyUAgentAThonMovesIntoLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async doubleClickNewForresterTotalEconomicI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI));
  }

  async longPressNewForresterTotalEconomicI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI));
  }

  async expectNewForresterTotalEconomicIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), expected, timeoutMs);
  }

  async expectNewForresterTotalEconomicIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), substring, timeoutMs);
  }

  async expectNewForresterTotalEconomicIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), value, timeoutMs);
  }

  async expectNewForresterTotalEconomicIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI), count, timeoutMs);
  }

  async scrollNewForresterTotalEconomicIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicI));
  }

  async doubleClickNewForresterTotalEconomicIGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing));
  }

  async longPressNewForresterTotalEconomicIGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing));
  }

  async expectNewForresterTotalEconomicIGtmMarketingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), expected, timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), substring, timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), value, timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), timeoutMs);
  }

  async expectNewForresterTotalEconomicIGtmMarketingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing), count, timeoutMs);
  }

  async scrollNewForresterTotalEconomicIGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicIGtmMarketing));
  }

  async doubleClickNewForresterTotalEconomicLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink));
  }

  async longPressNewForresterTotalEconomicLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink));
  }

  async expectNewForresterTotalEconomicLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), expected, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), substring, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), value, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink), count, timeoutMs);
  }

  async scrollNewForresterTotalEconomicLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newForresterTotalEconomicLink));
  }

  async doubleClickJuly2026HealthAwarenessSp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp));
  }

  async longPressJuly2026HealthAwarenessSp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp));
  }

  async expectJuly2026HealthAwarenessSpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), expected, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), substring, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), value, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp), count, timeoutMs);
  }

  async scrollJuly2026HealthAwarenessSpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSp));
  }

  async doubleClickJuly2026HealthAwarenessSpPeopleUkgCares(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async longPressJuly2026HealthAwarenessSpPeopleUkgCares(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), expected, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), substring, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), value, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares), count, timeoutMs);
  }

  async scrollJuly2026HealthAwarenessSpPeopleUkgCaresIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async doubleClickEmployeeResourceGroupErg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg));
  }

  async longPressEmployeeResourceGroupErg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg));
  }

  async expectEmployeeResourceGroupErgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), expected, timeoutMs);
  }

  async expectEmployeeResourceGroupErgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), substring, timeoutMs);
  }

  async expectEmployeeResourceGroupErgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), value, timeoutMs);
  }

  async expectEmployeeResourceGroupErgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs);
  }

  async expectEmployeeResourceGroupErgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), count, timeoutMs);
  }

  async scrollEmployeeResourceGroupErgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg));
  }

  async doubleClickEmployeeResourceGroupErgPeopleBelongingImpact(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact));
  }

  async longPressEmployeeResourceGroupErgPeopleBelongingImpact(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact));
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), expected, timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), substring, timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), value, timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), timeoutMs);
  }

  async expectEmployeeResourceGroupErgPeopleBelongingImpactCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact), count, timeoutMs);
  }

  async scrollEmployeeResourceGroupErgPeopleBelongingImpactIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErgPeopleBelongingImpact));
  }

  async doubleClickUkgRiseEarlyCareerMonthB(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB));
  }

  async longPressUkgRiseEarlyCareerMonthB(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB));
  }

  async expectUkgRiseEarlyCareerMonthBHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), expected, timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), substring, timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), value, timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), timeoutMs);
  }

  async expectUkgRiseEarlyCareerMonthBCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB), count, timeoutMs);
  }

  async scrollUkgRiseEarlyCareerMonthBIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerMonthB));
  }

  async doubleClickGlobalSecurityManagedVault(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault));
  }

  async longPressGlobalSecurityManagedVault(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault));
  }

  async expectGlobalSecurityManagedVaultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), expected, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), substring, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), value, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), count, timeoutMs);
  }

  async scrollGlobalSecurityManagedVaultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault));
  }

  async doubleClickGlobalSecurityManagedVaultProductEngineeringGlobal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal));
  }

  async longPressGlobalSecurityManagedVaultProductEngineeringGlobal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal));
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), expected, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), substring, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), value, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultProductEngineeringGlobalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal), count, timeoutMs);
  }

  async scrollGlobalSecurityManagedVaultProductEngineeringGlobalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultProductEngineeringGlobal));
  }

  async doubleClickGlobalSecurityManagedVaultLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink));
  }

  async longPressGlobalSecurityManagedVaultLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink));
  }

  async expectGlobalSecurityManagedVaultLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), expected, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), substring, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), value, timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs);
  }

  async expectGlobalSecurityManagedVaultLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), count, timeoutMs);
  }

  async scrollGlobalSecurityManagedVaultLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink));
  }

  async doubleClickBaselineImagesRequiredForN(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN));
  }

  async longPressBaselineImagesRequiredForN(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN));
  }

  async expectBaselineImagesRequiredForNHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), timeoutMs);
  }

  async expectBaselineImagesRequiredForNText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), expected, timeoutMs);
  }

  async expectBaselineImagesRequiredForNContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), substring, timeoutMs);
  }

  async expectBaselineImagesRequiredForNValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), value, timeoutMs);
  }

  async expectBaselineImagesRequiredForNEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), timeoutMs);
  }

  async expectBaselineImagesRequiredForNDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), timeoutMs);
  }

  async expectBaselineImagesRequiredForNChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), timeoutMs);
  }

  async expectBaselineImagesRequiredForNUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), timeoutMs);
  }

  async expectBaselineImagesRequiredForNFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), timeoutMs);
  }

  async expectBaselineImagesRequiredForNCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN), count, timeoutMs);
  }

  async scrollBaselineImagesRequiredForNIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredForN));
  }

  async doubleClickUkgNucleusRoiLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink));
  }

  async longPressUkgNucleusRoiLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink));
  }

  async expectUkgNucleusRoiLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), expected, timeoutMs);
  }

  async expectUkgNucleusRoiLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), substring, timeoutMs);
  }

  async expectUkgNucleusRoiLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), value, timeoutMs);
  }

  async expectUkgNucleusRoiLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs);
  }

  async expectUkgNucleusRoiLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), count, timeoutMs);
  }

  async scrollUkgNucleusRoiLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink));
  }

  async doubleClickUkgCommonsMobileAppNowAvaCommsEmployeeCommunications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications));
  }

  async longPressUkgCommonsMobileAppNowAvaCommsEmployeeCommunications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications));
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), expected, timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), substring, timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), value, timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), timeoutMs);
  }

  async expectUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications), count, timeoutMs);
  }

  async scrollUkgCommonsMobileAppNowAvaCommsEmployeeCommunicationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppNowAvaCommsEmployeeCommunications));
  }

  async doubleClickUkgCommonsMobileAppLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink));
  }

  async longPressUkgCommonsMobileAppLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink));
  }

  async expectUkgCommonsMobileAppLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), expected, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), substring, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), value, timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), timeoutMs);
  }

  async expectUkgCommonsMobileAppLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink), count, timeoutMs);
  }

  async scrollUkgCommonsMobileAppLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileAppLink));
  }

  async doubleClickWhatSecuritySeesSometimes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes));
  }

  async longPressWhatSecuritySeesSometimes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes));
  }

  async expectWhatSecuritySeesSometimesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), expected, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), substring, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), value, timeoutMs);
  }

  async expectWhatSecuritySeesSometimesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), timeoutMs);
  }

  async expectWhatSecuritySeesSometimesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes), count, timeoutMs);
  }

  async scrollWhatSecuritySeesSometimesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSecuritySeesSometimes));
  }

  async doubleClickDisabilityINJuly2026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026));
  }

  async longPressDisabilityINJuly2026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026));
  }

  async expectDisabilityINJuly2026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), expected, timeoutMs);
  }

  async expectDisabilityINJuly2026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), substring, timeoutMs);
  }

  async expectDisabilityINJuly2026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), value, timeoutMs);
  }

  async expectDisabilityINJuly2026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), timeoutMs);
  }

  async expectDisabilityINJuly2026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026), count, timeoutMs);
  }

  async scrollDisabilityINJuly2026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026));
  }

  async doubleClickDisabilityINJuly2026PeopleUkgAdapt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt));
  }

  async longPressDisabilityINJuly2026PeopleUkgAdapt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt));
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), expected, timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), substring, timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), value, timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), timeoutMs);
  }

  async expectDisabilityINJuly2026PeopleUkgAdaptCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt), count, timeoutMs);
  }

  async scrollDisabilityINJuly2026PeopleUkgAdaptIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.disabilityINJuly2026PeopleUkgAdapt));
  }

  async doubleClickPhotoOfTheWeekPhotoOfTheWeekTakeYourC(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async longPressPhotoOfTheWeekPhotoOfTheWeekTakeYourC(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), value, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekTakeYourCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekPhotoOfTheWeekTakeYourCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekTakeYourC));
  }

  async doubleClickDoNotEngageWithUnsolicited(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited));
  }

  async longPressDoNotEngageWithUnsolicited(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited));
  }

  async expectDoNotEngageWithUnsolicitedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), expected, timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), substring, timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), value, timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), timeoutMs);
  }

  async expectDoNotEngageWithUnsolicitedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited), count, timeoutMs);
  }

  async scrollDoNotEngageWithUnsolicitedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithUnsolicited));
  }

  async doubleClickThankYouForParticipatingIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn));
  }

  async longPressThankYouForParticipatingIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn));
  }

  async expectThankYouForParticipatingInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), timeoutMs);
  }

  async expectThankYouForParticipatingInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), expected, timeoutMs);
  }

  async expectThankYouForParticipatingInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), substring, timeoutMs);
  }

  async expectThankYouForParticipatingInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), value, timeoutMs);
  }

  async expectThankYouForParticipatingInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), timeoutMs);
  }

  async expectThankYouForParticipatingInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), timeoutMs);
  }

  async expectThankYouForParticipatingInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), timeoutMs);
  }

  async expectThankYouForParticipatingInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), timeoutMs);
  }

  async expectThankYouForParticipatingInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), timeoutMs);
  }

  async expectThankYouForParticipatingInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn), count, timeoutMs);
  }

  async scrollThankYouForParticipatingInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingIn));
  }

  async doubleClickThankYouForParticipatingInPeopleEmployeeExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience));
  }

  async longPressThankYouForParticipatingInPeopleEmployeeExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience));
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), expected, timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), substring, timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), value, timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), timeoutMs);
  }

  async expectThankYouForParticipatingInPeopleEmployeeExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience), count, timeoutMs);
  }

  async scrollThankYouForParticipatingInPeopleEmployeeExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingInPeopleEmployeeExperience));
  }

  async doubleClickThankYouForParticipatingLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink));
  }

  async longPressThankYouForParticipatingLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink));
  }

  async expectThankYouForParticipatingLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), expected, timeoutMs);
  }

  async expectThankYouForParticipatingLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), substring, timeoutMs);
  }

  async expectThankYouForParticipatingLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), value, timeoutMs);
  }

  async expectThankYouForParticipatingLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs);
  }

  async expectThankYouForParticipatingLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), count, timeoutMs);
  }

  async scrollThankYouForParticipatingLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink));
  }

  async doubleClickBigWinForUkgCommsAnalystRelations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations));
  }

  async longPressBigWinForUkgCommsAnalystRelations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations));
  }

  async expectBigWinForUkgCommsAnalystRelationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), expected, timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), substring, timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), value, timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), timeoutMs);
  }

  async expectBigWinForUkgCommsAnalystRelationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations), count, timeoutMs);
  }

  async scrollBigWinForUkgCommsAnalystRelationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForUkgCommsAnalystRelations));
  }

  async doubleClickBigWinForLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForLink));
  }

  async longPressBigWinForLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForLink));
  }

  async expectBigWinForLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), expected, timeoutMs);
  }

  async expectBigWinForLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), substring, timeoutMs);
  }

  async expectBigWinForLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), value, timeoutMs);
  }

  async expectBigWinForLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs);
  }

  async expectBigWinForLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), count, timeoutMs);
  }

  async scrollBigWinForLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForLink));
  }

  async doubleClickTuneInTodayUkgAdLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink));
  }

  async longPressTuneInTodayUkgAdLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink));
  }

  async expectTuneInTodayUkgAdLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), expected, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), substring, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), value, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), count, timeoutMs);
  }

  async scrollTuneInTodayUkgAdLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink));
  }

  async doubleClickClaudeEnterpriseAccessForN(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN));
  }

  async longPressClaudeEnterpriseAccessForN(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN));
  }

  async expectClaudeEnterpriseAccessForNHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), expected, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), substring, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), value, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForNCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN), count, timeoutMs);
  }

  async scrollClaudeEnterpriseAccessForNIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForN));
  }

  async doubleClickUpcomingEvents(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents));
  }

  async longPressUpcomingEvents(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents));
  }

  async expectUpcomingEventsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs);
  }

  async expectUpcomingEventsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), expected, timeoutMs);
  }

  async expectUpcomingEventsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), substring, timeoutMs);
  }

  async expectUpcomingEventsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), value, timeoutMs);
  }

  async expectUpcomingEventsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs);
  }

  async expectUpcomingEventsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs);
  }

  async expectUpcomingEventsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs);
  }

  async expectUpcomingEventsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs);
  }

  async expectUpcomingEventsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs);
  }

  async expectUpcomingEventsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), count, timeoutMs);
  }

  async scrollUpcomingEventsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents));
  }

  async doubleClickUpcomingEventsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle));
  }

  async longPressUpcomingEventsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle));
  }

  async expectUpcomingEventsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), timeoutMs);
  }

  async expectUpcomingEventsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), expected, timeoutMs);
  }

  async expectUpcomingEventsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), substring, timeoutMs);
  }

  async expectUpcomingEventsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), value, timeoutMs);
  }

  async expectUpcomingEventsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), timeoutMs);
  }

  async expectUpcomingEventsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), timeoutMs);
  }

  async expectUpcomingEventsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), timeoutMs);
  }

  async expectUpcomingEventsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), timeoutMs);
  }

  async expectUpcomingEventsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), timeoutMs);
  }

  async expectUpcomingEventsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle), count, timeoutMs);
  }

  async scrollUpcomingEventsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEventsTitle));
  }

  async longPressSeeAll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAll));
  }

  async expectSeeAllHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.seeAll), expected, timeoutMs);
  }

  async expectSeeAllContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.seeAll), substring, timeoutMs);
  }

  async expectSeeAllValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.seeAll), value, timeoutMs);
  }

  async expectSeeAllEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.seeAll), count, timeoutMs);
  }

  async scrollSeeAllIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.seeAll));
  }

  async doubleClickCategoryAll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll));
  }

  async longPressCategoryAll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll));
  }

  async expectCategoryAllHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.categoryAll), timeoutMs);
  }

  async expectCategoryAllText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.categoryAll), expected, timeoutMs);
  }

  async expectCategoryAllContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.categoryAll), substring, timeoutMs);
  }

  async expectCategoryAllValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.categoryAll), value, timeoutMs);
  }

  async expectCategoryAllEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.categoryAll), timeoutMs);
  }

  async expectCategoryAllDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.categoryAll), timeoutMs);
  }

  async expectCategoryAllChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.categoryAll), timeoutMs);
  }

  async expectCategoryAllUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.categoryAll), timeoutMs);
  }

  async expectCategoryAllFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.categoryAll), timeoutMs);
  }

  async expectCategoryAllCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.categoryAll), count, timeoutMs);
  }

  async scrollCategoryAllIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll));
  }

  async doubleClickCategoryAll2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll2));
  }

  async longPressCategoryAll2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll2));
  }

  async expectCategoryAll2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.categoryAll2), timeoutMs);
  }

  async expectCategoryAll2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.categoryAll2), expected, timeoutMs);
  }

  async expectCategoryAll2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.categoryAll2), substring, timeoutMs);
  }

  async expectCategoryAll2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.categoryAll2), value, timeoutMs);
  }

  async expectCategoryAll2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.categoryAll2), timeoutMs);
  }

  async expectCategoryAll2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.categoryAll2), timeoutMs);
  }

  async expectCategoryAll2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.categoryAll2), timeoutMs);
  }

  async expectCategoryAll2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.categoryAll2), timeoutMs);
  }

  async expectCategoryAll2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.categoryAll2), timeoutMs);
  }

  async expectCategoryAll2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.categoryAll2), count, timeoutMs);
  }

  async scrollCategoryAll2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.categoryAll2));
  }

  async doubleClickStretchRelaxVirtualGrouPeopleBenefits(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits));
  }

  async longPressStretchRelaxVirtualGrouPeopleBenefits(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits));
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), expected, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), substring, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), value, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouPeopleBenefitsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits), count, timeoutMs);
  }

  async scrollStretchRelaxVirtualGrouPeopleBenefitsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouPeopleBenefits));
  }

  async doubleClickPeopleBenefitsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink));
  }

  async longPressPeopleBenefitsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink));
  }

  async expectPeopleBenefitsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), timeoutMs);
  }

  async expectPeopleBenefitsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), expected, timeoutMs);
  }

  async expectPeopleBenefitsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), substring, timeoutMs);
  }

  async expectPeopleBenefitsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), value, timeoutMs);
  }

  async expectPeopleBenefitsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), timeoutMs);
  }

  async expectPeopleBenefitsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), timeoutMs);
  }

  async expectPeopleBenefitsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), timeoutMs);
  }

  async expectPeopleBenefitsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), timeoutMs);
  }

  async expectPeopleBenefitsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), timeoutMs);
  }

  async expectPeopleBenefitsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink), count, timeoutMs);
  }

  async scrollPeopleBenefitsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefitsLink));
  }

  async doubleClickStretchRelaxVirtualGrou(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou));
  }

  async longPressStretchRelaxVirtualGrou(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou));
  }

  async expectStretchRelaxVirtualGrouHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), expected, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), substring, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), value, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou), count, timeoutMs);
  }

  async scrollStretchRelaxVirtualGrouIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrou));
  }

  async doubleClickStretchRelaxVirtualGrouLocation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation));
  }

  async longPressStretchRelaxVirtualGrouLocation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation));
  }

  async expectStretchRelaxVirtualGrouLocationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), expected, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), substring, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), value, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouLocationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation), count, timeoutMs);
  }

  async scrollStretchRelaxVirtualGrouLocationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouLocation));
  }

  async clickStretchRelaxVirtualGrouVirtual(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual));
  }

  async doubleClickStretchRelaxVirtualGrouVirtual(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual));
  }

  async longPressStretchRelaxVirtualGrouVirtual(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual));
  }

  async expectStretchRelaxVirtualGrouVirtualHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), expected, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), substring, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), value, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouVirtualCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual), count, timeoutMs);
  }

  async scrollStretchRelaxVirtualGrouVirtualIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouVirtual));
  }

  async longPressStretchRelaxVirtualGrouAddToCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar));
  }

  async expectStretchRelaxVirtualGrouAddToCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), expected, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), substring, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), value, timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), timeoutMs);
  }

  async expectStretchRelaxVirtualGrouAddToCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar), count, timeoutMs);
  }

  async scrollStretchRelaxVirtualGrouAddToCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelaxVirtualGrouAddToCalendar));
  }

  async doubleClickPeopleUkgUnidosLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink));
  }

  async longPressPeopleUkgUnidosLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink));
  }

  async expectPeopleUkgUnidosLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), timeoutMs);
  }

  async expectPeopleUkgUnidosLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), expected, timeoutMs);
  }

  async expectPeopleUkgUnidosLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), substring, timeoutMs);
  }

  async expectPeopleUkgUnidosLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), value, timeoutMs);
  }

  async expectPeopleUkgUnidosLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), timeoutMs);
  }

  async expectPeopleUkgUnidosLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), timeoutMs);
  }

  async expectPeopleUkgUnidosLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), timeoutMs);
  }

  async expectPeopleUkgUnidosLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), timeoutMs);
  }

  async expectPeopleUkgUnidosLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), timeoutMs);
  }

  async expectPeopleUkgUnidosLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink), count, timeoutMs);
  }

  async scrollPeopleUkgUnidosLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidosLink));
  }

  async doubleClickPeopleUkgNestLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink));
  }

  async longPressPeopleUkgNestLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink));
  }

  async expectPeopleUkgNestLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), timeoutMs);
  }

  async expectPeopleUkgNestLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), expected, timeoutMs);
  }

  async expectPeopleUkgNestLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), substring, timeoutMs);
  }

  async expectPeopleUkgNestLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), value, timeoutMs);
  }

  async expectPeopleUkgNestLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), timeoutMs);
  }

  async expectPeopleUkgNestLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), timeoutMs);
  }

  async expectPeopleUkgNestLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), timeoutMs);
  }

  async expectPeopleUkgNestLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), timeoutMs);
  }

  async expectPeopleUkgNestLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), timeoutMs);
  }

  async expectPeopleUkgNestLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink), count, timeoutMs);
  }

  async scrollPeopleUkgNestLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNestLink));
  }

  async clickNestAndAdaptWeRockTheSpeLybertyWayWestford(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford));
  }

  async doubleClickNestAndAdaptWeRockTheSpeLybertyWayWestford(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford));
  }

  async longPressNestAndAdaptWeRockTheSpeLybertyWayWestford(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford));
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), expected, timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), substring, timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), value, timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), timeoutMs);
  }

  async expectNestAndAdaptWeRockTheSpeLybertyWayWestfordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford), count, timeoutMs);
  }

  async scrollNestAndAdaptWeRockTheSpeLybertyWayWestfordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWeRockTheSpeLybertyWayWestford));
  }

  async doubleClickPeopleUkgRiseLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink));
  }

  async longPressPeopleUkgRiseLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink));
  }

  async expectPeopleUkgRiseLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), timeoutMs);
  }

  async expectPeopleUkgRiseLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), expected, timeoutMs);
  }

  async expectPeopleUkgRiseLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), substring, timeoutMs);
  }

  async expectPeopleUkgRiseLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), value, timeoutMs);
  }

  async expectPeopleUkgRiseLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), timeoutMs);
  }

  async expectPeopleUkgRiseLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), timeoutMs);
  }

  async expectPeopleUkgRiseLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), timeoutMs);
  }

  async expectPeopleUkgRiseLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), timeoutMs);
  }

  async expectPeopleUkgRiseLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), timeoutMs);
  }

  async expectPeopleUkgRiseLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink), count, timeoutMs);
  }

  async scrollPeopleUkgRiseLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRiseLink));
  }

  async clickUkgRiseVirtualSpeedNetworkVirtualZoomMeeting(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting));
  }

  async doubleClickUkgRiseVirtualSpeedNetworkVirtualZoomMeeting(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting));
  }

  async longPressUkgRiseVirtualSpeedNetworkVirtualZoomMeeting(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting));
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), expected, timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), substring, timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), value, timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedNetworkVirtualZoomMeetingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting), count, timeoutMs);
  }

  async scrollUkgRiseVirtualSpeedNetworkVirtualZoomMeetingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeedNetworkVirtualZoomMeeting));
  }

  async doubleClickPeopleUkgPrideLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink));
  }

  async longPressPeopleUkgPrideLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink));
  }

  async expectPeopleUkgPrideLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), timeoutMs);
  }

  async expectPeopleUkgPrideLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), expected, timeoutMs);
  }

  async expectPeopleUkgPrideLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), substring, timeoutMs);
  }

  async expectPeopleUkgPrideLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), value, timeoutMs);
  }

  async expectPeopleUkgPrideLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), timeoutMs);
  }

  async expectPeopleUkgPrideLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), timeoutMs);
  }

  async expectPeopleUkgPrideLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), timeoutMs);
  }

  async expectPeopleUkgPrideLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), timeoutMs);
  }

  async expectPeopleUkgPrideLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), timeoutMs);
  }

  async expectPeopleUkgPrideLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink), count, timeoutMs);
  }

  async scrollPeopleUkgPrideLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPrideLink));
  }

  async clickOutEqualPresentsSignalTVirtualZoom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom));
  }

  async doubleClickOutEqualPresentsSignalTVirtualZoom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom));
  }

  async longPressOutEqualPresentsSignalTVirtualZoom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom));
  }

  async expectOutEqualPresentsSignalTVirtualZoomHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), expected, timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), substring, timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), value, timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), timeoutMs);
  }

  async expectOutEqualPresentsSignalTVirtualZoomCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom), count, timeoutMs);
  }

  async scrollOutEqualPresentsSignalTVirtualZoomIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresentsSignalTVirtualZoom));
  }

  async doubleClickUpcomingMeetings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings));
  }

  async longPressUpcomingMeetings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings));
  }

  async expectUpcomingMeetingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), timeoutMs);
  }

  async expectUpcomingMeetingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), expected, timeoutMs);
  }

  async expectUpcomingMeetingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), substring, timeoutMs);
  }

  async expectUpcomingMeetingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), value, timeoutMs);
  }

  async expectUpcomingMeetingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), timeoutMs);
  }

  async expectUpcomingMeetingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), timeoutMs);
  }

  async expectUpcomingMeetingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), timeoutMs);
  }

  async expectUpcomingMeetingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), timeoutMs);
  }

  async expectUpcomingMeetingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), timeoutMs);
  }

  async expectUpcomingMeetingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings), count, timeoutMs);
  }

  async scrollUpcomingMeetingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingMeetings));
  }

  async clickMyCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar));
  }

  async doubleClickMyCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar));
  }

  async longPressMyCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar));
  }

  async expectMyCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs);
  }

  async expectMyCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.myCalendar), expected, timeoutMs);
  }

  async expectMyCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.myCalendar), substring, timeoutMs);
  }

  async expectMyCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.myCalendar), value, timeoutMs);
  }

  async expectMyCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs);
  }

  async expectMyCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs);
  }

  async expectMyCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs);
  }

  async expectMyCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs);
  }

  async expectMyCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs);
  }

  async expectMyCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.myCalendar), count, timeoutMs);
  }

  async scrollMyCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar));
  }

  async clickNoUpcomingMeetings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings));
  }

  async doubleClickNoUpcomingMeetings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings));
  }

  async longPressNoUpcomingMeetings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings));
  }

  async expectNoUpcomingMeetingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), timeoutMs);
  }

  async expectNoUpcomingMeetingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), expected, timeoutMs);
  }

  async expectNoUpcomingMeetingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), substring, timeoutMs);
  }

  async expectNoUpcomingMeetingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), value, timeoutMs);
  }

  async expectNoUpcomingMeetingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), timeoutMs);
  }

  async expectNoUpcomingMeetingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), timeoutMs);
  }

  async expectNoUpcomingMeetingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), timeoutMs);
  }

  async expectNoUpcomingMeetingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), timeoutMs);
  }

  async expectNoUpcomingMeetingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), timeoutMs);
  }

  async expectNoUpcomingMeetingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings), count, timeoutMs);
  }

  async scrollNoUpcomingMeetingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.noUpcomingMeetings));
  }

  async doubleClickLatestNewsTitleRequestsOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async longPressLatestNewsTitleRequestsOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async expectLatestNewsTitleRequestsOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), expected, timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), substring, timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), value, timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), count, timeoutMs);
  }

  async scrollLatestNewsTitleRequestsOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async longPressMyRequests0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async expectMyRequests0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.myRequests0), expected, timeoutMs);
  }

  async expectMyRequests0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.myRequests0), substring, timeoutMs);
  }

  async expectMyRequests0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.myRequests0), value, timeoutMs);
  }

  async expectMyRequests0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.myRequests0), count, timeoutMs);
  }

  async scrollMyRequests0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async longPressApprovals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.approvals));
  }

  async expectApprovalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.approvals), timeoutMs);
  }

  async expectApprovalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.approvals), expected, timeoutMs);
  }

  async expectApprovalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.approvals), substring, timeoutMs);
  }

  async expectApprovalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.approvals), value, timeoutMs);
  }

  async expectApprovalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.approvals), timeoutMs);
  }

  async expectApprovalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.approvals), timeoutMs);
  }

  async expectApprovalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.approvals), timeoutMs);
  }

  async expectApprovalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.approvals), timeoutMs);
  }

  async expectApprovalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.approvals), timeoutMs);
  }

  async expectApprovalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.approvals), count, timeoutMs);
  }

  async scrollApprovalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.approvals));
  }

  async doubleClickViewAndTrackYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour));
  }

  async longPressViewAndTrackYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour));
  }

  async expectViewAndTrackYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), timeoutMs);
  }

  async expectViewAndTrackYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), expected, timeoutMs);
  }

  async expectViewAndTrackYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), substring, timeoutMs);
  }

  async expectViewAndTrackYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), value, timeoutMs);
  }

  async expectViewAndTrackYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), timeoutMs);
  }

  async expectViewAndTrackYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), timeoutMs);
  }

  async expectViewAndTrackYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), timeoutMs);
  }

  async expectViewAndTrackYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), timeoutMs);
  }

  async expectViewAndTrackYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), timeoutMs);
  }

  async expectViewAndTrackYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour), count, timeoutMs);
  }

  async scrollViewAndTrackYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndTrackYour));
  }

  async clickYouHaveNoActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive));
  }

  async doubleClickYouHaveNoActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive));
  }

  async longPressYouHaveNoActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive));
  }

  async expectYouHaveNoActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), timeoutMs);
  }

  async expectYouHaveNoActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), expected, timeoutMs);
  }

  async expectYouHaveNoActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), substring, timeoutMs);
  }

  async expectYouHaveNoActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), value, timeoutMs);
  }

  async expectYouHaveNoActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), timeoutMs);
  }

  async expectYouHaveNoActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), timeoutMs);
  }

  async expectYouHaveNoActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), timeoutMs);
  }

  async expectYouHaveNoActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), timeoutMs);
  }

  async expectYouHaveNoActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), timeoutMs);
  }

  async expectYouHaveNoActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive), count, timeoutMs);
  }

  async scrollYouHaveNoActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.youHaveNoActive));
  }

  async doubleClickAssignedTrainingTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async longPressAssignedTrainingTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async expectAssignedTrainingTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), expected, timeoutMs);
  }

  async expectAssignedTrainingTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), substring, timeoutMs);
  }

  async expectAssignedTrainingTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), value, timeoutMs);
  }

  async expectAssignedTrainingTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), count, timeoutMs);
  }

  async scrollAssignedTrainingTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async doubleClickViewYourRequiredAssigned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned));
  }

  async longPressViewYourRequiredAssigned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned));
  }

  async expectViewYourRequiredAssignedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), timeoutMs);
  }

  async expectViewYourRequiredAssignedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), expected, timeoutMs);
  }

  async expectViewYourRequiredAssignedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), substring, timeoutMs);
  }

  async expectViewYourRequiredAssignedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), value, timeoutMs);
  }

  async expectViewYourRequiredAssignedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), timeoutMs);
  }

  async expectViewYourRequiredAssignedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), timeoutMs);
  }

  async expectViewYourRequiredAssignedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), timeoutMs);
  }

  async expectViewYourRequiredAssignedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), timeoutMs);
  }

  async expectViewYourRequiredAssignedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), timeoutMs);
  }

  async expectViewYourRequiredAssignedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned), count, timeoutMs);
  }

  async scrollViewYourRequiredAssignedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourRequiredAssigned));
  }

  async clickNoAssignedTrainingAt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt));
  }

  async doubleClickNoAssignedTrainingAt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt));
  }

  async longPressNoAssignedTrainingAt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt));
  }

  async expectNoAssignedTrainingAtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), timeoutMs);
  }

  async expectNoAssignedTrainingAtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), expected, timeoutMs);
  }

  async expectNoAssignedTrainingAtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), substring, timeoutMs);
  }

  async expectNoAssignedTrainingAtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), value, timeoutMs);
  }

  async expectNoAssignedTrainingAtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), timeoutMs);
  }

  async expectNoAssignedTrainingAtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), timeoutMs);
  }

  async expectNoAssignedTrainingAtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), timeoutMs);
  }

  async expectNoAssignedTrainingAtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), timeoutMs);
  }

  async expectNoAssignedTrainingAtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), timeoutMs);
  }

  async expectNoAssignedTrainingAtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt), count, timeoutMs);
  }

  async scrollNoAssignedTrainingAtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.noAssignedTrainingAt));
  }

  async clickExploreAvailableTrainingOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities));
  }

  async doubleClickExploreAvailableTrainingOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities));
  }

  async longPressExploreAvailableTrainingOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities));
  }

  async expectExploreAvailableTrainingOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), expected, timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), substring, timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), value, timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), timeoutMs);
  }

  async expectExploreAvailableTrainingOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities), count, timeoutMs);
  }

  async scrollExploreAvailableTrainingOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.exploreAvailableTrainingOpportunities));
  }

  async doubleClickGoToTalentCentral(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral));
  }

  async longPressGoToTalentCentral(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral));
  }

  async expectGoToTalentCentralHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), timeoutMs);
  }

  async expectGoToTalentCentralText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), expected, timeoutMs);
  }

  async expectGoToTalentCentralContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), substring, timeoutMs);
  }

  async expectGoToTalentCentralValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), value, timeoutMs);
  }

  async expectGoToTalentCentralEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), timeoutMs);
  }

  async expectGoToTalentCentralDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), timeoutMs);
  }

  async expectGoToTalentCentralChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), timeoutMs);
  }

  async expectGoToTalentCentralUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), timeoutMs);
  }

  async expectGoToTalentCentralFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), timeoutMs);
  }

  async expectGoToTalentCentralCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral), count, timeoutMs);
  }

  async scrollGoToTalentCentralIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToTalentCentral));
  }

  async clickQuickActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.quickActions));
  }

  async doubleClickQuickActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.quickActions));
  }

  async longPressQuickActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.quickActions));
  }

  async expectQuickActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.quickActions), timeoutMs);
  }

  async expectQuickActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.quickActions), expected, timeoutMs);
  }

  async expectQuickActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.quickActions), substring, timeoutMs);
  }

  async expectQuickActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.quickActions), value, timeoutMs);
  }

  async expectQuickActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.quickActions), timeoutMs);
  }

  async expectQuickActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.quickActions), timeoutMs);
  }

  async expectQuickActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.quickActions), timeoutMs);
  }

  async expectQuickActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.quickActions), timeoutMs);
  }

  async expectQuickActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.quickActions), timeoutMs);
  }

  async expectQuickActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.quickActions), count, timeoutMs);
  }

  async scrollQuickActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.quickActions));
  }

  async doubleClickGetTechnicalSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport));
  }

  async longPressGetTechnicalSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport));
  }

  async expectGetTechnicalSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), timeoutMs);
  }

  async expectGetTechnicalSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), expected, timeoutMs);
  }

  async expectGetTechnicalSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), substring, timeoutMs);
  }

  async expectGetTechnicalSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), value, timeoutMs);
  }

  async expectGetTechnicalSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), timeoutMs);
  }

  async expectGetTechnicalSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), timeoutMs);
  }

  async expectGetTechnicalSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), timeoutMs);
  }

  async expectGetTechnicalSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), timeoutMs);
  }

  async expectGetTechnicalSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), timeoutMs);
  }

  async expectGetTechnicalSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport), count, timeoutMs);
  }

  async scrollGetTechnicalSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport));
  }

  async doubleClickGetTechnicalSupport2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2));
  }

  async longPressGetTechnicalSupport2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2));
  }

  async expectGetTechnicalSupport2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), timeoutMs);
  }

  async expectGetTechnicalSupport2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), expected, timeoutMs);
  }

  async expectGetTechnicalSupport2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), substring, timeoutMs);
  }

  async expectGetTechnicalSupport2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), value, timeoutMs);
  }

  async expectGetTechnicalSupport2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), timeoutMs);
  }

  async expectGetTechnicalSupport2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), timeoutMs);
  }

  async expectGetTechnicalSupport2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), timeoutMs);
  }

  async expectGetTechnicalSupport2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), timeoutMs);
  }

  async expectGetTechnicalSupport2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), timeoutMs);
  }

  async expectGetTechnicalSupport2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2), count, timeoutMs);
  }

  async scrollGetTechnicalSupport2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.getTechnicalSupport2));
  }

  async doubleClickViewHolidayCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar));
  }

  async longPressViewHolidayCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar));
  }

  async expectViewHolidayCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs);
  }

  async expectViewHolidayCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), expected, timeoutMs);
  }

  async expectViewHolidayCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), substring, timeoutMs);
  }

  async expectViewHolidayCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), value, timeoutMs);
  }

  async expectViewHolidayCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs);
  }

  async expectViewHolidayCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs);
  }

  async expectViewHolidayCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs);
  }

  async expectViewHolidayCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs);
  }

  async expectViewHolidayCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs);
  }

  async expectViewHolidayCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), count, timeoutMs);
  }

  async scrollViewHolidayCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar));
  }

  async doubleClickViewHolidayCalendar2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2));
  }

  async longPressViewHolidayCalendar2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2));
  }

  async expectViewHolidayCalendar2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), timeoutMs);
  }

  async expectViewHolidayCalendar2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), expected, timeoutMs);
  }

  async expectViewHolidayCalendar2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), substring, timeoutMs);
  }

  async expectViewHolidayCalendar2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), value, timeoutMs);
  }

  async expectViewHolidayCalendar2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), timeoutMs);
  }

  async expectViewHolidayCalendar2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), timeoutMs);
  }

  async expectViewHolidayCalendar2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), timeoutMs);
  }

  async expectViewHolidayCalendar2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), timeoutMs);
  }

  async expectViewHolidayCalendar2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), timeoutMs);
  }

  async expectViewHolidayCalendar2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2), count, timeoutMs);
  }

  async scrollViewHolidayCalendar2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar2));
  }

  async doubleClickViewPolicies(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies));
  }

  async longPressViewPolicies(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies));
  }

  async expectViewPoliciesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs);
  }

  async expectViewPoliciesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewPolicies), expected, timeoutMs);
  }

  async expectViewPoliciesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewPolicies), substring, timeoutMs);
  }

  async expectViewPoliciesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewPolicies), value, timeoutMs);
  }

  async expectViewPoliciesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs);
  }

  async expectViewPoliciesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs);
  }

  async expectViewPoliciesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs);
  }

  async expectViewPoliciesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs);
  }

  async expectViewPoliciesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs);
  }

  async expectViewPoliciesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewPolicies), count, timeoutMs);
  }

  async scrollViewPoliciesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies));
  }

  async doubleClickViewPolicies2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies2));
  }

  async longPressViewPolicies2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies2));
  }

  async expectViewPolicies2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), timeoutMs);
  }

  async expectViewPolicies2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), expected, timeoutMs);
  }

  async expectViewPolicies2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), substring, timeoutMs);
  }

  async expectViewPolicies2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), value, timeoutMs);
  }

  async expectViewPolicies2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), timeoutMs);
  }

  async expectViewPolicies2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), timeoutMs);
  }

  async expectViewPolicies2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), timeoutMs);
  }

  async expectViewPolicies2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), timeoutMs);
  }

  async expectViewPolicies2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), timeoutMs);
  }

  async expectViewPolicies2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewPolicies2), count, timeoutMs);
  }

  async scrollViewPolicies2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies2));
  }

  async doubleClickManageExpenses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses));
  }

  async longPressManageExpenses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses));
  }

  async expectManageExpensesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs);
  }

  async expectManageExpensesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.manageExpenses), expected, timeoutMs);
  }

  async expectManageExpensesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.manageExpenses), substring, timeoutMs);
  }

  async expectManageExpensesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.manageExpenses), value, timeoutMs);
  }

  async expectManageExpensesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs);
  }

  async expectManageExpensesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs);
  }

  async expectManageExpensesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs);
  }

  async expectManageExpensesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs);
  }

  async expectManageExpensesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs);
  }

  async expectManageExpensesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.manageExpenses), count, timeoutMs);
  }

  async scrollManageExpensesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses));
  }

  async doubleClickManageExpenses2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses2));
  }

  async longPressManageExpenses2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses2));
  }

  async expectManageExpenses2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), timeoutMs);
  }

  async expectManageExpenses2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), expected, timeoutMs);
  }

  async expectManageExpenses2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), substring, timeoutMs);
  }

  async expectManageExpenses2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), value, timeoutMs);
  }

  async expectManageExpenses2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), timeoutMs);
  }

  async expectManageExpenses2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), timeoutMs);
  }

  async expectManageExpenses2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), timeoutMs);
  }

  async expectManageExpenses2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), timeoutMs);
  }

  async expectManageExpenses2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), timeoutMs);
  }

  async expectManageExpenses2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.manageExpenses2), count, timeoutMs);
  }

  async scrollManageExpenses2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses2));
  }

  async doubleClickMicrosoftTodoTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle));
  }

  async longPressMicrosoftTodoTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle));
  }

  async expectMicrosoftTodoTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), timeoutMs);
  }

  async expectMicrosoftTodoTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), expected, timeoutMs);
  }

  async expectMicrosoftTodoTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), substring, timeoutMs);
  }

  async expectMicrosoftTodoTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), value, timeoutMs);
  }

  async expectMicrosoftTodoTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), timeoutMs);
  }

  async expectMicrosoftTodoTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), timeoutMs);
  }

  async expectMicrosoftTodoTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), timeoutMs);
  }

  async expectMicrosoftTodoTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), timeoutMs);
  }

  async expectMicrosoftTodoTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), timeoutMs);
  }

  async expectMicrosoftTodoTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle), count, timeoutMs);
  }

  async scrollMicrosoftTodoTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.microsoftTodoTitle));
  }

  async doubleClickViewAndManageYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour));
  }

  async longPressViewAndManageYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour));
  }

  async expectViewAndManageYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), timeoutMs);
  }

  async expectViewAndManageYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), expected, timeoutMs);
  }

  async expectViewAndManageYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), substring, timeoutMs);
  }

  async expectViewAndManageYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), value, timeoutMs);
  }

  async expectViewAndManageYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), timeoutMs);
  }

  async expectViewAndManageYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), timeoutMs);
  }

  async expectViewAndManageYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), timeoutMs);
  }

  async expectViewAndManageYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), timeoutMs);
  }

  async expectViewAndManageYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), timeoutMs);
  }

  async expectViewAndManageYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour), count, timeoutMs);
  }

  async scrollViewAndManageYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAndManageYour));
  }

  async doubleClickGoToMicrosoftTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo));
  }

  async longPressGoToMicrosoftTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo));
  }

  async expectGoToMicrosoftToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), timeoutMs);
  }

  async expectGoToMicrosoftToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), expected, timeoutMs);
  }

  async expectGoToMicrosoftToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), substring, timeoutMs);
  }

  async expectGoToMicrosoftToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), value, timeoutMs);
  }

  async expectGoToMicrosoftToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), timeoutMs);
  }

  async expectGoToMicrosoftToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), timeoutMs);
  }

  async expectGoToMicrosoftToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), timeoutMs);
  }

  async expectGoToMicrosoftToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), timeoutMs);
  }

  async expectGoToMicrosoftToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), timeoutMs);
  }

  async expectGoToMicrosoftToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo), count, timeoutMs);
  }

  async scrollGoToMicrosoftToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.goToMicrosoftTo));
  }

  async doubleClickSelectTodoList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.selectTodoList));
  }

  async longPressSelectTodoList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.selectTodoList));
  }

  async expectSelectTodoListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.selectTodoList), timeoutMs);
  }

  async expectSelectTodoListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.selectTodoList), expected, timeoutMs);
  }

  async expectSelectTodoListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.selectTodoList), substring, timeoutMs);
  }

  async expectSelectTodoListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.selectTodoList), value, timeoutMs);
  }

  async expectSelectTodoListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.selectTodoList), timeoutMs);
  }

  async expectSelectTodoListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.selectTodoList), timeoutMs);
  }

  async expectSelectTodoListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.selectTodoList), timeoutMs);
  }

  async expectSelectTodoListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.selectTodoList), timeoutMs);
  }

  async expectSelectTodoListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.selectTodoList), timeoutMs);
  }

  async expectSelectTodoListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.selectTodoList), count, timeoutMs);
  }

  async scrollSelectTodoListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.selectTodoList));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.tasks), substring, timeoutMs);
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.tasks), count, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async doubleClickChevronDown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.chevronDown));
  }

  async longPressChevronDown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.chevronDown));
  }

  async expectChevronDownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs);
  }

  async expectChevronDownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.chevronDown), expected, timeoutMs);
  }

  async expectChevronDownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.chevronDown), substring, timeoutMs);
  }

  async expectChevronDownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.chevronDown), value, timeoutMs);
  }

  async expectChevronDownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs);
  }

  async expectChevronDownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs);
  }

  async expectChevronDownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs);
  }

  async expectChevronDownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs);
  }

  async expectChevronDownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs);
  }

  async expectChevronDownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.chevronDown), count, timeoutMs);
  }

  async scrollChevronDownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.chevronDown));
  }

  async typeTextAddATask(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask), value);
  }

  async expectAddATaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.addATask), expected, timeoutMs);
  }

  async expectAddATaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.addATask), substring, timeoutMs);
  }

  async expectAddATaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.addATask), value, timeoutMs);
  }

  async expectAddATaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.addATask), count, timeoutMs);
  }

  async scrollAddATaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask));
  }

  async doubleClickHotJobs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async longPressHotJobs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async expectHotJobsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hotJobs), expected, timeoutMs);
  }

  async expectHotJobsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hotJobs), substring, timeoutMs);
  }

  async expectHotJobsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hotJobs), value, timeoutMs);
  }

  async expectHotJobsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hotJobs), count, timeoutMs);
  }

  async scrollHotJobsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async doubleClickHotJobsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async longPressHotJobsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async expectHotJobsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), expected, timeoutMs);
  }

  async expectHotJobsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), substring, timeoutMs);
  }

  async expectHotJobsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), value, timeoutMs);
  }

  async expectHotJobsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), count, timeoutMs);
  }

  async scrollHotJobsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async doubleClickHotJobsAreFeatured(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
  }

  async longPressHotJobsAreFeatured(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
  }

  async expectHotJobsAreFeaturedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), expected, timeoutMs);
  }

  async expectHotJobsAreFeaturedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), substring, timeoutMs);
  }

  async expectHotJobsAreFeaturedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), value, timeoutMs);
  }

  async expectHotJobsAreFeaturedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), count, timeoutMs);
  }

  async scrollHotJobsAreFeaturedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
  }

  async longPressProductManagerHcm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcm));
  }

  async expectProductManagerHcmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), timeoutMs);
  }

  async expectProductManagerHcmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), expected, timeoutMs);
  }

  async expectProductManagerHcmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), substring, timeoutMs);
  }

  async expectProductManagerHcmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), value, timeoutMs);
  }

  async expectProductManagerHcmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), timeoutMs);
  }

  async expectProductManagerHcmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), timeoutMs);
  }

  async expectProductManagerHcmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), timeoutMs);
  }

  async expectProductManagerHcmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), timeoutMs);
  }

  async expectProductManagerHcmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), timeoutMs);
  }

  async expectProductManagerHcmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.productManagerHcm), count, timeoutMs);
  }

  async scrollProductManagerHcmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcm));
  }

  async doubleClickProductManagerHcmProductManagerHcmSolution(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution));
  }

  async longPressProductManagerHcmProductManagerHcmSolution(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution));
  }

  async expectProductManagerHcmProductManagerHcmSolutionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), expected, timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), substring, timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), value, timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), timeoutMs);
  }

  async expectProductManagerHcmProductManagerHcmSolutionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution), count, timeoutMs);
  }

  async scrollProductManagerHcmProductManagerHcmSolutionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagerHcmProductManagerHcmSolution));
  }

  async doubleClickProductManagement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement));
  }

  async longPressProductManagement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement));
  }

  async expectProductManagementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.productManagement), timeoutMs);
  }

  async expectProductManagementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.productManagement), expected, timeoutMs);
  }

  async expectProductManagementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.productManagement), substring, timeoutMs);
  }

  async expectProductManagementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.productManagement), value, timeoutMs);
  }

  async expectProductManagementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.productManagement), timeoutMs);
  }

  async expectProductManagementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.productManagement), timeoutMs);
  }

  async expectProductManagementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.productManagement), timeoutMs);
  }

  async expectProductManagementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.productManagement), timeoutMs);
  }

  async expectProductManagementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.productManagement), timeoutMs);
  }

  async expectProductManagementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.productManagement), count, timeoutMs);
  }

  async scrollProductManagementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement));
  }

  async doubleClickProductManagement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement2));
  }

  async longPressProductManagement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement2));
  }

  async expectProductManagement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.productManagement2), timeoutMs);
  }

  async expectProductManagement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.productManagement2), expected, timeoutMs);
  }

  async expectProductManagement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.productManagement2), substring, timeoutMs);
  }

  async expectProductManagement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.productManagement2), value, timeoutMs);
  }

  async expectProductManagement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.productManagement2), timeoutMs);
  }

  async expectProductManagement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.productManagement2), timeoutMs);
  }

  async expectProductManagement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.productManagement2), timeoutMs);
  }

  async expectProductManagement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.productManagement2), timeoutMs);
  }

  async expectProductManagement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.productManagement2), timeoutMs);
  }

  async expectProductManagement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.productManagement2), count, timeoutMs);
  }

  async scrollProductManagement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.productManagement2));
  }

  async doubleClickLondonUkDublinLondonUkDublinIreland(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland));
  }

  async longPressLondonUkDublinLondonUkDublinIreland(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland));
  }

  async expectLondonUkDublinLondonUkDublinIrelandHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), expected, timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), substring, timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), value, timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), timeoutMs);
  }

  async expectLondonUkDublinLondonUkDublinIrelandCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland), count, timeoutMs);
  }

  async scrollLondonUkDublinLondonUkDublinIrelandIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.londonUkDublinLondonUkDublinIreland));
  }

  async doubleClickRemotePostedAMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth));
  }

  async longPressRemotePostedAMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth));
  }

  async expectRemotePostedAMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), timeoutMs);
  }

  async expectRemotePostedAMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), expected, timeoutMs);
  }

  async expectRemotePostedAMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), substring, timeoutMs);
  }

  async expectRemotePostedAMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), value, timeoutMs);
  }

  async expectRemotePostedAMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), timeoutMs);
  }

  async expectRemotePostedAMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), timeoutMs);
  }

  async expectRemotePostedAMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), timeoutMs);
  }

  async expectRemotePostedAMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), timeoutMs);
  }

  async expectRemotePostedAMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), timeoutMs);
  }

  async expectRemotePostedAMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth), count, timeoutMs);
  }

  async scrollRemotePostedAMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.remotePostedAMonth));
  }

  async doubleClickRemote2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.remote2));
  }

  async longPressRemote2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.remote2));
  }

  async expectRemote2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.remote2), timeoutMs);
  }

  async expectRemote2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.remote2), expected, timeoutMs);
  }

  async expectRemote2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.remote2), substring, timeoutMs);
  }

  async expectRemote2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.remote2), value, timeoutMs);
  }

  async expectRemote2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.remote2), timeoutMs);
  }

  async expectRemote2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.remote2), timeoutMs);
  }

  async expectRemote2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.remote2), timeoutMs);
  }

  async expectRemote2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.remote2), timeoutMs);
  }

  async expectRemote2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.remote2), timeoutMs);
  }

  async expectRemote2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.remote2), count, timeoutMs);
  }

  async scrollRemote2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.remote2));
  }

  async doubleClickPostedAMonthAgo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo));
  }

  async longPressPostedAMonthAgo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo));
  }

  async expectPostedAMonthAgoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), timeoutMs);
  }

  async expectPostedAMonthAgoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), expected, timeoutMs);
  }

  async expectPostedAMonthAgoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), substring, timeoutMs);
  }

  async expectPostedAMonthAgoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), value, timeoutMs);
  }

  async expectPostedAMonthAgoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), timeoutMs);
  }

  async expectPostedAMonthAgoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), timeoutMs);
  }

  async expectPostedAMonthAgoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), timeoutMs);
  }

  async expectPostedAMonthAgoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), timeoutMs);
  }

  async expectPostedAMonthAgoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), timeoutMs);
  }

  async expectPostedAMonthAgoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo), count, timeoutMs);
  }

  async scrollPostedAMonthAgoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.postedAMonthAgo));
  }

  async longPressQaAutomationLead(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead));
  }

  async expectQaAutomationLeadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), timeoutMs);
  }

  async expectQaAutomationLeadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), expected, timeoutMs);
  }

  async expectQaAutomationLeadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), substring, timeoutMs);
  }

  async expectQaAutomationLeadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), value, timeoutMs);
  }

  async expectQaAutomationLeadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), timeoutMs);
  }

  async expectQaAutomationLeadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), timeoutMs);
  }

  async expectQaAutomationLeadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), timeoutMs);
  }

  async expectQaAutomationLeadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), timeoutMs);
  }

  async expectQaAutomationLeadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), timeoutMs);
  }

  async expectQaAutomationLeadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead), count, timeoutMs);
  }

  async scrollQaAutomationLeadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.qaAutomationLead));
  }

  async longPressSeniorSoftwareEngineerDriving(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving));
  }

  async expectSeniorSoftwareEngineerDrivingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), expected, timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), substring, timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), value, timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), timeoutMs);
  }

  async expectSeniorSoftwareEngineerDrivingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving), count, timeoutMs);
  }

  async scrollSeniorSoftwareEngineerDrivingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineerDriving));
  }

  async longPressSeniorSoftwareEngineer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer));
  }

  async expectSeniorSoftwareEngineerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), timeoutMs);
  }

  async expectSeniorSoftwareEngineerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), expected, timeoutMs);
  }

  async expectSeniorSoftwareEngineerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), substring, timeoutMs);
  }

  async expectSeniorSoftwareEngineerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), value, timeoutMs);
  }

  async expectSeniorSoftwareEngineerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), timeoutMs);
  }

  async expectSeniorSoftwareEngineerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), timeoutMs);
  }

  async expectSeniorSoftwareEngineerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), timeoutMs);
  }

  async expectSeniorSoftwareEngineerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), timeoutMs);
  }

  async expectSeniorSoftwareEngineerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), timeoutMs);
  }

  async expectSeniorSoftwareEngineerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer), count, timeoutMs);
  }

  async scrollSeniorSoftwareEngineerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorSoftwareEngineer));
  }

  async longPressCloudInfrastructureEngineer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer));
  }

  async expectCloudInfrastructureEngineerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), timeoutMs);
  }

  async expectCloudInfrastructureEngineerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), expected, timeoutMs);
  }

  async expectCloudInfrastructureEngineerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), substring, timeoutMs);
  }

  async expectCloudInfrastructureEngineerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), value, timeoutMs);
  }

  async expectCloudInfrastructureEngineerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), timeoutMs);
  }

  async expectCloudInfrastructureEngineerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), timeoutMs);
  }

  async expectCloudInfrastructureEngineerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), timeoutMs);
  }

  async expectCloudInfrastructureEngineerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), timeoutMs);
  }

  async expectCloudInfrastructureEngineerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), timeoutMs);
  }

  async expectCloudInfrastructureEngineerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer), count, timeoutMs);
  }

  async scrollCloudInfrastructureEngineerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.cloudInfrastructureEngineer));
  }

  async longPressCustomerSuccessManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager));
  }

  async expectCustomerSuccessManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), expected, timeoutMs);
  }

  async expectCustomerSuccessManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), substring, timeoutMs);
  }

  async expectCustomerSuccessManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), value, timeoutMs);
  }

  async expectCustomerSuccessManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), timeoutMs);
  }

  async expectCustomerSuccessManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager), count, timeoutMs);
  }

  async scrollCustomerSuccessManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.customerSuccessManager));
  }

  async longPressUxUiDesignerChecking(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking));
  }

  async expectUxUiDesignerCheckingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), timeoutMs);
  }

  async expectUxUiDesignerCheckingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), expected, timeoutMs);
  }

  async expectUxUiDesignerCheckingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), substring, timeoutMs);
  }

  async expectUxUiDesignerCheckingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), value, timeoutMs);
  }

  async expectUxUiDesignerCheckingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), timeoutMs);
  }

  async expectUxUiDesignerCheckingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), timeoutMs);
  }

  async expectUxUiDesignerCheckingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), timeoutMs);
  }

  async expectUxUiDesignerCheckingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), timeoutMs);
  }

  async expectUxUiDesignerCheckingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), timeoutMs);
  }

  async expectUxUiDesignerCheckingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking), count, timeoutMs);
  }

  async scrollUxUiDesignerCheckingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.uxUiDesignerChecking));
  }

  async longPressSeniorPrincipalSoftwareEngineerArchitect(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect));
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), expected, timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), substring, timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), value, timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), timeoutMs);
  }

  async expectSeniorPrincipalSoftwareEngineerArchitectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect), count, timeoutMs);
  }

  async scrollSeniorPrincipalSoftwareEngineerArchitectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.seniorPrincipalSoftwareEngineerArchitect));
  }

  async doubleClickSpaceReservationsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle));
  }

  async longPressSpaceReservationsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle));
  }

  async expectSpaceReservationsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), timeoutMs);
  }

  async expectSpaceReservationsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), expected, timeoutMs);
  }

  async expectSpaceReservationsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), substring, timeoutMs);
  }

  async expectSpaceReservationsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), value, timeoutMs);
  }

  async expectSpaceReservationsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), timeoutMs);
  }

  async expectSpaceReservationsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), timeoutMs);
  }

  async expectSpaceReservationsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), timeoutMs);
  }

  async expectSpaceReservationsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), timeoutMs);
  }

  async expectSpaceReservationsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), timeoutMs);
  }

  async expectSpaceReservationsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle), count, timeoutMs);
  }

  async scrollSpaceReservationsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.spaceReservationsTitle));
  }

  async doubleClickViewYourUpcomingSpace(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace));
  }

  async longPressViewYourUpcomingSpace(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace));
  }

  async expectViewYourUpcomingSpaceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), timeoutMs);
  }

  async expectViewYourUpcomingSpaceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), expected, timeoutMs);
  }

  async expectViewYourUpcomingSpaceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), substring, timeoutMs);
  }

  async expectViewYourUpcomingSpaceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), value, timeoutMs);
  }

  async expectViewYourUpcomingSpaceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), timeoutMs);
  }

  async expectViewYourUpcomingSpaceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), timeoutMs);
  }

  async expectViewYourUpcomingSpaceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), timeoutMs);
  }

  async expectViewYourUpcomingSpaceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), timeoutMs);
  }

  async expectViewYourUpcomingSpaceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), timeoutMs);
  }

  async expectViewYourUpcomingSpaceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace), count, timeoutMs);
  }

  async scrollViewYourUpcomingSpaceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewYourUpcomingSpace));
  }

  async doubleClickNoReservations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservations));
  }

  async longPressNoReservations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservations));
  }

  async expectNoReservationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.noReservations), timeoutMs);
  }

  async expectNoReservationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.noReservations), expected, timeoutMs);
  }

  async expectNoReservationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.noReservations), substring, timeoutMs);
  }

  async expectNoReservationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.noReservations), value, timeoutMs);
  }

  async expectNoReservationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.noReservations), timeoutMs);
  }

  async expectNoReservationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.noReservations), timeoutMs);
  }

  async expectNoReservationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.noReservations), timeoutMs);
  }

  async expectNoReservationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.noReservations), timeoutMs);
  }

  async expectNoReservationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.noReservations), timeoutMs);
  }

  async expectNoReservationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.noReservations), count, timeoutMs);
  }

  async scrollNoReservationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservations));
  }

  async clickNoReservationsFound(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservationsFound));
  }

  async doubleClickNoReservationsFound(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservationsFound));
  }

  async longPressNoReservationsFound(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservationsFound));
  }

  async expectNoReservationsFoundHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), timeoutMs);
  }

  async expectNoReservationsFoundText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), expected, timeoutMs);
  }

  async expectNoReservationsFoundContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), substring, timeoutMs);
  }

  async expectNoReservationsFoundValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), value, timeoutMs);
  }

  async expectNoReservationsFoundEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), timeoutMs);
  }

  async expectNoReservationsFoundDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), timeoutMs);
  }

  async expectNoReservationsFoundChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), timeoutMs);
  }

  async expectNoReservationsFoundUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), timeoutMs);
  }

  async expectNoReservationsFoundFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), timeoutMs);
  }

  async expectNoReservationsFoundCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.noReservationsFound), count, timeoutMs);
  }

  async scrollNoReservationsFoundIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.noReservationsFound));
  }

  async clickYouDonTHaveAny(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny));
  }

  async doubleClickYouDonTHaveAny(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny));
  }

  async longPressYouDonTHaveAny(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny));
  }

  async expectYouDonTHaveAnyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), timeoutMs);
  }

  async expectYouDonTHaveAnyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), expected, timeoutMs);
  }

  async expectYouDonTHaveAnyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), substring, timeoutMs);
  }

  async expectYouDonTHaveAnyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), value, timeoutMs);
  }

  async expectYouDonTHaveAnyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), timeoutMs);
  }

  async expectYouDonTHaveAnyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), timeoutMs);
  }

  async expectYouDonTHaveAnyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), timeoutMs);
  }

  async expectYouDonTHaveAnyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), timeoutMs);
  }

  async expectYouDonTHaveAnyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), timeoutMs);
  }

  async expectYouDonTHaveAnyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny), count, timeoutMs);
  }

  async scrollYouDonTHaveAnyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.youDonTHaveAny));
  }

  async doubleClickBookASpaceReservation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation));
  }

  async longPressBookASpaceReservation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation));
  }

  async expectBookASpaceReservationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), timeoutMs);
  }

  async expectBookASpaceReservationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), expected, timeoutMs);
  }

  async expectBookASpaceReservationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), substring, timeoutMs);
  }

  async expectBookASpaceReservationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), value, timeoutMs);
  }

  async expectBookASpaceReservationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), timeoutMs);
  }

  async expectBookASpaceReservationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), timeoutMs);
  }

  async expectBookASpaceReservationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), timeoutMs);
  }

  async expectBookASpaceReservationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), timeoutMs);
  }

  async expectBookASpaceReservationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), timeoutMs);
  }

  async expectBookASpaceReservationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation), count, timeoutMs);
  }

  async scrollBookASpaceReservationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.bookASpaceReservation));
  }

  async doubleClickTaviChat(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.taviChat));
  }

  async longPressTaviChat(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.taviChat));
  }

  async expectTaviChatHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.taviChat), timeoutMs);
  }

  async expectTaviChatText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.taviChat), expected, timeoutMs);
  }

  async expectTaviChatContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.taviChat), substring, timeoutMs);
  }

  async expectTaviChatValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.taviChat), value, timeoutMs);
  }

  async expectTaviChatEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.taviChat), timeoutMs);
  }

  async expectTaviChatDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.taviChat), timeoutMs);
  }

  async expectTaviChatChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.taviChat), timeoutMs);
  }

  async expectTaviChatUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.taviChat), timeoutMs);
  }

  async expectTaviChatFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.taviChat), timeoutMs);
  }

  async expectTaviChatCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.taviChat), count, timeoutMs);
  }

  async scrollTaviChatIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.taviChat));
  }

  async longPressEnglishUnitedStates(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates));
  }

  async expectEnglishUnitedStatesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), expected, timeoutMs);
  }

  async expectEnglishUnitedStatesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), substring, timeoutMs);
  }

  async expectEnglishUnitedStatesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), value, timeoutMs);
  }

  async expectEnglishUnitedStatesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates), count, timeoutMs);
  }

  async scrollEnglishUnitedStatesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.englishUnitedStates));
  }

  async longPressChat(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.chat));
  }

  async expectChatHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.chat), timeoutMs);
  }

  async expectChatText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.chat), expected, timeoutMs);
  }

  async expectChatContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.chat), substring, timeoutMs);
  }

  async expectChatValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.chat), value, timeoutMs);
  }

  async expectChatEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.chat), timeoutMs);
  }

  async expectChatDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.chat), timeoutMs);
  }

  async expectChatChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.chat), timeoutMs);
  }

  async expectChatUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.chat), timeoutMs);
  }

  async expectChatFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.chat), timeoutMs);
  }

  async expectChatCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.chat), count, timeoutMs);
  }

  async scrollChatIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.chat));
  }

  async longPressAiUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async expectAiUnsaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), expected, timeoutMs);
  }

  async expectAiUnsaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), substring, timeoutMs);
  }

  async expectAiUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), value, timeoutMs);
  }

  async expectAiUnsaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), count, timeoutMs);
  }

  async scrollAiUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async doubleClickChecked(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.checked));
  }

  async longPressChecked(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.checked));
  }

  async expectCheckedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.checked), timeoutMs);
  }

  async expectCheckedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.checked), expected, timeoutMs);
  }

  async expectCheckedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.checked), substring, timeoutMs);
  }

  async expectCheckedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.checked), value, timeoutMs);
  }

  async expectCheckedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.checked), timeoutMs);
  }

  async expectCheckedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.checked), timeoutMs);
  }

  async expectCheckedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.checked), timeoutMs);
  }

  async expectCheckedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.checked), timeoutMs);
  }

  async expectCheckedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.checked), timeoutMs);
  }

  async expectCheckedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.checked), count, timeoutMs);
  }

  async scrollCheckedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.checked));
  }

  async clickNewsSavedSuccessfully(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async doubleClickNewsSavedSuccessfully(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async longPressNewsSavedSuccessfully(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async expectNewsSavedSuccessfullyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), expected, timeoutMs);
  }

  async expectNewsSavedSuccessfullyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), substring, timeoutMs);
  }

  async expectNewsSavedSuccessfullyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), value, timeoutMs);
  }

  async expectNewsSavedSuccessfullyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), count, timeoutMs);
  }

  async scrollNewsSavedSuccessfullyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async doubleClickViewSavedNewsUnder(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async longPressViewSavedNewsUnder(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async expectViewSavedNewsUnderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), expected, timeoutMs);
  }

  async expectViewSavedNewsUnderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), substring, timeoutMs);
  }

  async expectViewSavedNewsUnderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), value, timeoutMs);
  }

  async expectViewSavedNewsUnderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), count, timeoutMs);
  }

  async scrollViewSavedNewsUnderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async doubleClickJm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.jm));
  }

  async longPressJm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.jm));
  }

  async expectJmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.jm), timeoutMs);
  }

  async expectJmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.jm), expected, timeoutMs);
  }

  async expectJmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.jm), substring, timeoutMs);
  }

  async expectJmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.jm), value, timeoutMs);
  }

  async expectJmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.jm), timeoutMs);
  }

  async expectJmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.jm), timeoutMs);
  }

  async expectJmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.jm), timeoutMs);
  }

  async expectJmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.jm), timeoutMs);
  }

  async expectJmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.jm), timeoutMs);
  }

  async expectJmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.jm), count, timeoutMs);
  }

  async scrollJmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.jm));
  }

  async doubleClickViewAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async longPressViewAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async expectViewAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewAccount), expected, timeoutMs);
  }

  async expectViewAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewAccount), substring, timeoutMs);
  }

  async expectViewAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewAccount), value, timeoutMs);
  }

  async expectViewAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewAccount), count, timeoutMs);
  }

  async scrollViewAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async doubleClickSaveIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveIcon));
  }

  async longPressSaveIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveIcon));
  }

  async expectSaveIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.saveIcon), timeoutMs);
  }

  async expectSaveIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.saveIcon), expected, timeoutMs);
  }

  async expectSaveIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.saveIcon), substring, timeoutMs);
  }

  async expectSaveIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.saveIcon), value, timeoutMs);
  }

  async expectSaveIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.saveIcon), timeoutMs);
  }

  async expectSaveIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.saveIcon), timeoutMs);
  }

  async expectSaveIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.saveIcon), timeoutMs);
  }

  async expectSaveIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.saveIcon), timeoutMs);
  }

  async expectSaveIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.saveIcon), timeoutMs);
  }

  async expectSaveIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.saveIcon), count, timeoutMs);
  }

  async scrollSaveIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveIcon));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.mySavedNews), expected, timeoutMs);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.mySavedNews), substring, timeoutMs);
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.mySavedNews), count, timeoutMs);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async doubleClickGridIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.gridIcon));
  }

  async longPressGridIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.gridIcon));
  }

  async expectGridIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs);
  }

  async expectGridIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.gridIcon), expected, timeoutMs);
  }

  async expectGridIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.gridIcon), substring, timeoutMs);
  }

  async expectGridIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.gridIcon), value, timeoutMs);
  }

  async expectGridIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs);
  }

  async expectGridIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs);
  }

  async expectGridIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs);
  }

  async expectGridIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs);
  }

  async expectGridIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs);
  }

  async expectGridIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.gridIcon), count, timeoutMs);
  }

  async scrollGridIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.gridIcon));
  }

}
