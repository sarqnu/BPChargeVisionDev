import { Page } from "@playwright/test";
import { CommonScenario } from "../../base/common/commonScenario";
import { CommonPage } from "../../base/common/commonPage";
import { adminSettingsPageLocators } from "./adminSettingsPageLocators";
import { adminDashboardPageLocators } from "./adminDashboardPageLocators";

export class AdminSettingsPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
    super(page, scenario);
    }

    async ClickonSettingsOption(){
        await this.page.locator(adminDashboardPageLocators.Admin_Settings_Option).click()
        console.log("User is Able to see Settings Page")
        await this.page.waitForLoadState("networkidle");   
    }

    async verify_AdminSettings_PageNavigations(){
        
        await this.page.locator(adminSettingsPageLocators.Admin_Settings_PostType_Option).click()
        console.log("User is Able to see Settings Post Type Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_GUIManufacturer_Option).click()
        console.log("User is Able to see Settings GUI-Manufacturer Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_PBManufacturer_Option).click()
        console.log("User is Able to see Settings PB-Manufacturer Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_Assemblers_Option).click()
        console.log("User is Able to see Settings Assemblers Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_Installers_Option).click()
        console.log("User is Able to see Settings Installers Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_Settings_Option).click()
        console.log("User is Able to see Settings Settings Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_FaultCodes_Option).click()
        console.log("User is Able to see Settings FaultCodes Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_Alerts_Option).click()
        console.log("User is Able to see Settings Alerts Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_Adverts_Option).click()
        console.log("User is Able to see Settings Adverts Page")
        await this.page.waitForTimeout(3000)

        await this.page.locator(adminSettingsPageLocators.Admin_Settings_TagGroups_Option).click()
        console.log("User is Able to see Settings TagGroups Page")
        await this.page.waitForLoadState("networkidle");
    }
 }