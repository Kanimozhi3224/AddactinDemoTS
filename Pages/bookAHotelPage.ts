import { expect, Page, Locator } from "@playwright/test"

export class bookHotel {
    checkOptions() {
        throw new Error("Method Not Implemented")
    }

    readonly page: Page
    readonly ltr_firstName: Locator
    readonly ltr_lastName: Locator
    readonly ltr_address: Locator
    readonly ltr_ccNum: Locator
    readonly ltr_ccType: Locator
    readonly lts_ccExpMonth: Locator
    readonly ltr_ccExpYear: Locator
    readonly lts_ccCvv: Locator
    readonly ltr_bookNowBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.ltr_firstName = this.page.locator("#first_name")
        this.ltr_lastName = this.page.locator("#last_name")
        this.ltr_address = this.page.locator("#address")
        this.ltr_ccNum = this.page.locator("#cc_num")
        this.ltr_ccType = this.page.locator('#cc_type')
        this.lts_ccExpMonth = this.page.locator('#cc_exp_month')
        this.ltr_ccExpYear = this.page.locator('#cc_exp_year')
        this.lts_ccCvv = this.page.locator('#cc_cvv')
        this.ltr_bookNowBtn = this.page.locator("#book_now")
    }
    async bookHotel() {
        await this.ltr_firstName.fill("kanimozhi");
        await this.ltr_lastName.fill("S");
        await this.ltr_address.fill("Chennai");
        await this.ltr_ccNum.fill("1234567890123456");
        await this.ltr_ccType.selectOption({ value: "MAST" })
        await this.lts_ccExpMonth.selectOption({ index: 11 })
        await this.ltr_ccExpYear.selectOption({ value: "2024" })
        await this.lts_ccCvv.fill("0123");
        await this.ltr_bookNowBtn.click();
        console.log("booknow btn hitted")


    }

}

