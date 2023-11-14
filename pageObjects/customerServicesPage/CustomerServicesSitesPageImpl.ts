import { Page } from "@playwright/test";
import { CommonPage } from "../../base/common/commonPage";
import { CommonScenario } from "../../base/common/commonScenario";
import { adminDashboardPageLocators } from "../adminPage/adminDashboardPageLocators";
import { CustomerServicesSitesPageLocators } from "./CustomerServicesSitesPageLocators";

export class CustomerServicesSitesPage extends CommonPage{
    constructor(public page: Page,readonly scenario: CommonScenario){
    super(page, scenario);
    }

    async NavigateToCustomerServicePage(Viewas){
        await this.page.locator(adminDashboardPageLocators.HomePage_Viewas).selectOption(Viewas)
        console.log("User is Able to switch view as option")
        await this.page.waitForTimeout(4000);
    }
    
    async ClickonSitesOption(){
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(CustomerServicesSitesPageLocators.Customer_Services_Sites).click()
        console.log("User is Able to see Sites Page")      
    }
 
    async filterByInSitesPage(Location, SiteNo, Availibility, Health){
     
        await this.page.locator(CustomerServicesSitesPageLocators.Customer_Services_Sites_FilterBy_Location).fill(Location)
        console.log("User Able to Enter Location for Sites page")
        await this.page.locator(CustomerServicesSitesPageLocators.Customer_Services_Sites_FilterBy_SiteNo).fill(SiteNo)
        console.log("User Able to Enter SiteNo for Sites page")
        await this.page.locator(CustomerServicesSitesPageLocators.Customer_Services_Sites_FilterBy_Availibility).selectOption(Availibility)
        await this.page.waitForLoadState("networkidle");
        console.log("User Able to select Availibility filter for Sites page")
        await this.page.locator(CustomerServicesSitesPageLocators.Customer_Services_Sites_FilterBy_Health).selectOption(Health)
        await this.page.waitForLoadState("networkidle");
        console.log("User Able to select Health filter for Sites page")
    }

    async FilterSubmitInSitesPage(){ 
        await this.page.keyboard.press("PageDown")  
        await this.page.locator(CustomerServicesSitesPageLocators.Customer_Services_Sites_FilterSubmit).click()
        console.log("User Able to Filters submit for Sites page")
        await this.page.waitForTimeout(4000);
    } 

    async SwitchmodesInCustomerServicePage(Viewas1,Viewas2){
        await this.page.locator(adminDashboardPageLocators.HomePage_Viewas).selectOption(Viewas1)
        console.log("User is Able to switch view as option")
        await this.page.waitForTimeout(3000);
        await this.page.locator(adminDashboardPageLocators.HomePage_Viewas).selectOption(Viewas1)
        console.log("User is Able to switch view as option")
        await this.page.waitForTimeout(3000);
    }
}