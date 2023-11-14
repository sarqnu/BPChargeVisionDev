import { Page } from "@playwright/test";
import { CommonPage } from "../../base/common/commonPage";
import { CommonScenario } from "../../base/common/commonScenario";
import { adminDashboardPageLocators } from "./adminDashboardPageLocators";
import { adminAuditPageLocators } from "./adminAuditPageLocators";

export class AdminAuditPage extends CommonPage{
    constructor(public page: Page,readonly scenarios: CommonScenario){
        super(page, scenarios);
    }

    async filterByInAuditPage(Operation, Description, SourceID, DateBetween, DateEnd){
        await this.page.locator(adminDashboardPageLocators.Admin_Audit_Option).click()
        console.log("User is Able to see Audit Page")
        await this.page.waitForLoadState("networkidle");
        
        await this.page.locator(adminAuditPageLocators.Admin_Audit_Operation).fill(Operation)
        console.log("User Able to Enter Operation for Audit page")
        await this.page.locator(adminAuditPageLocators.Admin_Audit_Description).fill(Description)
        console.log("User Able to Enter Description for Audit page")
        await this.page.locator(adminAuditPageLocators.Admin_Audit_SourceID).fill(SourceID)
        console.log("User Able to Enter SourceID for Audit page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminAuditPageLocators.Admin_Audit_DateBetween).fill(DateBetween)       
        console.log("User Able to Enter Date Between for Audit page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminAuditPageLocators.Admin_Audit_DateEnd).fill(DateEnd)
        console.log("User Able to Enter Date End for Audit page")
        await this.page.keyboard.press("PageDown")
        await this.page.waitForLoadState("networkidle");
   
    }

    async clearfilterInAuditPage(){   
        await this.page.locator(adminAuditPageLocators.Admin_Audit_ClearFilter).click()
        console.log("User Able to clear filters for Audit page")
        await this.page.waitForLoadState("networkidle");
    } 
}
