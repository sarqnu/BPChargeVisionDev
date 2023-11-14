import test from "../base/fixtures/baseTest";
import { AdminPostsPage } from "../pageObjects/adminPage/AdminPostsPageImpl";
import { LoginPage } from "../pageObjects/loginPage/loginPageImpl";
import { testData } from "./testData";

test.describe('E2E test flows', () => {

    test("Login Page Validation", async ({ page, loginPageImpl,adminDashboardPageImpl }, testinfo) => {
    await loginPageImpl.goTo();
    await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
    await adminDashboardPageImpl.verifyAdminPageNavigations()
    await adminDashboardPageImpl.verifyAdminDashboardFilters()
    });

    test("TC ID : 4513594 - Post Options ",async({ page, loginPageImpl, adminPostsPageImpl} , testinfo)=>{
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        //Post Page Navigation
        await adminPostsPageImpl.ClickonPostsOption();
        await adminPostsPageImpl.PostsPageNavigations();
    });

    test("TC ID : 4513612 - Filter Options for Clear filter", async ({ page, loginPageImpl,adminUsersPageImpl,adminPostsPageImpl,adminAuditPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        //Clear Filter for Users Page
        await adminUsersPageImpl.ClickonUsersOption();
        await adminUsersPageImpl.filterByInUserPage(testData.name,testData.email,testData.type,testData.datebetween,testData.dateend);
        await adminUsersPageImpl.clearfilterInUserPage();
        //Clear Filter for Posts Page
        await adminPostsPageImpl.ClickonPostsOption();
        await adminPostsPageImpl.filterByInDestinationPostsPage(testData.Location, testData.ImeiNo, testData.SiteNo, testData.OwnersAssetNo, testData.CPO, testData.Country, testData.Owner, testData.Scheme, testData.Coordinatesverified, testData.CommisionedStatus, testData.Availability, testData.Health, testData.Firmware, testData.Assembler, testData.GUIManufacturer, testData.PBManufacturer); 
        await adminPostsPageImpl.clearfilterInPostsPage();
        //Clear Filter for Audit Page
        await adminAuditPageImpl.filterByInAuditPage(testData.Operation,testData.Description,testData.SourceID,testData.DateBetween,testData.DateEnd);
        await adminAuditPageImpl.clearfilterInAuditPage();

    });

    test("TC ID : 4513632 - Settings Page Validation", async ({ page, loginPageImpl,adminSettingsPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminSettingsPageImpl.ClickonSettingsOption();
        await adminSettingsPageImpl.verify_AdminSettings_PageNavigations();
    });
    
    test("TC ID : 4513606 - User History Validation", async ({ page, loginPageImpl,adminUsersPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminUsersPageImpl.ClickonUsersOption();
        await adminUsersPageImpl.filterByInUserPage(testData.name,testData.email,testData.type,testData.datebetween,testData.dateend);
        await adminUsersPageImpl.FilterSubmitInUserPage();
    });

    test("TC ID : 4513604 - User switch viewas modes", async ({ page, loginPageImpl,adminDashboardPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminDashboardPageImpl.SwitchViewAsOption(testData.Viewas);
    });

    test("TC ID : 4513601/4513598 - User Options / User Tabs", async ({ page, loginPageImpl,adminUsersPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminUsersPageImpl.SwitchUserTabsForUser();
    });

    test("TC ID : 4513619 - Navigate", async ({ page, loginPageImpl,adminUsersPageImpl}, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminUsersPageImpl.ClickonUsersOption();
        await adminUsersPageImpl.NavigateToNextTabForUser();
    });
})