import { Page } from "@playwright/test";

export default class loginPage{
    constructor(public page: Page){

    }

    async enterUserName(username:string){
        this.page.locator("#username").fill("kani1234");
    }
    async enterPassword(Password:string){
        this.page.locator("#password").fill("U2UOCE");
    }
    async eClickLoginBtn(){
        this.page.getByRole("button").click();
    }

}

 