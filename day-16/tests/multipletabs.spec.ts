import { test, expect } from "@playwright/test"
test("multiple_tabs", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://www.flipkart.com/')
    // let page2=await context.newPage();
    // await page2.goto('https://www.amazon.com/')
    await page.getByRole('button', { name: '✕' });
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill("shoes");
    await page.keyboard.press("Enter");
    const [newpage] = await Promise.all([page.waitForEvent('popup'),
    page.locator('//div[@class="bLCLBY nr15la"]').first().click()]);
    console.log(page.url());
    console.log(newpage.url());


    await page.waitForTimeout(3000);
})