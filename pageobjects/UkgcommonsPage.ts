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
    btnTopSitesMenu: { strategy: 'role' as const, value: 'Top sites', role: 'button', actionKind: 'button' as const },
    btnHeaderMyApps: { strategy: 'role' as const, value: 'Top applications', role: 'button', actionKind: 'button' as const },
    showCollapsedMenu: { strategy: 'role' as const, value: 'show collapsed menu', role: 'button', actionKind: 'button' as const },
    profileIcon: { strategy: 'altText' as const, value: 'Profile Icon', actionKind: 'generic' as const },
    headerBg: { strategy: 'altText' as const, value: 'header-bg', actionKind: 'generic' as const },
    hiDrakeWhatAre: { strategy: 'role' as const, value: 'Hi Drake, what are you looking for?', role: 'heading', level: 2, actionKind: 'text' as const },
    drake: { strategy: 'text' as const, value: 'Drake', actionKind: 'text' as const },
    sharePoint: { strategy: 'role' as const, value: 'SharePoint', role: 'button', actionKind: 'button' as const },
    muiInputBaseInput: { strategy: 'placeholder' as const, value: 'Search news, sites, or events ', actionKind: 'textbox' as const },
    searchIcon: { strategy: 'altText' as const, value: 'search_icon', actionKind: 'generic' as const },
    popularSearches: { strategy: 'role' as const, value: 'Popular searches', role: 'heading', level: 6, actionKind: 'text' as const },
    brandHub: { strategy: 'role' as const, value: 'brand hub', role: 'button', actionKind: 'button' as const },
    holidayCalendar: { strategy: 'role' as const, value: 'holiday calendar', role: 'button', actionKind: 'button' as const },
    celebrateU: { strategy: 'role' as const, value: 'celebrate u', role: 'button', actionKind: 'button' as const },
    newHireCenter: { strategy: 'role' as const, value: 'new hire center', role: 'button', actionKind: 'button' as const },
    announcements: { strategy: 'role' as const, value: 'Announcements', role: 'heading', level: 3, actionKind: 'text' as const },
    btnAnnouncementCarouselPrev: { strategy: 'role' as const, value: 'switch to other announcement', role: 'button', actionKind: 'button' as const },
    reviewDetailsHowTo: { strategy: 'text' as const, value: 'Review details, how to resolve missing bookmarks', actionKind: 'text' as const },
    getKeyUpdatesFrom: { strategy: 'text' as const, value: 'Get key updates from leadership and the answers to', actionKind: 'text' as const },
    learnMore: { strategy: 'role' as const, value: 'Learn more', role: 'link', actionKind: 'link' as const },
    featured: { strategy: 'role' as const, value: 'Featured', role: 'heading', level: 3, actionKind: 'text' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    ai: { strategy: 'text' as const, value: 'AI', actionKind: 'text' as const },
    drakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', actionKind: 'text' as const },
    shareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', actionKind: 'button' as const },
    unsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', actionKind: 'button' as const },
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
    latestInternalNews: { strategy: 'role' as const, value: 'Latest internal news', role: 'button', actionKind: 'button' as const },
    ukgAndIndustryNews: { strategy: 'role' as const, value: 'UKG and industry news', role: 'button', actionKind: 'button' as const },
    catchUpOnThe: { strategy: 'role' as const, value: 'Catch up on the latest happenings across teams, divisions, and UKG locations.', role: 'img', actionKind: 'generic' as const },
    seeAllInternalNews: { strategy: 'role' as const, value: 'See all internal news', role: 'button', actionKind: 'button' as const },
    globalSecurityManagedVault: { strategy: 'altText' as const, value: 'Global Security managed Vault certificate migration calendar', actionKind: 'generic' as const },
    productEngineeringGlobal: { strategy: 'role' as const, value: 'Product & Engineering: Global Security', role: 'link', actionKind: 'link' as const },
    globalSecurityManagedVaultLink: { strategy: 'role' as const, value: 'Global Security managed Vault certificate', role: 'link', actionKind: 'link' as const },
    comment: { strategy: 'altText' as const, value: 'comment', actionKind: 'generic' as const },
    baselineImagesRequiredFor: { strategy: 'altText' as const, value: 'Baseline Images required for new deployments starting July 31', actionKind: 'generic' as const },
    ukgRiseEarlyCareer: { strategy: 'altText' as const, value: 'UKG Rise Early Career Month: Build the skills, shape the future', actionKind: 'generic' as const },
    peopleBelongingImpact: { strategy: 'role' as const, value: 'People: Belonging & Impact', role: 'link', actionKind: 'link' as const },
    ukgRiseEarlyCareerLink: { strategy: 'text' as const, value: 'UKG Rise Early Career Month: Build the skills, shape the future', actionKind: 'link' as const },
    employeeResourceGroupErg: { strategy: 'altText' as const, value: 'Employee Resource Group (ERG) monthly newsletter: July 2026', actionKind: 'generic' as const },
    ukgNucleusRoi: { strategy: 'altText' as const, value: 'UKG | Nucleus ROI Case Study-UKG Pro at XKIG', actionKind: 'generic' as const },
    gtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', actionKind: 'link' as const },
    ukgNucleusRoiLink: { strategy: 'role' as const, value: 'UKG | Nucleus ROI Case Study-UKG Pro at XKIG', role: 'link', actionKind: 'link' as const },
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
    claudeEnterpriseAccessFor: { strategy: 'altText' as const, value: 'Claude Enterprise access for non-Product and Engineering teams', actionKind: 'generic' as const },
    aiHub: { strategy: 'role' as const, value: 'AI Hub', role: 'link', actionKind: 'link' as const },
    claudeEnterpriseAccessForLink: { strategy: 'text' as const, value: 'Claude Enterprise access for non-Product and Engineering teams', actionKind: 'link' as const },
    newProcessForChatGPT: { strategy: 'altText' as const, value: 'New process for ChatGPT access and credit extensions', actionKind: 'generic' as const },
    newProcessForChatGPTLink: { strategy: 'role' as const, value: 'New process for ChatGPT access and credit', role: 'link', actionKind: 'link' as const },
    purposeLeadershipJourney: { strategy: 'altText' as const, value: 'Purpose Leadership Journey | Webinar Series Recordings (All 3 Sessions)', actionKind: 'generic' as const },
    cx: { strategy: 'role' as const, value: 'CX', role: 'link', actionKind: 'link' as const },
    purposeLeadershipJourneyLink: { strategy: 'text' as const, value: 'Purpose Leadership Journey | Webinar Series Recordings (All 3 Sessions)', actionKind: 'link' as const },
    photoOfTheWeek2: { strategy: 'altText' as const, value: 'Photo of the Week: UKG Huddle in Bengaluru', actionKind: 'generic' as const },
    photoOfTheWeekPhotoOfTheWeekUkgHuddle: { strategy: 'role' as const, value: 'Photo of the Week: UKG Huddle in Bengaluru', role: 'link', actionKind: 'link' as const },
    howTheNewExperience: { strategy: 'altText' as const, value: 'How the New Experience helps customers operate in real time', actionKind: 'generic' as const },
    productEngineeringProduct: { strategy: 'role' as const, value: 'Product & Engineering: Product', role: 'link', actionKind: 'link' as const },
    howTheNewExperienceLink: { strategy: 'role' as const, value: 'How the New Experience helps customers operate in', role: 'link', actionKind: 'link' as const },
    thatSAWrapUkgS: { strategy: 'altText' as const, value: 'That\'s a wrap: UKG\'s podcast crushes its first season', actionKind: 'generic' as const },
    thatSAWrapUkgSLink: { strategy: 'role' as const, value: 'That\'s a wrap: UKG\'s podcast crushes its first', role: 'link', actionKind: 'link' as const },
    whatSNewOnUkg: { strategy: 'altText' as const, value: 'What’s new on UKG Commons: Hot jobs, space reservations, and more', actionKind: 'generic' as const },
    whatSNewOnUkgLink: { strategy: 'text' as const, value: 'What’s new on UKG Commons: Hot jobs, space reservations, and more', actionKind: 'link' as const },
    upcomingEvents: { strategy: 'role' as const, value: 'Upcoming events', role: 'heading', level: 3, actionKind: 'text' as const },
    seeAll: { strategy: 'role' as const, value: 'See all', role: 'button', actionKind: 'button' as const },
    categoryAll: { strategy: 'text' as const, value: 'Category: All', actionKind: 'generic' as const },
    peopleBenefits: { strategy: 'role' as const, value: 'People: Benefits', role: 'link', actionKind: 'link' as const },
    coreMore: { strategy: 'text' as const, value: 'Core & More - Virtual Group Fitness', actionKind: 'text' as const },
    location: { strategy: 'altText' as const, value: 'location', actionKind: 'generic' as const },
    virtual: { strategy: 'text' as const, value: 'Virtual', actionKind: 'text' as const },
    peopleUkgRise: { strategy: 'role' as const, value: 'People: UKG Rise', role: 'link', actionKind: 'link' as const },
    ukgRiseHeritage: { strategy: 'text' as const, value: 'UKG Rise - Heritage Month Kickoff', actionKind: 'text' as const },
    virtualZoomMeeting: { strategy: 'text' as const, value: 'Virtual - Zoom Meeting', actionKind: 'text' as const },
    askMeAnythingAbout: { strategy: 'text' as const, value: 'Ask Me Anything about AI (Option 1)', actionKind: 'text' as const },
    addToCalendar: { strategy: 'role' as const, value: 'Add to calendar', role: 'button', actionKind: 'button' as const },
    stretchRelax: { strategy: 'text' as const, value: 'Stretch & Relax - Virtual Group Fitness', actionKind: 'text' as const },
    askMeAnythingAbout2: { strategy: 'text' as const, value: 'Ask Me Anything about AI (Option 2)', actionKind: 'text' as const },
    peopleUkgUnidos: { strategy: 'role' as const, value: 'People: UKG Unidos', role: 'link', actionKind: 'link' as const },
    ukgUnidosWorldCup: { strategy: 'text' as const, value: 'UKG Unidos: World Cup Quarterfinal Virtual Watch', actionKind: 'text' as const },
    virtualInterviewTrainingWith: { strategy: 'text' as const, value: 'Virtual Interview Training with Grace Institute', actionKind: 'text' as const },
    careerPanelInformational: { strategy: 'text' as const, value: 'Career Panel & Informational Interviews with Year', actionKind: 'text' as const },
    ukgUnidosWorldCup3: { strategy: 'text' as const, value: 'UKG Unidos: World Cup Semifinal Virtual Watch', actionKind: 'text' as const },
    peopleUkgNest: { strategy: 'role' as const, value: 'People: UKG Nest', role: 'link', actionKind: 'link' as const },
    nestAndAdaptWe: { strategy: 'text' as const, value: 'NEST and ADAPT We Rock the Spectrum Volunteer', actionKind: 'text' as const },
    lybertyWayWestford: { strategy: 'text' as const, value: '7 Lyberty Way, Westford MA 01886', actionKind: 'text' as const },
    beyondTheWorkplaceUnderstanding: { strategy: 'text' as const, value: 'Beyond the Workplace: Understanding Social', actionKind: 'text' as const },
    ukgRiseVirtualSpeed: { strategy: 'text' as const, value: 'UKG Rise Virtual Speed Networking', actionKind: 'text' as const },
    peopleUkgPride: { strategy: 'role' as const, value: 'People: UKG Pride', role: 'link', actionKind: 'link' as const },
    outEqualPresents: { strategy: 'text' as const, value: 'Out & Equal Presents: Signal Through the Noise', actionKind: 'text' as const },
    virtualZoom: { strategy: 'text' as const, value: 'Virtual - Zoom', actionKind: 'text' as const },
    myCalendar: { strategy: 'role' as const, value: 'My calendar', role: 'heading', level: 3, actionKind: 'text' as const },
    ukgCommonsDemo: { strategy: 'text' as const, value: 'UKG Commons - Demo', actionKind: 'text' as const },
    calendarIcon: { strategy: 'altText' as const, value: 'calendar_icon', actionKind: 'generic' as const },
    ukgCommonsSprint: { strategy: 'text' as const, value: 'UKG Commons - Sprint planning', actionKind: 'text' as const },
    requestsOverview: { strategy: 'role' as const, value: 'Requests overview', role: 'heading', level: 3, actionKind: 'text' as const },
    myRequests13: { strategy: 'role' as const, value: 'My requests (13)', role: 'button', actionKind: 'button' as const },
    approvals: { strategy: 'role' as const, value: 'Approvals', role: 'button', actionKind: 'button' as const },
    viewAndTrackYour: { strategy: 'role' as const, value: 'View and track your requests here.', role: 'img', actionKind: 'generic' as const },
    automationRequirements: { strategy: 'role' as const, value: 'Automation Requirements', role: 'button', actionKind: 'button' as const },
    low: { strategy: 'text' as const, value: '4 - Low', actionKind: 'text' as const },
    testing: { strategy: 'role' as const, value: 'Testing', role: 'button', actionKind: 'button' as const },
    standardSoftwareRequest: { strategy: 'role' as const, value: 'Standard Software Request', role: 'button', actionKind: 'button' as const },
    done: { strategy: 'role' as const, value: 'Done', role: 'button', actionKind: 'button' as const },
    test: { strategy: 'role' as const, value: 'Test', role: 'button', actionKind: 'button' as const },
    assignedTraining: { strategy: 'role' as const, value: 'Assigned training', role: 'heading', level: 3, actionKind: 'text' as const },
    viewYourRequiredAssigned: { strategy: 'role' as const, value: 'View your required, assigned, and in-progress training in Talent Central—your personalized learning hub for required training, role-based learning, skill development, and AI-powered course recommendations.', role: 'img', actionKind: 'generic' as const },
    noAssignedTrainingAt: { strategy: 'text' as const, value: 'No assigned training at this time', actionKind: 'text' as const },
    exploreAvailableTrainingOpportunities: { strategy: 'text' as const, value: 'Explore available training opportunities.', actionKind: 'text' as const },
    goToTalentCentral: { strategy: 'role' as const, value: 'Go to Talent Central', role: 'link', actionKind: 'link' as const },
    quickActions: { strategy: 'role' as const, value: 'Quick actions', role: 'heading', level: 3, actionKind: 'text' as const },
    getTechnicalSupport: { strategy: 'role' as const, value: 'Get technical support', role: 'link', actionKind: 'link' as const },
    viewHolidayCalendar: { strategy: 'role' as const, value: 'View holiday calendar', role: 'link', actionKind: 'link' as const },
    viewPolicies: { strategy: 'role' as const, value: 'View policies', role: 'link', actionKind: 'link' as const },
    manageExpenses: { strategy: 'role' as const, value: 'Manage expenses', role: 'link', actionKind: 'link' as const },
    tasks: { strategy: 'role' as const, value: 'Tasks', role: 'heading', level: 3, actionKind: 'text' as const },
    viewAndManageYour: { strategy: 'role' as const, value: 'View and manage your Microsoft To Do tasks here.', role: 'img', actionKind: 'generic' as const },
    goToMicrosoftTo: { strategy: 'role' as const, value: 'Go to Microsoft To Do', role: 'link', actionKind: 'link' as const },
    selectTodoList: { strategy: 'role' as const, value: 'Select Todo List', role: 'combobox', actionKind: 'generic' as const },
    tasks2: { strategy: 'text' as const, value: 'Tasks', actionKind: 'text' as const },
    chevronDown: { strategy: 'altText' as const, value: 'chevron-down', actionKind: 'generic' as const },
    r6f: { strategy: 'css' as const, value: '#_r_6f_[placeholder="Add a task"]', actionKind: 'textbox' as const },
    t: { strategy: 'role' as const, value: 'T', role: 'option', actionKind: 'generic' as const },
    h: { strategy: 'role' as const, value: 'H', role: 'option', actionKind: 'generic' as const },
    g: { strategy: 'role' as const, value: 'G', role: 'option', actionKind: 'generic' as const },
    b: { strategy: 'role' as const, value: 'B', role: 'option', actionKind: 'generic' as const },
    o: { strategy: 'role' as const, value: 'O', role: 'option', actionKind: 'generic' as const },
    w: { strategy: 'role' as const, value: 'W', role: 'option', actionKind: 'generic' as const },
    q: { strategy: 'role' as const, value: 'Q', role: 'option', actionKind: 'generic' as const },
    add: { strategy: 'role' as const, value: 'add', role: 'option', actionKind: 'generic' as const },
    completed: { strategy: 'role' as const, value: 'Completed', role: 'heading', level: 6, actionKind: 'text' as const },
    myDay: { strategy: 'role' as const, value: 'my day', role: 'option', actionKind: 'generic' as const },
    adx: { strategy: 'role' as const, value: 'Adx', role: 'option', actionKind: 'generic' as const },
    ukgCommonsApp: { strategy: 'role' as const, value: 'UKG commons app', role: 'option', actionKind: 'generic' as const },
    hotJobs: { strategy: 'role' as const, value: 'Hot jobs', role: 'heading', level: 3, actionKind: 'text' as const },
    hotJobsAreFeatured: { strategy: 'role' as const, value: 'Hot Jobs are featured roles that are in high demand across the organization and often require specialized or business-critical skills. These positions are highlighted to increase visibility and attract qualified talent to priority hiring and internal mobility opportunities.', role: 'img', actionKind: 'generic' as const },
    productManagerHcm: { strategy: 'role' as const, value: 'Product Manager - HCM Solutions', role: 'button', actionKind: 'button' as const },
    qaAutomationLead: { strategy: 'role' as const, value: 'QA Automation Lead', role: 'button', actionKind: 'button' as const },
    seniorSoftwareEngineerDriving: { strategy: 'role' as const, value: 'Senior Software Engineer Driving Enterprise Application Development Across Global Teams', role: 'button', actionKind: 'button' as const },
    seniorSoftwareEngineer: { strategy: 'role' as const, value: 'Senior Software Engineer', role: 'button', actionKind: 'button' as const },
    cloudInfrastructureEngineer: { strategy: 'role' as const, value: 'Cloud Infrastructure Engineer', role: 'button', actionKind: 'button' as const },
    customerSuccessManager: { strategy: 'role' as const, value: 'Customer Success Manager', role: 'button', actionKind: 'button' as const },
    uxUiDesignerChecking: { strategy: 'role' as const, value: 'UX/UI Designer : Checking duplicate', role: 'button', actionKind: 'button' as const },
    seniorPrincipalSoftwareEngineerArchitect: { strategy: 'role' as const, value: 'Senior Principal Software Engineer/Architect', role: 'button', actionKind: 'button' as const },
    mySpaceReservations: { strategy: 'role' as const, value: 'My space reservations', role: 'heading', level: 3, actionKind: 'text' as const },
    viewYourUpcomingSpace: { strategy: 'role' as const, value: 'View your upcoming space reservations or book a new one. Click the menu to update details.', role: 'img', actionKind: 'generic' as const },
    noReservations: { strategy: 'altText' as const, value: 'no reservations', actionKind: 'generic' as const },
    noReservationsFound: { strategy: 'text' as const, value: 'No reservations found', actionKind: 'text' as const },
    youDonTHaveAny: { strategy: 'text' as const, value: 'You don\'t have any upcoming space reservations.', actionKind: 'text' as const },
    bookASpaceReservation: { strategy: 'role' as const, value: 'Book a space reservation', role: 'link', actionKind: 'link' as const },
    englishUnitedStates: { strategy: 'role' as const, value: 'English (United States) ▾', role: 'button', actionKind: 'button' as const },
    chat: { strategy: 'role' as const, value: 'Hello! How may I assist you?', role: 'button', frame: 'iframe#mw4web_iframe', actionKind: 'button' as const },
    newsSavedSuccessfully: { strategy: 'text' as const, value: 'News saved successfully!', actionKind: 'text' as const },
    viewSavedNewsUnder: { strategy: 'role' as const, value: 'View saved news under your profile.', role: 'link', actionKind: 'link' as const },
    drakeTiwaryUkgCom: { strategy: 'text' as const, value: 'drake.tiwary@ukg.com', actionKind: 'text' as const },
    viewAccount: { strategy: 'text' as const, value: 'View Account', actionKind: 'text' as const },
    saveIcon: { strategy: 'altText' as const, value: 'save-icon', actionKind: 'generic' as const },
    mySavedNews: { strategy: 'text' as const, value: 'My saved news', actionKind: 'text' as const },
    impersonateIcon: { strategy: 'altText' as const, value: 'impersonate-icon', actionKind: 'generic' as const },
    impersonateAnotherUser: { strategy: 'text' as const, value: 'Impersonate another user', actionKind: 'text' as const },
    gridIcon: { strategy: 'altText' as const, value: 'grid-icon', actionKind: 'generic' as const },
    customizeHomePageLayout: { strategy: 'text' as const, value: 'Customize home page layout', actionKind: 'text' as const },
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

  async clickBtnTopSitesMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu));
  }

  async doubleClickBtnTopSitesMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu));
  }

  async expectBtnTopSitesMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), timeoutMs, soft);
  }

  async clickBtnHeaderMyApps(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps));
  }

  async doubleClickBtnHeaderMyApps(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps));
  }

  async expectBtnHeaderMyAppsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), timeoutMs, soft);
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

  async clickProfileIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.profileIcon));
  }

  async expectProfileIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.profileIcon), timeoutMs, soft);
  }

  async clickHeaderBg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.headerBg));
  }

  async expectHeaderBgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.headerBg), timeoutMs, soft);
  }

  async getInnerTextHiDrakeWhatAre(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre));
  }

  async expectHiDrakeWhatAreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), timeoutMs, soft);
  }

  async getInnerTextDrake(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.drake));
  }

  async expectDrakeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.drake), timeoutMs, soft);
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

  async fillMuiInputBaseInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), value);
  }

  async clearMuiInputBaseInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput));
  }

  async getMuiInputBaseInputValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput));
  }

  async expectMuiInputBaseInputVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), timeoutMs, soft);
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

  async getInnerTextAnnouncements(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async expectAnnouncementsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs, soft);
  }

  async clickBtnAnnouncementCarouselPrev(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev));
  }

  async doubleClickBtnAnnouncementCarouselPrev(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev));
  }

  async expectBtnAnnouncementCarouselPrevVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), timeoutMs, soft);
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

  async getInnerTextFeatured(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.featured));
  }

  async expectFeaturedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.featured), timeoutMs, soft);
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

  async getInnerTextAi(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ai));
  }

  async expectAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ai), timeoutMs, soft);
  }

  async getInnerTextDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwary));
  }

  async expectDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), timeoutMs, soft);
  }

  async clickShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.shareNews));
  }

  async doubleClickShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.shareNews));
  }

  async expectShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.shareNews), timeoutMs, soft);
  }

  async clickUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.unsaveNews));
  }

  async doubleClickUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.unsaveNews));
  }

  async expectUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.unsaveNews), timeoutMs, soft);
  }

  async clickTakeTheNextStep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStep2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), timeoutMs, soft);
  }

  async getInnerTextStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.stacyCutrono));
  }

  async expectStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), timeoutMs, soft);
  }

  async clickSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveNews));
  }

  async doubleClickSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveNews));
  }

  async expectSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.saveNews), timeoutMs, soft);
  }

  async clickAllEmployeeTownHall(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), timeoutMs, soft);
  }

  async getInnerTextAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), timeoutMs, soft);
  }

  async clickCelebratingTheStrengthOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOf2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), timeoutMs, soft);
  }

  async getInnerTextChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), timeoutMs, soft);
  }

  async clickPrideMonth2026Together(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together));
  }

  async expectPrideMonth2026TogetherVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), timeoutMs, soft);
  }

  async getInnerTextPrideMonth2026Together2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2));
  }

  async expectPrideMonth2026Together2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), timeoutMs, soft);
  }

  async getInnerTextSequoyaFord(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.sequoyaFord));
  }

  async expectSequoyaFordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), timeoutMs, soft);
  }

  async clickGlobalImpactInAction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction));
  }

  async expectGlobalImpactInActionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), timeoutMs, soft);
  }

  async getInnerTextGlobalImpactInAction2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2));
  }

  async expectGlobalImpactInAction2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), timeoutMs, soft);
  }

  async getInnerTextSarahMarks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.sarahMarks));
  }

  async expectSarahMarksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.sarahMarks), timeoutMs, soft);
  }

  async clickCelebratingOneYearOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf));
  }

  async expectCelebratingOneYearOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), timeoutMs, soft);
  }

  async getInnerTextCelebratingOneYearOf2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2));
  }

  async expectCelebratingOneYearOf2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), timeoutMs, soft);
  }

  async getInnerTextBrianBower(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.brianBower));
  }

  async expectBrianBowerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.brianBower), timeoutMs, soft);
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

  async clickLatestInternalNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestInternalNews));
  }

  async doubleClickLatestInternalNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestInternalNews));
  }

  async expectLatestInternalNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), timeoutMs, soft);
  }

  async clickUkgAndIndustryNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews));
  }

  async doubleClickUkgAndIndustryNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews));
  }

  async expectUkgAndIndustryNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), timeoutMs, soft);
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

  async clickGlobalSecurityManagedVault(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault));
  }

  async expectGlobalSecurityManagedVaultVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVault), timeoutMs, soft);
  }

  async clickProductEngineeringGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal));
  }

  async expectProductEngineeringGlobalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), timeoutMs, soft);
  }

  async clickGlobalSecurityManagedVaultLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink));
  }

  async expectGlobalSecurityManagedVaultLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.globalSecurityManagedVaultLink), timeoutMs, soft);
  }

  async clickComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.comment));
  }

  async expectCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.comment), timeoutMs, soft);
  }

  async clickBaselineImagesRequiredFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor));
  }

  async expectBaselineImagesRequiredForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), timeoutMs, soft);
  }

  async clickUkgRiseEarlyCareer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer));
  }

  async expectUkgRiseEarlyCareerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), timeoutMs, soft);
  }

  async clickPeopleBelongingImpact(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact));
  }

  async expectPeopleBelongingImpactVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), timeoutMs, soft);
  }

  async clickUkgRiseEarlyCareerLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink));
  }

  async expectUkgRiseEarlyCareerLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), timeoutMs, soft);
  }

  async clickEmployeeResourceGroupErg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg));
  }

  async expectEmployeeResourceGroupErgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.employeeResourceGroupErg), timeoutMs, soft);
  }

  async clickUkgNucleusRoi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi));
  }

  async expectUkgNucleusRoiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), timeoutMs, soft);
  }

  async clickGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.gtmMarketing));
  }

  async expectGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), timeoutMs, soft);
  }

  async clickUkgNucleusRoiLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink));
  }

  async expectUkgNucleusRoiLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoiLink), timeoutMs, soft);
  }

  async clickUkgCommonsMobileApp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp));
  }

  async expectUkgCommonsMobileAppVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), timeoutMs, soft);
  }

  async clickCommsEmployeeCommunications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications));
  }

  async expectCommsEmployeeCommunicationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), timeoutMs, soft);
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

  async clickPeopleUkgAdapt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt));
  }

  async expectPeopleUkgAdaptVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), timeoutMs, soft);
  }

  async clickPhotoOfTheWeek(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek));
  }

  async expectPhotoOfTheWeekVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), timeoutMs, soft);
  }

  async clickInsideUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.insideUkg));
  }

  async expectInsideUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.insideUkg), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekLink), timeoutMs, soft);
  }

  async clickDoNotEngageWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith));
  }

  async expectDoNotEngageWithVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), timeoutMs, soft);
  }

  async clickDoNotEngageWithLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink));
  }

  async expectDoNotEngageWithLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), timeoutMs, soft);
  }

  async clickThankYouForParticipating(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating));
  }

  async expectThankYouForParticipatingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), timeoutMs, soft);
  }

  async clickPeopleEmployeeExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience));
  }

  async expectPeopleEmployeeExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), timeoutMs, soft);
  }

  async clickThankYouForParticipatingLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink));
  }

  async expectThankYouForParticipatingLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipatingLink), timeoutMs, soft);
  }

  async clickBigWinFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinFor));
  }

  async expectBigWinForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.bigWinFor), timeoutMs, soft);
  }

  async clickCommsAnalystRelations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations));
  }

  async expectCommsAnalystRelationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), timeoutMs, soft);
  }

  async clickBigWinForLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForLink));
  }

  async expectBigWinForLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.bigWinForLink), timeoutMs, soft);
  }

  async clickTuneInTodayUkgAd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd));
  }

  async expectTuneInTodayUkgAdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), timeoutMs, soft);
  }

  async clickTuneInTodayUkgAdLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink));
  }

  async expectTuneInTodayUkgAdLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAdLink), timeoutMs, soft);
  }

  async clickClaudeEnterpriseAccessFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor));
  }

  async expectClaudeEnterpriseAccessForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), timeoutMs, soft);
  }

  async clickAiHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiHub));
  }

  async expectAiHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiHub), timeoutMs, soft);
  }

  async clickClaudeEnterpriseAccessForLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink));
  }

  async expectClaudeEnterpriseAccessForLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), timeoutMs, soft);
  }

  async clickNewProcessForChatGPT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT));
  }

  async expectNewProcessForChatGPTVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), timeoutMs, soft);
  }

  async clickNewProcessForChatGPTLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink));
  }

  async expectNewProcessForChatGPTLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), timeoutMs, soft);
  }

  async clickPurposeLeadershipJourney(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney));
  }

  async expectPurposeLeadershipJourneyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), timeoutMs, soft);
  }

  async clickCx(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.cx));
  }

  async expectCxVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.cx), timeoutMs, soft);
  }

  async clickPurposeLeadershipJourneyLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink));
  }

  async expectPurposeLeadershipJourneyLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), timeoutMs, soft);
  }

  async clickPhotoOfTheWeek2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2));
  }

  async expectPhotoOfTheWeek2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekPhotoOfTheWeekUkgHuddle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle));
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), timeoutMs, soft);
  }

  async clickHowTheNewExperience(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience));
  }

  async expectHowTheNewExperienceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), timeoutMs, soft);
  }

  async clickProductEngineeringProduct(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct));
  }

  async expectProductEngineeringProductVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), timeoutMs, soft);
  }

  async clickHowTheNewExperienceLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink));
  }

  async expectHowTheNewExperienceLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), timeoutMs, soft);
  }

  async clickThatSAWrapUkgS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS));
  }

  async expectThatSAWrapUkgSVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), timeoutMs, soft);
  }

  async clickThatSAWrapUkgSLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink));
  }

  async expectThatSAWrapUkgSLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), timeoutMs, soft);
  }

  async clickWhatSNewOnUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg));
  }

  async expectWhatSNewOnUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), timeoutMs, soft);
  }

  async clickWhatSNewOnUkgLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink));
  }

  async expectWhatSNewOnUkgLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), timeoutMs, soft);
  }

  async getInnerTextUpcomingEvents(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents));
  }

  async expectUpcomingEventsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents), timeoutMs, soft);
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

  async clickPeopleBenefits(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefits));
  }

  async expectPeopleBenefitsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), timeoutMs, soft);
  }

  async getInnerTextCoreMore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.coreMore));
  }

  async expectCoreMoreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.coreMore), timeoutMs, soft);
  }

  async clickLocation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.location));
  }

  async expectLocationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.location), timeoutMs, soft);
  }

  async getInnerTextVirtual(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtual));
  }

  async expectVirtualVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.virtual), timeoutMs, soft);
  }

  async clickPeopleUkgRise(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise));
  }

  async expectPeopleUkgRiseVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), timeoutMs, soft);
  }

  async getInnerTextUkgRiseHeritage(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage));
  }

  async expectUkgRiseHeritageVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), timeoutMs, soft);
  }

  async getInnerTextVirtualZoomMeeting(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting));
  }

  async expectVirtualZoomMeetingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), timeoutMs, soft);
  }

  async getInnerTextAskMeAnythingAbout(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout));
  }

  async expectAskMeAnythingAboutVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), timeoutMs, soft);
  }

  async clickAddToCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.addToCalendar));
  }

  async doubleClickAddToCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.addToCalendar));
  }

  async expectAddToCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.addToCalendar), timeoutMs, soft);
  }

  async getInnerTextStretchRelax(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelax));
  }

  async expectStretchRelaxVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelax), timeoutMs, soft);
  }

  async getInnerTextAskMeAnythingAbout2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2));
  }

  async expectAskMeAnythingAbout2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), timeoutMs, soft);
  }

  async clickPeopleUkgUnidos(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos));
  }

  async expectPeopleUkgUnidosVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), timeoutMs, soft);
  }

  async getInnerTextUkgUnidosWorldCup(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup));
  }

  async expectUkgUnidosWorldCupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), timeoutMs, soft);
  }

  async getInnerTextVirtualInterviewTrainingWith(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith));
  }

  async expectVirtualInterviewTrainingWithVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), timeoutMs, soft);
  }

  async getInnerTextCareerPanelInformational(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational));
  }

  async expectCareerPanelInformationalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), timeoutMs, soft);
  }

  async getInnerTextUkgUnidosWorldCup3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3));
  }

  async expectUkgUnidosWorldCup3Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), timeoutMs, soft);
  }

  async clickPeopleUkgNest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest));
  }

  async expectPeopleUkgNestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), timeoutMs, soft);
  }

  async getInnerTextNestAndAdaptWe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe));
  }

  async expectNestAndAdaptWeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), timeoutMs, soft);
  }

  async getInnerTextLybertyWayWestford(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford));
  }

  async expectLybertyWayWestfordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), timeoutMs, soft);
  }

  async getInnerTextBeyondTheWorkplaceUnderstanding(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding));
  }

  async expectBeyondTheWorkplaceUnderstandingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), timeoutMs, soft);
  }

  async getInnerTextUkgRiseVirtualSpeed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed));
  }

  async expectUkgRiseVirtualSpeedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), timeoutMs, soft);
  }

  async clickPeopleUkgPride(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride));
  }

  async expectPeopleUkgPrideVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), timeoutMs, soft);
  }

  async getInnerTextOutEqualPresents(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresents));
  }

  async expectOutEqualPresentsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), timeoutMs, soft);
  }

  async getInnerTextVirtualZoom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoom));
  }

  async expectVirtualZoomVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoom), timeoutMs, soft);
  }

  async getInnerTextMyCalendar(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar));
  }

  async expectMyCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.myCalendar), timeoutMs, soft);
  }

  async getInnerTextUkgCommonsDemo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo));
  }

  async expectUkgCommonsDemoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), timeoutMs, soft);
  }

  async clickCalendarIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.calendarIcon));
  }

  async expectCalendarIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.calendarIcon), timeoutMs, soft);
  }

  async getInnerTextUkgCommonsSprint(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint));
  }

  async expectUkgCommonsSprintVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), timeoutMs, soft);
  }

  async getInnerTextRequestsOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.requestsOverview));
  }

  async expectRequestsOverviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.requestsOverview), timeoutMs, soft);
  }

  async clickMyRequests13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests13));
  }

  async doubleClickMyRequests13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests13));
  }

  async expectMyRequests13Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.myRequests13), timeoutMs, soft);
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

  async clickAutomationRequirements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.automationRequirements));
  }

  async doubleClickAutomationRequirements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.automationRequirements));
  }

  async expectAutomationRequirementsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.automationRequirements), timeoutMs, soft);
  }

  async getInnerTextLow(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.low));
  }

  async expectLowVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.low), timeoutMs, soft);
  }

  async clickTesting(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.testing));
  }

  async doubleClickTesting(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.testing));
  }

  async expectTestingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.testing), timeoutMs, soft);
  }

  async clickStandardSoftwareRequest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest));
  }

  async doubleClickStandardSoftwareRequest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest));
  }

  async expectStandardSoftwareRequestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), timeoutMs, soft);
  }

  async clickDone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.done));
  }

  async doubleClickDone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.done));
  }

  async expectDoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.done), timeoutMs, soft);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.test), timeoutMs, soft);
  }

  async getInnerTextAssignedTraining(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTraining));
  }

  async expectAssignedTrainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.assignedTraining), timeoutMs, soft);
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

  async clickViewHolidayCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar));
  }

  async expectViewHolidayCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewHolidayCalendar), timeoutMs, soft);
  }

  async clickViewPolicies(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies));
  }

  async expectViewPoliciesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewPolicies), timeoutMs, soft);
  }

  async clickManageExpenses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses));
  }

  async expectManageExpensesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.manageExpenses), timeoutMs, soft);
  }

  async getInnerTextTasks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs, soft);
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

  async getInnerTextTasks2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks2));
  }

  async expectTasks2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.tasks2), timeoutMs, soft);
  }

  async clickChevronDown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.chevronDown));
  }

  async expectChevronDownVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.chevronDown), timeoutMs, soft);
  }

  async fillR6f(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UkgcommonsPage.L.r6f), value);
  }

  async clearR6f(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UkgcommonsPage.L.r6f));
  }

  async getR6fValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.r6f));
  }

  async expectR6fVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.r6f), timeoutMs, soft);
  }

  async clickT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.t));
  }

  async expectTVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.t), timeoutMs, soft);
  }

  async clickH(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.h));
  }

  async expectHVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.h), timeoutMs, soft);
  }

  async clickG(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.g));
  }

  async expectGVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.g), timeoutMs, soft);
  }

  async clickB(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.b));
  }

  async expectBVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.b), timeoutMs, soft);
  }

  async clickO(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.o));
  }

  async expectOVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.o), timeoutMs, soft);
  }

  async clickW(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.w));
  }

  async expectWVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.w), timeoutMs, soft);
  }

  async clickQ(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.q));
  }

  async expectQVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.q), timeoutMs, soft);
  }

  async clickAdd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.add));
  }

  async expectAddVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.add), timeoutMs, soft);
  }

  async getInnerTextCompleted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.completed));
  }

  async expectCompletedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.completed), timeoutMs, soft);
  }

  async clickMyDay(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myDay));
  }

  async expectMyDayVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.myDay), timeoutMs, soft);
  }

  async clickAdx(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.adx));
  }

  async expectAdxVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.adx), timeoutMs, soft);
  }

  async clickUkgCommonsApp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp));
  }

  async expectUkgCommonsAppVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), timeoutMs, soft);
  }

  async getInnerTextHotJobs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async expectHotJobsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs, soft);
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

  async getInnerTextMySpaceReservations(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations));
  }

  async expectMySpaceReservationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), timeoutMs, soft);
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

  async getInnerTextDrakeTiwaryUkgCom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom));
  }

  async expectDrakeTiwaryUkgComVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), timeoutMs, soft);
  }

  async getInnerTextViewAccount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
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

  async getInnerTextMySavedNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickImpersonateIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateIcon));
  }

  async expectImpersonateIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), timeoutMs, soft);
  }

  async getInnerTextImpersonateAnotherUser(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser));
  }

  async expectImpersonateAnotherUserVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), timeoutMs, soft);
  }

  async clickGridIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.gridIcon));
  }

  async expectGridIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.gridIcon), timeoutMs, soft);
  }

  async getInnerTextCustomizeHomePageLayout(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async expectCustomizeHomePageLayoutVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs, soft);
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

  async longPressBtnTopSitesMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu));
  }

  async expectBtnTopSitesMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), expected, timeoutMs);
  }

  async expectBtnTopSitesMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), substring, timeoutMs);
  }

  async expectBtnTopSitesMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), value, timeoutMs);
  }

  async expectBtnTopSitesMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), timeoutMs);
  }

  async expectBtnTopSitesMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu), count, timeoutMs);
  }

  async scrollBtnTopSitesMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnTopSitesMenu));
  }

  async longPressBtnHeaderMyApps(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps));
  }

  async expectBtnHeaderMyAppsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), expected, timeoutMs);
  }

  async expectBtnHeaderMyAppsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), substring, timeoutMs);
  }

  async expectBtnHeaderMyAppsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), value, timeoutMs);
  }

  async expectBtnHeaderMyAppsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), timeoutMs);
  }

  async expectBtnHeaderMyAppsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps), count, timeoutMs);
  }

  async scrollBtnHeaderMyAppsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnHeaderMyApps));
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

  async doubleClickProfileIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.profileIcon));
  }

  async longPressProfileIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.profileIcon));
  }

  async expectProfileIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.profileIcon), timeoutMs);
  }

  async expectProfileIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.profileIcon), expected, timeoutMs);
  }

  async expectProfileIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.profileIcon), substring, timeoutMs);
  }

  async expectProfileIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.profileIcon), value, timeoutMs);
  }

  async expectProfileIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.profileIcon), timeoutMs);
  }

  async expectProfileIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.profileIcon), timeoutMs);
  }

  async expectProfileIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.profileIcon), timeoutMs);
  }

  async expectProfileIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.profileIcon), timeoutMs);
  }

  async expectProfileIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.profileIcon), timeoutMs);
  }

  async expectProfileIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.profileIcon), count, timeoutMs);
  }

  async scrollProfileIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.profileIcon));
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

  async clickHiDrakeWhatAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre));
  }

  async doubleClickHiDrakeWhatAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre));
  }

  async longPressHiDrakeWhatAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre));
  }

  async expectHiDrakeWhatAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), timeoutMs);
  }

  async expectHiDrakeWhatAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), expected, timeoutMs);
  }

  async expectHiDrakeWhatAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), substring, timeoutMs);
  }

  async expectHiDrakeWhatAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), value, timeoutMs);
  }

  async expectHiDrakeWhatAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), timeoutMs);
  }

  async expectHiDrakeWhatAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), timeoutMs);
  }

  async expectHiDrakeWhatAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), timeoutMs);
  }

  async expectHiDrakeWhatAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), timeoutMs);
  }

  async expectHiDrakeWhatAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), timeoutMs);
  }

  async expectHiDrakeWhatAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre), count, timeoutMs);
  }

  async scrollHiDrakeWhatAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hiDrakeWhatAre));
  }

  async clickDrake(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.drake));
  }

  async doubleClickDrake(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.drake));
  }

  async longPressDrake(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.drake));
  }

  async expectDrakeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.drake), timeoutMs);
  }

  async expectDrakeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.drake), expected, timeoutMs);
  }

  async expectDrakeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.drake), substring, timeoutMs);
  }

  async expectDrakeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.drake), value, timeoutMs);
  }

  async expectDrakeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.drake), timeoutMs);
  }

  async expectDrakeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.drake), timeoutMs);
  }

  async expectDrakeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.drake), timeoutMs);
  }

  async expectDrakeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.drake), timeoutMs);
  }

  async expectDrakeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.drake), timeoutMs);
  }

  async expectDrakeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.drake), count, timeoutMs);
  }

  async scrollDrakeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.drake));
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

  async typeTextMuiInputBaseInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), value);
  }

  async expectMuiInputBaseInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), expected, timeoutMs);
  }

  async expectMuiInputBaseInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), substring, timeoutMs);
  }

  async expectMuiInputBaseInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), value, timeoutMs);
  }

  async expectMuiInputBaseInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), timeoutMs);
  }

  async expectMuiInputBaseInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput), count, timeoutMs);
  }

  async scrollMuiInputBaseInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.muiInputBaseInput));
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

  async clickAnnouncements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
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

  async longPressBtnAnnouncementCarouselPrev(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev));
  }

  async expectBtnAnnouncementCarouselPrevHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), expected, timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), substring, timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), value, timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), timeoutMs);
  }

  async expectBtnAnnouncementCarouselPrevCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev), count, timeoutMs);
  }

  async scrollBtnAnnouncementCarouselPrevIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.btnAnnouncementCarouselPrev));
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

  async clickFeatured(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.featured));
  }

  async doubleClickFeatured(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.featured));
  }

  async longPressFeatured(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.featured));
  }

  async expectFeaturedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.featured), timeoutMs);
  }

  async expectFeaturedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.featured), expected, timeoutMs);
  }

  async expectFeaturedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.featured), substring, timeoutMs);
  }

  async expectFeaturedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.featured), value, timeoutMs);
  }

  async expectFeaturedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.featured), timeoutMs);
  }

  async expectFeaturedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.featured), timeoutMs);
  }

  async expectFeaturedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.featured), timeoutMs);
  }

  async expectFeaturedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.featured), timeoutMs);
  }

  async expectFeaturedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.featured), timeoutMs);
  }

  async expectFeaturedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.featured), count, timeoutMs);
  }

  async scrollFeaturedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.featured));
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

  async clickAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ai));
  }

  async doubleClickAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ai));
  }

  async longPressAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ai));
  }

  async expectAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ai), timeoutMs);
  }

  async expectAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ai), expected, timeoutMs);
  }

  async expectAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ai), substring, timeoutMs);
  }

  async expectAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ai), value, timeoutMs);
  }

  async expectAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ai), timeoutMs);
  }

  async expectAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ai), timeoutMs);
  }

  async expectAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ai), timeoutMs);
  }

  async expectAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ai), timeoutMs);
  }

  async expectAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ai), timeoutMs);
  }

  async expectAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ai), count, timeoutMs);
  }

  async scrollAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ai));
  }

  async clickDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwary));
  }

  async doubleClickDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwary));
  }

  async longPressDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwary));
  }

  async expectDrakeTiwaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), expected, timeoutMs);
  }

  async expectDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), substring, timeoutMs);
  }

  async expectDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), value, timeoutMs);
  }

  async expectDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.drakeTiwary), count, timeoutMs);
  }

  async scrollDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwary));
  }

  async longPressShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.shareNews));
  }

  async expectShareNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.shareNews), expected, timeoutMs);
  }

  async expectShareNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.shareNews), substring, timeoutMs);
  }

  async expectShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.shareNews), value, timeoutMs);
  }

  async expectShareNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.shareNews), count, timeoutMs);
  }

  async scrollShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.shareNews));
  }

  async longPressUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.unsaveNews));
  }

  async expectUnsaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.unsaveNews), expected, timeoutMs);
  }

  async expectUnsaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.unsaveNews), substring, timeoutMs);
  }

  async expectUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.unsaveNews), value, timeoutMs);
  }

  async expectUnsaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.unsaveNews), count, timeoutMs);
  }

  async scrollUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.unsaveNews));
  }

  async doubleClickTakeTheNextStep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep));
  }

  async longPressTakeTheNextStep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), expected, timeoutMs);
  }

  async expectTakeTheNextStepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), substring, timeoutMs);
  }

  async expectTakeTheNextStepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), value, timeoutMs);
  }

  async expectTakeTheNextStepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep), count, timeoutMs);
  }

  async scrollTakeTheNextStepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep));
  }

  async clickTakeTheNextStep2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2));
  }

  async doubleClickTakeTheNextStep2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2));
  }

  async longPressTakeTheNextStep2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), expected, timeoutMs);
  }

  async expectTakeTheNextStep2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), substring, timeoutMs);
  }

  async expectTakeTheNextStep2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), value, timeoutMs);
  }

  async expectTakeTheNextStep2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2), count, timeoutMs);
  }

  async scrollTakeTheNextStep2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStep2));
  }

  async clickStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stacyCutrono));
  }

  async doubleClickStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stacyCutrono));
  }

  async longPressStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.stacyCutrono));
  }

  async expectStacyCutronoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), expected, timeoutMs);
  }

  async expectStacyCutronoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), substring, timeoutMs);
  }

  async expectStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), value, timeoutMs);
  }

  async expectStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.stacyCutrono), count, timeoutMs);
  }

  async scrollStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.stacyCutrono));
  }

  async longPressSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveNews));
  }

  async expectSaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.saveNews), expected, timeoutMs);
  }

  async expectSaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.saveNews), substring, timeoutMs);
  }

  async expectSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.saveNews), value, timeoutMs);
  }

  async expectSaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.saveNews), count, timeoutMs);
  }

  async scrollSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.saveNews));
  }

  async doubleClickAllEmployeeTownHall(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall));
  }

  async longPressAllEmployeeTownHall(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), value, timeoutMs);
  }

  async expectAllEmployeeTownHallEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHall));
  }

  async clickAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson));
  }

  async doubleClickAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson));
  }

  async longPressAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), expected, timeoutMs);
  }

  async expectAshleyAmersonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), substring, timeoutMs);
  }

  async expectAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), value, timeoutMs);
  }

  async expectAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson), count, timeoutMs);
  }

  async scrollAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ashleyAmerson));
  }

  async doubleClickCelebratingTheStrengthOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf));
  }

  async longPressCelebratingTheStrengthOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf));
  }

  async clickCelebratingTheStrengthOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2));
  }

  async doubleClickCelebratingTheStrengthOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2));
  }

  async longPressCelebratingTheStrengthOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOf2));
  }

  async clickChristopherKiklas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.christopherKiklas));
  }

  async doubleClickChristopherKiklas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.christopherKiklas));
  }

  async longPressChristopherKiklas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), expected, timeoutMs);
  }

  async expectChristopherKiklasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), substring, timeoutMs);
  }

  async expectChristopherKiklasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), value, timeoutMs);
  }

  async expectChristopherKiklasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.christopherKiklas), count, timeoutMs);
  }

  async scrollChristopherKiklasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.christopherKiklas));
  }

  async doubleClickPrideMonth2026Together(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together));
  }

  async longPressPrideMonth2026Together(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together));
  }

  async expectPrideMonth2026TogetherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), expected, timeoutMs);
  }

  async expectPrideMonth2026TogetherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), substring, timeoutMs);
  }

  async expectPrideMonth2026TogetherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), value, timeoutMs);
  }

  async expectPrideMonth2026TogetherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), timeoutMs);
  }

  async expectPrideMonth2026TogetherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together), count, timeoutMs);
  }

  async scrollPrideMonth2026TogetherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together));
  }

  async clickPrideMonth2026Together2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2));
  }

  async doubleClickPrideMonth2026Together2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2));
  }

  async longPressPrideMonth2026Together2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2));
  }

  async expectPrideMonth2026Together2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), expected, timeoutMs);
  }

  async expectPrideMonth2026Together2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), substring, timeoutMs);
  }

  async expectPrideMonth2026Together2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), value, timeoutMs);
  }

  async expectPrideMonth2026Together2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), timeoutMs);
  }

  async expectPrideMonth2026Together2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2), count, timeoutMs);
  }

  async scrollPrideMonth2026Together2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.prideMonth2026Together2));
  }

  async clickSequoyaFord(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.sequoyaFord));
  }

  async doubleClickSequoyaFord(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.sequoyaFord));
  }

  async longPressSequoyaFord(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.sequoyaFord));
  }

  async expectSequoyaFordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), expected, timeoutMs);
  }

  async expectSequoyaFordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), substring, timeoutMs);
  }

  async expectSequoyaFordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), value, timeoutMs);
  }

  async expectSequoyaFordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), timeoutMs);
  }

  async expectSequoyaFordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.sequoyaFord), count, timeoutMs);
  }

  async scrollSequoyaFordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.sequoyaFord));
  }

  async doubleClickGlobalImpactInAction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction));
  }

  async longPressGlobalImpactInAction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction));
  }

  async expectGlobalImpactInActionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), expected, timeoutMs);
  }

  async expectGlobalImpactInActionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), substring, timeoutMs);
  }

  async expectGlobalImpactInActionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), value, timeoutMs);
  }

  async expectGlobalImpactInActionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), timeoutMs);
  }

  async expectGlobalImpactInActionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction), count, timeoutMs);
  }

  async scrollGlobalImpactInActionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction));
  }

  async clickGlobalImpactInAction2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2));
  }

  async doubleClickGlobalImpactInAction2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2));
  }

  async longPressGlobalImpactInAction2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2));
  }

  async expectGlobalImpactInAction2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), expected, timeoutMs);
  }

  async expectGlobalImpactInAction2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), substring, timeoutMs);
  }

  async expectGlobalImpactInAction2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), value, timeoutMs);
  }

  async expectGlobalImpactInAction2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), timeoutMs);
  }

  async expectGlobalImpactInAction2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2), count, timeoutMs);
  }

  async scrollGlobalImpactInAction2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.globalImpactInAction2));
  }

  async clickSarahMarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.sarahMarks));
  }

  async doubleClickSarahMarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.sarahMarks));
  }

  async longPressSarahMarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.sarahMarks));
  }

  async expectSarahMarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.sarahMarks), expected, timeoutMs);
  }

  async expectSarahMarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.sarahMarks), substring, timeoutMs);
  }

  async expectSarahMarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.sarahMarks), value, timeoutMs);
  }

  async expectSarahMarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.sarahMarks), timeoutMs);
  }

  async expectSarahMarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.sarahMarks), count, timeoutMs);
  }

  async scrollSarahMarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.sarahMarks));
  }

  async doubleClickCelebratingOneYearOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf));
  }

  async longPressCelebratingOneYearOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf));
  }

  async expectCelebratingOneYearOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), expected, timeoutMs);
  }

  async expectCelebratingOneYearOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), substring, timeoutMs);
  }

  async expectCelebratingOneYearOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), value, timeoutMs);
  }

  async expectCelebratingOneYearOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), timeoutMs);
  }

  async expectCelebratingOneYearOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf), count, timeoutMs);
  }

  async scrollCelebratingOneYearOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf));
  }

  async clickCelebratingOneYearOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2));
  }

  async doubleClickCelebratingOneYearOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2));
  }

  async longPressCelebratingOneYearOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2));
  }

  async expectCelebratingOneYearOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), expected, timeoutMs);
  }

  async expectCelebratingOneYearOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), substring, timeoutMs);
  }

  async expectCelebratingOneYearOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), value, timeoutMs);
  }

  async expectCelebratingOneYearOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), timeoutMs);
  }

  async expectCelebratingOneYearOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2), count, timeoutMs);
  }

  async scrollCelebratingOneYearOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingOneYearOf2));
  }

  async clickBrianBower(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.brianBower));
  }

  async doubleClickBrianBower(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.brianBower));
  }

  async longPressBrianBower(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.brianBower));
  }

  async expectBrianBowerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.brianBower), expected, timeoutMs);
  }

  async expectBrianBowerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.brianBower), substring, timeoutMs);
  }

  async expectBrianBowerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.brianBower), value, timeoutMs);
  }

  async expectBrianBowerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.brianBower), timeoutMs);
  }

  async expectBrianBowerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.brianBower), count, timeoutMs);
  }

  async scrollBrianBowerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.brianBower));
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

  async longPressLatestInternalNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestInternalNews));
  }

  async expectLatestInternalNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), timeoutMs);
  }

  async expectLatestInternalNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), expected, timeoutMs);
  }

  async expectLatestInternalNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), substring, timeoutMs);
  }

  async expectLatestInternalNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), value, timeoutMs);
  }

  async expectLatestInternalNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), timeoutMs);
  }

  async expectLatestInternalNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), timeoutMs);
  }

  async expectLatestInternalNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), timeoutMs);
  }

  async expectLatestInternalNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), timeoutMs);
  }

  async expectLatestInternalNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), timeoutMs);
  }

  async expectLatestInternalNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.latestInternalNews), count, timeoutMs);
  }

  async scrollLatestInternalNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestInternalNews));
  }

  async longPressUkgAndIndustryNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews));
  }

  async expectUkgAndIndustryNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), timeoutMs);
  }

  async expectUkgAndIndustryNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), expected, timeoutMs);
  }

  async expectUkgAndIndustryNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), substring, timeoutMs);
  }

  async expectUkgAndIndustryNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), value, timeoutMs);
  }

  async expectUkgAndIndustryNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), timeoutMs);
  }

  async expectUkgAndIndustryNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), timeoutMs);
  }

  async expectUkgAndIndustryNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), timeoutMs);
  }

  async expectUkgAndIndustryNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), timeoutMs);
  }

  async expectUkgAndIndustryNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), timeoutMs);
  }

  async expectUkgAndIndustryNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews), count, timeoutMs);
  }

  async scrollUkgAndIndustryNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgAndIndustryNews));
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

  async doubleClickProductEngineeringGlobal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal));
  }

  async longPressProductEngineeringGlobal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal));
  }

  async expectProductEngineeringGlobalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), expected, timeoutMs);
  }

  async expectProductEngineeringGlobalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), substring, timeoutMs);
  }

  async expectProductEngineeringGlobalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), value, timeoutMs);
  }

  async expectProductEngineeringGlobalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), timeoutMs);
  }

  async expectProductEngineeringGlobalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal), count, timeoutMs);
  }

  async scrollProductEngineeringGlobalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringGlobal));
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

  async doubleClickBaselineImagesRequiredFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor));
  }

  async longPressBaselineImagesRequiredFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor));
  }

  async expectBaselineImagesRequiredForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), expected, timeoutMs);
  }

  async expectBaselineImagesRequiredForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), substring, timeoutMs);
  }

  async expectBaselineImagesRequiredForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), value, timeoutMs);
  }

  async expectBaselineImagesRequiredForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), timeoutMs);
  }

  async expectBaselineImagesRequiredForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor), count, timeoutMs);
  }

  async scrollBaselineImagesRequiredForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.baselineImagesRequiredFor));
  }

  async doubleClickUkgRiseEarlyCareer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer));
  }

  async longPressUkgRiseEarlyCareer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer));
  }

  async expectUkgRiseEarlyCareerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), expected, timeoutMs);
  }

  async expectUkgRiseEarlyCareerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), substring, timeoutMs);
  }

  async expectUkgRiseEarlyCareerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), value, timeoutMs);
  }

  async expectUkgRiseEarlyCareerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), timeoutMs);
  }

  async expectUkgRiseEarlyCareerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer), count, timeoutMs);
  }

  async scrollUkgRiseEarlyCareerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareer));
  }

  async doubleClickPeopleBelongingImpact(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact));
  }

  async longPressPeopleBelongingImpact(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact));
  }

  async expectPeopleBelongingImpactHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), expected, timeoutMs);
  }

  async expectPeopleBelongingImpactContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), substring, timeoutMs);
  }

  async expectPeopleBelongingImpactValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), value, timeoutMs);
  }

  async expectPeopleBelongingImpactEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), timeoutMs);
  }

  async expectPeopleBelongingImpactCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact), count, timeoutMs);
  }

  async scrollPeopleBelongingImpactIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBelongingImpact));
  }

  async doubleClickUkgRiseEarlyCareerLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink));
  }

  async longPressUkgRiseEarlyCareerLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink));
  }

  async expectUkgRiseEarlyCareerLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), expected, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), substring, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), value, timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), timeoutMs);
  }

  async expectUkgRiseEarlyCareerLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink), count, timeoutMs);
  }

  async scrollUkgRiseEarlyCareerLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseEarlyCareerLink));
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

  async doubleClickUkgNucleusRoi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi));
  }

  async longPressUkgNucleusRoi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi));
  }

  async expectUkgNucleusRoiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), expected, timeoutMs);
  }

  async expectUkgNucleusRoiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), substring, timeoutMs);
  }

  async expectUkgNucleusRoiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), value, timeoutMs);
  }

  async expectUkgNucleusRoiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), timeoutMs);
  }

  async expectUkgNucleusRoiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi), count, timeoutMs);
  }

  async scrollUkgNucleusRoiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgNucleusRoi));
  }

  async doubleClickGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.gtmMarketing));
  }

  async longPressGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.gtmMarketing));
  }

  async expectGtmMarketingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), expected, timeoutMs);
  }

  async expectGtmMarketingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), substring, timeoutMs);
  }

  async expectGtmMarketingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), value, timeoutMs);
  }

  async expectGtmMarketingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.gtmMarketing), count, timeoutMs);
  }

  async scrollGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.gtmMarketing));
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

  async doubleClickUkgCommonsMobileApp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp));
  }

  async longPressUkgCommonsMobileApp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp));
  }

  async expectUkgCommonsMobileAppHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), expected, timeoutMs);
  }

  async expectUkgCommonsMobileAppContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), substring, timeoutMs);
  }

  async expectUkgCommonsMobileAppValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), value, timeoutMs);
  }

  async expectUkgCommonsMobileAppEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), timeoutMs);
  }

  async expectUkgCommonsMobileAppCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp), count, timeoutMs);
  }

  async scrollUkgCommonsMobileAppIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsMobileApp));
  }

  async doubleClickCommsEmployeeCommunications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications));
  }

  async longPressCommsEmployeeCommunications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications));
  }

  async expectCommsEmployeeCommunicationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), expected, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), substring, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), value, timeoutMs);
  }

  async expectCommsEmployeeCommunicationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), timeoutMs);
  }

  async expectCommsEmployeeCommunicationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications), count, timeoutMs);
  }

  async scrollCommsEmployeeCommunicationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsEmployeeCommunications));
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

  async doubleClickPeopleUkgAdapt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt));
  }

  async longPressPeopleUkgAdapt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt));
  }

  async expectPeopleUkgAdaptHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), expected, timeoutMs);
  }

  async expectPeopleUkgAdaptContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), substring, timeoutMs);
  }

  async expectPeopleUkgAdaptValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), value, timeoutMs);
  }

  async expectPeopleUkgAdaptEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), timeoutMs);
  }

  async expectPeopleUkgAdaptCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt), count, timeoutMs);
  }

  async scrollPeopleUkgAdaptIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgAdapt));
  }

  async doubleClickPhotoOfTheWeek(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek));
  }

  async longPressPhotoOfTheWeek(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek));
  }

  async expectPhotoOfTheWeekHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), value, timeoutMs);
  }

  async expectPhotoOfTheWeekEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), timeoutMs);
  }

  async expectPhotoOfTheWeekCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek));
  }

  async doubleClickInsideUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.insideUkg));
  }

  async longPressInsideUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.insideUkg));
  }

  async expectInsideUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.insideUkg), expected, timeoutMs);
  }

  async expectInsideUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.insideUkg), substring, timeoutMs);
  }

  async expectInsideUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.insideUkg), value, timeoutMs);
  }

  async expectInsideUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.insideUkg), timeoutMs);
  }

  async expectInsideUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.insideUkg), count, timeoutMs);
  }

  async scrollInsideUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.insideUkg));
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

  async doubleClickDoNotEngageWith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith));
  }

  async longPressDoNotEngageWith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith));
  }

  async expectDoNotEngageWithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), expected, timeoutMs);
  }

  async expectDoNotEngageWithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), substring, timeoutMs);
  }

  async expectDoNotEngageWithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), value, timeoutMs);
  }

  async expectDoNotEngageWithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), timeoutMs);
  }

  async expectDoNotEngageWithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith), count, timeoutMs);
  }

  async scrollDoNotEngageWithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWith));
  }

  async doubleClickDoNotEngageWithLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink));
  }

  async longPressDoNotEngageWithLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink));
  }

  async expectDoNotEngageWithLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), expected, timeoutMs);
  }

  async expectDoNotEngageWithLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), substring, timeoutMs);
  }

  async expectDoNotEngageWithLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), value, timeoutMs);
  }

  async expectDoNotEngageWithLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), timeoutMs);
  }

  async expectDoNotEngageWithLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink), count, timeoutMs);
  }

  async scrollDoNotEngageWithLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.doNotEngageWithLink));
  }

  async doubleClickThankYouForParticipating(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating));
  }

  async longPressThankYouForParticipating(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating));
  }

  async expectThankYouForParticipatingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), expected, timeoutMs);
  }

  async expectThankYouForParticipatingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), substring, timeoutMs);
  }

  async expectThankYouForParticipatingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), value, timeoutMs);
  }

  async expectThankYouForParticipatingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), timeoutMs);
  }

  async expectThankYouForParticipatingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating), count, timeoutMs);
  }

  async scrollThankYouForParticipatingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.thankYouForParticipating));
  }

  async doubleClickPeopleEmployeeExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience));
  }

  async longPressPeopleEmployeeExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience));
  }

  async expectPeopleEmployeeExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), expected, timeoutMs);
  }

  async expectPeopleEmployeeExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), substring, timeoutMs);
  }

  async expectPeopleEmployeeExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), value, timeoutMs);
  }

  async expectPeopleEmployeeExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), timeoutMs);
  }

  async expectPeopleEmployeeExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience), count, timeoutMs);
  }

  async scrollPeopleEmployeeExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleEmployeeExperience));
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

  async doubleClickBigWinFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinFor));
  }

  async longPressBigWinFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinFor));
  }

  async expectBigWinForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.bigWinFor), expected, timeoutMs);
  }

  async expectBigWinForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.bigWinFor), substring, timeoutMs);
  }

  async expectBigWinForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.bigWinFor), value, timeoutMs);
  }

  async expectBigWinForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.bigWinFor), timeoutMs);
  }

  async expectBigWinForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.bigWinFor), count, timeoutMs);
  }

  async scrollBigWinForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.bigWinFor));
  }

  async doubleClickCommsAnalystRelations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations));
  }

  async longPressCommsAnalystRelations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations));
  }

  async expectCommsAnalystRelationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), expected, timeoutMs);
  }

  async expectCommsAnalystRelationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), substring, timeoutMs);
  }

  async expectCommsAnalystRelationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), value, timeoutMs);
  }

  async expectCommsAnalystRelationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), timeoutMs);
  }

  async expectCommsAnalystRelationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations), count, timeoutMs);
  }

  async scrollCommsAnalystRelationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.commsAnalystRelations));
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

  async doubleClickTuneInTodayUkgAd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd));
  }

  async longPressTuneInTodayUkgAd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd));
  }

  async expectTuneInTodayUkgAdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), expected, timeoutMs);
  }

  async expectTuneInTodayUkgAdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), substring, timeoutMs);
  }

  async expectTuneInTodayUkgAdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), value, timeoutMs);
  }

  async expectTuneInTodayUkgAdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), timeoutMs);
  }

  async expectTuneInTodayUkgAdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd), count, timeoutMs);
  }

  async scrollTuneInTodayUkgAdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.tuneInTodayUkgAd));
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

  async doubleClickClaudeEnterpriseAccessFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor));
  }

  async longPressClaudeEnterpriseAccessFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor));
  }

  async expectClaudeEnterpriseAccessForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), expected, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), substring, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), value, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor), count, timeoutMs);
  }

  async scrollClaudeEnterpriseAccessForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessFor));
  }

  async doubleClickAiHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiHub));
  }

  async longPressAiHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiHub));
  }

  async expectAiHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiHub), expected, timeoutMs);
  }

  async expectAiHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiHub), substring, timeoutMs);
  }

  async expectAiHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiHub), value, timeoutMs);
  }

  async expectAiHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiHub), timeoutMs);
  }

  async expectAiHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiHub), count, timeoutMs);
  }

  async scrollAiHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiHub));
  }

  async doubleClickClaudeEnterpriseAccessForLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink));
  }

  async longPressClaudeEnterpriseAccessForLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink));
  }

  async expectClaudeEnterpriseAccessForLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), expected, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), substring, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), value, timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), timeoutMs);
  }

  async expectClaudeEnterpriseAccessForLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink), count, timeoutMs);
  }

  async scrollClaudeEnterpriseAccessForLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.claudeEnterpriseAccessForLink));
  }

  async doubleClickNewProcessForChatGPT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT));
  }

  async longPressNewProcessForChatGPT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT));
  }

  async expectNewProcessForChatGPTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), expected, timeoutMs);
  }

  async expectNewProcessForChatGPTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), substring, timeoutMs);
  }

  async expectNewProcessForChatGPTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), value, timeoutMs);
  }

  async expectNewProcessForChatGPTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), timeoutMs);
  }

  async expectNewProcessForChatGPTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT), count, timeoutMs);
  }

  async scrollNewProcessForChatGPTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPT));
  }

  async doubleClickNewProcessForChatGPTLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink));
  }

  async longPressNewProcessForChatGPTLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink));
  }

  async expectNewProcessForChatGPTLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), expected, timeoutMs);
  }

  async expectNewProcessForChatGPTLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), substring, timeoutMs);
  }

  async expectNewProcessForChatGPTLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), value, timeoutMs);
  }

  async expectNewProcessForChatGPTLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), timeoutMs);
  }

  async expectNewProcessForChatGPTLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink), count, timeoutMs);
  }

  async scrollNewProcessForChatGPTLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newProcessForChatGPTLink));
  }

  async doubleClickPurposeLeadershipJourney(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney));
  }

  async longPressPurposeLeadershipJourney(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney));
  }

  async expectPurposeLeadershipJourneyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), expected, timeoutMs);
  }

  async expectPurposeLeadershipJourneyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), substring, timeoutMs);
  }

  async expectPurposeLeadershipJourneyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), value, timeoutMs);
  }

  async expectPurposeLeadershipJourneyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), timeoutMs);
  }

  async expectPurposeLeadershipJourneyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney), count, timeoutMs);
  }

  async scrollPurposeLeadershipJourneyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourney));
  }

  async doubleClickCx(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.cx));
  }

  async longPressCx(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.cx));
  }

  async expectCxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.cx), timeoutMs);
  }

  async expectCxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.cx), expected, timeoutMs);
  }

  async expectCxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.cx), substring, timeoutMs);
  }

  async expectCxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.cx), value, timeoutMs);
  }

  async expectCxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.cx), timeoutMs);
  }

  async expectCxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.cx), timeoutMs);
  }

  async expectCxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.cx), timeoutMs);
  }

  async expectCxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.cx), timeoutMs);
  }

  async expectCxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.cx), timeoutMs);
  }

  async expectCxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.cx), count, timeoutMs);
  }

  async scrollCxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.cx));
  }

  async doubleClickPurposeLeadershipJourneyLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink));
  }

  async longPressPurposeLeadershipJourneyLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink));
  }

  async expectPurposeLeadershipJourneyLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), expected, timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), substring, timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), value, timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), timeoutMs);
  }

  async expectPurposeLeadershipJourneyLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink), count, timeoutMs);
  }

  async scrollPurposeLeadershipJourneyLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.purposeLeadershipJourneyLink));
  }

  async doubleClickPhotoOfTheWeek2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2));
  }

  async longPressPhotoOfTheWeek2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2));
  }

  async expectPhotoOfTheWeek2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), timeoutMs);
  }

  async expectPhotoOfTheWeek2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), expected, timeoutMs);
  }

  async expectPhotoOfTheWeek2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), substring, timeoutMs);
  }

  async expectPhotoOfTheWeek2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), value, timeoutMs);
  }

  async expectPhotoOfTheWeek2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), timeoutMs);
  }

  async expectPhotoOfTheWeek2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), timeoutMs);
  }

  async expectPhotoOfTheWeek2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), timeoutMs);
  }

  async expectPhotoOfTheWeek2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), timeoutMs);
  }

  async expectPhotoOfTheWeek2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), timeoutMs);
  }

  async expectPhotoOfTheWeek2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2), count, timeoutMs);
  }

  async scrollPhotoOfTheWeek2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeek2));
  }

  async doubleClickPhotoOfTheWeekPhotoOfTheWeekUkgHuddle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle));
  }

  async longPressPhotoOfTheWeekPhotoOfTheWeekUkgHuddle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle));
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), value, timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), timeoutMs);
  }

  async expectPhotoOfTheWeekPhotoOfTheWeekUkgHuddleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekPhotoOfTheWeekUkgHuddleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.photoOfTheWeekPhotoOfTheWeekUkgHuddle));
  }

  async doubleClickHowTheNewExperience(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience));
  }

  async longPressHowTheNewExperience(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience));
  }

  async expectHowTheNewExperienceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), expected, timeoutMs);
  }

  async expectHowTheNewExperienceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), substring, timeoutMs);
  }

  async expectHowTheNewExperienceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), value, timeoutMs);
  }

  async expectHowTheNewExperienceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), timeoutMs);
  }

  async expectHowTheNewExperienceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience), count, timeoutMs);
  }

  async scrollHowTheNewExperienceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperience));
  }

  async doubleClickProductEngineeringProduct(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct));
  }

  async longPressProductEngineeringProduct(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct));
  }

  async expectProductEngineeringProductHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), expected, timeoutMs);
  }

  async expectProductEngineeringProductContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), substring, timeoutMs);
  }

  async expectProductEngineeringProductValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), value, timeoutMs);
  }

  async expectProductEngineeringProductEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), timeoutMs);
  }

  async expectProductEngineeringProductCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct), count, timeoutMs);
  }

  async scrollProductEngineeringProductIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.productEngineeringProduct));
  }

  async doubleClickHowTheNewExperienceLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink));
  }

  async longPressHowTheNewExperienceLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink));
  }

  async expectHowTheNewExperienceLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), timeoutMs);
  }

  async expectHowTheNewExperienceLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), expected, timeoutMs);
  }

  async expectHowTheNewExperienceLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), substring, timeoutMs);
  }

  async expectHowTheNewExperienceLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), value, timeoutMs);
  }

  async expectHowTheNewExperienceLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), timeoutMs);
  }

  async expectHowTheNewExperienceLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), timeoutMs);
  }

  async expectHowTheNewExperienceLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), timeoutMs);
  }

  async expectHowTheNewExperienceLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), timeoutMs);
  }

  async expectHowTheNewExperienceLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), timeoutMs);
  }

  async expectHowTheNewExperienceLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink), count, timeoutMs);
  }

  async scrollHowTheNewExperienceLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.howTheNewExperienceLink));
  }

  async doubleClickThatSAWrapUkgS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS));
  }

  async longPressThatSAWrapUkgS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS));
  }

  async expectThatSAWrapUkgSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), expected, timeoutMs);
  }

  async expectThatSAWrapUkgSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), substring, timeoutMs);
  }

  async expectThatSAWrapUkgSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), value, timeoutMs);
  }

  async expectThatSAWrapUkgSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), timeoutMs);
  }

  async expectThatSAWrapUkgSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS), count, timeoutMs);
  }

  async scrollThatSAWrapUkgSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgS));
  }

  async doubleClickThatSAWrapUkgSLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink));
  }

  async longPressThatSAWrapUkgSLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink));
  }

  async expectThatSAWrapUkgSLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), timeoutMs);
  }

  async expectThatSAWrapUkgSLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), expected, timeoutMs);
  }

  async expectThatSAWrapUkgSLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), substring, timeoutMs);
  }

  async expectThatSAWrapUkgSLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), value, timeoutMs);
  }

  async expectThatSAWrapUkgSLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), timeoutMs);
  }

  async expectThatSAWrapUkgSLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), timeoutMs);
  }

  async expectThatSAWrapUkgSLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), timeoutMs);
  }

  async expectThatSAWrapUkgSLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), timeoutMs);
  }

  async expectThatSAWrapUkgSLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), timeoutMs);
  }

  async expectThatSAWrapUkgSLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink), count, timeoutMs);
  }

  async scrollThatSAWrapUkgSLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.thatSAWrapUkgSLink));
  }

  async doubleClickWhatSNewOnUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg));
  }

  async longPressWhatSNewOnUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg));
  }

  async expectWhatSNewOnUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), expected, timeoutMs);
  }

  async expectWhatSNewOnUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), substring, timeoutMs);
  }

  async expectWhatSNewOnUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), value, timeoutMs);
  }

  async expectWhatSNewOnUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), timeoutMs);
  }

  async expectWhatSNewOnUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg), count, timeoutMs);
  }

  async scrollWhatSNewOnUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkg));
  }

  async doubleClickWhatSNewOnUkgLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink));
  }

  async longPressWhatSNewOnUkgLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink));
  }

  async expectWhatSNewOnUkgLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), timeoutMs);
  }

  async expectWhatSNewOnUkgLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), expected, timeoutMs);
  }

  async expectWhatSNewOnUkgLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), substring, timeoutMs);
  }

  async expectWhatSNewOnUkgLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), value, timeoutMs);
  }

  async expectWhatSNewOnUkgLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), timeoutMs);
  }

  async expectWhatSNewOnUkgLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), timeoutMs);
  }

  async expectWhatSNewOnUkgLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), timeoutMs);
  }

  async expectWhatSNewOnUkgLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), timeoutMs);
  }

  async expectWhatSNewOnUkgLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), timeoutMs);
  }

  async expectWhatSNewOnUkgLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink), count, timeoutMs);
  }

  async scrollWhatSNewOnUkgLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.whatSNewOnUkgLink));
  }

  async clickUpcomingEvents(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.upcomingEvents));
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

  async doubleClickPeopleBenefits(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefits));
  }

  async longPressPeopleBenefits(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefits));
  }

  async expectPeopleBenefitsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), timeoutMs);
  }

  async expectPeopleBenefitsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), expected, timeoutMs);
  }

  async expectPeopleBenefitsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), substring, timeoutMs);
  }

  async expectPeopleBenefitsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), value, timeoutMs);
  }

  async expectPeopleBenefitsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), timeoutMs);
  }

  async expectPeopleBenefitsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), timeoutMs);
  }

  async expectPeopleBenefitsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), timeoutMs);
  }

  async expectPeopleBenefitsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), timeoutMs);
  }

  async expectPeopleBenefitsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), timeoutMs);
  }

  async expectPeopleBenefitsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleBenefits), count, timeoutMs);
  }

  async scrollPeopleBenefitsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleBenefits));
  }

  async clickCoreMore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.coreMore));
  }

  async doubleClickCoreMore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.coreMore));
  }

  async longPressCoreMore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.coreMore));
  }

  async expectCoreMoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.coreMore), timeoutMs);
  }

  async expectCoreMoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.coreMore), expected, timeoutMs);
  }

  async expectCoreMoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.coreMore), substring, timeoutMs);
  }

  async expectCoreMoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.coreMore), value, timeoutMs);
  }

  async expectCoreMoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.coreMore), timeoutMs);
  }

  async expectCoreMoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.coreMore), timeoutMs);
  }

  async expectCoreMoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.coreMore), timeoutMs);
  }

  async expectCoreMoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.coreMore), timeoutMs);
  }

  async expectCoreMoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.coreMore), timeoutMs);
  }

  async expectCoreMoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.coreMore), count, timeoutMs);
  }

  async scrollCoreMoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.coreMore));
  }

  async doubleClickLocation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.location));
  }

  async longPressLocation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.location));
  }

  async expectLocationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.location), timeoutMs);
  }

  async expectLocationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.location), expected, timeoutMs);
  }

  async expectLocationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.location), substring, timeoutMs);
  }

  async expectLocationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.location), value, timeoutMs);
  }

  async expectLocationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.location), timeoutMs);
  }

  async expectLocationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.location), timeoutMs);
  }

  async expectLocationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.location), timeoutMs);
  }

  async expectLocationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.location), timeoutMs);
  }

  async expectLocationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.location), timeoutMs);
  }

  async expectLocationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.location), count, timeoutMs);
  }

  async scrollLocationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.location));
  }

  async clickVirtual(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtual));
  }

  async doubleClickVirtual(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtual));
  }

  async longPressVirtual(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtual));
  }

  async expectVirtualHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.virtual), timeoutMs);
  }

  async expectVirtualText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.virtual), expected, timeoutMs);
  }

  async expectVirtualContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.virtual), substring, timeoutMs);
  }

  async expectVirtualValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.virtual), value, timeoutMs);
  }

  async expectVirtualEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.virtual), timeoutMs);
  }

  async expectVirtualDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.virtual), timeoutMs);
  }

  async expectVirtualChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.virtual), timeoutMs);
  }

  async expectVirtualUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.virtual), timeoutMs);
  }

  async expectVirtualFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.virtual), timeoutMs);
  }

  async expectVirtualCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.virtual), count, timeoutMs);
  }

  async scrollVirtualIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtual));
  }

  async doubleClickPeopleUkgRise(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise));
  }

  async longPressPeopleUkgRise(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise));
  }

  async expectPeopleUkgRiseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), timeoutMs);
  }

  async expectPeopleUkgRiseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), expected, timeoutMs);
  }

  async expectPeopleUkgRiseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), substring, timeoutMs);
  }

  async expectPeopleUkgRiseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), value, timeoutMs);
  }

  async expectPeopleUkgRiseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), timeoutMs);
  }

  async expectPeopleUkgRiseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), timeoutMs);
  }

  async expectPeopleUkgRiseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), timeoutMs);
  }

  async expectPeopleUkgRiseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), timeoutMs);
  }

  async expectPeopleUkgRiseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), timeoutMs);
  }

  async expectPeopleUkgRiseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise), count, timeoutMs);
  }

  async scrollPeopleUkgRiseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgRise));
  }

  async clickUkgRiseHeritage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage));
  }

  async doubleClickUkgRiseHeritage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage));
  }

  async longPressUkgRiseHeritage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage));
  }

  async expectUkgRiseHeritageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), timeoutMs);
  }

  async expectUkgRiseHeritageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), expected, timeoutMs);
  }

  async expectUkgRiseHeritageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), substring, timeoutMs);
  }

  async expectUkgRiseHeritageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), value, timeoutMs);
  }

  async expectUkgRiseHeritageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), timeoutMs);
  }

  async expectUkgRiseHeritageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), timeoutMs);
  }

  async expectUkgRiseHeritageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), timeoutMs);
  }

  async expectUkgRiseHeritageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), timeoutMs);
  }

  async expectUkgRiseHeritageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), timeoutMs);
  }

  async expectUkgRiseHeritageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage), count, timeoutMs);
  }

  async scrollUkgRiseHeritageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseHeritage));
  }

  async clickVirtualZoomMeeting(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting));
  }

  async doubleClickVirtualZoomMeeting(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting));
  }

  async longPressVirtualZoomMeeting(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting));
  }

  async expectVirtualZoomMeetingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), timeoutMs);
  }

  async expectVirtualZoomMeetingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), expected, timeoutMs);
  }

  async expectVirtualZoomMeetingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), substring, timeoutMs);
  }

  async expectVirtualZoomMeetingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), value, timeoutMs);
  }

  async expectVirtualZoomMeetingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), timeoutMs);
  }

  async expectVirtualZoomMeetingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), timeoutMs);
  }

  async expectVirtualZoomMeetingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), timeoutMs);
  }

  async expectVirtualZoomMeetingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), timeoutMs);
  }

  async expectVirtualZoomMeetingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), timeoutMs);
  }

  async expectVirtualZoomMeetingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting), count, timeoutMs);
  }

  async scrollVirtualZoomMeetingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoomMeeting));
  }

  async clickAskMeAnythingAbout(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout));
  }

  async doubleClickAskMeAnythingAbout(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout));
  }

  async longPressAskMeAnythingAbout(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout));
  }

  async expectAskMeAnythingAboutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), timeoutMs);
  }

  async expectAskMeAnythingAboutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), expected, timeoutMs);
  }

  async expectAskMeAnythingAboutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), substring, timeoutMs);
  }

  async expectAskMeAnythingAboutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), value, timeoutMs);
  }

  async expectAskMeAnythingAboutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), timeoutMs);
  }

  async expectAskMeAnythingAboutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), timeoutMs);
  }

  async expectAskMeAnythingAboutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), timeoutMs);
  }

  async expectAskMeAnythingAboutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), timeoutMs);
  }

  async expectAskMeAnythingAboutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), timeoutMs);
  }

  async expectAskMeAnythingAboutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout), count, timeoutMs);
  }

  async scrollAskMeAnythingAboutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout));
  }

  async longPressAddToCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.addToCalendar));
  }

  async expectAddToCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.addToCalendar), timeoutMs);
  }

  async expectAddToCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.addToCalendar), expected, timeoutMs);
  }

  async expectAddToCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.addToCalendar), substring, timeoutMs);
  }

  async expectAddToCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.addToCalendar), value, timeoutMs);
  }

  async expectAddToCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.addToCalendar), timeoutMs);
  }

  async expectAddToCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.addToCalendar), timeoutMs);
  }

  async expectAddToCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.addToCalendar), timeoutMs);
  }

  async expectAddToCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.addToCalendar), timeoutMs);
  }

  async expectAddToCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.addToCalendar), timeoutMs);
  }

  async expectAddToCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.addToCalendar), count, timeoutMs);
  }

  async scrollAddToCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.addToCalendar));
  }

  async clickStretchRelax(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelax));
  }

  async doubleClickStretchRelax(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelax));
  }

  async longPressStretchRelax(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelax));
  }

  async expectStretchRelaxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.stretchRelax), timeoutMs);
  }

  async expectStretchRelaxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.stretchRelax), expected, timeoutMs);
  }

  async expectStretchRelaxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.stretchRelax), substring, timeoutMs);
  }

  async expectStretchRelaxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.stretchRelax), value, timeoutMs);
  }

  async expectStretchRelaxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.stretchRelax), timeoutMs);
  }

  async expectStretchRelaxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.stretchRelax), timeoutMs);
  }

  async expectStretchRelaxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.stretchRelax), timeoutMs);
  }

  async expectStretchRelaxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.stretchRelax), timeoutMs);
  }

  async expectStretchRelaxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.stretchRelax), timeoutMs);
  }

  async expectStretchRelaxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.stretchRelax), count, timeoutMs);
  }

  async scrollStretchRelaxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.stretchRelax));
  }

  async clickAskMeAnythingAbout2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2));
  }

  async doubleClickAskMeAnythingAbout2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2));
  }

  async longPressAskMeAnythingAbout2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2));
  }

  async expectAskMeAnythingAbout2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), timeoutMs);
  }

  async expectAskMeAnythingAbout2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), expected, timeoutMs);
  }

  async expectAskMeAnythingAbout2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), substring, timeoutMs);
  }

  async expectAskMeAnythingAbout2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), value, timeoutMs);
  }

  async expectAskMeAnythingAbout2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), timeoutMs);
  }

  async expectAskMeAnythingAbout2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), timeoutMs);
  }

  async expectAskMeAnythingAbout2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), timeoutMs);
  }

  async expectAskMeAnythingAbout2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), timeoutMs);
  }

  async expectAskMeAnythingAbout2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), timeoutMs);
  }

  async expectAskMeAnythingAbout2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2), count, timeoutMs);
  }

  async scrollAskMeAnythingAbout2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.askMeAnythingAbout2));
  }

  async doubleClickPeopleUkgUnidos(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos));
  }

  async longPressPeopleUkgUnidos(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos));
  }

  async expectPeopleUkgUnidosHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), timeoutMs);
  }

  async expectPeopleUkgUnidosText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), expected, timeoutMs);
  }

  async expectPeopleUkgUnidosContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), substring, timeoutMs);
  }

  async expectPeopleUkgUnidosValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), value, timeoutMs);
  }

  async expectPeopleUkgUnidosEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), timeoutMs);
  }

  async expectPeopleUkgUnidosDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), timeoutMs);
  }

  async expectPeopleUkgUnidosChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), timeoutMs);
  }

  async expectPeopleUkgUnidosUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), timeoutMs);
  }

  async expectPeopleUkgUnidosFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), timeoutMs);
  }

  async expectPeopleUkgUnidosCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos), count, timeoutMs);
  }

  async scrollPeopleUkgUnidosIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgUnidos));
  }

  async clickUkgUnidosWorldCup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup));
  }

  async doubleClickUkgUnidosWorldCup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup));
  }

  async longPressUkgUnidosWorldCup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup));
  }

  async expectUkgUnidosWorldCupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), timeoutMs);
  }

  async expectUkgUnidosWorldCupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), expected, timeoutMs);
  }

  async expectUkgUnidosWorldCupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), substring, timeoutMs);
  }

  async expectUkgUnidosWorldCupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), value, timeoutMs);
  }

  async expectUkgUnidosWorldCupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), timeoutMs);
  }

  async expectUkgUnidosWorldCupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), timeoutMs);
  }

  async expectUkgUnidosWorldCupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), timeoutMs);
  }

  async expectUkgUnidosWorldCupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), timeoutMs);
  }

  async expectUkgUnidosWorldCupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), timeoutMs);
  }

  async expectUkgUnidosWorldCupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup), count, timeoutMs);
  }

  async scrollUkgUnidosWorldCupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup));
  }

  async clickVirtualInterviewTrainingWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith));
  }

  async doubleClickVirtualInterviewTrainingWith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith));
  }

  async longPressVirtualInterviewTrainingWith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith));
  }

  async expectVirtualInterviewTrainingWithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), timeoutMs);
  }

  async expectVirtualInterviewTrainingWithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), expected, timeoutMs);
  }

  async expectVirtualInterviewTrainingWithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), substring, timeoutMs);
  }

  async expectVirtualInterviewTrainingWithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), value, timeoutMs);
  }

  async expectVirtualInterviewTrainingWithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), timeoutMs);
  }

  async expectVirtualInterviewTrainingWithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), timeoutMs);
  }

  async expectVirtualInterviewTrainingWithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), timeoutMs);
  }

  async expectVirtualInterviewTrainingWithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), timeoutMs);
  }

  async expectVirtualInterviewTrainingWithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), timeoutMs);
  }

  async expectVirtualInterviewTrainingWithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith), count, timeoutMs);
  }

  async scrollVirtualInterviewTrainingWithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualInterviewTrainingWith));
  }

  async clickCareerPanelInformational(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational));
  }

  async doubleClickCareerPanelInformational(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational));
  }

  async longPressCareerPanelInformational(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational));
  }

  async expectCareerPanelInformationalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), timeoutMs);
  }

  async expectCareerPanelInformationalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), expected, timeoutMs);
  }

  async expectCareerPanelInformationalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), substring, timeoutMs);
  }

  async expectCareerPanelInformationalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), value, timeoutMs);
  }

  async expectCareerPanelInformationalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), timeoutMs);
  }

  async expectCareerPanelInformationalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), timeoutMs);
  }

  async expectCareerPanelInformationalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), timeoutMs);
  }

  async expectCareerPanelInformationalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), timeoutMs);
  }

  async expectCareerPanelInformationalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), timeoutMs);
  }

  async expectCareerPanelInformationalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational), count, timeoutMs);
  }

  async scrollCareerPanelInformationalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.careerPanelInformational));
  }

  async clickUkgUnidosWorldCup3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3));
  }

  async doubleClickUkgUnidosWorldCup3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3));
  }

  async longPressUkgUnidosWorldCup3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3));
  }

  async expectUkgUnidosWorldCup3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), timeoutMs);
  }

  async expectUkgUnidosWorldCup3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), expected, timeoutMs);
  }

  async expectUkgUnidosWorldCup3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), substring, timeoutMs);
  }

  async expectUkgUnidosWorldCup3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), value, timeoutMs);
  }

  async expectUkgUnidosWorldCup3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), timeoutMs);
  }

  async expectUkgUnidosWorldCup3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), timeoutMs);
  }

  async expectUkgUnidosWorldCup3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), timeoutMs);
  }

  async expectUkgUnidosWorldCup3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), timeoutMs);
  }

  async expectUkgUnidosWorldCup3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), timeoutMs);
  }

  async expectUkgUnidosWorldCup3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3), count, timeoutMs);
  }

  async scrollUkgUnidosWorldCup3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgUnidosWorldCup3));
  }

  async doubleClickPeopleUkgNest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest));
  }

  async longPressPeopleUkgNest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest));
  }

  async expectPeopleUkgNestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), timeoutMs);
  }

  async expectPeopleUkgNestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), expected, timeoutMs);
  }

  async expectPeopleUkgNestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), substring, timeoutMs);
  }

  async expectPeopleUkgNestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), value, timeoutMs);
  }

  async expectPeopleUkgNestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), timeoutMs);
  }

  async expectPeopleUkgNestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), timeoutMs);
  }

  async expectPeopleUkgNestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), timeoutMs);
  }

  async expectPeopleUkgNestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), timeoutMs);
  }

  async expectPeopleUkgNestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), timeoutMs);
  }

  async expectPeopleUkgNestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest), count, timeoutMs);
  }

  async scrollPeopleUkgNestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgNest));
  }

  async clickNestAndAdaptWe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe));
  }

  async doubleClickNestAndAdaptWe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe));
  }

  async longPressNestAndAdaptWe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe));
  }

  async expectNestAndAdaptWeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), timeoutMs);
  }

  async expectNestAndAdaptWeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), expected, timeoutMs);
  }

  async expectNestAndAdaptWeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), substring, timeoutMs);
  }

  async expectNestAndAdaptWeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), value, timeoutMs);
  }

  async expectNestAndAdaptWeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), timeoutMs);
  }

  async expectNestAndAdaptWeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), timeoutMs);
  }

  async expectNestAndAdaptWeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), timeoutMs);
  }

  async expectNestAndAdaptWeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), timeoutMs);
  }

  async expectNestAndAdaptWeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), timeoutMs);
  }

  async expectNestAndAdaptWeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe), count, timeoutMs);
  }

  async scrollNestAndAdaptWeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.nestAndAdaptWe));
  }

  async clickLybertyWayWestford(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford));
  }

  async doubleClickLybertyWayWestford(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford));
  }

  async longPressLybertyWayWestford(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford));
  }

  async expectLybertyWayWestfordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), timeoutMs);
  }

  async expectLybertyWayWestfordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), expected, timeoutMs);
  }

  async expectLybertyWayWestfordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), substring, timeoutMs);
  }

  async expectLybertyWayWestfordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), value, timeoutMs);
  }

  async expectLybertyWayWestfordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), timeoutMs);
  }

  async expectLybertyWayWestfordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), timeoutMs);
  }

  async expectLybertyWayWestfordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), timeoutMs);
  }

  async expectLybertyWayWestfordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), timeoutMs);
  }

  async expectLybertyWayWestfordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), timeoutMs);
  }

  async expectLybertyWayWestfordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford), count, timeoutMs);
  }

  async scrollLybertyWayWestfordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.lybertyWayWestford));
  }

  async clickBeyondTheWorkplaceUnderstanding(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding));
  }

  async doubleClickBeyondTheWorkplaceUnderstanding(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding));
  }

  async longPressBeyondTheWorkplaceUnderstanding(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding));
  }

  async expectBeyondTheWorkplaceUnderstandingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), expected, timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), substring, timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), value, timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), timeoutMs);
  }

  async expectBeyondTheWorkplaceUnderstandingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding), count, timeoutMs);
  }

  async scrollBeyondTheWorkplaceUnderstandingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.beyondTheWorkplaceUnderstanding));
  }

  async clickUkgRiseVirtualSpeed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed));
  }

  async doubleClickUkgRiseVirtualSpeed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed));
  }

  async longPressUkgRiseVirtualSpeed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed));
  }

  async expectUkgRiseVirtualSpeedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), expected, timeoutMs);
  }

  async expectUkgRiseVirtualSpeedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), substring, timeoutMs);
  }

  async expectUkgRiseVirtualSpeedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), value, timeoutMs);
  }

  async expectUkgRiseVirtualSpeedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), timeoutMs);
  }

  async expectUkgRiseVirtualSpeedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed), count, timeoutMs);
  }

  async scrollUkgRiseVirtualSpeedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgRiseVirtualSpeed));
  }

  async doubleClickPeopleUkgPride(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride));
  }

  async longPressPeopleUkgPride(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride));
  }

  async expectPeopleUkgPrideHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), timeoutMs);
  }

  async expectPeopleUkgPrideText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), expected, timeoutMs);
  }

  async expectPeopleUkgPrideContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), substring, timeoutMs);
  }

  async expectPeopleUkgPrideValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), value, timeoutMs);
  }

  async expectPeopleUkgPrideEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), timeoutMs);
  }

  async expectPeopleUkgPrideDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), timeoutMs);
  }

  async expectPeopleUkgPrideChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), timeoutMs);
  }

  async expectPeopleUkgPrideUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), timeoutMs);
  }

  async expectPeopleUkgPrideFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), timeoutMs);
  }

  async expectPeopleUkgPrideCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride), count, timeoutMs);
  }

  async scrollPeopleUkgPrideIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.peopleUkgPride));
  }

  async clickOutEqualPresents(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresents));
  }

  async doubleClickOutEqualPresents(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresents));
  }

  async longPressOutEqualPresents(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresents));
  }

  async expectOutEqualPresentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), timeoutMs);
  }

  async expectOutEqualPresentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), expected, timeoutMs);
  }

  async expectOutEqualPresentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), substring, timeoutMs);
  }

  async expectOutEqualPresentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), value, timeoutMs);
  }

  async expectOutEqualPresentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), timeoutMs);
  }

  async expectOutEqualPresentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), timeoutMs);
  }

  async expectOutEqualPresentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), timeoutMs);
  }

  async expectOutEqualPresentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), timeoutMs);
  }

  async expectOutEqualPresentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), timeoutMs);
  }

  async expectOutEqualPresentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.outEqualPresents), count, timeoutMs);
  }

  async scrollOutEqualPresentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.outEqualPresents));
  }

  async clickVirtualZoom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoom));
  }

  async doubleClickVirtualZoom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoom));
  }

  async longPressVirtualZoom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoom));
  }

  async expectVirtualZoomHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.virtualZoom), timeoutMs);
  }

  async expectVirtualZoomText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.virtualZoom), expected, timeoutMs);
  }

  async expectVirtualZoomContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.virtualZoom), substring, timeoutMs);
  }

  async expectVirtualZoomValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.virtualZoom), value, timeoutMs);
  }

  async expectVirtualZoomEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.virtualZoom), timeoutMs);
  }

  async expectVirtualZoomDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.virtualZoom), timeoutMs);
  }

  async expectVirtualZoomChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.virtualZoom), timeoutMs);
  }

  async expectVirtualZoomUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.virtualZoom), timeoutMs);
  }

  async expectVirtualZoomFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.virtualZoom), timeoutMs);
  }

  async expectVirtualZoomCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.virtualZoom), count, timeoutMs);
  }

  async scrollVirtualZoomIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.virtualZoom));
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

  async clickUkgCommonsDemo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo));
  }

  async doubleClickUkgCommonsDemo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo));
  }

  async longPressUkgCommonsDemo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo));
  }

  async expectUkgCommonsDemoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), timeoutMs);
  }

  async expectUkgCommonsDemoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), expected, timeoutMs);
  }

  async expectUkgCommonsDemoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), substring, timeoutMs);
  }

  async expectUkgCommonsDemoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), value, timeoutMs);
  }

  async expectUkgCommonsDemoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), timeoutMs);
  }

  async expectUkgCommonsDemoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), timeoutMs);
  }

  async expectUkgCommonsDemoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), timeoutMs);
  }

  async expectUkgCommonsDemoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), timeoutMs);
  }

  async expectUkgCommonsDemoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), timeoutMs);
  }

  async expectUkgCommonsDemoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo), count, timeoutMs);
  }

  async scrollUkgCommonsDemoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsDemo));
  }

  async doubleClickCalendarIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.calendarIcon));
  }

  async longPressCalendarIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.calendarIcon));
  }

  async expectCalendarIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.calendarIcon), timeoutMs);
  }

  async expectCalendarIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.calendarIcon), expected, timeoutMs);
  }

  async expectCalendarIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.calendarIcon), substring, timeoutMs);
  }

  async expectCalendarIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.calendarIcon), value, timeoutMs);
  }

  async expectCalendarIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.calendarIcon), timeoutMs);
  }

  async expectCalendarIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.calendarIcon), timeoutMs);
  }

  async expectCalendarIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.calendarIcon), timeoutMs);
  }

  async expectCalendarIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.calendarIcon), timeoutMs);
  }

  async expectCalendarIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.calendarIcon), timeoutMs);
  }

  async expectCalendarIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.calendarIcon), count, timeoutMs);
  }

  async scrollCalendarIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.calendarIcon));
  }

  async clickUkgCommonsSprint(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint));
  }

  async doubleClickUkgCommonsSprint(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint));
  }

  async longPressUkgCommonsSprint(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint));
  }

  async expectUkgCommonsSprintHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), timeoutMs);
  }

  async expectUkgCommonsSprintText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), expected, timeoutMs);
  }

  async expectUkgCommonsSprintContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), substring, timeoutMs);
  }

  async expectUkgCommonsSprintValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), value, timeoutMs);
  }

  async expectUkgCommonsSprintEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), timeoutMs);
  }

  async expectUkgCommonsSprintDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), timeoutMs);
  }

  async expectUkgCommonsSprintChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), timeoutMs);
  }

  async expectUkgCommonsSprintUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), timeoutMs);
  }

  async expectUkgCommonsSprintFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), timeoutMs);
  }

  async expectUkgCommonsSprintCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint), count, timeoutMs);
  }

  async scrollUkgCommonsSprintIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsSprint));
  }

  async clickRequestsOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.requestsOverview));
  }

  async doubleClickRequestsOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.requestsOverview));
  }

  async longPressRequestsOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.requestsOverview));
  }

  async expectRequestsOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.requestsOverview), timeoutMs);
  }

  async expectRequestsOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.requestsOverview), expected, timeoutMs);
  }

  async expectRequestsOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.requestsOverview), substring, timeoutMs);
  }

  async expectRequestsOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.requestsOverview), value, timeoutMs);
  }

  async expectRequestsOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.requestsOverview), timeoutMs);
  }

  async expectRequestsOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.requestsOverview), timeoutMs);
  }

  async expectRequestsOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.requestsOverview), timeoutMs);
  }

  async expectRequestsOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.requestsOverview), timeoutMs);
  }

  async expectRequestsOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.requestsOverview), timeoutMs);
  }

  async expectRequestsOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.requestsOverview), count, timeoutMs);
  }

  async scrollRequestsOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.requestsOverview));
  }

  async longPressMyRequests13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests13));
  }

  async expectMyRequests13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.myRequests13), timeoutMs);
  }

  async expectMyRequests13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.myRequests13), expected, timeoutMs);
  }

  async expectMyRequests13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.myRequests13), substring, timeoutMs);
  }

  async expectMyRequests13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.myRequests13), value, timeoutMs);
  }

  async expectMyRequests13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.myRequests13), timeoutMs);
  }

  async expectMyRequests13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.myRequests13), timeoutMs);
  }

  async expectMyRequests13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.myRequests13), timeoutMs);
  }

  async expectMyRequests13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.myRequests13), timeoutMs);
  }

  async expectMyRequests13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.myRequests13), timeoutMs);
  }

  async expectMyRequests13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.myRequests13), count, timeoutMs);
  }

  async scrollMyRequests13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests13));
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

  async longPressAutomationRequirements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.automationRequirements));
  }

  async expectAutomationRequirementsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.automationRequirements), timeoutMs);
  }

  async expectAutomationRequirementsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.automationRequirements), expected, timeoutMs);
  }

  async expectAutomationRequirementsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.automationRequirements), substring, timeoutMs);
  }

  async expectAutomationRequirementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.automationRequirements), value, timeoutMs);
  }

  async expectAutomationRequirementsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.automationRequirements), timeoutMs);
  }

  async expectAutomationRequirementsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.automationRequirements), timeoutMs);
  }

  async expectAutomationRequirementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.automationRequirements), timeoutMs);
  }

  async expectAutomationRequirementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.automationRequirements), timeoutMs);
  }

  async expectAutomationRequirementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.automationRequirements), timeoutMs);
  }

  async expectAutomationRequirementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.automationRequirements), count, timeoutMs);
  }

  async scrollAutomationRequirementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.automationRequirements));
  }

  async clickLow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.low));
  }

  async doubleClickLow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.low));
  }

  async longPressLow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.low));
  }

  async expectLowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.low), timeoutMs);
  }

  async expectLowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.low), expected, timeoutMs);
  }

  async expectLowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.low), substring, timeoutMs);
  }

  async expectLowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.low), value, timeoutMs);
  }

  async expectLowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.low), timeoutMs);
  }

  async expectLowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.low), timeoutMs);
  }

  async expectLowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.low), timeoutMs);
  }

  async expectLowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.low), timeoutMs);
  }

  async expectLowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.low), timeoutMs);
  }

  async expectLowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.low), count, timeoutMs);
  }

  async scrollLowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.low));
  }

  async longPressTesting(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.testing));
  }

  async expectTestingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.testing), timeoutMs);
  }

  async expectTestingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.testing), expected, timeoutMs);
  }

  async expectTestingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.testing), substring, timeoutMs);
  }

  async expectTestingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.testing), value, timeoutMs);
  }

  async expectTestingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.testing), timeoutMs);
  }

  async expectTestingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.testing), timeoutMs);
  }

  async expectTestingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.testing), timeoutMs);
  }

  async expectTestingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.testing), timeoutMs);
  }

  async expectTestingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.testing), timeoutMs);
  }

  async expectTestingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.testing), count, timeoutMs);
  }

  async scrollTestingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.testing));
  }

  async longPressStandardSoftwareRequest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest));
  }

  async expectStandardSoftwareRequestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), timeoutMs);
  }

  async expectStandardSoftwareRequestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), expected, timeoutMs);
  }

  async expectStandardSoftwareRequestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), substring, timeoutMs);
  }

  async expectStandardSoftwareRequestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), value, timeoutMs);
  }

  async expectStandardSoftwareRequestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), timeoutMs);
  }

  async expectStandardSoftwareRequestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), timeoutMs);
  }

  async expectStandardSoftwareRequestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), timeoutMs);
  }

  async expectStandardSoftwareRequestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), timeoutMs);
  }

  async expectStandardSoftwareRequestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), timeoutMs);
  }

  async expectStandardSoftwareRequestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest), count, timeoutMs);
  }

  async scrollStandardSoftwareRequestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.standardSoftwareRequest));
  }

  async longPressDone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.done));
  }

  async expectDoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.done), timeoutMs);
  }

  async expectDoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.done), expected, timeoutMs);
  }

  async expectDoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.done), substring, timeoutMs);
  }

  async expectDoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.done), value, timeoutMs);
  }

  async expectDoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.done), timeoutMs);
  }

  async expectDoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.done), timeoutMs);
  }

  async expectDoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.done), timeoutMs);
  }

  async expectDoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.done), timeoutMs);
  }

  async expectDoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.done), timeoutMs);
  }

  async expectDoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.done), count, timeoutMs);
  }

  async scrollDoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.done));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.test));
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.test), substring, timeoutMs);
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.test), count, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.test));
  }

  async clickAssignedTraining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTraining));
  }

  async doubleClickAssignedTraining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTraining));
  }

  async longPressAssignedTraining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTraining));
  }

  async expectAssignedTrainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.assignedTraining), timeoutMs);
  }

  async expectAssignedTrainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.assignedTraining), expected, timeoutMs);
  }

  async expectAssignedTrainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.assignedTraining), substring, timeoutMs);
  }

  async expectAssignedTrainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.assignedTraining), value, timeoutMs);
  }

  async expectAssignedTrainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.assignedTraining), timeoutMs);
  }

  async expectAssignedTrainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.assignedTraining), timeoutMs);
  }

  async expectAssignedTrainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.assignedTraining), timeoutMs);
  }

  async expectAssignedTrainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.assignedTraining), timeoutMs);
  }

  async expectAssignedTrainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.assignedTraining), timeoutMs);
  }

  async expectAssignedTrainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.assignedTraining), count, timeoutMs);
  }

  async scrollAssignedTrainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTraining));
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

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
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

  async clickTasks2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks2));
  }

  async doubleClickTasks2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks2));
  }

  async longPressTasks2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks2));
  }

  async expectTasks2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.tasks2), timeoutMs);
  }

  async expectTasks2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.tasks2), expected, timeoutMs);
  }

  async expectTasks2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.tasks2), substring, timeoutMs);
  }

  async expectTasks2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.tasks2), value, timeoutMs);
  }

  async expectTasks2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.tasks2), timeoutMs);
  }

  async expectTasks2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.tasks2), timeoutMs);
  }

  async expectTasks2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.tasks2), timeoutMs);
  }

  async expectTasks2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.tasks2), timeoutMs);
  }

  async expectTasks2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.tasks2), timeoutMs);
  }

  async expectTasks2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.tasks2), count, timeoutMs);
  }

  async scrollTasks2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks2));
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

  async typeTextR6f(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.r6f), value);
  }

  async expectR6fHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.r6f), timeoutMs);
  }

  async expectR6fText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.r6f), expected, timeoutMs);
  }

  async expectR6fContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.r6f), substring, timeoutMs);
  }

  async expectR6fValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.r6f), value, timeoutMs);
  }

  async expectR6fEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.r6f), timeoutMs);
  }

  async expectR6fDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.r6f), timeoutMs);
  }

  async expectR6fChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.r6f), timeoutMs);
  }

  async expectR6fUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.r6f), timeoutMs);
  }

  async expectR6fFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.r6f), timeoutMs);
  }

  async expectR6fCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.r6f), count, timeoutMs);
  }

  async scrollR6fIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.r6f));
  }

  async doubleClickT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.t));
  }

  async longPressT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.t));
  }

  async expectTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.t), timeoutMs);
  }

  async expectTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.t), expected, timeoutMs);
  }

  async expectTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.t), substring, timeoutMs);
  }

  async expectTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.t), value, timeoutMs);
  }

  async expectTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.t), timeoutMs);
  }

  async expectTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.t), timeoutMs);
  }

  async expectTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.t), timeoutMs);
  }

  async expectTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.t), timeoutMs);
  }

  async expectTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.t), timeoutMs);
  }

  async expectTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.t), count, timeoutMs);
  }

  async scrollTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.t));
  }

  async doubleClickH(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.h));
  }

  async longPressH(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.h));
  }

  async expectHHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.h), timeoutMs);
  }

  async expectHText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.h), expected, timeoutMs);
  }

  async expectHContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.h), substring, timeoutMs);
  }

  async expectHValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.h), value, timeoutMs);
  }

  async expectHEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.h), timeoutMs);
  }

  async expectHDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.h), timeoutMs);
  }

  async expectHChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.h), timeoutMs);
  }

  async expectHUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.h), timeoutMs);
  }

  async expectHFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.h), timeoutMs);
  }

  async expectHCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.h), count, timeoutMs);
  }

  async scrollHIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.h));
  }

  async doubleClickG(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.g));
  }

  async longPressG(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.g));
  }

  async expectGHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.g), timeoutMs);
  }

  async expectGText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.g), expected, timeoutMs);
  }

  async expectGContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.g), substring, timeoutMs);
  }

  async expectGValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.g), value, timeoutMs);
  }

  async expectGEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.g), timeoutMs);
  }

  async expectGDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.g), timeoutMs);
  }

  async expectGChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.g), timeoutMs);
  }

  async expectGUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.g), timeoutMs);
  }

  async expectGFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.g), timeoutMs);
  }

  async expectGCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.g), count, timeoutMs);
  }

  async scrollGIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.g));
  }

  async doubleClickB(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.b));
  }

  async longPressB(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.b));
  }

  async expectBHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.b), timeoutMs);
  }

  async expectBText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.b), expected, timeoutMs);
  }

  async expectBContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.b), substring, timeoutMs);
  }

  async expectBValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.b), value, timeoutMs);
  }

  async expectBEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.b), timeoutMs);
  }

  async expectBDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.b), timeoutMs);
  }

  async expectBChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.b), timeoutMs);
  }

  async expectBUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.b), timeoutMs);
  }

  async expectBFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.b), timeoutMs);
  }

  async expectBCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.b), count, timeoutMs);
  }

  async scrollBIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.b));
  }

  async doubleClickO(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.o));
  }

  async longPressO(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.o));
  }

  async expectOHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.o), timeoutMs);
  }

  async expectOText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.o), expected, timeoutMs);
  }

  async expectOContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.o), substring, timeoutMs);
  }

  async expectOValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.o), value, timeoutMs);
  }

  async expectOEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.o), timeoutMs);
  }

  async expectODisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.o), timeoutMs);
  }

  async expectOChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.o), timeoutMs);
  }

  async expectOUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.o), timeoutMs);
  }

  async expectOFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.o), timeoutMs);
  }

  async expectOCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.o), count, timeoutMs);
  }

  async scrollOIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.o));
  }

  async doubleClickW(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.w));
  }

  async longPressW(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.w));
  }

  async expectWHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.w), timeoutMs);
  }

  async expectWText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.w), expected, timeoutMs);
  }

  async expectWContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.w), substring, timeoutMs);
  }

  async expectWValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.w), value, timeoutMs);
  }

  async expectWEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.w), timeoutMs);
  }

  async expectWDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.w), timeoutMs);
  }

  async expectWChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.w), timeoutMs);
  }

  async expectWUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.w), timeoutMs);
  }

  async expectWFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.w), timeoutMs);
  }

  async expectWCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.w), count, timeoutMs);
  }

  async scrollWIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.w));
  }

  async doubleClickQ(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.q));
  }

  async longPressQ(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.q));
  }

  async expectQHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.q), timeoutMs);
  }

  async expectQText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.q), expected, timeoutMs);
  }

  async expectQContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.q), substring, timeoutMs);
  }

  async expectQValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.q), value, timeoutMs);
  }

  async expectQEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.q), timeoutMs);
  }

  async expectQDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.q), timeoutMs);
  }

  async expectQChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.q), timeoutMs);
  }

  async expectQUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.q), timeoutMs);
  }

  async expectQFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.q), timeoutMs);
  }

  async expectQCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.q), count, timeoutMs);
  }

  async scrollQIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.q));
  }

  async doubleClickAdd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.add));
  }

  async longPressAdd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.add));
  }

  async expectAddHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.add), timeoutMs);
  }

  async expectAddText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.add), expected, timeoutMs);
  }

  async expectAddContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.add), substring, timeoutMs);
  }

  async expectAddValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.add), value, timeoutMs);
  }

  async expectAddEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.add), timeoutMs);
  }

  async expectAddDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.add), timeoutMs);
  }

  async expectAddChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.add), timeoutMs);
  }

  async expectAddUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.add), timeoutMs);
  }

  async expectAddFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.add), timeoutMs);
  }

  async expectAddCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.add), count, timeoutMs);
  }

  async scrollAddIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.add));
  }

  async clickCompleted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.completed));
  }

  async doubleClickCompleted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.completed));
  }

  async longPressCompleted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.completed));
  }

  async expectCompletedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.completed), timeoutMs);
  }

  async expectCompletedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.completed), expected, timeoutMs);
  }

  async expectCompletedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.completed), substring, timeoutMs);
  }

  async expectCompletedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.completed), value, timeoutMs);
  }

  async expectCompletedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.completed), timeoutMs);
  }

  async expectCompletedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.completed), timeoutMs);
  }

  async expectCompletedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.completed), timeoutMs);
  }

  async expectCompletedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.completed), timeoutMs);
  }

  async expectCompletedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.completed), timeoutMs);
  }

  async expectCompletedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.completed), count, timeoutMs);
  }

  async scrollCompletedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.completed));
  }

  async doubleClickMyDay(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myDay));
  }

  async longPressMyDay(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.myDay));
  }

  async expectMyDayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.myDay), timeoutMs);
  }

  async expectMyDayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.myDay), expected, timeoutMs);
  }

  async expectMyDayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.myDay), substring, timeoutMs);
  }

  async expectMyDayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.myDay), value, timeoutMs);
  }

  async expectMyDayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.myDay), timeoutMs);
  }

  async expectMyDayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.myDay), timeoutMs);
  }

  async expectMyDayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.myDay), timeoutMs);
  }

  async expectMyDayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.myDay), timeoutMs);
  }

  async expectMyDayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.myDay), timeoutMs);
  }

  async expectMyDayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.myDay), count, timeoutMs);
  }

  async scrollMyDayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.myDay));
  }

  async doubleClickAdx(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.adx));
  }

  async longPressAdx(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.adx));
  }

  async expectAdxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.adx), timeoutMs);
  }

  async expectAdxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.adx), expected, timeoutMs);
  }

  async expectAdxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.adx), substring, timeoutMs);
  }

  async expectAdxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.adx), value, timeoutMs);
  }

  async expectAdxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.adx), timeoutMs);
  }

  async expectAdxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.adx), timeoutMs);
  }

  async expectAdxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.adx), timeoutMs);
  }

  async expectAdxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.adx), timeoutMs);
  }

  async expectAdxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.adx), timeoutMs);
  }

  async expectAdxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.adx), count, timeoutMs);
  }

  async scrollAdxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.adx));
  }

  async doubleClickUkgCommonsApp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp));
  }

  async longPressUkgCommonsApp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp));
  }

  async expectUkgCommonsAppHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), timeoutMs);
  }

  async expectUkgCommonsAppText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), expected, timeoutMs);
  }

  async expectUkgCommonsAppContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), substring, timeoutMs);
  }

  async expectUkgCommonsAppValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), value, timeoutMs);
  }

  async expectUkgCommonsAppEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), timeoutMs);
  }

  async expectUkgCommonsAppDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), timeoutMs);
  }

  async expectUkgCommonsAppChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), timeoutMs);
  }

  async expectUkgCommonsAppUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), timeoutMs);
  }

  async expectUkgCommonsAppFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), timeoutMs);
  }

  async expectUkgCommonsAppCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp), count, timeoutMs);
  }

  async scrollUkgCommonsAppIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.ukgCommonsApp));
  }

  async clickHotJobs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
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

  async clickMySpaceReservations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations));
  }

  async doubleClickMySpaceReservations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations));
  }

  async longPressMySpaceReservations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations));
  }

  async expectMySpaceReservationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), timeoutMs);
  }

  async expectMySpaceReservationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), expected, timeoutMs);
  }

  async expectMySpaceReservationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), substring, timeoutMs);
  }

  async expectMySpaceReservationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), value, timeoutMs);
  }

  async expectMySpaceReservationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), timeoutMs);
  }

  async expectMySpaceReservationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), timeoutMs);
  }

  async expectMySpaceReservationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), timeoutMs);
  }

  async expectMySpaceReservationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), timeoutMs);
  }

  async expectMySpaceReservationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), timeoutMs);
  }

  async expectMySpaceReservationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations), count, timeoutMs);
  }

  async scrollMySpaceReservationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySpaceReservations));
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

  async clickDrakeTiwaryUkgCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom));
  }

  async doubleClickDrakeTiwaryUkgCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom));
  }

  async longPressDrakeTiwaryUkgCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom));
  }

  async expectDrakeTiwaryUkgComHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), timeoutMs);
  }

  async expectDrakeTiwaryUkgComText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), expected, timeoutMs);
  }

  async expectDrakeTiwaryUkgComContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), substring, timeoutMs);
  }

  async expectDrakeTiwaryUkgComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), value, timeoutMs);
  }

  async expectDrakeTiwaryUkgComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), timeoutMs);
  }

  async expectDrakeTiwaryUkgComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), timeoutMs);
  }

  async expectDrakeTiwaryUkgComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), timeoutMs);
  }

  async expectDrakeTiwaryUkgComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), timeoutMs);
  }

  async expectDrakeTiwaryUkgComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), timeoutMs);
  }

  async expectDrakeTiwaryUkgComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom), count, timeoutMs);
  }

  async scrollDrakeTiwaryUkgComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.drakeTiwaryUkgCom));
  }

  async clickViewAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
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

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
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

  async doubleClickImpersonateIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateIcon));
  }

  async longPressImpersonateIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateIcon));
  }

  async expectImpersonateIconHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), timeoutMs);
  }

  async expectImpersonateIconText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), expected, timeoutMs);
  }

  async expectImpersonateIconContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), substring, timeoutMs);
  }

  async expectImpersonateIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), value, timeoutMs);
  }

  async expectImpersonateIconEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), timeoutMs);
  }

  async expectImpersonateIconDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), timeoutMs);
  }

  async expectImpersonateIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), timeoutMs);
  }

  async expectImpersonateIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), timeoutMs);
  }

  async expectImpersonateIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), timeoutMs);
  }

  async expectImpersonateIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.impersonateIcon), count, timeoutMs);
  }

  async scrollImpersonateIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateIcon));
  }

  async clickImpersonateAnotherUser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser));
  }

  async doubleClickImpersonateAnotherUser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser));
  }

  async longPressImpersonateAnotherUser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser));
  }

  async expectImpersonateAnotherUserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), timeoutMs);
  }

  async expectImpersonateAnotherUserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), expected, timeoutMs);
  }

  async expectImpersonateAnotherUserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), substring, timeoutMs);
  }

  async expectImpersonateAnotherUserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), value, timeoutMs);
  }

  async expectImpersonateAnotherUserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), timeoutMs);
  }

  async expectImpersonateAnotherUserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), timeoutMs);
  }

  async expectImpersonateAnotherUserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), timeoutMs);
  }

  async expectImpersonateAnotherUserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), timeoutMs);
  }

  async expectImpersonateAnotherUserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), timeoutMs);
  }

  async expectImpersonateAnotherUserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser), count, timeoutMs);
  }

  async scrollImpersonateAnotherUserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.impersonateAnotherUser));
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

  async clickCustomizeHomePageLayout(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async doubleClickCustomizeHomePageLayout(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async longPressCustomizeHomePageLayout(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async expectCustomizeHomePageLayoutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), expected, timeoutMs);
  }

  async expectCustomizeHomePageLayoutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), substring, timeoutMs);
  }

  async expectCustomizeHomePageLayoutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), value, timeoutMs);
  }

  async expectCustomizeHomePageLayoutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), count, timeoutMs);
  }

  async scrollCustomizeHomePageLayoutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

}
