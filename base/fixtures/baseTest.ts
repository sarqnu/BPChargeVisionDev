import { test as baseTest } from "@playwright/test";
import { AdminDashboardPage } from "../../pageObjects/adminPage/AdminDashboardPageImpl";
import { LoginPage } from "../../pageObjects/loginPage/loginPageImpl";
import { CommonPage } from "../common/commonPage";
import { CommonScenario } from "../common/commonScenario";
import { AdminSettingsPage } from "../../pageObjects/adminPage/AdminSettingsPageImpl";
import { AdminUsersPage } from "../../pageObjects/adminPage/AdminUsersPageImpl";
import { AdminPostsPage } from "../../pageObjects/adminPage/AdminPostsPageImpl";
import { AdminAuditPage } from "../../pageObjects/adminPage/AdminAuditPageImpl";
import { CustomerServicesSitesPage } from "../../pageObjects/customerServicesPage/CustomerServicesSitesPageImpl";

// declaring the objects type for autocompletion
interface PageObjects {
    loginPageImpl: LoginPage;
    commonScenarioPage: CommonScenario;
    commonPage: CommonPage;
    adminDashboardPageImpl : AdminDashboardPage;
    adminUsersPageImpl : AdminUsersPage;
    adminPostsPageImpl : AdminPostsPage;
    adminSettingsPageImpl : AdminSettingsPage;
    adminAuditPageImpl : AdminAuditPage;

    CustomerServicesSitesPageImpl : CustomerServicesSitesPage;
   
}

// intializing all the page objects and import them as fixture in spec file
const test = baseTest.extend<PageObjects>({
    commonScenarioPage: async ({ page }, use, testinfo) => {
        await use(new CommonScenario(page, testinfo));
    },

    loginPageImpl: async ({ page, commonScenarioPage }, use) => {
        await use(new LoginPage(page, commonScenarioPage));
    },
    adminDashboardPageImpl: async ({ page, commonScenarioPage }, use) => {
        await use(new AdminDashboardPage(page, commonScenarioPage));
    },
    adminUsersPageImpl: async ({ page, commonScenarioPage }, use) => {
        await use(new AdminUsersPage(page, commonScenarioPage));
    },
    adminPostsPageImpl: async ({ page, commonScenarioPage }, use) => {
        await use(new AdminPostsPage(page, commonScenarioPage));
    },
    adminAuditPageImpl: async ({ page, commonScenarioPage }, use) => {
        await use(new AdminAuditPage(page, commonScenarioPage));
    },
    adminSettingsPageImpl: async ({ page, commonScenarioPage }, use) => {
        await use(new AdminSettingsPage(page, commonScenarioPage));
    },
    CustomerServicesSitesPageImpl: async ({ page, commonScenarioPage }, use) => {
        await use(new CustomerServicesSitesPage(page, commonScenarioPage));
    }

    });
    
    test.beforeEach(async ({ browser }) => {
        // console.log('beforeEach tests');
    });
    
    test.afterEach(async ({ }) => {
        // console.log('afterEach tests');
    });
    
     // export default and name export so spec files can use it
    export default test;
    export const expect = test.expect;