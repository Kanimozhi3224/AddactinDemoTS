import test from "@playwright/test";
import { SearchHotel } from "../Pages/SearchHotelPage";
import { AddactionLogin } from "../Pages/LoginPage";
import { selectRadioBtn } from "../Pages/SelectHotelPage";

test.describe("selectHotel", async () => {
    let loginPage: AddactionLogin;
    let searchHotePage: SearchHotel;
    let selectHotelPage: selectRadioBtn;

    test.beforeEach(async ({ page }) => {
        loginPage = new AddactionLogin(page);
        searchHotePage = new SearchHotel(page);
        selectHotelPage = new selectRadioBtn(page);
        await loginPage.goto();
        await loginPage.loginUser();
        await searchHotePage.Hotel();
        console.log("login button hitted");
    })

    test("selectHotel-test-1", async ({ page }) => {
        await selectHotelPage.radio();
        console.log("continue button hitted");
    })
})