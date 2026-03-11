import { test, expect } from "@playwright/test"

test("Standard dropdown", async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
    await page.locator('#country_code').selectOption({ value: '+92' });
    await expect(page.locator('#country_code')).toHaveValue('+92');
    await page.waitForTimeout(5000);
})



test("multi select", async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1');
    await page.locator('//*[@id="select-multiple-native"]').selectOption([{ value: "Opna Women's Short Sleeve Moisture" }, { value: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats" }, { value: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s' }]);


    await page.locator('//*[@id="demoUI"]/main/section/article[1]/aside/div/div/div/div/div[2]/button').click()
    // await expect(page.locator('#country_code')).toHaveValue('+92');
    await page.waitForTimeout(5000);
})


test("custom", async ({ page }) => {
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    await page.locator('//div[@class="sort-sortBy"]').hover()
    await page.locator('//div[@class="sort-sortBy"]').click({ force: true })
    const option = await page.locator('//ul[@class="sort-list"]/li').all()
    for (const i of option) {
        const text = await i.textContent()
        console.log(text);
        if (text?.includes("Better")) {
            await i.click()
        }
    }

    //    await page.locator("#select-multiple-native").selectOption([{value:"Rain Jacket Women Windbreaker Striped Climbing Raincoats"},{value:"Opna Women's Short Sleeve Moisture"}])
    //    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
})

