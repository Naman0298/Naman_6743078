import { test } from "@playwright/test";

test("Shopper Stack End to End Scenario", async ({ page, context }) => {

    // Signup 
    // await page.goto("https://www.shoppersstack.com/signup");
    // await page.locator('input[id= "First Name"]').fill("Rahul");
    // await page.locator('input[id= "Last Name"]').fill("Gandhi");
    // await page.locator('input[id= "Male"]').click();
    // await page.locator('input[id= "Phone Number"]').fill("1234567890");
    // await page.locator('input[id= "Email Address"]').fill("rahul.gandhi@gmail.com");
    // await page.locator('input[id= "Password"]').fill("Rahul@123");
    // await page.locator('input[id= "Confirm Password"]').fill("Rahul@123");
    // await page.locator('input[id= "Terms and Conditions"]').click();
    // await page.locator('//*[@id="Register"]').click();


    //login
    await page.goto("https://www.shoppersstack.com/user-signin");
    await page.waitForLoadState("domcontentloaded");
    await page.locator('input[id="Email"]').fill("naman0298@gmail.com");
    await page.locator('input[id="Password"]').fill("Naman@@9999");
    await page.locator('span[class="MuiButton-label"]').first().click();
    await page.waitForLoadState("domcontentloaded");

    //search
    await page.locator('input[id="search"]').fill("mobile");
    await page.locator('svg[id="searchBtn"]').click();
    await page.waitForLoadState("domcontentloaded");

    await page.locator('div[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root featuredProducts_productCard__xe40f css-s18byi aos-init aos-animate"]').first().click();
    await page.waitForLoadState("domcontentloaded");

    await page.locator('//*[@id="Add To Cart"]').click();
    await page.waitForLoadState("domcontentloaded");

    await page.locator('//*[@id="cart"]/span[2]').click();
    await page.waitForLoadState("domcontentloaded");

});