import test, { Browser, Page, chromium, expect } from "@playwright/test";
import { AddactionLogin } from "../Pages/LoginPage";
import { SearchHotel } from "../Pages/SearchHotelPage";
import { selectRadioBtn } from "../Pages/SelectHotelPage";
import { bookHotel } from "../Pages/bookAHotelPage";
import { logOutPage } from "../Pages/BookingConfirmationAndLogouPage";

test.describe('Adactin tests', () => {
  // let adactinPage: AddactionLogin;
  let loginPage: AddactionLogin;
  // Before each test it executes
  // initialize or set the common data
  test.beforeEach(async ({ page }) => {
    loginPage = new AddactionLogin(page);
    await loginPage.goto();
  });

  //   It executes after each test
  //   Remove the common data
  test.afterEach(async () => {
    // await adactinPage.logout();
  });

  test("LoginUsingPOM", async () => {
    await loginPage.loginUser();
    
    console.log("login button hitted");
  })
});