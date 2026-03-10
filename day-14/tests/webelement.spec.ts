import { test, expect } from "@playwright/test";

test("get by methods", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.locator("input#twotabsearchtextbox").fill("shoes");
    await page.keyboard.press("Enter");
    const product = page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').first();
    await product.waitFor();
    await expect(product).toHaveScreenshot('image.png');
    const ele = await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').all();
    console.log(ele.length);
});