import test from "@playwright/test";

test("Mouse actions", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.locator('input[type="checkbox"]').scrollIntoViewIfNeeded()
    await page.locator('input[type="checkbox"]').check()
    await page.waitForTimeout(5000)
})




