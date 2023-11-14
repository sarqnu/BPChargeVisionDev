import { Page } from "@playwright/test";
import { CommonPage } from "../../base/common/commonPage";
import { CommonScenario } from "../../base/common/commonScenario";
import { adminDashboardPageLocators } from "../adminPage/adminDashboardPageLocators";


export class AdminDashboardPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
    super(page, scenario);
    }

async SwitchViewAsOption(Viewas){
    await this.page.locator(adminDashboardPageLocators.HomePage_Viewas).selectOption(Viewas)
    console.log("User is Able to switch view as option")
    await this.page.waitForLoadState("networkidle");
}
async verifyAdminPageNavigations(){
    await this.page.locator(adminDashboardPageLocators.WelcomeUser).isVisible()
    console.log("User is Able to see Welcome User on Admin Dashboard Page")
    await this.page.locator(adminDashboardPageLocators.Admin_Users_Option).click()
    console.log("User is Able to see Users Page")
    await this.page.waitForTimeout(4000)
    await this.page.locator(adminDashboardPageLocators.Admin_Posts_Option).click()
    console.log("User is Able to see Posts Page")
    await this.page.waitForTimeout(4000)
    await this.page.locator(adminDashboardPageLocators.Admin_Settings_Option).click()
    console.log("User is Able to see Settings Page")
    await this.page.locator(adminDashboardPageLocators.Admin_Audit_Option).click()
    console.log("User is Able to see Audit Page")
    await this.page.locator(adminDashboardPageLocators.Admin_Letters_Option).click()
    console.log("User is Able to see Letters Page")
    await this.page.locator(adminDashboardPageLocators.Admin_CSReports_Option).click()
    console.log("User is Able to see CSReport Page")
    await this.page.locator(adminDashboardPageLocators.Admin_Account_Option).click()
    console.log("User is Able to see Account Page")
    await this.page.waitForLoadState("networkidle");
    await this.page.locator(adminDashboardPageLocators.Admin_Dashboard_Option).click()
    console.log("User is Able to see Dashboard Page")
    await this.page.waitForLoadState("networkidle");
}
async verifyAdminDashboardFilters(){
    await this.page.locator(adminDashboardPageLocators.Admin_Dashboard_Summary_LastWeek).click()
    console.log("user is able to see Total Users, Total Sites, Total Schemes, Total Recharges")
    await this.page.waitForTimeout(4000)
    await this.page.locator(adminDashboardPageLocators.Admin_Dashboard_Summary_LastMonth).click()
    console.log("user is able to see Total Users, Total Sites, Total Schemes, Total Recharges")
    await this.page.waitForTimeout(4000)
    await this.page.locator(adminDashboardPageLocators.Admin_Dashboard_Summary_Last3Months).click()
    console.log("user is able to see Total Users, Total Sites, Total Schemes, Total Recharges")
    await this.page.waitForLoadState("networkidle");
    await this.page.locator(adminDashboardPageLocators.Admin_Dashboard_Summary_Last6Months).click()
    console.log("user is able to see Total Users, Total Sites, Total Schemes, Total Recharges")
    await this.page.waitForLoadState("networkidle");
    await this.page.locator(adminDashboardPageLocators.Admin_Dashboard_Summary_AllTime).click()
    console.log("user is able to see Total Users, Total Sites, Total Schemes, Total Recharges")
    await this.page.waitForLoadState("networkidle");
}
}