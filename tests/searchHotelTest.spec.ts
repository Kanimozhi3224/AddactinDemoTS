import { test, Page } from "@playwright/test";
import { SearchHotel } from "../Pages/SearchHotelPage";
import { AddactionLogin } from "../Pages/LoginPage";

test.describe('Search hotel', () => {
   let loginPage: AddactionLogin;
  let searchHotePage: SearchHotel;

  test.beforeEach(async ({ page }) => {
    loginPage = new AddactionLogin(page);
    searchHotePage = new SearchHotel(page);
    await loginPage.goto();
    await loginPage.loginUser();
    console.log("login button hitted");
  });

  test("searchHotel", async ({ page }) => {
    await searchHotePage.Hotel();
    console.log("Hotel Searched");
  });

})

