import test from "../base/fixtures/baseTest";
import { CustomerServicesSitesPage } from "../pageObjects/customerServicesPage/CustomerServicesSitesPageImpl";
import { testData } from "./testData";

test.describe('E2E test flows', () => {

   
    test("TC ID : 4513594 - Post Options ",async({ page, loginPageImpl, adminPostsPageImpl} , testinfo)=>{
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        //Post Page Navigation
        await adminPostsPageImpl.ClickonPostsOption();
        await adminPostsPageImpl.PostsPageNavigations();
    });

    test("TC ID : 4513595 - User Login ", async ({ page, loginPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
    });

    test("TC ID : 4513601/4513598 - User Options / User Tabs", async ({ page, loginPageImpl,adminUsersPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminUsersPageImpl.SwitchUserTabsForUser();
    });

    test("TC ID : 4513604 - User switch modes", async ({ page, loginPageImpl,adminDashboardPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminDashboardPageImpl.SwitchViewAsOption(testData.Viewas);
    });

    test("TC ID : 4513606 - User History ", async ({ page, loginPageImpl,adminUsersPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminUsersPageImpl.ClickonUsersOption();
        await adminUsersPageImpl.filterByInUserPage(testData.name,testData.email,testData.type,testData.datebetween,testData.dateend);
        await adminUsersPageImpl.FilterSubmitInUserPage();
    });
   
    test("TC ID : 4513619 - Navigate", async ({ page, loginPageImpl,adminUsersPageImpl}, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminUsersPageImpl.ClickonUsersOption();
        await adminUsersPageImpl.NavigateToNextTabForUser();
    });

    test("TC ID : 4513642 - Customer service page", async ({ page, loginPageImpl,CustomerServicesSitesPageImpl}, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await CustomerServicesSitesPageImpl.NavigateToCustomerServicePage(testData.Viewas);
        await CustomerServicesSitesPageImpl.ClickonSitesOption();
        await CustomerServicesSitesPageImpl.filterByInSitesPage(testData.Location, testData.SiteNo, testData.Availability, testData.Health);
        await CustomerServicesSitesPageImpl.FilterSubmitInSitesPage();
    });

    test("TC ID : 4513643 - CS-Switch modes", async ({ page, loginPageImpl,CustomerServicesSitesPageImpl}, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await CustomerServicesSitesPageImpl.NavigateToCustomerServicePage(testData.Viewas);
        await CustomerServicesSitesPageImpl.SwitchmodesInCustomerServicePage(testData.Viewas1,testData.Viewas2);

    });

    test("TC ID : 4513650 - Site search", async ({ page, loginPageImpl,adminPostsPageImpl}, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminPostsPageImpl.ClickonPostsOption();
        await adminPostsPageImpl.ClickonPostsDestinationOption();
        await adminPostsPageImpl.SearchFilterSitesNoInPostsPage(testData.SiteNo);
        await adminPostsPageImpl.FilterSubmitInPostsPage();
    });

    test("TC ID : 4513652 - Site info", async ({ page, loginPageImpl,adminPostsPageImpl}, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminPostsPageImpl.ClickonPostsOption();
        await adminPostsPageImpl.ClickonPostsOCPPSitesOption();
        await adminPostsPageImpl.SearchandClickOnSitesNoInPostsPage(testData.SiteNoValue);
    });
 
    
})