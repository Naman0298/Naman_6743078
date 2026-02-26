import { test } from "@playwright/test"

test("title", async ({ browser, browserName }) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    let page2 = await context.newPage()


    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    console.log(browserName);
    await page.pause()
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    console.log(browserName);
})