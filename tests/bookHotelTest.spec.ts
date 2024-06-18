import test from "@playwright/test";
import { AddactionLogin } from "../Pages/LoginPage";
import { SearchHotel } from "../Pages/SearchHotelPage";
import { selectRadioBtn } from "../Pages/SelectHotelPage";
import { bookHotel } from "../Pages/bookAHotelPage";

test.describe("Book Hotel", async () => {
    let loginPage: AddactionLogin;
    let searchHotePage: SearchHotel;
    let selectHotelPage: selectRadioBtn;
    let bookAHotelPage: bookHotel;

    test.beforeEach(async ({ page }) => {
        loginPage = new AddactionLogin(page);
        searchHotePage = new SearchHotel(page);
        selectHotelPage = new selectRadioBtn(page);
        bookAHotelPage = new bookHotel(page);
        await loginPage.goto();
        await loginPage.loginUser();
        await searchHotePage.Hotel();
        await selectHotelPage.radio();
    })

    test("bookHotel", async ({ page }) => {
        await bookAHotelPage.bookHotel();
        console.log("book now clicked")
    })


})