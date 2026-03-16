import { test } from "@playwright/test";

test("Amazon order", async ({ page, context }) => {

    await page.goto("https://www.amazon.in/");

    await page.locator('#twotabsearchtextbox').fill("mobile");
    await page.locator('#nav-search-submit-button').click();

    await page.getByText("10 GB & Above").click();

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('div[data-component-type="s-search-result"]').nth(3).click()
    ]);

    await newPage.waitForLoadState();

    await newPage.locator('#quantity').selectOption("3");

    await newPage.locator('#add-to-cart-button').click();

});