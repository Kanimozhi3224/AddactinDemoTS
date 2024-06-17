import test, { Browser, Page, chromium, expect } from "@playwright/test";
import login from "../Pages/loginPage";
import { AddactionLogin } from "../Pages/AddLoginPage";
import { selectHotel } from "../Pages/AddSelectHotelPage";
import { selectRadioBtn } from "../Pages/AddSelectRadioBtnPge";
import { bookHotel } from "../Pages/bookAHotelPage";
import { logOutPage } from "../Pages/BookingConfirmationPage";

test("addactinLoginUsingPOM", async ({ page }) => {

    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    // const page=await context.newPage();
    await page.goto("https://adactinhotelapp.com/");

    //LOGIN PAGE
    const add = new AddactionLogin(page);
    await add.loginUser();
    // test.slow();
    // await page.waitForTimeout(5000);
    // console.log("login button hitted");
})

test("selectHotelUsingPom", async ({ page }) => {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    // const page=await context.newPage();
    await page.goto("https://adactinhotelapp.com/");

    //LOGIN PAGE
    const add = new AddactionLogin(page);
    await add.loginUser();
    test.slow();
    // await page.waitForTimeout(5000);
    console.log("login button hitted");

    //SelectHotelPage2
    const select = new selectHotel(page)
    await select.Hotel();
    await page.waitForTimeout(5000);
    console.log("submitbtnClicked");
})

test("selectRadio", async ({ page }) => {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    // const page=await context.newPage();
    await page.goto("https://adactinhotelapp.com/");

    test.slow();

    //LOGIN PAGE
    const add = new AddactionLogin(page);
    await add.loginUser();
    // await page.waitForTimeout(5000);
    console.log("login button hitted");

    //SelectHotelPage2
    const select = new selectHotel(page)
    await select.Hotel();
    console.log("submitbtnClicked");

    //SelectRadioBtn Page3
    const radioBtn = new selectRadioBtn(page)
    await radioBtn.radio();
    console.log("radioBtn Clicked");


})

test("BookHotelUsingPom", async ({ page }) => {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    // const page=await context.newPage();
    await page.goto("https://adactinhotelapp.com/");

    test.slow();

    //LOGIN PAGE
    const add = new AddactionLogin(page);
    await add.loginUser();
    // await page.waitForTimeout(5000);
    console.log("login button hitted");

    //SelectHotelPage2
    const select = new selectHotel(page)
    await select.Hotel();
    console.log("submitbtnClicked");

    //SelectRadioBtn Page3
    const radioBtn = new selectRadioBtn(page)
    await radioBtn.radio();
    console.log("radioBtn Clicked");

    //BookHotelPage 4
    const bookNow = new bookHotel(page)
    await bookNow.bookHotel();
    console.log("booknow clicked")

})
test("logOutUsingPom", async ({ page }) => {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    // const page=await context.newPage();
    await page.goto("https://adactinhotelapp.com/");

    test.slow();

    //LOGIN PAGE
    const add = new AddactionLogin(page);
    await add.loginUser();
    // await page.waitForTimeout(5000);
    console.log("login button hitted");

    //SelectHotelPage2
    const select = new selectHotel(page)
    await select.Hotel();
    console.log("submitbtnClicked");

    //SelectRadioBtn Page3
    const radioBtn = new selectRadioBtn(page)
    await radioBtn.radio();
    console.log("radioBtn Clicked");

    //BookHotelPage 4
    const bookNow = new bookHotel(page)
    await bookNow.bookHotel();
    console.log("booknow clicked")

    //logOutPage5
    const logOutp = new logOutPage(page)
    await logOutp.logOut();
    // await page.waitForTimeout(5000);
    const title = await page.title();
    console.log("title clicked", title);
    expect(title).toEqual("Adactin.com - Logout");
    console.log("LogOut clicked")

    await browser.close();

})