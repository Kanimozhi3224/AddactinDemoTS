import { expect, Page, Locator } from "@playwright/test"

export class AddactionLogin{
    checkOptions(){
        throw new Error("Method Not Implemented")
    }

    // await  page.locator("#username").fill("kani1234");
    // await page.locator("#password").fill("U2UOCE");
    // await page.getByRole("button").click();

    readonly page: Page
    readonly ltr_user_name: Locator
    readonly ltr_user_password: Locator
    readonly ltr_login_btn: Locator

    constructor(page: Page){
        this.page = page
        this.ltr_user_name = this.page.locator("#username");
        this.ltr_user_password = this.page.locator("#password");
        this.ltr_login_btn = this.page.getByRole("button");
    }

    async loginUser(){
        await this.ltr_user_name.fill("kani1234");
        await this.ltr_user_password.fill("U2UOCE");
        await this.ltr_login_btn.click();
    }



}