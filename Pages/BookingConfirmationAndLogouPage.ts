import test, { expect, Page, Locator } from "@playwright/test"

export class logOutPage {
    checkOptions() {
        throw new Error("Method Not Implemented")
    }

    readonly page: Page
    readonly ltr_logOutBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.ltr_logOutBtn = this.page.locator("#logout");

    }
    async logOut() {
        await test.slow();
        await this.ltr_logOutBtn.click();
        console.log("logout clicked")

    }

}
