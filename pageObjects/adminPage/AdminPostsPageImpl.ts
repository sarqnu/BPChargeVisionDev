import { Page } from "@playwright/test";
import { CommonPage } from "../../base/common/commonPage";
import { CommonScenario } from "../../base/common/commonScenario";
import { adminDashboardPageLocators } from "./adminDashboardPageLocators";
import { adminPostsPageLocators } from "./adminPostsPageLocators";
import { title } from "process";

export class AdminPostsPage extends CommonPage{
    constructor(public page: Page,readonly scenario: CommonScenario){
    super(page, scenario);
    }
    
    async ClickonPostsOption(){
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminDashboardPageLocators.Admin_Posts_Option).click()
        console.log("User is Able to see Posts Page")      
    }

    async ClickonPostsDestinationOption(){
        await this.page.locator(adminPostsPageLocators.Admin_Posts_Destination).click()
        console.log("User is Able to see Destination Posts Page")
        await this.page.waitForLoadState("networkidle");
    }

    async filterByInDestinationPostsPage(Location, ImeiNo, SiteNo, OwnersAssetNo, CPO, Country, Owner, Scheme, Coordinatesverified, CommisionedStatus, Availability, Health, Firmware, Assembler, GUIManufacturer, PBManufacturer){
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_Destination).click()
        console.log("User is Able to see Destination Posts Page")
        await this.page.waitForLoadState("networkidle");
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Location).fill(Location)
        console.log("User Able to Enter Location for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_IMEINumber).fill(ImeiNo)
        console.log("User Able to Enter IMEINumber for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_SiteNo).fill(SiteNo)
        console.log("User Able to Enter SiteNo for Posts page")        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_OwnersAssetNo).fill(OwnersAssetNo)
        console.log("User Able to Enter OwnersAssetNo for Posts page")
        await this.page.keyboard.press("PageDown")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_CPO).fill(CPO)
        console.log("User Able to Enter CPO for Posts page")        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Country).selectOption(Country)       
        console.log("User Able to select Country filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Owner).selectOption(Owner)
        console.log("User Able to select Owner filter for Posts page")
        await this.page.waitForLoadState("networkidle");
       // await this.page.keyboard.press("PageDown")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Scheme).selectOption(Scheme)       
        console.log("User Able to select Scheme filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Coordinatesverified).selectOption(Coordinatesverified)
        console.log("User Able to select Coordinatesverified filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_CommisionedStatus).selectOption(CommisionedStatus)
        console.log("User Able to select CommisionedStatus filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Availability).selectOption(Availability)
        console.log("User Able to select Availability filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Health).selectOption(Health)
        console.log("User Able to select Health filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Firmware).selectOption(Firmware)
        console.log("User Able to select Firmware filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Assembler).selectOption(Assembler)
        console.log("User Able to select Assembler filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_GUIManufacturer).selectOption(GUIManufacturer)
        console.log("User Able to select GUI Manufacturer filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_PBManufacturer).selectOption(PBManufacturer)
        console.log("User Able to select PB Manufacturer filter for Posts page")
        await this.page.waitForLoadState("networkidle");
           
    }
    async ClickonPostsOCPPSitesOption(){
        await this.page.locator(adminPostsPageLocators.Admin_Posts_OCPPSites).click()
        console.log("User is Able to see OCPP Sites Posts Page")
        await this.page.waitForLoadState("networkidle");
    }
    
    async filterByInOCPPSitesPostsPage(Location, ImeiNo, SiteNo, OwnersAssetNo, CPO, OCPPType,  Country, Owner, Scheme, CommisionedStatus, Availability, Health, Firmware, Assembler, GUIManufacturer, PBManufacturer){
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_OCPPSites).click()
        console.log("User is Able to see OCPP Sites Posts Page")
        await this.page.waitForLoadState("networkidle");
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Location).fill(Location)
        console.log("User Able to Enter Location for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_IMEINumber).fill(ImeiNo)
        console.log("User Able to Enter IMEINumber for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_SiteNo).fill(SiteNo)
        console.log("User Able to Enter SiteNo for Posts page")        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_OwnersAssetNo).fill(OwnersAssetNo)
        console.log("User Able to Enter OwnersAssetNo for Posts page")        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_CPO).fill(CPO)
        console.log("User Able to Enter CPO for Posts page")
        await this.page.keyboard.press("PageDown")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_OCPPType).selectOption(OCPPType)
        console.log("User Able to select OCPPType) filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Country).selectOption(Country)       
        console.log("User Able to select Country filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Owner).selectOption(Owner)
        console.log("User Able to select Owner filter for Posts page")
        await this.page.waitForLoadState("networkidle");      
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Scheme).selectOption(Scheme)       
        console.log("User Able to select Scheme filter for Posts page")
        await this.page.waitForLoadState("networkidle");       
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_CommisionedStatus).selectOption(CommisionedStatus)
        console.log("User Able to select CommisionedStatus filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Availability).selectOption(Availability)
        console.log("User Able to select Availability filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Health).selectOption(Health)
        console.log("User Able to select Health filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Firmware).selectOption(Firmware)
        console.log("User Able to select Firmware filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Assembler).selectOption(Assembler)
        console.log("User Able to select Assembler filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_GUIManufacturer).selectOption(GUIManufacturer)
        console.log("User Able to select GUI Manufacturer filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_PBManufacturer).selectOption(PBManufacturer)
        console.log("User Able to select PB Manufacturer filter for Posts page")
        await this.page.waitForLoadState("networkidle");
           
    }

    async filterByInOCPPOtherPostsPage(Location, ImeiNo, SiteNo, OwnersAssetNo, CPO, OCPPType,  Country, Owner, Scheme, CommisionedStatus, Availability, Health, Firmware, Assembler, GUIManufacturer, PBManufacturer){
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_OCPPother).click()
        console.log("User is Able to see OCPP Other Posts Page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_OCPPother_APT).click()
        console.log("User is Able to see OCPP Other APT Posts Page")
        await this.page.waitForLoadState("networkidle");
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Location).fill(Location)
        console.log("User Able to Enter Location for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_IMEINumber).fill(ImeiNo)
        console.log("User Able to Enter IMEINumber for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_SiteNo).fill(SiteNo)
        console.log("User Able to Enter SiteNo for Posts page")       
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_OwnersAssetNo).fill(OwnersAssetNo)
        console.log("User Able to Enter OwnersAssetNo for Posts page")        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_CPO).fill(CPO)
        console.log("User Able to Enter CPO for Posts page")        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_OCPPType).selectOption(OCPPType)
        console.log("User Able to select OCPPType) filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Country).selectOption(Country)       
        console.log("User Able to select Country filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Owner).selectOption(Owner)
        console.log("User Able to select Owner filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.keyboard.press("PageDown")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Scheme).selectOption(Scheme)       
        console.log("User Able to select Scheme filter for Posts page")
        await this.page.waitForLoadState("networkidle");       
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_CommisionedStatus).selectOption(CommisionedStatus)
        console.log("User Able to select CommisionedStatus filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Availability).selectOption(Availability)
        console.log("User Able to select Availability filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Health).selectOption(Health)
        console.log("User Able to select Health filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Firmware).selectOption(Firmware)
        console.log("User Able to select Firmware filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Assembler).selectOption(Assembler)
        console.log("User Able to select Assembler filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_GUIManufacturer).selectOption(GUIManufacturer)
        console.log("User Able to select GUI Manufacturer filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_PBManufacturer).selectOption(PBManufacturer)
        console.log("User Able to select PB Manufacturer filter for Posts page")
        await this.page.waitForLoadState("networkidle");
           
    }

    async filterByInHomechargePostsPage(Location, ImeiNo, SiteNo, HC_Owner, HC_CPO, HC_Type, Scheme, Firmware ){
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_Homecharge).click()
        console.log("User is Able to see Homecharge Posts Page")
        await this.page.waitForLoadState("networkidle");
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Location).fill(Location)
        console.log("User Able to Enter Location for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_IMEINumber).fill(ImeiNo)
        console.log("User Able to Enter IMEINumber for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_SiteNo).fill(SiteNo)
        console.log("User Able to Enter SiteNo for Posts page")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Homecharge_Owner).fill(HC_Owner)
        console.log("User Able to select Homecharge Owner for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Homecharge_CPO).fill(HC_CPO)
        console.log("User Able to Enter Homecharge CPO for Posts page")
        await this.page.keyboard.press("PageDown")
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Homecharge_Homechargetype).selectOption(HC_Type)
        console.log("User Able to select Homecharge Type filter for Posts page")
        await this.page.waitForLoadState("networkidle");    
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Scheme).selectOption(Scheme)       
        console.log("User Able to select Scheme filter for Posts page")
        await this.page.waitForLoadState("networkidle");       
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_Firmware).selectOption(Firmware)
        console.log("User Able to select Firmware filter for Posts page")
        await this.page.waitForLoadState("networkidle");
        
    }

    async PostsPageNavigations(){
        await this.page.locator(adminPostsPageLocators.Admin_Posts_Destination).click()
        console.log("User is Able to see Destination Posts Page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_OCPPSites).click()
        console.log("User is Able to see OCPPSites Posts Page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_OCPPother).click()
        await this.page.locator(adminPostsPageLocators.Admin_Posts_OCPPother_APT).click()
        await this.page.waitForTimeout(2000)
        console.log("User is Able to see OCPPother Posts Page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_Homecharge).click()
        console.log("User is Able to see Homecharge Posts Page")
        await this.page.waitForLoadState("networkidle");
    }
    async clearfilterInPostsPage(){   
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_ClearFilters).click()
        console.log("User Able to clear filters for Posts page")
        await this.page.waitForLoadState("networkidle");
    }
    
    async FilterSubmitInPostsPage(){ 
        await this.page.keyboard.press("PageDown")  
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_FilterSubmit).click()
        console.log("User Able to Filters submit for Posts page")
        await this.page.waitForTimeout(3000);
        await this.page.keyboard.press("PageUp")
        await this.page.waitForTimeout(2000);
    }
    
    async SearchFilterSitesNoInPostsPage(SiteNo){ 
        
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_SiteNo).fill(SiteNo)
        console.log("User Able to filters with SiteNo for Posts page")
        await this.page.waitForLoadState("networkidle");
    }

    async SearchandClickOnSitesNoInPostsPage(SiteNoValue){ 
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_SiteNo).fill(SiteNoValue)
        console.log("User Able to filters with SiteNo for Posts page")
        await this.page.waitForLoadState("networkidle");
        await this.page.locator(adminPostsPageLocators.Admin_Posts_FilterBy_FilterSubmit).click()
        await this.page.keyboard.press("PageUp")
        await this.page.waitForTimeout(2000)
        await this.page.locator(adminPostsPageLocators.Admin_OCPPSites_Posts_SiteNoValues).click();       
        await this.page.waitForTimeout(2000)
        console.log("User Able to get details with SiteNo for Posts page")
        await this.page.waitForLoadState("networkidle");
    }


}