import { Page } from "@playwright/test";

export default class SelectHotelPage{
    constructor(public page: Page){

    }

    async SelectLocation(){
        this.page.locator('#location').selectOption({index:5});
    }
    async SelectHotel(){
        this.page.locator('#hotels').selectOption({value:"Hotel Sunshine"});
    }
    async SelectRoomType(){
        this.page.locator('#room_type').selectOption({value:"Double"});
    }
    async SelectRoomNo(){
        this.page.locator('#room_nos').selectOption({value:"8"})
    }
    async SelectAdultInRoom(){
        this.page.locator("#adult_room").selectOption({value:"3"});
    }
    async SelectChildInRoom(){
        this.page.locator("#child_room").selectOption({index:1});
    }
    async ClickSubmitBtn(){
        this.page.locator('#Submit').click();
        console.log("submitbtnClicked");
    }
    
}
 