import { Page } from "@playwright/test";
import { CommonScenario } from "../../base/common/commonScenario";
import { CommonPage } from "../../base/common/commonPage";
import { testData } from "../../tests/testData";
import { adminDashboardPageLocators } from "./adminDashboardPageLocators";
import { adminUsersPageLocators } from "./adminUsersPageLocators";

export class AdminUsersPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
    super(page, scenario);
    }

    async ClickonUsersOption(){
        await this.page.locator(adminDashboardPageLocators.Admin_Users_Option).click()
        console.log("User is Able to see Users Page")
        await this.page.waitForLoadState("networkidle");    
    }

    async filterByInUserPage(name, email, type, datebetween, dateend){
     
        await this.page.locator(adminUsersPageLocators.Admin_Users_FilterBy_Name).fill(name)
        console.log("User Able to Enter Name for User page")
        await this.page.locator(adminUsersPageLocators.Admin_Users_FilterBy_Email).fill(email)
        console.log("User Able to Enter email for User page")
        await this.page.locator(adminUsersPageLocators.Admin_Users_FilterBy_Type).selectOption(type)
        await this.page.waitForLoadState("networkidle");
        console.log("User Able to select Type filter for User page")
        await this.page.locator(adminUsersPageLocators.Admin_Users_FilterBy_DateBetween).fill(datebetween)
        await this.page.waitForTimeout(2000)
        console.log("User Able to select Date Between filter for User page")
        await this.page.locator(adminUsersPageLocators.Admin_Users_FilterBy_DateEnd).fill(dateend)
        console.log("User Able to select Date End filter for User page")        
        await this.page.keyboard.press("PageDown")
        await this.page.waitForLoadState("networkidle");
    }

    async FilterSubmitInUserPage(){ 
        await this.page.keyboard.press("PageDown")  
        await this.page.locator(adminUsersPageLocators.Admin_Users_FilterBy_Filtersubmit).click()
        console.log("User Able to Filters submit for User page")
        await this.page.waitForLoadState("networkidle");
    } 

    async clearfilterInUserPage(){   
        await this.page.locator(adminUsersPageLocators.Admin_Users_FilterBy_ClearFilter).click()
        console.log("User Able to clear filters for User page")
        await this.page.waitForLoadState("networkidle");
    } 

    async SwitchUserTabsForUser(){
     
        await this.page.locator(adminUsersPageLocators.Admin_Users_SelectUserID).click()
        console.log("User Able to Click on UserID")

        await this.page.locator(adminUsersPageLocators.Admin_Users_Details).click()
        console.log("User Able to switch Details tab")
        await this.page.waitForTimeout(2000)
        await this.page.locator(adminUsersPageLocators.Admin_Users_Notes).click()
        console.log("User Able to switch Notes tab")
        await this.page.waitForTimeout(2000)
        await this.page.locator(adminUsersPageLocators.Admin_Users_ViewTags).click()
        console.log("User Able to switch ViewTags tab")
        await this.page.waitForTimeout(2000)
        await this.page.locator(adminUsersPageLocators.Admin_Users_ViewHCUnits).click()
        console.log("User Able to switch ViewHCUnits tab")        
        await this.page.waitForLoadState("networkidle");
    }

    async NavigateToNextTabForUser(){ 
        await this.page.keyboard.press("PageDown") 
        await this.page.waitForTimeout(4000)  
        await this.page.locator(adminUsersPageLocators.Admin_Users_NextPage).click()
        await this.page.waitForTimeout(4000)
        console.log("User Able to switch Next Page ")   

        await this.page.keyboard.press("PageDown") 
        await this.page.locator(adminUsersPageLocators.Admin_Users_NextPage).click()
        await this.page.waitForTimeout(4000)   
        console.log("User Able to switch Next Page ")   
         
        }
}

