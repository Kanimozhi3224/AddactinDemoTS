import { test, Locator, Page } from "@playwright/test";

export class selectRadioBtn{
    checkOptions(){
        throw new Error("Method Not Implemented")
    }

    // await page.locator("#radiobutton_0").click();
    // await page.locator("#continue").click();
    // console.log("radioBtn Clicked");

    readonly page: Page
    readonly ltr_RadioBtn:Locator
    readonly ltr_continueBtn:Locator

    constructor(page: Page){
        this.page = page
        this.ltr_RadioBtn = this.page.locator("#radiobutton_0");
        this.ltr_continueBtn = this.page.locator("#continue")
    }

    async radio(){
        await this.ltr_RadioBtn.click();
        await this.ltr_continueBtn.click();
    }
}