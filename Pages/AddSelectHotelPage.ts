import { Locator, Page } from "@playwright/test"

export class selectHotel {
    checkOptions() {
        throw new Error("Method Not Implemented")
    }
    // await page.locator('#location').selectOption({index:5});
    // await page.locator('#hotels').selectOption({value:"Hotel Sunshine"});
    // await page.locator('#room_type').selectOption({value:"Double"});
    // await page.locator('#room_nos').selectOption({value:"8"})
    // await page.locator("#adult_room").selectOption({value:"3"});
    // await page.locator("#child_room").selectOption({index:1});
    // await page.locator('#Submit').click();
    // console.log("submitbtnClicked");

    readonly page: Page
    readonly ltr_select_location: Locator
    readonly ltr_select_hotel: Locator
    readonly ltr_select_roomType: Locator
    readonly ltr_select_roonNo: Locator
    readonly ltr_select_adultRoomn: Locator
    readonly ltr_select_ChildRoomn: Locator
    readonly ltr_select_submitBtn: Locator

    constructor(page: Page) {
         this.page = page
        this.ltr_select_location = this.page.locator('#location');
        this.ltr_select_hotel = this.page.locator('#hotels');
        this.ltr_select_roomType = this.page.locator('#room_type');
        this.ltr_select_roonNo = this.page.locator('#room_nos');
        this.ltr_select_adultRoomn = this.page.locator("#adult_room");
        this.ltr_select_ChildRoomn = this.page.locator("#child_room");
        this.ltr_select_submitBtn = this.page.locator('#Submit');
    }

    async Hotel() {
        await this.ltr_select_location.selectOption({ index: 5 });
        await this.ltr_select_hotel.selectOption({ value: "Hotel Sunshine" });
        await this.ltr_select_roomType.selectOption({ value: "Double" });
        await this.ltr_select_roonNo.selectOption({ value: "8" })
        await this.ltr_select_adultRoomn.selectOption({ value: "3" });
        await this.ltr_select_ChildRoomn.selectOption({ index: 1 });
        await this.ltr_select_submitBtn.click();

    }







}