import { Page } from "@playwright/test";
import { CommonPage } from "../../base/common/commonPage";
import { CommonScenario } from "../../base/common/commonScenario";
import { testData } from "../../tests/testData";
import { loginPageLocators } from "../loginPage/loginPageLocators";


export class LoginPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
    super(page, scenario);
    }
    async goTo() {
        await this.page.goto(testData.qa);
        await this.page.waitForLoadState("domcontentloaded");
        //await this.scenario.a11yAnalysis();
    }
    async validLogin(USERNAME, PASSWORD, username, password) {
    
        await this.page.locator(loginPageLocators.MFA_Email).fill(USERNAME);
        await this.page.locator(loginPageLocators.NextButton).click();
        await this.page.locator(loginPageLocators.MFA_Password).fill(PASSWORD);
        await this.page.locator(loginPageLocators.SignInButton).click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator(loginPageLocators.StaySignedInApprove).click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator(loginPageLocators.Enter_Email).fill(username);
        await this.page.locator(loginPageLocators.Password).fill(password);
        await this.page.locator(loginPageLocators.LogIn).click();
        await this.page.waitForLoadState('networkidle');
    
        await this.page.waitForLoadState('networkidle')
    }
}