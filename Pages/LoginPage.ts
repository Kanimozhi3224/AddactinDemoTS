import { expect, Page, Locator } from "@playwright/test"

export class AddactionLogin {
    checkOptions() {
        throw new Error("Method Not Implemented")
    }

    readonly page: Page
    readonly ltr_user_name: Locator
    readonly ltr_user_password: Locator
    readonly ltr_login_btn: Locator

    constructor(page: Page) {
        this.page = page
        this.ltr_user_name = this.page.locator("#username");
        this.ltr_user_password = this.page.locator("#password");
        this.ltr_login_btn = this.page.getByRole("button");
    }

    async goto() {
        await this.page.goto('https://adactinhotelapp.com/');
    }

    async loginUser() {
        await this.ltr_user_name.fill("kani1234");
        await this.ltr_user_password.fill("U2UOCE");
        await this.ltr_login_btn.click();
        // await this.page.waitForTimeout(5000);
        console.log("Timeout Completed inside page");
    }

}