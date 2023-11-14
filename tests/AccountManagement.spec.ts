import test from "../base/fixtures/baseTest";
import { testData } from "./testData";

test.describe('Account Mnagement Test Flows', () => {

    test("TC ID : 4513612 - Filter Options for Clear filter", async ({ page, loginPageImpl,adminUsersPageImpl,adminPostsPageImpl,adminAuditPageImpl }, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        //Clear Filter for Users Page
        await adminUsersPageImpl.ClickonUsersOption();
        await adminUsersPageImpl.filterByInUserPage(testData.name,testData.email,testData.type,testData.datebetween,testData.dateend);
        await adminUsersPageImpl.clearfilterInUserPage();

        //Clear Filter for Posts Page
        await adminPostsPageImpl.ClickonPostsOption();
        //Clear Filter Destination Post Page
        await adminPostsPageImpl.filterByInDestinationPostsPage(testData.Location, testData.ImeiNo, testData.SiteNo, testData.OwnersAssetNo, testData.CPO, testData.Country, testData.Owner, testData.Scheme, testData.Coordinatesverified, testData.CommisionedStatus, testData.Availability, testData.Health, testData.Firmware, testData.Assembler, testData.GUIManufacturer, testData.PBManufacturer); 
        /*
        //Clear Filter OCPP Sites Post Page
        await adminPostsPageImpl.filterByInOCPPSitesPostsPage(testData.Location, testData.ImeiNo, testData.SiteNo, testData.OwnersAssetNo, testData.CPO, testData.OCPPType, testData.Country, testData.Owner, testData.Scheme, testData.CommisionedStatus, testData.Availability, testData.Health, testData.Firmware, testData.Assembler, testData.GUIManufacturer, testData.PBManufacturer);
        //Clear Filter OCPP Other Post Page
        await adminPostsPageImpl.filterByInOCPPOtherPostsPage(testData.Location, testData.ImeiNo, testData.SiteNo, testData.OwnersAssetNo, testData.CPO, testData.OCPPType,  testData.Country, testData.Owner, testData.Scheme, testData.CommisionedStatus, testData.Availability, testData.Health, testData.Firmware, testData.Assembler, testData.GUIManufacturer, testData.PBManufacturer);
        //Clear Filter Homecharge Post Page
        await adminPostsPageImpl.filterByInHomechargePostsPage(testData.Location, testData.ImeiNo, testData.SiteNo, testData.HC_Owner, testData.HC_CPO, testData.HC_Type, testData.Scheme, testData.Firmware);
        */
        await adminPostsPageImpl.clearfilterInPostsPage();
        
        //Clear Filter for Audit Page
        await adminAuditPageImpl.filterByInAuditPage(testData.Operation,testData.Description,testData.SourceID,testData.DateBetween,testData.DateEnd);
        await adminAuditPageImpl.clearfilterInAuditPage();

    });

    test("TC ID : 4513632 - Settings Page Validation", async ({ page, loginPageImpl,adminSettingsPageImpl}, testinfo) => {
        await loginPageImpl.goTo();
        await loginPageImpl.validLogin(testData.USERNAME, testData.PASSWORD, testData.username, testData.password);
        await adminSettingsPageImpl.ClickonSettingsOption();
        await adminSettingsPageImpl.verify_AdminSettings_PageNavigations();
    });

})