import test from "@playwright/test";
import { AddactionLogin } from "../Pages/LoginPage";
import { SearchHotel } from "../Pages/SearchHotelPage";
import { selectRadioBtn } from "../Pages/SelectHotelPage";
import { bookHotel } from "../Pages/bookAHotelPage";
import { logOutPage } from "../Pages/BookingConfirmationAndLogouPage";

test.describe("ConfirmationAndlogOut", async () => {
    let loginPage: AddactionLogin;
    let searchHotePage: SearchHotel;
    let selectHotelPage: selectRadioBtn;
    let bookAHotelPage: bookHotel;
    let bookingConfirmationPage: logOutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new AddactionLogin(page);
        searchHotePage = new SearchHotel(page);
        selectHotelPage = new selectRadioBtn(page);
        bookAHotelPage = new bookHotel(page);
        bookingConfirmationPage = new logOutPage(page)
        await loginPage.goto();
        await loginPage.loginUser();
        await searchHotePage.Hotel();
        await selectHotelPage.radio();
        await bookAHotelPage.bookHotel();
    })

    test("bookingConfirmationAndLogout", async ({ page }) => {
        await bookingConfirmationPage.logOut();
    });
});
