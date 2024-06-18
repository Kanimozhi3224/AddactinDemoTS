import { test, Locator, Page } from "@playwright/test";

export class selectRadioBtn {
    checkOptions() {
        throw new Error("Method Not Implemented")
    }

    readonly page: Page
    readonly ltr_RadioBtn: Locator
    readonly ltr_continueBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.ltr_RadioBtn = this.page.locator("#radiobutton_0");
        this.ltr_continueBtn = this.page.locator("#continue")
    }

    async radio() {
        // await this.page.waitForTimeout(5000);
        await this.page.waitForURL("https://adactinhotelapp.com/SelectHotel.php");
        // await this.page.waitForSelector("#radiobutton_0");
        await this.ltr_RadioBtn.click();
        await this.ltr_continueBtn.click();
        console.log("continue btn clicked")
    }
}

