import { test, expect } from "@playwright/test"

test("custom", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");

    await page.locator('//textarea[@class="w-full h-40 p-2 border rounded-lg mb-4"]').click();
    await page.keyboard.type('helloo!!');

    const name = page.locator('//input[@class="w-1/2 p-2 border rounded-l-lg"]');
    await name.fill('naman.txt');

    await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click(),
    ]);

    await page.waitForTimeout(5000);

});