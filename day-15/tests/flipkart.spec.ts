import { test } from "@playwright/test"

test("Flipkart Navigation", async ({ page }) => {
    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(3000);
    const closeBtn = page.getByRole('button', { name: '✕' });
    if (await closeBtn.isVisible()) {
        await closeBtn.click();
    }
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('shoes');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    let product = await page.locator('//div[@class="fWB4Ui TTHoOY"]').first().click();
    let price = await page.locator("//div[contains(text(),'₹')]").first().innerText();
    console.log(price);
})