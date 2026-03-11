
import { test, expect } from "@playwright/test"
test("custom", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill('shoes')


    const option = await page.locator("div[role='gridcell']").all()
    for (const i of option) {
        const text = await i.textContent()
        console.log(text);
        if (text?.includes("shoes for man")) {
            await i.click()
        }
    }
    await page.waitForTimeout(10000);

})